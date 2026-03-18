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
                    Student.Name
                </div>
                <nav className="nav-links">
                    <a href="#about" className="nav-link">About</a>
                    <a href="#experience" className="nav-link">Experience</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>
            </div>
        </header>
    );
};
