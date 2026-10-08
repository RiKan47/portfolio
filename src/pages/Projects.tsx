import { motion } from 'framer-motion';
import { useTheme } from '../components/theme';
import { Link } from 'react-router-dom';
import { LineChart, Database, Search, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolio';

export const Projects = () => {
    const { isDevMode } = useTheme();

    const featuredProjects = projects.filter(project => project.featured);
    const icons = {
        database: <Database size={40} stroke="var(--current-primary)" strokeWidth="1.5" />,
        search: <Search size={40} stroke="var(--current-primary)" strokeWidth="1.5" />,
        chart: <LineChart size={40} stroke="var(--current-primary)" strokeWidth="1.5" />,
        rocket: <Search size={40} />,
        brain: <Search size={40} />,
    };

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
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2rem' }}
            >
                {featuredProjects.map((proj) => (
                    <motion.div key={proj.id} variants={itemVariants} className="glass" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <div style={{ marginRight: '1rem', flexShrink: 0 }}>
                                {icons[proj.icon]}
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem' }}>{proj.name}</h3>

                        <p style={{ color: 'var(--current-text-muted)', marginBottom: '2rem', flexGrow: 1, lineHeight: 1.7 }}>
                            {proj.description}
                        </p>

                        <Link to={`/projects#${proj.id}`} className="section-link" style={{ marginBottom: '1.25rem' }}>
                            View project details <ArrowRight size={16} />
                        </Link>

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
