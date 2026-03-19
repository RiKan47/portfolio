import { useEffect, useRef, useCallback, useState } from 'react';

/**
 * Detects device shaking via the DeviceMotionEvent API.
 * Calls `onTrigger` when `shakeThreshold` is exceeded `requiredShakes` times
 * within `timeWindow` ms.
 *
 * Handles permission requests for iOS Safari 13+ and Firefox Mobile.
 * Gracefully no-ops on devices/browsers that don't support DeviceMotionEvent.
 */
export const useShakeDetect = (
    onTrigger?: () => void,
    shakeThreshold: number = 8,
    requiredShakes: number = 2,
    timeWindow: number = 1500
) => {
    const shakeTimestamps = useRef<number[]>([]);
    const lastAccel = useRef({ x: 0, y: 0, z: 0 });
    const isFirstReading = useRef(true);
    const [permissionGranted, setPermissionGranted] = useState(false);
    const listenerAttached = useRef(false);

    const handleMotion = useCallback(
        (e: DeviceMotionEvent) => {
            // Try accelerationIncludingGravity first, fall back to acceleration
            const accel = e.accelerationIncludingGravity ?? e.acceleration;
            if (!accel) return;

            const x = accel.x ?? 0;
            const y = accel.y ?? 0;
            const z = accel.z ?? 0;

            if (isFirstReading.current) {
                lastAccel.current = { x, y, z };
                isFirstReading.current = false;
                return;
            }

            const deltaX = Math.abs(x - lastAccel.current.x);
            const deltaY = Math.abs(y - lastAccel.current.y);
            const deltaZ = Math.abs(z - lastAccel.current.z);

            lastAccel.current = { x, y, z };

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

    // Request permission on user interaction (required by iOS Safari & Firefox Mobile)
    useEffect(() => {
        if (typeof window === 'undefined' || !('DeviceMotionEvent' in window)) {
            return;
        }

        const requestPermission = async () => {
            // Check if requestPermission exists (iOS Safari 13+)
            const DME = DeviceMotionEvent as unknown as {
                requestPermission?: () => Promise<'granted' | 'denied'>;
            };

            if (typeof DME.requestPermission === 'function') {
                try {
                    const result = await DME.requestPermission();
                    if (result === 'granted') {
                        setPermissionGranted(true);
                    }
                } catch {
                    // Permission denied or error — fail silently
                }
            } else {
                // No permission API needed (most Android browsers)
                setPermissionGranted(true);
            }
        };

        // Attempt permission request on first user interaction
        const handleInteraction = () => {
            requestPermission();
            // Remove after first interaction
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('click', handleInteraction);
        };

        // Try immediately (works on Chrome Android)
        requestPermission();

        // Also listen for first interaction (needed for iOS Safari / Firefox)
        window.addEventListener('touchstart', handleInteraction, { once: true });
        window.addEventListener('click', handleInteraction, { once: true });

        return () => {
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('click', handleInteraction);
        };
    }, []);

    // Attach the devicemotion listener once permission is granted
    useEffect(() => {
        if (!permissionGranted || listenerAttached.current) return;

        listenerAttached.current = true;
        window.addEventListener('devicemotion', handleMotion);

        return () => {
            window.removeEventListener('devicemotion', handleMotion);
            listenerAttached.current = false;
        };
    }, [permissionGranted, handleMotion]);
};
