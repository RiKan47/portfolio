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
                <p>© {new Date().getFullYear()} Student Name. All rights reserved.</p>
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Try typing <code style={{ fontFamily: 'var(--font-mono)' }}>sudo</code> to unlock developer mode.</p>
            </footer>
        </ThemeProvider>
    );
};
