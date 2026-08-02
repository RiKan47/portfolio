import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';
import { Timeline } from '../components/Timeline';
import type { TimelineItem } from '../components/Timeline';
import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket, Search, LineChart, Database, BrainCircuit, BookOpen, BarChart3, FlaskConical } from 'lucide-react';

export const ProjectsPage = () => {
    const { isDevMode } = useTheme();

    const currentlyWorkingOn: TimelineItem = {
        title: "Agentic RAG Research Extern",
        subtitle: "Industry Experience at Adobe",
        date: "Jan 2026 – Present",
        description: "Engineered a multi-document question-answering pipeline utilizing FlashRAG and LLMs to index 1,000+ research papers, achieving sub-second retrieval latency. Formulated a multi-hop reasoning benchmark on the Enron email corpus to rigorously evaluate agentic retrieval, circumventing data pollution. Orchestrated an agentic RAG workflow by implementing tool calling mechanisms to dynamically retrieve missing context mid-inference, successfully reducing hallucination rates.",
        tech: ["Python", "FlashRAG", "LLMs", "RAG"],
        icon: <Search size={20} />,
        isActive: true
    };

    const timelineItems: TimelineItem[] = [
        currentlyWorkingOn,
        {
            title: "In-Memory Key-Value Store",
            subtitle: "Go",
            date: "Spring 2026",
            description: "Engineered a custom Redis-compatible data store in Go, leveraging goroutines and TCP networking to parse the RESP protocol and handle concurrent client connections. Designed a leader-follower replication system, guaranteeing full state synchronization and real-time command propagation across distributed nodes. Integrated robust data persistence by implementing TTL expiration scheduling and RDB file parsing.",
            tech: ["Go", "Redis", "TCP", "Concurrency"],
            icon: <Database size={20} />
        },
        {
            title: "ML Systems Debloater",
            subtitle: "Systems for Deep Learning",
            date: "Spring 2026",
            description: "Extended the MLSys 2025 paper 'The Hidden Bloat in Machine Learning Systems' with a dynamic tracing approach using Linux strace to identify unused .so libraries at runtime in PyTorch. Built an end-to-end pipeline to debloat ML frameworks and measure reductions in peak CPU memory, code footprint, and execution time across ResNet50, BERT, and ViT.",
            tech: ["Python", "Linux", "strace", "PyTorch"],
            icon: <Rocket size={20} />,
            link: "https://github.com/RiKan47/690AB-project"
        },
        {
            title: "Stats 501 — Coming Soon",
            subtitle: "Methods of Applied Statistics",
            date: "Spring 2026",
            description: "Details to be added.",
            tech: [],
            icon: <BarChart3 size={20} />
        },
        {
            title: "CS 666 — Coming Soon",
            subtitle: "Theory & Practice of Cryptography",
            date: "Fall 2025",
            description: "Details to be added.",
            tech: [],
            icon: <BookOpen size={20} />
        },
        {
            title: "CS 687 — Coming Soon",
            subtitle: "Reinforcement Learning",
            date: "Fall 2025",
            description: "Details to be added.",
            tech: [],
            icon: <FlaskConical size={20} />
        },
        {
            title: "Stock Market Application",
            subtitle: "Distributed Trading Platform",
            date: "Spring 2025",
            description: "Architected a fault-tolerant microservices trading platform deployed on AWS, implementing LRU caching with server-push invalidations and leader-based failover to maintain high availability. Applied Raft and Multi-Paxos consensus algorithms to guarantee totally ordered writes and tolerate node failures. Validated system resilience through extensive load-testing, ensuring strict data integrity and low latency.",
            tech: ["Python", "AWS", "Raft", "Paxos"],
            icon: <LineChart size={20} />
        },
        {
            title: "Database Implementation",
            subtitle: "Relational DBMS",
            date: "Spring 2025",
            description: "Engineered a custom relational Database Management System (DBMS) from scratch in Java, implementing core storage components such as a buffer pool manager, on-disk page management, and a heap file engine. Constructed a B+ tree index structure to optimize query execution, significantly improving database lookup times from O(N) to O(log N), and integrated an iterator-based query executor supporting Block Nested Loop (BNL) joins.",
            tech: ["Java", "B+ Tree", "Buffer Pool", "DBMS"],
            icon: <Database size={20} />
        },
        {
            title: "ML Algorithm Suite",
            subtitle: "Machine Learning Algorithms Implementation",
            date: "Spring 2025",
            description: "Implemented core machine learning algorithms from scratch in Python — deep neural networks, decision trees, k-NN, and Naive Bayes — without external ML libraries. Built an end-to-end evaluation pipeline with hyperparameter tuning and cross-validation.",
            tech: ["Python", "Neural Networks", "Decision Trees", "k-NN"],
            icon: <BrainCircuit size={20} />
        }
    ];

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
                    {isDevMode ? 'git log --oneline --graph' : 'All Projects'}
                </h1>
                <p style={{ color: 'var(--current-text-muted)', fontSize: '1.15rem', marginBottom: '4rem', maxWidth: '600px' }}>
                    A chronological timeline of everything I've built — from course projects to production systems.
                </p>

                <Timeline items={timelineItems} />
            </section>
        </motion.div>
    );
};
