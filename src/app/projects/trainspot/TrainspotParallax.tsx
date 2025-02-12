'use client';

import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

/**
 * This parent section is 150vh tall:
 * - You have enough scroll to see the zoom (1%->50%)
 *   and the fade near the end (99%->100%).
 */
export function TrainspotParallax() {
  return (
    <section className="relative w-full" style={{ height: '150vh' }}>
      <ScrollDebugMarks />

      {/* Sticky BG pinned inside THIS section, not the entire viewport */}
      <StickyBackground />

      {/* Parallax-floating images overlay */}
      <ParallaxOverlay />
    </section>
  );
}

/* ---------------------------------------------
   0) SCROLL DEBUG MARKS
--------------------------------------------- */
function ScrollDebugMarks() {
  return (
    <>
      <div
        className="absolute left-0 w-full border-t-2 border-green-500"
        style={{ top: '25%' }}
      >
        <p className="text-green-600">25% SCROLL</p>
      </div>
      <div
        className="absolute left-0 w-full border-t-2 border-red-500"
        style={{ top: '50%' }}
      >
        <p className="text-red-600">50% SCROLL</p>
      </div>
      <div
        className="absolute left-0 w-full border-t-2 border-blue-500"
        style={{ top: '75%' }}
      >
        <p className="text-blue-600">75% SCROLL</p>
      </div>
      <div
        className="absolute left-0 w-full border-t-4 border-yellow-500"
        style={{ top: '100%' }}
      >
        <p className="text-yellow-600">100% SCROLL</p>
      </div>
    </>
  );
}

/* ---------------------------------------------
   1) STICKY BACKGROUND
--------------------------------------------- */
function StickyBackground() {
  // read progress from 0->1 across this container (height=150vh)
  const { scrollYProgress } = useScroll();

  /*
   * ZOOM logic:
   *  [0,   0.01] => '100%'  (no zoom at the very top)
   *  [0.01,0.5 ] => '150%'  (zoom from 100% to 150%)
   *  [0.5, 1   ] => '150%'  (stay at 150%)
   *
   * So effectively the zoom starts at 1% scroll
   * and finishes at 50%.
   */
  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 0.01, 0.5, 1],
    ['100%', '100%', '150%', '150%']
  );

  /*
   * FADE logic:
   *  from 0->0.99 => opacity=1
   *  from 0.99->1 => opacity=0
   * This means user sees the BG fully from top until 99% scroll,
   * then it quickly fades out over the last 1%.
   */
  const opacity = useTransform(scrollYProgress, [0.99, 1], [1, 0]);

  // If you want a mask, define it. Otherwise, keep none for clarity.
  const clipPath = useMotionTemplate`none`;

  return (
    <motion.div
      className="
        sticky
        top-0
        left-0
        w-full
        h-[100vh]   /* pinned for 1 full screen */
        z-0
      "
      style={{
        backgroundImage: 'url("/p1.png")', // your path
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize,
        opacity,
        clipPath,
      }}
    />
  );
}

/* ---------------------------------------------
   2) OVERLAY with PARALLAX IMAGES
--------------------------------------------- */
function ParallaxOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {/* Position content so it's visible after the user starts scrolling */}
      <div className="mx-auto max-w-5xl px-4 pt-[200px]">
        <FloatingImage
          src="/p2.png"
          alt="Parallax image 1"
          start={-200}
          end={200}
          className="w-1/3"
        />
        <FloatingImage
          src="/p3.png"
          alt="Parallax image 2"
          start={200}
          end={-250}
          className="mx-auto w-2/3"
        />
        <FloatingImage
          src="/p4.png"
          alt="Parallax image 3"
          start={-200}
          end={200}
          className="ml-auto w-1/3"
        />
      </div>
    </div>
  );
}

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  start: number;
  end: number;
}

function FloatingImage({
  src,
  alt,
  className,
  start,
  end,
}: FloatingImageProps) {
  const { scrollYProgress } = useScroll();

  // Move from start px -> end px across entire 0->1 range
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  // optional fade near bottom
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  // optional slight scale
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.85]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      style={{ transform, opacity }}
    />
  );
}
