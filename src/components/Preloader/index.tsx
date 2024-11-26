// src/components/Preloader/index.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react'; // Ensure consistent import
import styles from './style.module.scss';

// Animation configurations
const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

const slideUp = {
  initial: {
    top: 0,
  },
  enter: {
    top: 0,
  },
  exit: {
    top: '-100vh',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    },
  },
};

// List of words to display
const words: string[] = [
  'Hello',
  'Bonjour',
  'Ciao',
  'Olà',
  'やあ',
  'Hallå',
  'Guten tag',
  'Hallo',
];

const Preloader: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.introduction}
    >
      <motion.p variants={opacity} initial="initial" animate="enter">
        <span></span>
        {words[index]}
      </motion.p>
    </motion.div>
  );
};

export default Preloader;
