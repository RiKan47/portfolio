import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';

export const Experience = () => {
    const { isDevMode } = useTheme();

    const experiences = [
        {
            title: "Senior Software Engineer",
            company: "Samsung R&D Institute Bangalore",
            date: "03/2024 - 01/2025",
            points: [
                "Optimized MAC Uplink capacity for Cell on Wheels deployments in Telus and Verizon modems, increasing overall cell capacity and LTE throughput by 25%.",
                "Profiled and optimized core C++ system modules in a Linux environment to resolve CPU performance bottlenecks, reducing cycle consumption and improving throughput by 15%.",
                "Built automated CI/CD pipelines using Python and PowerShell, significantly reducing manual testing time and accelerating software delivery."
            ]
        },
        {
            title: "Software Engineer",
            company: "Samsung R&D Institute Bangalore",
            date: "06/2022 - 03/2024",
            points: [
                "Optimized MAC Uplink capacity for Cell on Wheels deployments in Telus and Verizon modems, increasing overall cell capacity and LTE throughput by 25%.",
                "Profiled and optimized core C++ system modules in a Linux environment to resolve CPU performance bottlenecks, reducing cycle consumption and improving throughput by 15%.",
                "Built automated CI/CD pipelines using Python and PowerShell, significantly reducing manual testing time and accelerating software delivery."
            ]
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
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '1rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{exp.title} <span style={{ color: 'var(--current-primary)' }}>@ {exp.company}</span></h3>
                                <span style={{ color: 'var(--current-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>{exp.date}</span>
                            </div>
                            <ul style={{ paddingLeft: '1.2rem', color: 'var(--current-text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {exp.points.map((pt, i) => (
                                    <li key={i}>{pt}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
