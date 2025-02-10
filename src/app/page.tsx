// src/app/page.tsx

'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { navItems } from '@/config/navItems';

// Import all your sections/components
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
    const hash = window.location.hash; // e.g. "#hero"
    if (hash) {
      setTimeout(() => {
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
      }, 100); // delay of 100ms (adjust as needed)
    }
  }, []);

  return (
    <>
      <Hero />
      <main className="bg-mainbody-weg relative z-20">
        <About />
        <HorizontalSection />
        <Specialization />
        {/* Add an id here so "/#projects" can scroll to this section */}
        <Works id="projects" />
        <Process />
        <Purpose />
      </main>
      {/* Add an id for "/#contact" */}
      <Footer id="contact" />
    </>
  );
}
