import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Experience = () => {
    const { isDevMode } = useTheme();

    return (
        <section id="experience" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                    {isDevMode ? '<Experience />' : 'Experience'}
                </h2>

                <motion.div
                    className="glass"
                    style={{ padding: '2.5rem', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                >
                    <div style={{ marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.7rem', fontWeight: 700, color: 'var(--current-primary)', marginBottom: '0.5rem' }}>Samsung R&D</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                            <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Senior Software Engineer</h4>
                            <span style={{ color: 'var(--current-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>06/2022 – 01/2025</span>
                        </div>
                    </div>
                    <p style={{ color: 'var(--current-text-muted)', lineHeight: 1.6, fontSize: '1.05rem', marginBottom: '2rem' }}>
                        Engineered critical core network optimizations for Telus and Verizon 5G/LTE modems. Profiled C++ system modules to eliminate CPU bottlenecks, and architected automated CI/CD pipelines that transformed team integration speeds.
                    </p>
                    <Link to="/experience" className="section-link">
                        View Full Experience <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};
