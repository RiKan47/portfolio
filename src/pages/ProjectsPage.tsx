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
        description: "Building a multi-doc QA pipeline using LlamaIndex & LangGraph. Designing a multi-hop reasoning benchmark on the Enron email dataset to tackle data contamination issues during LLM training, where models answer from parametric memory instead of from the provided documents.",
        tech: ["LlamaIndex", "LangGraph", "Python", "RAG"],
        icon: <Search size={20} />,
        isActive: true
    };

    const timelineItems: TimelineItem[] = [
        currentlyWorkingOn,
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
            title: "Distributed Trading Platform",
            subtitle: "Stock Market Application",
            date: "Spring 2025",
            description: "AWS-hosted microservices trading engine. Implemented Raft and Multi-Paxos consensus for totally ordered writes across replicas, alongside an LRU caching layer with server-push invalidations for automatic leader failover. Load-tested under concurrent multi-user traffic.",
            tech: ["React", "Python", "AWS", "REST APIs", "Raft", "Paxos"],
            icon: <LineChart size={20} />
        },
        {
            title: "Relational DBMS",
            subtitle: "Database Implementation",
            date: "Spring 2025",
            description: "Custom relational database management system from scratch in Java. Includes a buffer pool manager, on-disk page management, heap file engine, B+ tree index structure, and an iterator-based query executor supporting Block Nested Loop (BNL) joins.",
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
