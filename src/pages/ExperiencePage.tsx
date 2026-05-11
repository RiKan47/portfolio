import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';
import { Award, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExperiencePage = () => {
    const { isDevMode } = useTheme();

    const bulletPoints = [
        "Optimized MAC Uplink scheduling for Cell on Wheels deployments across Telus and Verizon modems, increasing cell capacity and LTE throughput by 25%.",
        "Profiled and optimized core C++ system modules in a Linux environment to resolve CPU performance bottlenecks, reducing cycle consumption and improving throughput by 15%.",
        "Built automated CI/CD pipelines and regression test frameworks in Python and PowerShell, reducing manual log analysis from 25 minutes to a 10-minute scripted run.",
        "Drove architectural improvements to the modem scheduler; contributed 100+ commits and 300+ code reviews over two years across the modem software stack."
    ];

    const achievements = [
        {
            title: "Samsung Excellence Award",
            description: "Recognized for exceptional contributions to system capacity improvement and core code optimization.",
            date: "April 2023"
        },
        {
            title: "Samsung Professional Certificate",
            description: "Earned Samsung's Professional-level certification in algorithmic problem solving.",
            date: "October 2023"
        }
    ];

    const techStack = ["C++", "Python", "Linux", "PowerShell", "5G NR", "LTE", "CI/CD", "Git"];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <section className="section container" style={{ paddingTop: '8rem' }}>
                <Link to="/" className="back-link">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                    {isDevMode ? '<Experience />' : 'Experience'}
                </h1>
                <p style={{ color: 'var(--current-text-muted)', fontSize: '1.15rem', marginBottom: '4rem', maxWidth: '600px' }}>
                    Building core systems and scalable infrastructure
                </p>

                {/* Samsung R&D Section */}
                <motion.div
                    className="glass"
                    style={{ padding: '3rem', borderRadius: '20px', marginBottom: '3rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--current-primary)', marginBottom: '0.5rem' }}>Samsung R&D</h2>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>Senior Software Engineer</h3>
                            <span style={{ color: 'var(--current-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>June 2022 – January 2025</span>
                        </div>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        {bulletPoints.map((point, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                            >
                                <CheckCircle size={20} style={{ color: 'var(--current-primary)', flexShrink: 0, marginTop: '2px' }} />
                                <span style={{ color: 'var(--current-text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>{point}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--current-border)' }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--current-text-muted)' }}>Technologies</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                            {techStack.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Achievements */}
                <h2 style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
                    {isDevMode ? '// achievements' : 'Achievements'}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
                    {achievements.map((ach, idx) => (
                        <motion.div
                            key={idx}
                            className="glass"
                            style={{ padding: '2rem', borderRadius: '16px' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + idx * 0.15 }}
                            whileHover={{ y: -3 }}
                        >
                            <Award size={28} style={{ color: 'var(--current-primary)', marginBottom: '1rem' }} />
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>{ach.title}</h3>
                            <p style={{ color: 'var(--current-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>{ach.description}</p>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--current-text-muted)' }}>{ach.date}</span>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};
