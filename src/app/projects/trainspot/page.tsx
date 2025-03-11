// src/app/projects/trainspot/page.tsx

// 'use client';

// import React, { useRef } from 'react';
import Image from 'next/image';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import AnimatedButton from '@/components/common/AnimatedButton';

import ProjectLayout from '@/app/projects/ProjectLayout';
// import { TrainspotParallax } from './TrainspotParallax';

interface ParallaxImageProps {
  src: string;
  alt: string;
  start?: number;
  end?: number;
  className?: string;
  sizes?: string;
}

// function ParallaxImage({
//   src,
//   alt,
//   start = 0,
//   end = 0,
//   className = '',
//   sizes = '(max-width: 768px) 100vw, 50vw',
// }: ParallaxImageProps) {
//   const ref = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'end start'],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [start, end]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ y }}
//       className={`relative overflow-hidden ${className}`}
//     >
//       <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
//     </motion.div>
//   );
// }

/**
 * 1. Context & Vision Section
 */
function ContextVisionSectionParallax() {
  return (
    <section
      className="
        relative 
        w-full 
        text-center 
        px-[10px] md:px-[20px] lg:px-[70px]
        pt-[4rem] md:pt-[6rem] lg:pt-[8rem]
      "
    >
      <div className="relative z-10 lg:flex lg:gap-[3rem]">
        <h2 className="section-heading mb-8 lg:mb-0">Context &amp; Vision</h2>
        <div className="flex flex-col gap-[1rem] md:gap-[1.5rem] lg:gap-4 text-left self-end">
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

      <div className="relative">{/* <TrainspotParallax /> */}</div>
    </section>
  );
}

/**
 * 2. TrainspotPage - Default Export
 */
export default function TrainspotPage() {
  return (
    <ProjectLayout slug="trainspot">
      <ContextVisionSectionParallax />

      {/* 3. The Challenge Section */}
      <section
        className="
          bg-mainbody-weg
          px-[10px] md:px-[20px] lg:px-[70px]
          flex flex-col md:flex-row gap-[1.5rem] md:gap-[2rem] lg:gap-[3rem]
       pt-[3rem] md:pt-[4rem] lg:pt-[6rem]
        "
      >
        <div
          className="
            relative 
            h-[18rem] 
            w-full 
            max-w-[780px] 
            mx-auto 
            mb-8 
            md:mb-0 
            md:h-[25rem] 
            lg:h-[30rem]
          "
        >
          <Image
            src="/challenge-placeholder.png"
            alt="Key Challenges Infographic"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="section-heading mb-8">The Challenge</h2>
          <div className="flex flex-col gap-4">
            {/* Challenge Item 1 */}
            <div className="flex gap-[0.625rem] max-w-[55rem]">
              <div className="text-medium active-number md text-details-red">
                <strong>01</strong>
              </div>
              <div className="flex flex-col gap-[0.625rem]">
                <h3 className="text-medium">
                  <strong>Fragmented Learning Landscape:</strong>
                </h3>
                <p className="text-medium">
                  Institutions and learners struggled to consolidate multiple
                  courses, resources, and tracking in one place.
                </p>
              </div>
            </div>

            {/* Challenge Item 2 */}
            <div className="flex gap-[0.625rem] max-w-[55rem]">
              <div className="text-medium active-number md text-details-red">
                <strong>02</strong>
              </div>
              <div className="flex flex-col gap-[0.625rem]">
                <h3 className="text-medium">
                  <strong>Lack of Seamless Integration:</strong>
                </h3>
                <p className="text-medium">
                  Existing systems were siloed, complicating collaboration
                  between educators.
                </p>
              </div>
            </div>

            {/* Challenge Item 3 */}
            <div className="flex gap-[0.625rem] max-w-[55rem]">
              <div className="text-medium active-number md text-details-red">
                <strong>03</strong>
              </div>
              <div className="flex flex-col gap-[0.625rem]">
                <h3 className="text-medium">
                  <strong>User Adoption:</strong>
                </h3>
                <p className="text-medium">
                  Less tech-savvy educators needed an easy-to-use platform to
                  stay motivated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        4. PROJECT GOALS & OBJECTIVES
        Updated to use consistent horizontal padding 
        and a unified vertical spacing approach
      */}
      <section
        className="
    px-[10px] md:px-[20px] lg:px-[70px]
    pt-[4rem] md:pt-[6rem] lg:pt-[8rem]
  "
      >
        <h2 className="section-heading mb-8">Project Goals &amp; Objectives</h2>
        <div className="flex flex-col gap-4">
          <p className="text-medium">
            <strong>Develop an Inclusive Digital Tool:</strong> Ensure
            educators, learners, and service providers have equal access.
          </p>
          <p className="text-medium">
            <strong>Improve User Experience:</strong> Create an intuitive
            interface for scheduling, content access, and progress tracking.
          </p>
          <p className="text-medium">
            <strong>Seamless Integration:</strong> Sync courses and resources
            with minimal setup.
          </p>
          <p className="text-medium">
            <strong>Foster Collaboration:</strong> Promote communication and
            knowledge-sharing via a unified community space.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          {/* <AnimatedButton
            text="Figma Mockup 1"
            href="https://www.figma.com/your-mockup-link-1"
          /> */}
        </div>
      </section>

      {/*
  5. MY ROLE & RESPONSIBILITIES
  Updated to share the same padding logic and left-aligned content
*/}
      <section
        className="
    bg-mainbody-weg
    px-[10px] md:px-[20px] lg:px-[70px]
    pt-[4rem] md:pt-[6rem] lg:pt-[8rem]
  "
      >
        <h2 className="section-heading mb-8">My Role &amp; Responsibilities</h2>
        <p className="text-medium mb-6">
          I led the UX/UI design stream, focusing on empathizing with user needs
          and delivering iterative designs in line with our agile workflow.
          Specifically, I:
        </p>
        <ul className="text-medium list-disc ml-4 space-y-3">
          <li>Defined design objectives (accessibility, clarity, etc.).</li>
          <li>Conducted user interviews for insights.</li>
          <li>Led user testing &amp; documented findings.</li>
          <li>Collaborated on a cohesive design system for consistency.</li>
        </ul>
      </section>

      {/*
  6. FINAL THOUGHTS & NEXT STEPS
  Same unified spacing approach
*/}
      <section
        className="
    px-[10px] md:px-[20px] lg:px-[70px]
    py-16 md:py-[5rem] lg:py-[7rem]
  "
      >
        <h2 className="section-heading mb-8">
          Final Thoughts &amp; Next Steps
        </h2>
        <p className="text-medium mb-4">
          With Trainspot, we aim to revolutionize digital education by unifying
          learners and educators on one platform. We continue to iterate,
          refining the user journey through frequent feedback and agile
          sprints—building a robust foundation for more seamless, inclusive
          learning experiences.
        </p>
      </section>
    </ProjectLayout>
  );
}
