import { Navbar } from './Navbar';
import { ThemeProvider } from './ThemeContext';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <Navbar />
            <main>
                {children}
            </main>
            <footer className="container footer">
                <p>© {new Date().getFullYear()} Rishikanth Manimeli. All rights reserved.</p>
            </footer>
        </ThemeProvider>
    );
};
