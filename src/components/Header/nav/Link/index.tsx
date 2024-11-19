// src/components/Header/nav/Link/index.tsx
'use client';

import styles from './style.module.scss';
import NextLink from 'next/link';
import { motion, Variants } from 'framer-motion';
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

  // Define animation variants
  const linkVariants: Variants = {
    initial: { opacity: 0, x: -20 },
    enter: { opacity: 1, x: 0, transition: { delay: index * 0.1 } },
    exit: { opacity: 0, x: 20 },
  };

  return (
    <motion.div variants={linkVariants}>
      <NextLink
        href={href}
        className={`${styles.link} ${isActive ? styles.active : ''}`}
        onClick={() => setSelectedIndicator(href)}
      >
        {title}
      </NextLink>
    </motion.div>
  );
};

export default AnimatedLink;
