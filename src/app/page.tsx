// app/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { AnimatePresence } from 'framer-motion';

import Preloader from '../components/preloader';
import Description from '../components/description';
// Import other components if needed

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      // Optionally, you can perform additional actions here
    }, 3000); // 2-second delay

    // Cleanup the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <main className={styles.main}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isLoading && (
        <>
          {/* Uncomment and include other components as needed */}
          {/* <Landing /> */}
          <Description />
        </>
      )}
    </main>
  );
};

export default Home;
