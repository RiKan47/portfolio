import { Navbar } from './Navbar';
import { ThemeProvider } from './ThemeContext';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <Navbar />
            <main>
                {children}
            </main>
            <footer className="container section" style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--current-text-muted)' }}>
                <p>© {new Date().getFullYear()} Rishikanth Manimeli. All rights reserved.</p>
            </footer>
        </ThemeProvider>
    );
};
