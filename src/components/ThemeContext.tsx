import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useSecretCode } from '../hooks/useSecretCode';
import { useShakeDetect } from '../hooks/useShakeDetect';
import { Terminal } from 'lucide-react';

interface ThemeContextType {
    isDevMode: boolean;
    toggleDevMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Listen for the secret words like "sudo" or "devmode"
    const secretTriggered = useSecretCode('sudo');
    const [isDevMode, setIsDevMode] = useState(false);
    const [showToast, setShowToast] = useState(false);

    // Shared toggle function used by shake + multi-tap
    const toggleDevMode = useCallback(() => {
        setIsDevMode((prev) => {
            const next = !prev;
            if (next) {
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
            }
            return next;
        });
    }, []);

    // Shake to toggle dev mode (gracefully no-ops on desktop)
    useShakeDetect(toggleDevMode);

    useEffect(() => {
        // If secret is triggered, toggle dev mode
        setIsDevMode(secretTriggered);
        if (secretTriggered) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    }, [secretTriggered]);

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
                        Developer Mode Unlocked. Welcome, Admin.
                    </div>
                </div>
            )}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
