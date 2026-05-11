import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export interface TimelineItem {
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
                        key={idx}
                        className={`timeline-alt-item timeline-alt-item--${side} ${item.isActive ? 'timeline-alt-item--active' : ''}`}
                        initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
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

                            <p className="timeline-alt-description">{item.description}</p>

                            {item.tech.length > 0 && (
                                <div className="timeline-alt-tech">
                                    {item.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
