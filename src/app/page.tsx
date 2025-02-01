// src/app/page.tsx

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/about';
import Footer from '@/components/footer';
import HorizontalSection from '@/components/sections/horizontalScroll';
import Specialization from '@/components/sections/specialization';
import Process from '@/components/sections/process';
import Purpose from '@/components/sections/purpose';
import Works from '@/components/sections/works';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-mainbody-weg relative z-20">
        <About />
        <HorizontalSection />
        <Specialization />
        {/* Add this "id" */}
        <Works id="projects" />
        <Process />
        <Purpose />
      </main>

      {/* If you want the entire footer to be the target, add "id" here */}
      <Footer id="contact" />
    </>
  );
}
