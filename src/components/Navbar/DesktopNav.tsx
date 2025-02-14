// src/components/Navbar/DesktopNav.tsx
'use client';

import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { navItems } from '@/config/navItems';
import { NavItemLink } from './NavItemLink';

const navVariants = {
  hidden: {
    y: '-100%',
    transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.76, 0, 0.24, 1], duration: 0.7 },
  },
};

export function DesktopNav() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious();
    if (prev && latest > prev) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.nav
      variants={navVariants}
      animate={hidden ? 'hidden' : 'visible'}
      className="
        fixed top-0 z-50 w-full 
        h-[var(--navbar-height)] backdrop-blur-md bg-hero-dark/70 
        py-4 hidden lg:flex justify-between text-details-white
      "
    >
      <ul className="flex gap-14 text-small ml-[10px] md:ml-[35px] lg:ml-[70px] ">
        {navItems.map((item) => (
          <li key={item.id}>
            {/* Pass extraClassName if you need additional classes */}
            <NavItemLink item={item} extraClassName="" />
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
