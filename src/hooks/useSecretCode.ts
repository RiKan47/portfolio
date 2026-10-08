import { useEffect } from 'react';

export const useSecretCode = (secretCode: string, onTrigger: () => void) => {
    useEffect(() => {
        let input = '';
        const code = secretCode.toLowerCase();
        const handleKeyDown = (event: KeyboardEvent) => {
            const target = document.activeElement;
            if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' ||
                (target instanceof HTMLElement && target.isContentEditable) ||
                event.key.length !== 1 || event.ctrlKey || event.metaKey || event.altKey) {
                return;
            }
            input = (input + event.key.toLowerCase()).slice(-code.length);
            if (input === code) {
                input = '';
                onTrigger();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [secretCode, onTrigger]);
};
