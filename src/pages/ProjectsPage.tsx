import { motion } from 'framer-motion';
import { useTheme } from '../components/theme';
import { Timeline } from '../components/Timeline';
import type { TimelineItem } from '../components/Timeline';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data/portfolio';
import { ArrowLeft, Rocket, Search, LineChart, Database, BrainCircuit } from 'lucide-react';

export const ProjectsPage = () => {
    const { isDevMode } = useTheme();
    const { hash } = useLocation();
    useEffect(() => {
        if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
    }, [hash]);

    const icons = {
        database: <Database size={20} />,
        search: <Search size={20} />,
        chart: <LineChart size={20} />,
        rocket: <Rocket size={20} />,
        brain: <BrainCircuit size={20} />,
    };
    const timelineItems: TimelineItem[] = projects.map(project => ({
        id: project.id,
        title: project.name,
        subtitle: project.subtitle,
        date: project.date,
        updated: project.updated,
        description: project.description,
        tech: project.tech,
        icon: icons[project.icon],
        link: project.link,
    }));

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
                    Course and portfolio projects, with original dates and later development milestones.
                </p>

                <Timeline items={timelineItems} />
            </section>
        </motion.div>
    );
};
