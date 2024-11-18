// src/components/Header/nav/Link/index.tsx

import styles from './style.module.scss';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { slide, scale } from '../../animation';
import React from 'react';

// Define the shape of the data prop
interface LinkData {
  title: string;
  href: string;
  index: number;
}

// Define the props for the component
interface LinkProps {
  data: LinkData;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

const AnimatedLink: React.FC<LinkProps> = ({
  data,
  isActive,
  setSelectedIndicator,
}) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide as Variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale as Variants}
        animate={isActive ? 'open' : 'closed'}
        className={styles.indicator}
      />
      {/* Using Next.js Link component for client-side navigation */}
      <Link href={href} passHref>
        <a>{title}</a>
      </Link>
    </motion.div>
  );
};

export default AnimatedLink;
