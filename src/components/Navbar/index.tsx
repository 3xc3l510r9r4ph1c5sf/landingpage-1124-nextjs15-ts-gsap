// src/components/Navbar/index.tsx
'use client';

import { useState } from 'react';
import { useScroll, useMotionValueEvent, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import MobileNav from './MobileNav';
import NavLink from './Navlink';
import TextHover from './TextHover';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollToPlugin (ensure this runs on the client)
gsap.registerPlugin(ScrollToPlugin);

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

// Define your nav items. For Home, we use "#hero" so that it points to the hero section.
const navItems = [
  { id: 1, title: 'Home', href: '#hero' },
  { id: 2, title: 'Projects', href: '/#projects' },
  { id: 3, title: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const router = useRouter();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // --- Custom GSAP smooth scroll handler for the Home link ---
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: '#hero', offsetY: 0, autoKill: true },
      ease: 'power2.out',
    });
  };

  // --- Custom GSAP smooth scroll handler for the Contact link ---
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: '#contact', offsetY: -1200, autoKill: true },
      ease: 'power2.out',
    });
  };

  // --- Custom GSAP smooth scroll handler for the Projects link ---
  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: '#projects', offsetY: -120, autoKill: true },
      ease: 'power2.out',
    });
  };

  return (
    <>
      {/* 
        Placeholder Spacer: This div sits in the document flow and has 
        the same height as your nav and the bg-hero-dark color. 
        It ensures that even when the fixed nav slides out, the spacing f the rest component remains
      */}
      {/* <div className="hidden lg:block h-[var(--navbar-height)]"></div> */}

      {/* Desktop Navigation for lg screens */}
      <motion.nav
        variants={navVariants}
        animate={hidden ? 'hidden' : 'visible'}
        className="
          fixed top-0 left-0 z-50 w-full 
          h-[var(--navbar-height)] backdrop-blur-md bg-hero-dark/70 
          px-6 py-4 hidden lg:flex items-center justify-between text-details-white
        "
      >
        <ul className="flex gap-8 ">
          {navItems.map((item) => {
            if (item.href === '/#contact') {
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={handleContactClick}
                    className="group relative inline-block overflow-hidden cursor-pointer z-10 text-lg"
                  >
                    <TextHover titile1={item.title} titile2={item.title} />
                  </a>
                </li>
              );
            } else if (item.href === '/#projects') {
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={handleProjectsClick}
                    className="group relative inline-block overflow-hidden cursor-pointer z-10 text-lg"
                  >
                    <TextHover titile1={item.title} titile2={item.title} />
                  </a>
                </li>
              );
            } else if (item.href === '#hero') {
              // Special handling for Home:
              // If you're already on the home page, trigger a smooth scroll.
              // Otherwise, use NavLink to navigate to home.
              if (pathname === '/') {
                return (
                  <li key={item.id} className="relative">
                    <a
                      href={item.href}
                      onClick={handleHomeClick}
                      className="group relative inline-block overflow-hidden cursor-pointer z-10 text-lg "
                    >
                      <TextHover titile1={item.title} titile2={item.title} />
                    </a>
                  </li>
                );
              } else {
                return (
                  <NavLink key={item.id} href={item.href}>
                    <TextHover titile1={item.title} titile2={item.title} />
                  </NavLink>
                );
              }
            } else {
              // Fallback: use NavLink for any other links.
              return (
                <NavLink key={item.id} href={item.href}>
                  <TextHover titile1={item.title} titile2={item.title} />
                </NavLink>
              );
            }
          })}
        </ul>
      </motion.nav>

      {/* Mobile Navigation for screens smaller than lg */}
      <div className="lg:hidden">
        <MobileNav navItems={navItems} />
      </div>
    </>
  );
}
