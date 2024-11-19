'use client';

import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { opacity, slideUp } from './animation';

const words = [
  'Hello',
  'Bonjour',
  'Ciao',
  'Olà',
  'やあ',
  'Hallå',
  'Guten tag',
  'Hallo',
];

export default function Preloader() {
  const [index, setIndex] = useState<number>(0);
  const [dimension, setDimension] = useState<{ width: number; height: number }>(
    {
      width: 0,
      height: 0,
    }
  );
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    setShowContent(true);
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timer = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );
    return () => clearTimeout(timer);
  }, [index]);

  if (!showContent) {
    return null; // Render nothing on the server
  }

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.introduction}
    >
      <>
        <motion.p variants={opacity} initial="initial" animate="enter">
          <span></span>
          {words[index]}
        </motion.p>
        <svg>
          <motion.path variants={curve} initial="initial" exit="exit" />
        </svg>
      </>
    </motion.div>
  );
}
