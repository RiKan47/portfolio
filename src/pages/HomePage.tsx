import { Hero } from './Hero';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { motion } from 'framer-motion';

export const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Hero />
            <Experience />
            <Projects />
            <Contact />
        </motion.div>
    );
};
