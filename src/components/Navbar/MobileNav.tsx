// src/components/Navbar/MobileNav.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/config/navItems';
import { NavItemLink } from './NavItemLink';

const menuVariants = {
  initial: { y: '-100%' },
  animate: {
    y: 0,
    transition: { duration: 0.7, ease: [0.3, 0.86, 0.36, 0.95] },
  },
  exit: {
    y: '-100%',
    transition: { duration: 0.7, ease: [0.3, 0.86, 0.36, 0.95] },
  },
};

export function MobileNav() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* "Hamburger" button (only visible on small screens) */}
      <div className="lg:hidden h-[var(--navbar-height)] px-4 sticky top-0 z-50 bg-hero-dark backdrop-blur-md flex items-center justify-end">
        <button onClick={() => setToggle(true)} aria-label="Open mobile menu">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            className="w-8 h-8 text-mainbody-weg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Slide-down mobile menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            key="mobile-nav"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-hero-dark flex flex-col"
          >
            {/* Close button */}
            <div className="flex items-center justify-end h-[var(--navbar-height)] px-4 border-b border-gray-200/25">
              <button
                onClick={() => setToggle(false)}
                aria-label="Close mobile menu"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-mainbody-weg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-6 mt-8 ml-4 text-mainbody-weg">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  // close the menu upon clicking any link
                  onClick={() => setToggle(false)}
                >
                  <NavItemLink item={item} />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
