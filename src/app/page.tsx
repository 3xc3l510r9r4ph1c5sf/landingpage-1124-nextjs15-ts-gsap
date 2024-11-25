'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { motion } from 'motion/react';
import { AnimatePresence } from 'motion/react';

import Preloader from '../components/preloader';
import Description from '../components/description';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Description />
        </>
      )}
    </main>
  );
};

export default Home;
