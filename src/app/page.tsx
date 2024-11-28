// src/app/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { AnimatePresence } from 'motion/react'; // Ensure consistent import
import Preloader from '../components/preloader'; // Corrected import path and casing
import Description from '../components/Description'; // Adjusted import path if necessary
import Hero from '@/components/Hero/Hero';

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
        <>
          <Hero />
          <Description />
        </>
      )}
    </main>
  );
};

export default Home;
