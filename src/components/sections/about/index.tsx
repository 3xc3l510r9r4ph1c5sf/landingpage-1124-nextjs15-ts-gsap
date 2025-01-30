//src/components/sections/about/index.tsx

'use client';

import { useAppContext } from '@/components/context/AppContext';
import { useEffect, useState } from 'react';
import { useScramble } from 'use-scramble';

const About = () => {
  const { label, scrollButton } = useAppContext();

  return (
    <section>
      <div className="relative flex h-[--about-heading--height] flex-col justify-center pl-[2.29rem] md:pl-[4.38rem] pr-2.5 md:pr-5 lg:pr-5">
        <Heading />
        <div className="mt-[0.62rem] flex justify-between items-center pb-5">
          <p className="text-small invisible" ref={label} />
          <button
            className="text-small invisible"
            ref={scrollButton}
            aria-label="Scroll Down"
          >
            (This Way ↓)
          </button>
        </div>
      </div>
      <div className="pt-[3.12rem] mb-[100px] md:mb-[150px] lg:mb-[400px]">
        <p className="text-large p-[0.63rem] md:p-[1.25rem]">
          As a dedicated UX/UI Designer and Web Developer, I merge creative
          design flair with precise development to offer user-friendly, visually
          appealing solutions.
        </p>
        <p className="text-large mb-[40px] p-[0.63rem] md:p-[1.25rem] lg:mb-[300px]">
          Explore this work to discover how your company can connect with users
          in meaningful and impactful ways.
        </p>
      </div>
    </section>
  );
};

export default About;

const Heading = () => {
  const { startSecondaryHeadingScramble } = useAppContext();
  const [displayText, setDisplayText] = useState('Harold Cano');
  const { ref } = useScramble({
    text: displayText,
  });

  useEffect(() => {
    if (startSecondaryHeadingScramble) {
      // Remove invisible class to show the heading when scrambling starts
      if (ref.current) {
        ref.current.classList.remove('invisible');
      }

      // Array of sentences to cycle through
      const texts = ['Harold Cano', 'UI/UX Design', 'Web Development'];
      let currentIndex = 0; // Start from the first sentence

      const interval = setInterval(() => {
        // Move to the next sentence in the array
        currentIndex = (currentIndex + 1) % texts.length;
        setDisplayText(texts[currentIndex]);
      }, 2800); // Change sentence every 6000ms (6 seconds)

      // Cleanup interval on component unmount or when dependency changes
      return () => clearInterval(interval);
    }
  }, [startSecondaryHeadingScramble, ref]);

  return <h2 className="section-heading invisible" ref={ref} />;
};
