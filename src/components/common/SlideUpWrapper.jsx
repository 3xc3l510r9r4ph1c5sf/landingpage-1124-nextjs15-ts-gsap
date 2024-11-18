//src/components/common/SlideUpWrapper.jsx

'use client';

import { motion } from 'framer-motion';

const slideUpVariants = {
  initial: {
    y: 300,
  },
  enter: {
    y: 0,
    transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.3 },
  },
};

export default function SlideUpWrapper({ children, className }) {
  return (
    <motion.div
      variants={slideUpVariants}
      initial="initial"
      animate="enter"
      className={className}
    >
      {children}
    </motion.div>
  );
}
