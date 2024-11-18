// src/components/Header/nav/Curve/index.tsx

import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import styles from './styles.module.scss';

const Curve: React.FC = () => {
  const [windowHeight, setWindowHeight] = useState<number>(0);

  // Update windowHeight on component mount and when the window is resized
  useEffect(() => {
    // Function to update window height
    const updateWindowHeight = () => {
      setWindowHeight(window.innerHeight);
    };

    // Set initial window height
    updateWindowHeight();

    // Add event listener for window resize
    window.addEventListener('resize', updateWindowHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateWindowHeight);
    };
  }, []);

  // Define the SVG paths based on window height
  const initialPath = `M100 0 L100 ${windowHeight} Q-100 ${windowHeight / 2} 100 0`;
  const targetPath = `M100 0 L100 ${windowHeight} Q100 ${windowHeight / 2} 100 0`;

  // Define animation variants
  const curve: Variants = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg
      className={styles.svgCurve}
      width="200"
      height={windowHeight}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
        fill="none"
        stroke="#000" // Adjust stroke color as needed
        strokeWidth="2" // Adjust stroke width as needed
      />
    </svg>
  );
};

export default Curve;
