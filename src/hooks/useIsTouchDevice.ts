import { useState } from 'react';

export const useIsTouchDevice = () => {
    const [isTouch] = useState(() =>
        typeof window !== 'undefined' &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    );
    return isTouch;
};
