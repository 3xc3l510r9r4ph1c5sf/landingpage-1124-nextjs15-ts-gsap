// src/components/ParallaxContainer/ParallaxContainer.tsx

'use client';

import React, { ReactNode } from 'react';
import styles from './ParallaxContainer.module.scss';

interface ParallaxContainerProps {
  children: ReactNode;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({ children }) => {
  return <div className={styles.parallaxContainer}>{children}</div>;
};

export default ParallaxContainer;
