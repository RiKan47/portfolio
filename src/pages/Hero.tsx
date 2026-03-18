import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';

export const Hero = () => {
    const { isDevMode } = useTheme();

    return (
        <section id="about" className="section container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ width: '100%' }}
            >
                <div style={{ marginBottom: '1rem', color: 'var(--current-accent)', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                    {isDevMode ? '> console.log("Hello, World!");' : 'Hello, World!'}
                </div>
                <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                    Building robust <br />
                    <span style={{ color: 'var(--current-primary)' }}>backend systems</span> & scalable infrastructure.
                </h1>
                <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: 'var(--current-text-muted)', fontWeight: 400, maxWidth: '650px', lineHeight: 1.6 }}>
                    MS in Computer Science at UMass Amherst. Previously built core systems at Samsung R&D. I write scalable code that works.
                    <br /><br />
                    <span style={{ fontSize: '0.95rem', color: 'var(--current-text)' }}>✨ Try typing <code style={{ fontFamily: 'var(--font-mono)', padding: '0.2rem 0.4rem', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>sudo</code> right now to unlock my developer mode!</span>
                </h2>

                {isDevMode && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="glass"
                        style={{ marginTop: '2rem', padding: '1rem', display: 'inline-block', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}
                    >
                        <span style={{ color: '#ff7b72' }}>const</span> <span style={{ color: '#79c0ff' }}>status</span> <span style={{ color: '#ff7b72' }}>=</span> <span style={{ color: '#a5d6ff' }}>"actively seeking opportunities"</span>;
                        <br />
                        <span style={{ color: '#ff7b72' }}>const</span> <span style={{ color: '#79c0ff' }}>coffeeLevel</span> <span style={{ color: '#ff7b72' }}>=</span> <span style={{ color: '#a5d6ff' }}>"critical"</span>;
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};
