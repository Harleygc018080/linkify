import React from 'react';
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TextEffect: React.FC = ({ children }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      aria-label="Your aria label"
      variants={variants}
      className="your-class-name"
    >
      {children}
    </motion.span>
  );
};

export default TextEffect;