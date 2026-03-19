import { useState, useEffect } from 'react';

/**
 * Returns true if the current device supports touch input.
 */
export const useIsTouchDevice = (): boolean => {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        const check =
            'ontouchstart' in window || navigator.maxTouchPoints > 0;
        setIsTouch(check);
    }, []);

    return isTouch;
};
