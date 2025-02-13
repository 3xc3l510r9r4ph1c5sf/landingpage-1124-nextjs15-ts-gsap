// src/app/page.tsx
'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/about';
import HorizontalSection from '@/components/sections/horizontalScroll';
import Specialization from '@/components/sections/specialization';
import Works from '@/components/sections/works';
import Process from '@/components/sections/process';
import Purpose from '@/components/sections/purpose';
import Footer from '@/components/footer';

export default function HomePage() {
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
