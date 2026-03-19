import { useEffect, useRef, useCallback, type RefObject } from 'react';

/**
 * Detects rapid consecutive taps on a target element.
 * Calls `onTrigger` after `requiredTaps` taps within `timeWindow` ms.
 */
export const useMultiTap = (
    ref: RefObject<HTMLElement | null>,
    requiredTaps: number = 5,
    timeWindow: number = 800,
    onTrigger?: () => void
) => {
    const tapTimestamps = useRef<number[]>([]);

    const handleTap = useCallback(() => {
        const now = Date.now();
        tapTimestamps.current.push(now);

        // Keep only taps within the time window
        tapTimestamps.current = tapTimestamps.current.filter(
            (t) => now - t <= timeWindow
        );

        if (tapTimestamps.current.length >= requiredTaps) {
            tapTimestamps.current = [];
            onTrigger?.();
        }
    }, [requiredTaps, timeWindow, onTrigger]);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        el.addEventListener('touchend', handleTap);
        el.addEventListener('click', handleTap);

        return () => {
            el.removeEventListener('touchend', handleTap);
            el.removeEventListener('click', handleTap);
        };
    }, [ref, handleTap]);
};
