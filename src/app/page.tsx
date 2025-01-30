//src/app/page.tsx

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/about';
import Footer from '@/components/footer';
import HorizontalSection from '@/components/sections/horizontalScroll';
import Specialization from '@/components/sections/specialization';
import Process from '@/components/sections/process';
import Purpose from '@/components/sections/purpose';
import { Metadata } from 'next';
import Works from '@/components/sections/works';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <main className="bg-mainbody-weg relative z-20">
        <About />
        <HorizontalSection />
        <Specialization />
        <Works />
        <Process />
        <Purpose />
      </main>
      <Footer />
    </>
  );
};

export default Home;
