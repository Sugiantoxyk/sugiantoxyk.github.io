
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { fadeIn, staggerContainer } from '../styles/motion';
import styles from '../styles/styles';
import { HorizontalCard } from '../components';
import { personalProjects } from '../constants';

const PersonalProject = () => {
    // Personal projects state
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section className={`${styles.paddings} relative select-none h-[300vh]`} ref={targetRef}>
            {/* Personal projects */}
            <motion.div 
                className={`${styles.innerWidth} sticky top-12 pt-5 mx-auto flex flex-col`}
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
            >
                <motion.h1 
                    className={`${styles.mainTitle}`}
                    variants={fadeIn("up", "tween", 0.2, 1)}
                >
                    Personal Projects
                </motion.h1>
                <motion.h1 
                    className={`${styles.subTitle}`}
                    variants={fadeIn("up", "tween", 0.4, 1)}
                >
                    Explore my passion in designing, creating, and gaming.
                </motion.h1>
                <div className="flex items-center pt-10">
                    <motion.div style={{ x }} className="flex gap-10">
                        {personalProjects.map((project, index) => {
                            return <HorizontalCard {...project} index={index} />;
                        })}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default PersonalProject;