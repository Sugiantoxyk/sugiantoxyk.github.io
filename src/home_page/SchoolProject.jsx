
import { useState } from 'react';
import { motion } from 'framer-motion';

import { fadeIn, staggerContainer } from '../styles/motion';
import styles from '../styles/styles';
import { ProjectCard } from '../components';
import { schoolProjects } from '../constants';

const SchoolProject = () => {
    // School projects state
    const [active, setActive] = useState('project-3');

    return (
        <section id="projects" className={`${styles.paddings} relative select-none`}>
            {/* School projects */}
            <motion.div 
                className={`${styles.innerWidth} pt-5 mx-auto flex flex-col`}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.h1 
                    className={`${styles.preTitle}`}
                    variants={fadeIn("up", "tween", 0.2, 1)}
                >
                    Projects
                </motion.h1>
                <motion.h1 
                    className={`${styles.mainTitle}`}
                    variants={fadeIn("up", "tween", 0.4, 1)}
                >
                    School Projects
                </motion.h1>
                <motion.h1 
                    className={`${styles.subTitle}`}
                    variants={fadeIn("up", "tween", 0.6, 1)}
                >
                    Discover my coding adventures.
                </motion.h1>
            </motion.div>
            <motion.div 
                className={`${styles.innerWidth}  mx-auto mt-4 flex lg:flex-row flex-col min-h-[70vh] gap-5`}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                {schoolProjects.map((project, index) => (
                    <ProjectCard
                    key={project.id}
                    {...project}
                    index={index}
                    active={active}
                    handleClick={setActive}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default SchoolProject;