'use client';

import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  MotionValue,
} from 'framer-motion';

/**
 * The parent section is 150vh tall:
 * - The zoom (from 100% to 150% background size) happens from 1% to 50% of the scroll.
 * - The parallax images now animate over the entire height of the component.
 */
export function TrainspotParallax() {
  // Create a ref so we can measure scroll progress relative to this section.
  const ref = useRef<HTMLDivElement>(null);
  // Use extended offsets so scrollYProgress extends beyond [0, 1]
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-20% start', 'end +20%'],
  });

  return (
    <section
      ref={ref}
      className="relative w-full h-[37.5vh] md:h-[75vh] lg:h-[150vh] overflow-hidden"
    >
      {/* Sticky background with zoom */}
      <StickyBackground scrollYProgress={scrollYProgress} />

      {/* Overlay with parallax images spanning the full height */}
      <ParallaxOverlay scrollYProgress={scrollYProgress} />
    </section>
  );
}

/* ---------------------------------------------
   Props Interface for Components that need scroll progress
--------------------------------------------- */
interface ScrollProps {
  scrollYProgress: MotionValue<number>;
}

/* ---------------------------------------------
   1) STICKY BACKGROUND
--------------------------------------------- */
function StickyBackground({ scrollYProgress }: ScrollProps) {
  // ZOOM logic: start zooming from 1% scroll and finish at 50%
  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 0.01, 0.5, 1],
    ['80%', '80%', '100%', '100%']
  );

  const clipPath = useMotionTemplate`none`;

  return (
    <div className="sticky top-0 left-0 w-full h-full z-30">
      <motion.div
        className="mx-auto w-full lg:max-w-[70vw] h-full"
        style={{
          backgroundImage: 'url("/p1.png")',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize, // animated via scroll
          opacity: 1,
          clipPath,
        }}
      />
    </div>
  );
}

/* ---------------------------------------------
   2) OVERLAY with PARALLAX IMAGES
--------------------------------------------- */
function ParallaxOverlay({ scrollYProgress }: ScrollProps) {
  return (
    // The overlay now takes up the full height of the component.
    <div className="pointer-events-none absolute inset-0 z-40">
      <div className="mx-auto max-w-5xl px-4 h-full">
        {/* You can adjust each image's start/end values and classNames as needed */}
        <FloatingImage
          src="/p2.png"
          alt="Parallax image 1"
          start={200}
          end={800}
          className="w-1/3"
          scrollYProgress={scrollYProgress}
        />
        <FloatingImage
          src="/p3.png"
          alt="Parallax image 2"
          start={500}
          end={-250}
          className="mx-auto w-2/3"
          scrollYProgress={scrollYProgress}
        />
        <FloatingImage
          src="/p4.png"
          alt="Parallax image 3"
          start={-300}
          end={100}
          className="ml-auto w-1/3"
          scrollYProgress={scrollYProgress}
        />
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Props Interface for FloatingImage
--------------------------------------------- */
interface FloatingImageProps extends ScrollProps {
  src: string;
  alt: string;
  className?: string;
  start: number;
  end: number;
}

/* ---------------------------------------------
   3) FLOATING IMAGE COMPONENT
--------------------------------------------- */
function FloatingImage({
  src,
  alt,
  className,
  start,
  end,
  scrollYProgress,
}: FloatingImageProps) {
  // The transform now uses an extended range so that the images animate across the full height.
  const y = useTransform(scrollYProgress, [-0.1, 1.1], [start, end]);

  // Optional scale effect over the same extended range.
  const scale = useTransform(scrollYProgress, [-0.1, 1.1], [1, 0.85]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      style={{ transform }}
    />
  );
}
