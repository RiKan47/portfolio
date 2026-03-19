import { useEffect, useRef, useCallback } from 'react';

/**
 * Detects device shaking via the DeviceMotionEvent API.
 * Calls `onTrigger` when `shakeThreshold` is exceeded `requiredShakes` times
 * within `timeWindow` ms.
 *
 * Gracefully no-ops on devices/browsers that don't support DeviceMotionEvent.
 */
export const useShakeDetect = (
    onTrigger?: () => void,
    shakeThreshold: number = 15,
    requiredShakes: number = 3,
    timeWindow: number = 1000
) => {
    const shakeTimestamps = useRef<number[]>([]);
    const lastAccel = useRef({ x: 0, y: 0, z: 0 });
    const isFirstReading = useRef(true);

    const handleMotion = useCallback(
        (e: DeviceMotionEvent) => {
            const accel = e.accelerationIncludingGravity;
            if (!accel || accel.x === null || accel.y === null || accel.z === null) return;

            if (isFirstReading.current) {
                lastAccel.current = { x: accel.x!, y: accel.y!, z: accel.z! };
                isFirstReading.current = false;
                return;
            }

            const deltaX = Math.abs(accel.x! - lastAccel.current.x);
            const deltaY = Math.abs(accel.y! - lastAccel.current.y);
            const deltaZ = Math.abs(accel.z! - lastAccel.current.z);

            lastAccel.current = { x: accel.x!, y: accel.y!, z: accel.z! };

            const totalDelta = deltaX + deltaY + deltaZ;

            if (totalDelta > shakeThreshold) {
                const now = Date.now();
                shakeTimestamps.current.push(now);

                // Keep only shakes within the time window
                shakeTimestamps.current = shakeTimestamps.current.filter(
                    (t) => now - t <= timeWindow
                );

                if (shakeTimestamps.current.length >= requiredShakes) {
                    shakeTimestamps.current = [];
                    isFirstReading.current = true;
                    onTrigger?.();
                }
            }
        },
        [shakeThreshold, requiredShakes, timeWindow, onTrigger]
    );

    useEffect(() => {
        if (typeof window === 'undefined' || !('DeviceMotionEvent' in window)) {
            return;
        }

        window.addEventListener('devicemotion', handleMotion);
        return () => window.removeEventListener('devicemotion', handleMotion);
    }, [handleMotion]);
};
