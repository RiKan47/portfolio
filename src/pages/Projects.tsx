import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';
import { LineChart, Database, BrainCircuit } from 'lucide-react';

export const Projects = () => {
    const { isDevMode } = useTheme();

    const projects = [
        {
            name: "Distributed Trading Platform",
            description: "AWS-hosted microservices trading engine. Implemented Paxos consensus for totally ordered writes across replicas, alongside an LRU caching layer with server-push invalidations to handle automatic leader failover.",
            tech: ["React", "Python", "AWS", "REST APIs"],
            icon: <LineChart size={40} stroke="var(--current-primary)" strokeWidth="1.5" />
        },
        {
            name: "Relational DBMS",
            description: "Custom relational database built from scratch. Features an on-disk page manager, a robust Buffer Pool Manager, and customized B+ Tree indexing to optimize Block Nested Loop (BNL) join execution.",
            tech: ["Java", "B+ Tree", "BNL Joins", "DBMS"],
            icon: <Database size={40} stroke="var(--current-primary)" strokeWidth="1.5" />
        },
        {
            name: "ML Algorithm Suite",
            description: "Zero-dependency machine learning models implemented in pure Python. Includes custom training pipelines for k-Nearest Neighbors, Multinomial Naive Bayes, Decision Trees, and multi-layer Neural Networks.",
            tech: ["Python", "Machine Learning", "Neural Networks"],
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
                {isDevMode ? 'projects.map((p) => <Card {...p} />)' : 'Featured Projects'}
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
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <div style={{ marginRight: '1rem', flexShrink: 0 }}>
                                {proj.icon}
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem' }}>{proj.name}</h3>

                        <p style={{ color: 'var(--current-text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                            {proj.description}
                        </p>

                        {isDevMode && (
                            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#ff7b72' }}>
                                Deployment Status: <span style={{ color: '#ffcc00' }}>Local Development</span>
                                <br />
                                Next Action: <span style={{ color: '#79c0ff' }}>Awaiting Production Push</span>
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
