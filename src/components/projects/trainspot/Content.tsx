// src/components/projects/trainspot/Content.tsx

import React from 'react';
import Image from 'next/image';

const TrainspotContent: React.FC = () => {
  return (
    <>
      {/* 2. CONTEXT & VISION SECTION */}
      <section className="max-w-[84.2rem] px-[0.63rem] pt-20 md:pl-[1.25rem] md:pr-[4.437rem] md:pt-[7.12rem] lg:mb-[200px] lg:p-[10rem_1.25rem_0rem_4.5625rem]">
        <div className="lg:flex lg:gap-[3.75rem]">
          <h2 className="main-heading mb-8 lg:mb-0">Context &amp; Vision</h2>
          <div className="flex flex-col gap-[1.9rem] md:gap-[3.15rem]">
            <p className="card-paragraph">
              <strong>Mein Bildungsraum</strong> is a nationwide digital
              learning initiative aimed at bridging the gap between education
              and technology. Its mission is to create an inclusive digital
              learning environment that connects learners, educators, and
              educational services—all within one interconnected platform.
            </p>
            <p className="card-paragraph">
              <b>Trainspot</b> is a specialized tool within this broader
              initiative. It enhances the digital learning ecosystem by
              providing functionalities that help both education providers and
              learners optimize their training pathways.
            </p>
          </div>
        </div>
      </section>

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
            fill
            src="/challenge-placeholder.png"
            alt="Key Challenges Infographic"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-[1.9rem] md:gap-[3.15rem]">
          <h2 className="main-heading">The Challenge</h2>
          <div className="flex flex-col gap-4">
            {/* Example Items */}
            <div className="flex gap-[0.625rem] max-w-[55rem]">
              <div className="active-number md text-details-red">01</div>
              <div className="flex flex-col gap-[0.625rem]">
                <h3 className="md text-balance">
                  <strong>Fragmented Learning Landscape:</strong>
                </h3>
                <p className="card-paragraph">
                  Institutions and learners struggled to consolidate multiple
                  courses, resources, and tracking in one place.
                </p>
              </div>
            </div>

            <div className="flex gap-[0.625rem] max-w-[55rem]">
              <div className="active-number md text-details-red">02</div>
              <div className="flex flex-col gap-[0.625rem]">
                <h3 className="md text-balance">
                  <strong>Lack of Seamless Integration:</strong>
                </h3>
                <p className="card-paragraph">
                  Existing systems were siloed, complicating collaboration
                  between educators.
                </p>
              </div>
            </div>

            <div className="flex gap-[0.625rem] max-w-[55rem]">
              <div className="active-number md text-details-red">03</div>
              <div className="flex flex-col gap-[0.625rem]">
                <h3 className="md text-balance">
                  <strong>User Adoption:</strong>
                </h3>
                <p className="card-paragraph">
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
        <h2 className="main-heading mb-8">Project Goals &amp; Objectives</h2>
        <div className="flex flex-col gap-[1.9rem] md:gap-[3.15rem]">
          <p className="card-paragraph">
            <strong>Develop an Inclusive Digital Tool:</strong> Ensure
            educators, learners, and service providers have equal access.
          </p>
          <p className="card-paragraph">
            <strong>Improve User Experience:</strong> Create an intuitive
            interface for scheduling, content access, and progress tracking.
          </p>
          <p className="card-paragraph">
            <strong>Seamless Integration:</strong> Sync courses and resources
            with minimal setup.
          </p>
          <p className="card-paragraph">
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
          <h2 className="main-heading mb-8">My Role &amp; Responsibilities</h2>
          <p className="card-paragraph mb-6">
            I led the UX/UI design stream, focusing on empathizing with user
            needs and delivering iterative designs in line with our agile
            workflow. Specifically, I:
          </p>
          <ul className="list-disc ml-4 card-paragraph space-y-3">
            <li>Defined design objectives (accessibility, clarity, etc.).</li>
            <li>Conducted user interviews for insights.</li>
            <li>Led user testing &amp; documented findings.</li>
            <li>Collaborated on a cohesive design system for consistency.</li>
          </ul>
        </div>
      </section>

      {/* 6. Closing / Next Steps Section */}
      <section className="max-w-[84.2rem] mx-auto px-[0.63rem] py-16 md:px-[1.25rem] lg:p-[10rem_4.5625rem_4rem_4.5625rem]">
        <h2 className="main-heading mb-8">Final Thoughts &amp; Next Steps</h2>
        <p className="card-paragraph mb-4">
          With Trainspot, we aim to revolutionize digital education by unifying
          learners and educators on one platform. We continue to iterate,
          refining the user journey through frequent feedback and agile
          sprints—building a robust foundation for more seamless, inclusive
          learning experiences.
        </p>
        <p className="card-paragraph">
          [Add any final metrics, a roadmap for future features, or reflection
          on lessons learned.]
        </p>
      </section>
    </>
  );
};

export default TrainspotContent;
