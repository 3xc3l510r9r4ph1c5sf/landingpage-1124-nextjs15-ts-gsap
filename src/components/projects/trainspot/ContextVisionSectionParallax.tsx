'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

//
// A helper component to add a parallax vertical shift to an image.
// It wraps Next.js’s Image in a motion.div and uses useScroll/useTransform
// to move the image between the given start and end values.
//
interface ParallaxImageProps {
  src: string;
  alt: string;
  start?: number;
  end?: number;
  className?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  start = 0,
  end = 0,
  className = '',
}) => {
  // Create a ref for the image container.
  const ref = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this image container.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Map scroll progress (0–1) to a vertical offset.
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative overflow-hidden ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </motion.div>
  );
};

//
// Context & Vision Section: Static text in the foreground with parallax images behind.
//
const ContextVisionSectionParallax: React.FC = () => {
  return (
    <section
      className="relative max-w-[84.2rem] px-[0.63rem] pt-20 
                 md:pl-[1.25rem] md:pr-[4.437rem] md:pt-[7.12rem] 
                 lg:mb-[200px] lg:p-[10rem_1.25rem_0rem_4.5625rem]"
    >
      {/* Foreground text container */}
      <div className="relative z-10 lg:flex lg:gap-[3.75rem]">
        <h2 className="section-heading mb-8 lg:mb-0">Context &amp; Vision</h2>
        <div className="flex flex-col gap-[1.9rem] md:gap-[3.15rem]">
          <p className="text-medium">
            <strong>Mein Bildungsraum</strong> is a nationwide digital learning
            initiative aimed at bridging the gap between education and
            technology. Its mission is to create an inclusive digital learning
            environment that connects learners, educators, and educational
            services—all within one interconnected platform.
          </p>
          <a
            href="https://www.meinbildungsraum.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-medium mb-4"
          >
            Visit Mein Bildungsraum
          </a>
          <p className="text-medium">
            <strong>Trainspot</strong> is a specialized tool within this broader
            initiative. It enhances the digital learning ecosystem by providing
            functionalities that help both education providers and learners
            optimize their training pathways.
          </p>
        </div>
      </div>

      {/* Absolutely positioned parallax images container behind the text */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Adjust the inner container’s positioning as needed */}
        <div className="mx-auto max-w-5xl px-4 pt-8 flex gap-4 justify-center">
          <ParallaxImage
            src="/trainspot1s.svg"
            alt="Trainspot Image 1"
            start={-20}
            end={200}
            className="w-1/3 h-[200px]"
          />
          <ParallaxImage
            src="/trainspot2s.svg"
            alt="Trainspot Image 2"
            start={80}
            end={-100}
            className="w-1/3 h-[200px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContextVisionSectionParallax;
