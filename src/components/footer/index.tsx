'use client';
import { useInView } from 'motion/react';
import HeroArrow from '../sections/Hero/heroArrow';
import { useEffect, useRef } from 'react';

const Footer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView && ref.current) {
      const navbar = document.querySelector('nav');
      if (navbar) {
        navbar.style.zIndex = '-999';
      }
    }
  }, [inView]);

  return (
    <footer className="-z-2 relative -mt-[100vh] h-[200vh]" ref={ref}>
      <div className="sticky top-0 flex h-svh flex-col bg-hero-dark p-[1.875rem_0_0_4.4375rem] text-mainbody-weg [clip-path:_inset(0_0_0_0)]">
        <h2 className="main-heading flex items-center space-x-2">
          <HeroArrow />
          <span>Let’s talk</span>
        </h2>
        <div className="mt-auto space-y-2 p-[2.1875rem_0rem_1.25rem_0rem] mb-[15px] lg:mb-[30px] not-italic">
          <p className="card-paragraph">Berlin, Germany</p>
          <p className="card-paragraph">
            Phone: (+49) 17627744274 <br />
            <a
              href="https://linkedin.com/in/harold-cano-cardenas-3a77a92b3"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              LinkedIn
            </a>
            ,{' '}
            <a
              href="https://www.xing.com/profile/Harold_Cano"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              Xing
            </a>
          </p>
          <p className="card-paragraph">
            <a
              href="mailto:hcanocardenas@gmail.com"
              className="font-bold hover:underline"
            >
              hcanocardenas@gmail.com
            </a>
          </p>

          {/* Empty paragraph spacer for one line of space */}
          <p className="card-paragraph">&nbsp;</p>

          <p className="card-paragraph">
            The project source code is freely available on{' '}
            <a
              href="https://github.com/Kano85/landingpage-1124-nextjs15-ts-gsap"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              GitHub
            </a>
            .
          </p>
          <p className="card-paragraph">
            Feel free to visit my{' '}
            <a
              href="https://github.com/Kano85"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              GitHub profile
            </a>{' '}
            to discover more projects.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
