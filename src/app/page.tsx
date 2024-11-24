// app/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { AnimatePresence } from 'framer-motion';

import Preloader from '../components/preloader';
import Description from '../components/description';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait" initial={false}>
        {isLoading && <Preloader key="preloader" />}
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
