// src/app/page.tsx
'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { navItems } from '@/config/navItems';

// your imports like <Hero/>, etc
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/about';
import HorizontalSection from '@/components/sections/horizontalScroll';
import Specialization from '@/components/sections/specialization';
import Works from '@/components/sections/works';
import Process from '@/components/sections/process';
import Purpose from '@/components/sections/purpose';
import Footer from '@/components/footer';

gsap.registerPlugin(ScrollToPlugin);

export default function HomePage() {
  useEffect(() => {
    // If there's a hash on page load, scroll to it
    function scrollToHash() {
      const hash = window.location.hash; // "#hero", "#contact", etc.
      if (!hash) return;

      const navItem = navItems.find((item) => item.href.endsWith(hash));
      const offset = navItem?.offset ?? 0;
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: hash,
          offsetY: offset,
        },
        ease: 'power2.out',
      });
    }

    // Scroll after a small delay
    setTimeout(scrollToHash, 400);

    // Also re-run if the hash changes (optional)
    function handleHashChange() {
      scrollToHash();
    }
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <>
      <Hero />
      <main className="bg-mainbody-weg relative z-20">
        <About />
        <HorizontalSection />
        <Specialization />
        <Works id="projects" />
        <Process />
        <Purpose />
      </main>
      <Footer id="contact" />
    </>
  );
}
