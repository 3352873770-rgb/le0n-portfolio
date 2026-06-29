import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CatmullRomCurve3, CanvasTexture, RepeatWrapping, TubeGeometry, Vector3 } from "three";

function getGeometryQuality() {
  if (typeof navigator === "undefined") {
    return { bodySegments: 48, featureSegments: 24 };
  }

  const memory = navigator.deviceMemory || 8;
  const cores = navigator.hardwareConcurrency || 8;
  const lowPower = memory <= 4 || cores <= 4;
  return lowPower
    ? { bodySegments: 32, featureSegments: 16 }
    : { bodySegments: 48, featureSegments: 24 };
}

function createSoftNoiseTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  const image = context.createImageData(size, size);

  for (let i = 0; i < image.data.length; i += 4) {
    const value = 166 + Math.random() * 16;
    image.data[i] = value;
    image.data[i + 1] = value;
    image.data[i + 2] = value;
    image.data[i + 3] = 255;
  }

  context.putImageData(image, 0, 0);
  const texture = new CanvasTexture(canvas);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(5, 5);
  return texture;
}

function createBlushTexture() {
  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(64, 64, 4, 64, 64, 58);
  gradient.addColorStop(0, "rgba(255, 214, 166, 0.52)");
  gradient.addColorStop(0.5, "rgba(255, 214, 166, 0.22)");
  gradient.addColorStop(1, "rgba(255, 214, 166, 0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);
  return new CanvasTexture(canvas);
}

function curvedTube(points, radius = 0.018, tubularSegments = 24) {
  return new TubeGeometry(new CatmullRomCurve3(points), tubularSegments, radius, 8, false);
}

const cheekDots = [
  [-0.86, -0.3, 1.46, 0.011],
  [-0.78, -0.36, 1.49, 0.008],
  [-0.68, -0.29, 1.5, 0.007],
  [-0.6, -0.4, 1.48, 0.007],
  [-0.93, -0.42, 1.41, 0.006],
  [0.86, -0.31, 1.46, 0.01],
  [0.76, -0.37, 1.49, 0.008],
  [0.66, -0.3, 1.5, 0.007],
  [0.94, -0.43, 1.41, 0.006],
];

export default function ObserverBall({ tracking, reducedMotion = false }) {
  const groupRef = useRef(null);
  const leftEyeContentRef = useRef(null);
  const rightEyeContentRef = useRef(null);
  const leftPupilGroupRef = useRef(null);
  const rightPupilGroupRef = useRef(null);
  const leftBrowRef = useRef(null);
  const rightBrowRef = useRef(null);
  const mouthRef = useRef(null);
  const rippleRef = useRef(null);
  const quality = useMemo(getGeometryQuality, []);
  const softNoise = useMemo(createSoftNoiseTexture, []);
  const blushTexture = useMemo(createBlushTexture, []);
  const leftBrowGeometry = useMemo(() => curvedTube([
    new Vector3(-0.55, 0.56, 1.44),
    new Vector3(-0.39, 0.68, 1.48),
    new Vector3(-0.18, 0.64, 1.46),
  ], 0.016, quality.featureSegments), [quality.featureSegments]);
  const rightBrowGeometry = useMemo(() => curvedTube([
    new Vector3(0.2, 0.72, 1.44),
    new Vector3(0.44, 0.84, 1.48),
    new Vector3(0.66, 0.74, 1.45),
  ], 0.016, quality.featureSegments), [quality.featureSegments]);
  const mouthGeometry = useMemo(() => curvedTube([
    new Vector3(-0.08, -0.35, 1.5),
    new Vector3(0.04, -0.39, 1.53),
    new Vector3(0.21, -0.3, 1.5),
  ], 0.008, quality.featureSegments), [quality.featureSegments]);

  useFrame((state, delta) => {
    const elapsed = state.clock.getElapsedTime();
    tracking.update(delta, elapsed);

    const eye = tracking.currentEye.current;
    const body = tracking.currentBody.current;
    const hover = tracking.hoverAmount.current;
    const blink = tracking.blinkAmount.current;
    const pulse = tracking.clickPulse.current;
    const ripple = tracking.ripple.current;
    const floatY = reducedMotion ? 0 : Math.sin(elapsed * 1.85) * 0.045;
    const clickBounce = Math.sin(pulse * Math.PI) * 0.045 - pulse * 0.025;
    const baseScale = 1 + hover * 0.02 + clickBounce;

    if (groupRef.current) {
      groupRef.current.position.y = floatY;
      groupRef.current.rotation.x = body.y * 0.36;
      groupRef.current.rotation.y = -0.1 + body.x * 0.38;
      groupRef.current.scale.setScalar(baseScale);
    }

    if (leftPupilGroupRef.current && rightPupilGroupRef.current) {
      leftPupilGroupRef.current.position.x = eye.x;
      leftPupilGroupRef.current.position.y = eye.y;
      rightPupilGroupRef.current.position.x = eye.x * 0.88 + 0.006;
      rightPupilGroupRef.current.position.y = eye.y * 0.84 + 0.004;
      leftPupilGroupRef.current.scale.setScalar(1 + hover * 0.045);
      rightPupilGroupRef.current.scale.setScalar(1 + hover * 0.045);
    }

    if (leftEyeContentRef.current && rightEyeContentRef.current) {
      const blinkScale = Math.max(0.08, 1 - blink * 0.9);
      const hoverScale = 1 + hover * 0.035;
      leftEyeContentRef.current.scale.set(hoverScale, blinkScale * hoverScale, hoverScale);
      rightEyeContentRef.current.scale.set(hoverScale, blinkScale * hoverScale, hoverScale);
    }

    if (leftBrowRef.current && rightBrowRef.current) {
      leftBrowRef.current.position.y = hover * 0.03;
      rightBrowRef.current.position.y = hover * 0.065;
      rightBrowRef.current.rotation.z = -0.04 - hover * 0.075;
    }

    if (mouthRef.current) {
      mouthRef.current.scale.y = 1 + hover * 0.2;
      mouthRef.current.rotation.z = -0.05 + hover * 0.04;
    }

    if (rippleRef.current) {
      rippleRef.current.visible = ripple > 0.03;
      rippleRef.current.scale.setScalar(1.25 + (1 - ripple) * 0.7);
      rippleRef.current.material.opacity = ripple * 0.22;
    }
  });

  return (
    <group ref={groupRef} dispose={null}>
      <mesh castShadow receiveShadow scale={[1, 0.96, 1]}>
        <sphereGeometry args={[1.42, quality.bodySegments, quality.bodySegments]} />
        <meshPhysicalMaterial
          color="#FFE98C"
          roughness={0.46}
          metalness={0}
          clearcoat={0.12}
          clearcoatRoughness={0.78}
          sheen={0.32}
          emissive="#FFE98C"
          emissiveIntensity={0.16}
          bumpMap={softNoise}
          bumpScale={0.0028}
          envMapIntensity={0.34}
        />
      </mesh>

      <group position={[-0.36, 0.2, 1.41]} rotation={[0.02, -0.14, -0.11]}>
        <mesh scale={[1.2, 1.04, 0.12]} position={[0, -0.02, -0.055]}>
          <sphereGeometry args={[0.372, quality.featureSegments, quality.featureSegments]} />
          <meshBasicMaterial color="#8d6a18" transparent opacity={0.08} depthWrite={false} />
        </mesh>
        <group ref={leftEyeContentRef}>
          <mesh scale={[1.14, 1, 0.16]}>
            <sphereGeometry args={[0.365, quality.featureSegments, quality.featureSegments]} />
            <meshBasicMaterial color="#ffffff" toneMapped={false} />
          </mesh>
          <group ref={leftPupilGroupRef} position={[0.04, -0.035, 0.09]}>
            <mesh scale={[1, 1, 0.14]}>
              <sphereGeometry args={[0.14, quality.featureSegments, quality.featureSegments]} />
              <meshStandardMaterial color="#7a5414" roughness={0.42} metalness={0} />
            </mesh>
            <mesh position={[0.002, -0.002, 0.016]} scale={[1, 1, 0.14]}>
              <sphereGeometry args={[0.118, quality.featureSegments, quality.featureSegments]} />
              <meshStandardMaterial color="#c09022" roughness={0.36} metalness={0} />
            </mesh>
            <mesh position={[0.014, -0.006, 0.034]} scale={[1, 1, 0.14]}>
              <sphereGeometry args={[0.09, quality.featureSegments, quality.featureSegments]} />
              <meshStandardMaterial color="#1F1F1F" roughness={0.36} metalness={0} />
            </mesh>
            <mesh position={[-0.052, 0.065, 0.062]}>
              <sphereGeometry args={[0.028, 12, 12]} />
              <meshBasicMaterial color="#ffffff" toneMapped={false} />
            </mesh>
            <mesh position={[0.036, 0.02, 0.066]}>
              <sphereGeometry args={[0.012, 8, 8]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.82} toneMapped={false} />
            </mesh>
          </group>
        </group>
      </group>

      <group position={[0.4, 0.28, 1.41]} rotation={[0.02, 0.15, 0.09]}>
        <mesh scale={[1.2, 1.04, 0.12]} position={[0, -0.02, -0.055]}>
          <sphereGeometry args={[0.355, quality.featureSegments, quality.featureSegments]} />
          <meshBasicMaterial color="#8d6a18" transparent opacity={0.075} depthWrite={false} />
        </mesh>
        <group ref={rightEyeContentRef}>
          <mesh scale={[1.14, 1, 0.16]}>
            <sphereGeometry args={[0.35, quality.featureSegments, quality.featureSegments]} />
            <meshBasicMaterial color="#ffffff" toneMapped={false} />
          </mesh>
          <group ref={rightPupilGroupRef} position={[0.038, -0.025, 0.09]}>
            <mesh scale={[1, 1, 0.14]}>
              <sphereGeometry args={[0.132, quality.featureSegments, quality.featureSegments]} />
              <meshStandardMaterial color="#7a5414" roughness={0.42} metalness={0} />
            </mesh>
            <mesh position={[0.002, -0.002, 0.016]} scale={[1, 1, 0.14]}>
              <sphereGeometry args={[0.11, quality.featureSegments, quality.featureSegments]} />
              <meshStandardMaterial color="#c09022" roughness={0.36} metalness={0} />
            </mesh>
            <mesh position={[0.014, -0.006, 0.034]} scale={[1, 1, 0.14]}>
              <sphereGeometry args={[0.084, quality.featureSegments, quality.featureSegments]} />
              <meshStandardMaterial color="#1F1F1F" roughness={0.36} metalness={0} />
            </mesh>
            <mesh position={[-0.048, 0.06, 0.062]}>
              <sphereGeometry args={[0.026, 12, 12]} />
              <meshBasicMaterial color="#ffffff" toneMapped={false} />
            </mesh>
            <mesh position={[0.032, 0.018, 0.066]}>
              <sphereGeometry args={[0.011, 8, 8]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.8} toneMapped={false} />
            </mesh>
          </group>
        </group>
      </group>

      <mesh ref={leftBrowRef} geometry={leftBrowGeometry}>
        <meshStandardMaterial color="#3b250f" roughness={0.48} metalness={0} />
      </mesh>
      <mesh ref={rightBrowRef} geometry={rightBrowGeometry}>
        <meshStandardMaterial color="#3b250f" roughness={0.48} metalness={0} />
      </mesh>
      <mesh ref={mouthRef} geometry={mouthGeometry}>
        <meshStandardMaterial color="#1F1F1F" roughness={0.5} metalness={0} />
      </mesh>

      <sprite position={[-0.78, -0.34, 1.43]} scale={[0.5, 0.22, 1]}>
        <spriteMaterial map={blushTexture} color="#FFD6A6" transparent opacity={0.16} depthWrite={false} />
      </sprite>
      <sprite position={[0.8, -0.35, 1.43]} scale={[0.44, 0.2, 1]}>
        <spriteMaterial map={blushTexture} color="#FFD6A6" transparent opacity={0.13} depthWrite={false} />
      </sprite>

      {cheekDots.map(([x, y, z, size]) => (
        <mesh key={`${x}-${y}`} position={[x, y, z]} scale={[1, 1, 0.18]}>
          <sphereGeometry args={[size, 8, 8]} />
          <meshBasicMaterial color="#fff8e8" transparent opacity={0.58} depthWrite={false} />
        </mesh>
      ))}

      <mesh ref={rippleRef} position={[0, 0, 1.58]} visible={false}>
        <torusGeometry args={[1.46, 0.012, 8, 96]} />
        <meshBasicMaterial color="#fff3a4" transparent opacity={0} depthWrite={false} />
      </mesh>
    </group>
  );
}
