// src/components/Header/nav/Index.tsx
'use client';

import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from './animation';
import Link from './nav/Link';
import dynamic from 'next/dynamic';

// Dynamically import Curve and Footer to prevent potential SSR issues
const Curve = dynamic(() => import('./nav/Curve'), { ssr: false });
const Footer = dynamic(() => import('./nav/Footer'), { ssr: false });

// Define the props interface
interface IndexProps {
  onNavClick: (value: boolean) => void;
}

// Define the nav items
const navItems = [
  {
    title: 'Work',
    href: '#work',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Contact',
    href: '#contact-me',
  },
];

// Apply the props type to the component
const Index: React.FC<IndexProps> = ({ onNavClick }) => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState<string | null>(
    null
  );

  useEffect(() => {
    setSelectedIndicator(pathname);
  }, [pathname]);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          onClick={() => {
            onNavClick(false);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Link
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
};

export default Index;
