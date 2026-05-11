import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';
import { Link } from 'react-router-dom';
import { LineChart, Database, Search, ArrowRight } from 'lucide-react';

export const Projects = () => {
    const { isDevMode } = useTheme();

    const projects = [
        {
            name: "Agentic RAG Research Extern",
            description: "Built a multi-document QA pipeline using FlashRAG, indexing 1,000+ papers with sub-second latency. Designed a multi-hop reasoning benchmark on the Enron corpus to robustly evaluate agentic retrieval.",
            tech: ["Python", "FlashRAG", "LLMs", "RAG"],
            icon: <Search size={40} stroke="var(--current-primary)" strokeWidth="1.5" />
        },
        {
            name: "In-Memory Key-Value Store",
            description: "Engineered a Redis-compatible in-memory data store in Go, implementing the RESP parser and TCP networking. Built a leader-follower replication system supporting full state synchronization.",
            tech: ["Go", "Redis", "TCP", "Concurrency"],
            icon: <Database size={40} stroke="var(--current-primary)" strokeWidth="1.5" />
        },
        {
            name: "Distributed Trading Platform",
            description: "AWS-hosted microservices trading engine. Implemented Raft and Multi-Paxos consensus for totally ordered writes across replicas, alongside an LRU caching layer with server-push invalidations.",
            tech: ["React", "Python", "AWS", "Raft"],
            icon: <LineChart size={40} stroke="var(--current-primary)" strokeWidth="1.5" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="projects" className="section container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>
                    {isDevMode ? 'projects.map((p) => <Card {...p} />)' : 'Featured Projects'}
                </h2>
                <Link to="/projects" className="section-link" style={{ whiteSpace: 'nowrap' }}>
                    View All <ArrowRight size={16} />
                </Link>
            </div>

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

                        <p style={{ color: 'var(--current-text-muted)', marginBottom: '2rem', flexGrow: 1, lineHeight: 1.7 }}>
                            {proj.description}
                        </p>

                        {isDevMode && (
                            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#ff7b72' }}>
                                Deployment Status: <span style={{ color: '#ffcc00' }}>Local Development</span>
                                <br />
                                Next Action: <span style={{ color: '#79c0ff' }}>Awaiting Production Push</span>
                            </div>
                        )}

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                            {proj.tech.map((t, i) => (
                                <span key={i} className="tech-tag">{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};
