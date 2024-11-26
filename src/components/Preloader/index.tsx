// src/components/Preloader/index.tsx

'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react'; // Ensure consistent import
import styles from './style.module.scss';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'; // Adjust the path as necessary
import SlideUp from '../SlideUp'; // Import the SlideUp component

// Register the ScrambleTextPlugin
gsap.registerPlugin(ScrambleTextPlugin);

// Animation configurations
const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 2, delay: 0.2 },
  },
};

const Preloader: React.FC = () => {
  const scrambleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (scrambleRef.current) {
      const tl = gsap.timeline({ defaults: { duration: 2, ease: 'none' } });

      tl.to(scrambleRef.current, {
        duration: 1,
        scrambleText: {
          text: 'Animate',
          chars: 'lowerCase',
          revealDelay: 0.5,
          tweenLength: false,
        },
      }).to(scrambleRef.current, {
        duration: 1,
        scrambleText: {
          text: "Specify'XO'",
          chars: 'XO',
          revealDelay: 1,
          tweenLength: false,
          speed: 0.4,
        },
      });
    }
  }, []);

  return (
    <SlideUp className={styles.introduction}>
      <motion.p variants={opacity} initial="initial" animate="enter">
        <span ref={scrambleRef}></span>
      </motion.p>
    </SlideUp>
  );
};

export default Preloader;
