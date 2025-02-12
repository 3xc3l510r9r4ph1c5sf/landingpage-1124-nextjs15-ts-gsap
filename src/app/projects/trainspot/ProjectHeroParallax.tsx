//src/app/projects/trainspot/ProjectHeroParallax.tsx

'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

const SECTION_HEIGHT = 100;

export const ProjectHeroParallax = () => {
  return (
    <div
      // Total container height: SECTION_HEIGHT + 100vh.
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full overflow-hidden"
    >
      {/* Center image is now a child of this container */}
      <CenterImage />

      {/* Wrap parallax images in an absolutely positioned container to overlay the center image */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <ParallaxImages />
      </div>

      {/* Gradient overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  // --- Clip-path transform for a dynamic mask ---
  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);
  const clipPath = useMotionTemplate`
    polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)
  `;

  // --- Background Size (zoom effect) ---
  // The background image starts enlarged at 170% and shrinks to 100% as you scroll.
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ['170%', '100%']
  );

  // --- Opacity (fade-out) ---
  // The image remains fully visible until scrollY reaches SECTION_HEIGHT+500,
  // then fades out completely by SECTION_HEIGHT+1000.
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT + 1000, SECTION_HEIGHT + 3000],
    [1, 0]
  );

  return (
    // Use sticky positioning so the CenterImage stays within the container.
    <motion.div
      className="            relative 
            h-[30.3125rem] 
            w-full 
            md:sticky md:top-[3.75rem] 
            md:w-11/12 
            lg:w-[clamp(19rem,6.4885rem+26.8702vw,30rem)]
"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: 'url(/p1.png)', // Replace with your own image path.
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="/p2.png"
        alt="Parallax image 1"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="/p3.png"
        alt="Parallax image 2"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="/p4.png"
        alt="Parallax image 3"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
    </div>
  );
};

type ParallaxImgProps = {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
};

const ParallaxImg = ({ className, alt, src, start, end }: ParallaxImgProps) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
