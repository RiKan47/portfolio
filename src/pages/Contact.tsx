import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../components/ThemeContext';
import { Mail, FileText, Code, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
    const { isDevMode } = useTheme();
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('kv0jt29xi@mozmail.com');
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <section id="contact" className="section container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="glass"
                style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem', borderRadius: '24px' }}
            >
                <span style={{ color: 'var(--current-primary)', fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '1rem', display: 'block' }}>
                    {isDevMode ? 'await system.shutdown(0);' : "What's Next?"}
                </span>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '2rem' }}>
                    Get In Touch
                </h2>

                <p style={{ color: 'var(--current-text-muted)', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                    Whether you have a question, an internship opportunity, or just want to say hi, I'll try my best to get back to you!
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                    <motion.button
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleCopyEmail}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                            padding: '1rem 2rem', backgroundColor: 'var(--current-text)', color: 'var(--current-bg)',
                            borderRadius: '8px', fontWeight: 600, transition: 'all 0.2s',
                            border: '1px solid transparent', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem'
                        }}
                    >
                        <Mail size={18} /> {emailCopied ? 'Copied Masked Email!' : 'Email Me'}
                    </motion.button>

                    <motion.a
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        href="https://www.linkedin.com/in/rishikanth-0605"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                            padding: '1rem 2rem', backgroundColor: 'transparent', color: 'var(--current-text)',
                            border: '1px solid var(--current-border)', borderRadius: '8px', fontWeight: 600, cursor: 'pointer',
                            textDecoration: 'none'
                        }}
                    >
                        <Linkedin size={18} /> LinkedIn
                    </motion.a>

                    <motion.a
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        href="https://github.com/RiKan47"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                            padding: '1rem 2rem', backgroundColor: 'transparent', color: 'var(--current-text)',
                            border: '1px solid var(--current-border)', borderRadius: '8px', fontWeight: 600, cursor: 'pointer',
                            textDecoration: 'none'
                        }}
                    >
                        <Github size={18} /> GitHub
                    </motion.a>

                    <motion.a
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        href="https://leetcode.com/u/RiKan47/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                            padding: '1rem 2rem', backgroundColor: 'transparent', color: 'var(--current-text)',
                            border: '1px solid var(--current-border)', borderRadius: '8px', fontWeight: 600, cursor: 'pointer',
                            textDecoration: 'none'
                        }}
                    >
                        <Code size={18} /> LeetCode
                    </motion.a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.a
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        href="/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                            padding: '0.8rem 1.5rem', backgroundColor: 'transparent', color: 'var(--current-text)',
                            border: '1px solid var(--current-border)', borderRadius: '8px', fontWeight: 600, cursor: 'pointer',
                            textDecoration: 'none'
                        }}
                    >
                        {isDevMode ? <Code size={18} /> : <FileText size={18} />}
                        {isDevMode ? 'fetch(--resume)' : 'View Resume'}
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};
