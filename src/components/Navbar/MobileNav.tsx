'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function MobileNav() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Mobile menu button (hamburger) - shown below lg breakpoint */}
      <div className="flex items-center justify-end h-[var(--navbar-height)] px-4 lg:hidden">
        <button onClick={() => setToggle(true)} className="cursor-pointer">
          {/* Hamburger Icon (inline SVG) */}
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            className="w-8 h-8 text-mainbody-weg"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 9h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            key="mobile-nav"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.3, 0.86, 0.36, 0.95] }}
            className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-hero-dark flex flex-col"
          >
            {/* Menu header with close button */}
            <div className="flex items-center justify-end h-[var(--navbar-height)] px-4 border-b border-[#f1f1f155]">
              <button
                onClick={() => setToggle(false)}
                className="cursor-pointer"
              >
                {/* Close Icon (inline SVG) */}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-mainbody-weg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile links */}
            <ul className="flex flex-col gap-6 mt-8 ml-4 text-mainbody-weg text-2xl">
              <li>
                <Link href="/section" onClick={() => setToggle(false)}>
                  Section
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setToggle(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/Ref" onClick={() => setToggle(false)}>
                  Hello
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
