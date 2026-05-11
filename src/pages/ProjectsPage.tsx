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
        description: "Building a multi-document question-answering pipeline using LlamaIndex and LangGraph. Designing a multi-hop reasoning benchmark on the Enron email dataset to detect data contamination in LLM training sets.",
        tech: ["LlamaIndex", "LangGraph", "Python", "RAG"],
        icon: <Search size={20} />,
        isActive: true
    };

    const timelineItems: TimelineItem[] = [
        currentlyWorkingOn,
        {
            title: "CS 666 — Coming Soon",
            subtitle: "Compsci 666 Project",
            date: "Spring 2026",
            description: "Details to be added.",
            tech: [],
            icon: <BookOpen size={20} />
        },
        {
            title: "CS 687 — Coming Soon",
            subtitle: "Compsci 687 Project",
            date: "Spring 2026",
            description: "Details to be added.",
            tech: [],
            icon: <FlaskConical size={20} />
        },
        {
            title: "CS 690AB — Coming Soon",
            subtitle: "Compsci 690AB Project",
            date: "Spring 2026",
            description: "Details to be added.",
            tech: [],
            icon: <Rocket size={20} />
        },
        {
            title: "Stats 501 — Coming Soon",
            subtitle: "Stats 501 Project",
            date: "Spring 2026",
            description: "Details to be added.",
            tech: [],
            icon: <BarChart3 size={20} />
        },
        {
            title: "Distributed Trading Platform",
            subtitle: "Stock Market Application",
            date: "Fall 2025",
            description: "AWS-hosted microservices trading engine. Implemented Raft and Multi-Paxos consensus for totally ordered writes across replicas, alongside an LRU caching layer with server-push invalidations for automatic leader failover. Load-tested under concurrent multi-user traffic.",
            tech: ["React", "Python", "AWS", "REST APIs", "Raft", "Paxos"],
            icon: <LineChart size={20} />
        },
        {
            title: "Relational DBMS",
            subtitle: "Database Implementation",
            date: "Fall 2025",
            description: "Custom relational database management system from scratch in Java. Includes a buffer pool manager, on-disk page management, heap file engine, B+ tree index structure, and an iterator-based query executor supporting Block Nested Loop (BNL) joins.",
            tech: ["Java", "B+ Tree", "Buffer Pool", "DBMS"],
            icon: <Database size={20} />
        },
        {
            title: "ML Algorithm Suite",
            subtitle: "Machine Learning Algorithms Implementation",
            date: "Fall 2025",
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
