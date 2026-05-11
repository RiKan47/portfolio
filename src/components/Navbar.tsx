import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { isDevMode } = useTheme();
    const isHome = location.pathname === '/';

    // Track pending scroll target so scroll-to-top can skip when needed
    const pendingScrollTarget = useRef<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on route change — unless we have a pending scroll target
    useEffect(() => {
        if (pendingScrollTarget.current) {
            // Don't scroll to top — we're about to scroll to a section instead.
            // Use a polling approach to wait for the element to exist in the DOM
            const targetId = pendingScrollTarget.current;
            pendingScrollTarget.current = null;

            const tryScroll = (attempts: number) => {
                const el = document.getElementById(targetId);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                } else if (attempts > 0) {
                    setTimeout(() => tryScroll(attempts - 1), 100);
                }
            };
            // Start polling after a brief delay for the page transition
            setTimeout(() => tryScroll(10), 50);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);

    const scrollTo = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        if (isHome) {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Set pending target BEFORE navigating so the useEffect knows to skip scroll-to-top
            pendingScrollTarget.current = id;
            navigate('/');
        }
    };

    return (
        <header className={`header ${scrolled ? 'glass scrolled' : ''}`}>
            <div className="container nav">
                <Link to="/" className="logo">
                    {isDevMode ? 'RM' : 'Rishikanth Manimeli'}
                </Link>
                <nav className="nav-links">
                    <a href="/#about" onClick={scrollTo('about')} className="nav-link">About</a>
                    <Link to="/experience" className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`}>Experience</Link>
                    <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
                    <a href="/#contact" onClick={scrollTo('contact')} className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    );
};
