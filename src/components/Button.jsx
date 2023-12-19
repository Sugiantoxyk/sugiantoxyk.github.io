import { motion } from 'framer-motion';

import styles from '../styles/styles';

const Button = ({text, href=""}) => (
    <div className="">
      <a href={href} target="_blank" rel="noreferrer" draggable="false" >
        <motion.button
          className={`${styles.button1} group relative overflow-hidden`}
          whileTap={{
            scale: 0.95,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
          <span className="relative z-10">
            {text}
          </span>
        </motion.button>
      </a>
    </div>
  );
  
  export { Button };