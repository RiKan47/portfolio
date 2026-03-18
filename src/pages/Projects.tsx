import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';
import { Github, ExternalLink, LineChart, Database, BrainCircuit } from 'lucide-react';

export const Projects = () => {
    const { isDevMode } = useTheme();

    const projects = [
        {
            name: "Stock Market Application",
            description: "Built a fault-tolerant microservices trading platform on AWS using REST APIs; implemented LRU caching with server-push invalidations and leader-based replication for automatic failover. Implemented the Paxos consensus algorithm.",
            tech: ["React", "Python", "AWS", "REST APIs"],
            github: "#",
            live: "#",
            icon: <LineChart size={40} stroke="var(--current-primary)" strokeWidth="1.5" />
        },
        {
            name: "Database Implementation",
            description: "Built a custom relational database management system (DBMS) from scratch in Java. Implemented core storage components including a buffer pool manager, on-disk page management, and a heap file storage engine.",
            tech: ["Java", "B+ Tree", "BNL Joins", "DBMS"],
            github: "#",
            live: "#",
            icon: <Database size={40} stroke="var(--current-primary)" strokeWidth="1.5" />
        },
        {
            name: "Machine Learning Algorithms",
            description: "Implemented fundamental machine learning models from scratch in Python, including k-Nearest Neighbors, Decision Trees, Multinomial Naive Bayes, and Neural Networks without external libraries.",
            tech: ["Python", "Machine Learning", "Neural Networks"],
            github: "#",
            icon: <BrainCircuit size={40} stroke="var(--current-primary)" strokeWidth="1.5" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="projects" className="section container">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 700, letterSpacing: '-0.02em', textAlign: 'center' }}>
                {isDevMode ? 'projects.map((p) => <Card {...p} />)' : 'Featured Work'}
            </h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
            >
                {projects.map((proj, idx) => (
                    <motion.div key={idx} variants={itemVariants} className="glass" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <div style={{ marginRight: '1rem', flexShrink: 0 }}>
                                {proj.icon}
                            </div>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {proj.github && (
                                    <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--current-text-muted)' }}>
                                        <Github size={20} className="hover-color-text" />
                                    </a>
                                )}
                                {proj.live && (
                                    <a href={proj.live} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--current-text-muted)' }}>
                                        <ExternalLink size={20} className="hover-color-text" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem' }}>{proj.name}</h3>

                        <p style={{ color: 'var(--current-text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                            {proj.description}
                        </p>

                        {isDevMode && (
                            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#ff7b72' }}>
                                System Status: <span style={{ color: '#79c0ff' }}>Operational</span>
                                <br />
                                Dependencies: <span style={{ color: '#79c0ff' }}>Up to date</span>
                            </div>
                        )}

                        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--current-text-muted)', listStyle: 'none', padding: 0 }}>
                            {proj.tech.map((t, i) => (
                                <li key={i}>{t}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
