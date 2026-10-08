import React, { useEffect, useState, useCallback } from 'react';
import { useSecretCode } from '../hooks/useSecretCode';
import { useShakeDetect } from '../hooks/useShakeDetect';
import { Terminal } from 'lucide-react';
import { ThemeContext } from './theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Default to dev mode if user's system prefers dark
    const [isDevMode, setIsDevMode] = useState(() => {
        return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    });
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // Shared toggle function used by shake + multi-tap
    const toggleDevMode = useCallback(() => {
        const next = !isDevMode;
        setIsDevMode(next);
        setToastMessage(next
            ? 'Developer Mode Unlocked. Welcome, Admin.'
            : 'Exiting Developer Mode. Back to normal.');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    }, [isDevMode]);

    useSecretCode('sudo', toggleDevMode);
    useShakeDetect(toggleDevMode);

    useEffect(() => {
        if (isDevMode) {
            document.documentElement.setAttribute('data-theme', 'developer');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [isDevMode]);

    return (
        <ThemeContext.Provider value={{ isDevMode, toggleDevMode }}>
            {children}

            {/* Dev Grid Background Overlay */}
            <div className="dev-grid"></div>

            {/* Easter Egg Toast Notification */}
            {showToast && (
                <div className="toast-container">
                    <div className="toast dev-toast">
                        <Terminal size={18} color="var(--primary-color)" />
                        {toastMessage}
                    </div>
                </div>
            )}
        </ThemeContext.Provider>
    );
};
