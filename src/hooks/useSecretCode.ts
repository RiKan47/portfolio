import { useState, useEffect } from 'react';

export const useSecretCode = (secretCode: string) => {
    const [success, setSuccess] = useState(false);
    const [input, setInput] = useState('');

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Ignore keypresses if user is typing in an input or textarea
            if (
                document.activeElement?.tagName === 'INPUT' ||
                document.activeElement?.tagName === 'TEXTAREA'
            ) {
                return;
            }

            setInput((prev) => {
                const nextInput = prev + e.key.toLowerCase();
                // keep only the length of the secret code at maximum
                if (nextInput.length > secretCode.length) {
                    return nextInput.slice(nextInput.length - secretCode.length);
                }
                return nextInput;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [secretCode]);

    useEffect(() => {
        if (input === secretCode.toLowerCase()) {
            setSuccess((prev) => !prev); // Toggle on success
            setInput(''); // Reset
        }
    }, [input, secretCode]);

    return success; // Returns true if developer mode is active
};
