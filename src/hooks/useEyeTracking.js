import { useMemo, useRef } from "react";
import { Vector2 } from "three";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function damp(current, target, lambda, delta) {
  return current + (target - current) * (1 - Math.exp(-lambda * delta));
}

function nextRandomDelay() {
  return 4 + Math.random() * 4;
}

export function useEyeTracking({ reducedMotion = false } = {}) {
  const targetEye = useRef(new Vector2(0.032, -0.032));
  const currentEye = useRef(new Vector2(0.032, -0.032));
  const targetBody = useRef(new Vector2(0, 0));
  const currentBody = useRef(new Vector2(0, 0));
  const hover = useRef(false);
  const hoverAmount = useRef(0);
  const blinkAmount = useRef(0);
  const blinkUntil = useRef(0);
  const clickPulse = useRef(0);
  const ripple = useRef(0);
  const lastInteraction = useRef(0);
  const nextIdleLook = useRef(2.8);
  const nextBlink = useRef(nextRandomDelay());

  const handlers = useMemo(() => ({
    onPointerMove(event) {
      if (reducedMotion) {
        return;
      }

      const rect = event.currentTarget.getBoundingClientRect();
      const x = clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5);
      const y = clamp((event.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5);

      hover.current = true;
      lastInteraction.current = performance.now() / 1000;
      targetEye.current.set(0.032 + x * 0.095, -0.032 - y * 0.072);
      targetBody.current.set(x * 0.12, y * 0.08);
    },
    onPointerLeave() {
      hover.current = false;
      targetEye.current.set(0.032, -0.032);
      targetBody.current.set(0, 0);
      lastInteraction.current = performance.now() / 1000;
    },
    onPointerDown() {
      if (reducedMotion) {
        return;
      }

      const now = performance.now() / 1000;
      hover.current = true;
      blinkUntil.current = now + 0.18;
      clickPulse.current = 1;
      ripple.current = 1;
      lastInteraction.current = now;
    },
  }), [reducedMotion]);

  function update(delta, elapsed) {
    const now = performance.now() / 1000;

    if (reducedMotion) {
      currentEye.current.set(0.032, -0.032);
      currentBody.current.set(0, 0);
      hoverAmount.current = 0;
      blinkAmount.current = 0;
      clickPulse.current = 0;
      ripple.current = 0;
      return;
    }

    if (!hover.current && now - lastInteraction.current > 3 && elapsed > nextIdleLook.current) {
      targetEye.current.set(0.032 + (Math.random() - 0.45) * 0.06, -0.032 + (Math.random() - 0.5) * 0.04);
      nextIdleLook.current = elapsed + 1.2 + Math.random() * 1.8;
    }

    if (elapsed > nextBlink.current) {
      blinkUntil.current = elapsed + 0.13;
      nextBlink.current = elapsed + nextRandomDelay();
    }

    currentEye.current.lerp(targetEye.current, 1 - Math.exp(-18 * delta));
    currentBody.current.lerp(targetBody.current, 1 - Math.exp(-5 * delta));
    hoverAmount.current = damp(hoverAmount.current, hover.current ? 1 : 0, 8, delta);
    blinkAmount.current = damp(blinkAmount.current, elapsed < blinkUntil.current ? 1 : 0, 24, delta);
    clickPulse.current = damp(clickPulse.current, 0, 10, delta);
    ripple.current = damp(ripple.current, 0, 4.4, delta);
  }

  return {
    currentEye,
    currentBody,
    hoverAmount,
    blinkAmount,
    clickPulse,
    ripple,
    handlers,
    update,
  };
}
