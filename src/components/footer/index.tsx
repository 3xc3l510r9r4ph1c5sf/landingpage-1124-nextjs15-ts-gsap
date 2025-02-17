// src/components/footer/index.tsx
'use client';

import { useInView } from 'motion/react';
import HeroArrow from '../common/HeroArrow';
import { useEffect, useRef } from 'react';

interface FooterProps {
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  useEffect(() => {}, [inView]);

  return (
    <footer
      id={id}
      className="relative z-1 -mt-[100vh] h-[200vh] w-full  bg-hero-dark"
      ref={ref}
    >
      <div className="sticky top-0 flex h-svh flex-col text-mainbody-weg ml-[1.88rem] md:ml-[4.38rem] lg:ml-[4.38rem] mr-[0.63rem] md:mr-[1.25rem] lg:mr-[1.25rem] mt-[1.25rem] mb-[1.25rem] [clip-path:_inset(0_0_0_0)]">
        <div className="relative  mt-[2.25rem]">
          <h1 className="display-heading">
            <HeroArrow /> <span>Let’s talk</span>
          </h1>
        </div>
        <div className="mt-auto space-y-4 mb-[15px] lg:mb-[30px] not-italic">
          <p className="text-medium text-left">
            Berlin, Germany <br />
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
            <br />
            <a
              href="mailto:hcanocardenas@gmail.com"
              className="font-bold hover:underline"
            >
              hcanocardenas@gmail.com
            </a>
          </p>
          <p className="text-medium text-left">
            Open source project available in{' '}
            <a
              href="https://github.com/Kano85/landingpage-1124-nextjs15-ts-gsap"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              GitHub
            </a>
            <br />
            Feel free to visit my{' '}
            <a
              href="https://github.com/Kano85"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              Profile
            </a>{' '}
            to discover more
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
