import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';

export const Experience = () => {
    const { isDevMode } = useTheme();

    const experiences = [
        {
            company: "Samsung R&D Institute Bangalore",
            roles: [
                { title: "Senior Software Engineer", date: "03/2024 - 01/2025" },
                { title: "Software Engineer", date: "06/2022 - 03/2024" }
            ],
            highlight: "During my 2.5 years at Samsung, I engineered critical core network optimizations for Telus and Verizon 5G/LTE modems. Beyond deep C++ profiling to eliminate CPU bottlenecks and scale throughput, I architected robust automated CI/CD pipelines from scratch, completely transforming our team's integration speeds and software delivery lifecycle."
        }
    ];

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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            className="glass"
                            style={{ padding: '2.5rem', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.7rem', fontWeight: 700, color: 'var(--current-primary)', marginBottom: '1rem' }}>{exp.company}</h3>
                                {exp.roles.map((role, rIdx) => (
                                    <div key={rIdx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{role.title}</h4>
                                        <span style={{ color: 'var(--current-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{role.date}</span>
                                    </div>
                                ))}
                            </div>
                            <p style={{ color: 'var(--current-text-muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>
                                {exp.highlight}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
