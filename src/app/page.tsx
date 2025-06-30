'use client';

import Hero from '@/components/sections/Hero';
import BentoPortfolio from '@/components/sections/BentoPortfolio';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Stagger animation for page load
      gsap.from('.animate-on-load', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5,
      });

      // Parallax effect for hero
      gsap.to('.parallax-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-bg',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Hero />
      <BentoPortfolio />
      <About />
      <Services />
      <Contact />
    </>
  );
}