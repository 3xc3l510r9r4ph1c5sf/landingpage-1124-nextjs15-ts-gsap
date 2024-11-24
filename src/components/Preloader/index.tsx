'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import styles from './style.module.scss';

interface Dimension {
  width: number;
  height: number;
}

const Preloader: React.FC = () => {
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });
  const [showContent, setShowContent] = useState<boolean>(false);

  const opacityVariants: Variants = {
    initial: { opacity: 0 },
    enter: { opacity: 0.85, transition: { duration: 5, delay: 0.9 } },
  };

  const slideUpVariants: Variants = {
    initial: { y: 0 },
    exit: {
      y: '-100vh',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  useEffect(() => {
    const updateDimensions = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimensions();
    setShowContent(true);

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 2, ease: 'none' } });

    tl.to('#scrambleText', {
      duration: 2,
      scrambleText: {
        text: 'Animate the scrambling of text.',
        chars: 'lowerCase',
        speed: 0.3,
        revealDelay: 0.8,
        tweenLength: false,
      },
    });
  }, [showContent]);

  if (!showContent) {
    return null;
  }

  const initialPath: string = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath: string = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curveVariants: Variants = {
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
      variants={slideUpVariants}
      initial="initial"
      exit="exit"
      className={styles.introduction}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'flex-start', // Align to the right
        alignItems: 'center',
        backgroundColor: '#141516',
        paddingRight: '20px', // Add padding to the right
      }}
      onAnimationComplete={(definition) => {
        if (definition === 'exit') {
          console.log('Exit animation completed');
        }
      }}
      layout
    >
      <motion.p
        variants={opacityVariants}
        initial="initial"
        animate="enter"
        className={styles.preloaderText}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <span id="scrambleText" className={styles.scrambleText}>
          xxx33
        </span>
      </motion.p>
      <svg
        width={dimension.width}
        height={dimension.height}
        style={{ position: 'absolute', top: 0, left: 0 }}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <motion.path
          variants={curveVariants}
          initial="initial"
          animate="initial"
          exit="exit"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  );
};

export default Preloader;
