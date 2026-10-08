import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export interface TimelineItem {
    id?: string;
    updated?: string;
    title: string;
    subtitle?: string;
    date: string;
    description: string;
    tech: string[];
    icon?: ReactNode;
    isActive?: boolean;
    link?: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export const Timeline = ({ items }: TimelineProps) => {
    return (
        <div className="timeline-alt">
            <div className="timeline-alt-line" />
            {items.map((item, idx) => {
                const side = idx % 2 === 0 ? 'left' : 'right';
                return (
                    <motion.div
                        key={item.id ?? idx}
                        id={item.id}
                        style={{ scrollMarginTop: '7rem' }}
                        className={`timeline-alt-item timeline-alt-item--${side} ${item.isActive ? 'timeline-alt-item--active' : ''}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.06 }}
                    >
                        {/* Dot on the center line */}
                        <div className="timeline-alt-dot-wrapper">
                            <div className={`timeline-alt-dot ${item.isActive ? 'pulse-dot' : ''}`} />
                        </div>

                        {/* Card */}
                        <div className="timeline-alt-content glass">
                            <div className="timeline-alt-header">
                                <div>
                                    {item.icon && <div className="timeline-alt-icon">{item.icon}</div>}
                                    <h3 className="timeline-alt-title">{item.title}</h3>
                                    {item.subtitle && <p className="timeline-alt-subtitle">{item.subtitle}</p>}
                                </div>
                                <span className="timeline-alt-date">{item.date}</span>
                            </div>

                            {item.updated && <p style={{ color: 'var(--current-text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>{item.updated}</p>}
                            <p className="timeline-alt-description">{item.description}</p>

                            {item.tech.length > 0 && (
                                <div className="timeline-alt-tech">
                                    {item.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            )}

                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="section-link"
                                    style={{ marginTop: '1rem', fontSize: '0.85rem' }}
                                >
                                    View on GitHub →
                                </a>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
