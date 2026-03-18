import { useState, useEffect } from 'react';

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'glass scrolled' : ''}`}>
            <div className="container nav">
                <div className="logo">
                    Rishikanth Manimeli
                </div>
                <nav className="nav-links">
                    <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); window.history.pushState(null, '', '/'); }} className="nav-link">About</a>
                    <a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'}); window.history.pushState(null, '', '/'); }} className="nav-link">Experience</a>
                    <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'}); window.history.pushState(null, '', '/'); }} className="nav-link">Projects</a>
                    <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); window.history.pushState(null, '', '/'); }} className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    );
};
