// src/app/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { AnimatePresence } from 'framer-motion'; // Correct import path
import Preloader from '../components/preloader'; // Ensure correct path and casing
import Description from '../components/description'; // Ensure correct path
import Hero from '@/components/Hero/Hero';
import ParallaxContainer from '@/components/ParallaxContainer/ParallaxContainer'; // New component

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2050); // Adjusted duration to match word iterations

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      {!isLoading && (
        <ParallaxContainer>
          <Hero />
          <Description />
        </ParallaxContainer>
      )}
    </main>
  );
};

export default Home;
