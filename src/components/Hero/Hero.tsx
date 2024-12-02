// src/components/Hero/Hero.tsx

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ochiside from '../../../public/ochi-side.jpg';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section
      className={styles.heroSection}
      data-scroll
      data-scroll-speed="-0.3"
    >
      <div className={styles.heroContainer}>
        <div />
        <div className={styles.heroContent}>
          <div className={styles.heroTop}>
            <div>
              <h1 className={styles.heading}>
                we create <br />
                <div className={styles.headingInner}>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: 'auto' }}
                    transition={{
                      ease: [0.86, 0, 0.07, 0.995],
                      duration: 1,
                      delay: 1.5,
                    }}
                    className={styles.motionSpan}
                  >
                    <Image
                      width={120}
                      height={50}
                      src={ochiside}
                      alt="Ochi Side Image"
                      className={styles.ochisideImage}
                    />
                  </motion.span>
                  <h1 className={styles.heading}>eye-opening</h1>
                </div>
                presentation
              </h1>
            </div>
          </div>
          <div className={styles.heroBottom}>
            <div className={styles.bottomContent}>
              <div className={styles.bottomLeft}>
                <p className="paragraph">For public and private companies</p>
              </div>
              <div className={styles.bottomRight}>
                <div>
                  <p className="paragraph">From the first pitch to IPO</p>
                </div>
              </div>
            </div>
            <div className={styles.scrollDown}>
              <motion.p
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: '100%', opacity: 0.5 }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: [0.3, 0.86, 0.36, 0.95],
                }}
                className="scrollText paragraph"
              >
                scroll down
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
