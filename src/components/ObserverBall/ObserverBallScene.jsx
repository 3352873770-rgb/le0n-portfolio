import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { ACESFilmicToneMapping, SRGBColorSpace } from "three";
import ObserverBall from "./ObserverBall.jsx";
import { useEyeTracking } from "../../hooks/useEyeTracking.js";
import "./observerBall.css";
import { useEffect, useState } from "react";

function useReducedMotionPreference() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);

    function handleChange(event) {
      setReducedMotion(event.matches);
    }

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  return reducedMotion;
}

export default function ObserverBallScene() {
  const reducedMotion = useReducedMotionPreference();
  const tracking = useEyeTracking({ reducedMotion });

  return (
    <div
      className="observer-ball-wrap"
      aria-label="Yellow Ball interactive 3D character"
      onPointerMove={tracking.handlers.onPointerMove}
      onPointerLeave={tracking.handlers.onPointerLeave}
      onPointerDown={tracking.handlers.onPointerDown}
    >
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.16, 5.18], fov: 36 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance", outputColorSpace: SRGBColorSpace, toneMapping: ACESFilmicToneMapping, toneMappingExposure: 1.22 }}
      >
        <ambientLight intensity={0.92} />
        <directionalLight
          position={[-3.4, 4.9, 4.2]}
          intensity={1.35}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[2.65, 1.05, 4.35]} intensity={1.05} color="#fffaf0" />
        <directionalLight position={[3.35, 2.35, -2.35]} intensity={0.52} color="#fff1bd" />
        <group position={[0, 0.05, 0]}>
          <ObserverBall tracking={tracking} reducedMotion={reducedMotion} />
        </group>
        <ContactShadows
          position={[0, -1.39, 0]}
          opacity={0.11}
          scale={2.86}
          blur={3.2}
          far={2.2}
          resolution={512}
          color="#806d35"
        />
      </Canvas>
    </div>
  );
}
