//src/components/Header/nav/index.tsx

import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

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
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

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
