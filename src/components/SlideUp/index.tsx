// src/components/SlideUp/index.tsx

import React from 'react';
import { motion } from 'motion/react'; // Ensure consistent import

interface SlideUpProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const slideUpVariants = {
  initial: {
    top: 0,
  },
  enter: {
    top: 0,
  },
  exit: {
    top: '-100vh',
    transition: {
      duration: 3.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    },
  },
};

const SlideUp: React.FC<SlideUpProps> = ({ children, className, style }) => {
  return (
    <motion.div
      variants={slideUpVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      className={className}
      style={{ position: 'relative', ...style }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;
