// src/app/projects/trainspot/page.tsx

'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import ProjectLayout from '@/app/projects/ProjectLayout';
import { TrainspotParallax } from './TrainspotParallax';

//
// A small helper component for parallax images, if you still need it:
//
interface ParallaxImageProps {
  src: string;
  alt: string;
  start?: number;
  end?: number;
  className?: string;
}

function ParallaxImage({
  src,
  alt,
  start = 0,
  end = 0,
  className = '',
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

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
}

//
// 1. Context & Vision Section
//
function ContextVisionSectionParallax() {
  return (
    <section
      className="relative w-full text-center px-[0.63rem] pt-20 
                 md:pl-[1.25rem] md:pr-[4.437rem] md:pt-[7.12rem] 
                 lg:p-[10rem_1.25rem_0rem_4.5625rem]"
    >
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

      <div className="relative">
        {/* If you want parallax images behind the text */}
        <TrainspotParallax />
      </div>
    </section>
  );
}

//
// 2. TrainspotPage Component – the default export
//    This uses your shared ProjectLayout with slug="trainspot".
//
export default function TrainspotPage() {
  return (
    <ProjectLayout slug="trainspot">
      {/* ———————————————— 
          Everything below is the unique content for Trainspot
          that was previously in "TrainspotContent".
          ———————————————— */}

      <ContextVisionSectionParallax />

      {/* 3. THE CHALLENGE SECTION */}
      <section
        className="
          bg-mainbody-weg 
          p-[5rem_0.625rem_0.625rem_0.625rem] 
          sm:p-[4rem_0.5rem] 
          md:grid md:grid-cols-2 md:gap-[1.578rem] 
          md:p-[7.125rem_1.25rem_0.625rem_1.25rem] 
          md:pl-[clamp(0.4453125rem,_-10.4222rem_+_23.3397vw,_10rem)]
        "
      >
        <div
          className="
            img relative 
            h-[18rem] 
            w-full
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
        <div className="flex flex-col gap-[1.9rem] md:gap-[3.15rem]">
          <h2 className="section-heading">The Challenge</h2>
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

      {/* 4. PROJECT GOALS & OBJECTIVES SECTION */}
      <section className="max-w-[84.2rem] px-[0.63rem] pt-20 md:pl-[1.25rem] md:pr-[4.437rem] md:pt-[7.12rem] lg:mb-[200px] lg:p-[10rem_1.25rem_0rem_4.5625rem]">
        <h2 className="section-heading mb-8">Project Goals &amp; Objectives</h2>
        <div className="flex flex-col gap-[1.9rem] md:gap-[3.15rem]">
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
      </section>

      {/* 5. MY ROLE & RESPONSIBILITIES SECTION */}
      <section
        className="
          bg-mainbody-weg 
          p-[5rem_0.625rem] 
          sm:p-[4rem_0.5rem]
          md:p-[7.125rem_1.25rem]
        "
      >
        <div className="max-w-[84.2rem] mx-auto">
          <h2 className="section-heading mb-8">
            My Role &amp; Responsibilities
          </h2>
          <p className="text-medium mb-6">
            I led the UX/UI design stream, focusing on empathizing with user
            needs and delivering iterative designs in line with our agile
            workflow. Specifically, I:
          </p>
          <ul className="text-medium list-disc ml-4 space-y-3">
            <li>Defined design objectives (accessibility, clarity, etc.).</li>
            <li>Conducted user interviews for insights.</li>
            <li>Led user testing &amp; documented findings.</li>
            <li>Collaborated on a cohesive design system for consistency.</li>
          </ul>
        </div>
      </section>

      {/* 6. CLOSING / NEXT STEPS SECTION */}
      <section className="max-w-[84.2rem] mx-auto px-[0.63rem] py-16 md:px-[1.25rem] lg:p-[10rem_4.5625rem_4rem_4.5625rem]">
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
        <p className="text-medium">
          [Add any final metrics, a roadmap for future features, or reflection
          on lessons learned.]
        </p>
      </section>

      {/* 7. NEW SECTION: Animated Buttons Linking to Figma Mockups */}
      <section className="max-w-[84.2rem] mx-auto px-[0.63rem] py-16 md:px-[1.25rem]">
        <h2 className="section-heading mb-8">Explore More</h2>
        <div className="flex gap-4">
          <motion.a
            href="https://www.figma.com/your-mockup-link-1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Figma Mockup 1
          </motion.a>
          <motion.a
            href="https://www.figma.com/your-mockup-link-2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white py-2 px-4 rounded"
          >
            Figma Mockup 2
          </motion.a>
          <motion.a
            href="https://www.figma.com/your-mockup-link-3"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white py-2 px-4 rounded"
          >
            Figma Mockup 3
          </motion.a>
        </div>
      </section>
    </ProjectLayout>
  );
}
