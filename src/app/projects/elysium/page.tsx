// src/app/projects/trainspot/page.tsx
import ProjectLayout from '@/app/projects/ProjectLayout';
import ParallaxIntro from './ParallaxIntro';
import Image from 'next/image';

export default function TrainspotPage() {
  const challenges = [
    {
      number: '01',
      title: 'Fragmented Learning Landscape:',
      description:
        'Institutions and learners struggled to consolidate multiple courses, resources, and tracking in one place.',
    },
    {
      number: '02',
      title: 'Lack of Seamless Integration:',
      description:
        'Existing systems were siloed, complicating collaboration between educators.',
    },
    {
      number: '03',
      title: 'User Adoption:',
      description:
        'Less tech-savvy educators needed an easy-to-use platform to stay motivated.',
    },
  ];

  return (
    <ProjectLayout slug="trainspot">
      <ParallaxIntro />
      {/* Context & Vision Section */}
      <section className="px-[10px] md:px-[20px] lg:px-[70px] pt-[4rem] md:pt-[6rem] lg:pt-[8rem]">
        <div className="lg:flex lg:gap-[3rem]">
          <h2 className="section-heading mb-8 lg:mb-0">Context & Vision</h2>

          <div className="flex flex-col gap-[1rem] md:gap-[1.5rem] lg:gap-4 text-left">
            <p className="text-medium">
              <strong>Mein Bildungsraum</strong> is a nationwide digital
              learning initiative creating an inclusive environment connecting
              learners, educators, and educational services.
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
              <strong>Trainspot</strong> enhances this ecosystem with
              specialized tools to optimize training pathways for both providers
              and learners.
            </p>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="bg-mainbody-weg px-[10px] md:px-[20px] lg:px-[70px] py-[3rem] md:py-[4rem] lg:py-[6rem]">
        <div className="flex flex-col md:flex-row gap-[1.5rem] md:gap-[2rem] lg:gap-[3rem]">
          <div className="relative w-full max-w-[780px] aspect-video mx-auto">
            <Image
              src="/challenge-placeholder.png"
              alt="Education system challenges"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex-1">
            <h2 className="section-heading mb-8">The Challenge</h2>

            <div className="flex flex-col gap-4">
              {challenges.map((item, index) => (
                <div key={index} className="flex gap-[0.625rem] max-w-[55rem]">
                  <div className="text-medium active-number md text-details-red">
                    <strong>{item.number}</strong>
                  </div>
                  <div className="flex flex-col gap-[0.625rem]">
                    <h3 className="text-medium">
                      <strong>{item.title}</strong>
                    </h3>
                    <p className="text-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Goals Section */}
      <section className="px-[10px] md:px-[20px] lg:px-[70px] pt-[4rem] md:pt-[6rem] lg:pt-[8rem]">
        <h2 className="section-heading mb-8">Project Goals & Objectives</h2>
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
      </section>

      {/* My Role Section */}
      <section className="bg-mainbody-weg px-[10px] md:px-[20px] lg:px-[70px] py-[4rem] md:py-[6rem] lg:py-[8rem]">
        <h2 className="section-heading mb-8">My Role & Responsibilities</h2>
        <p className="text-medium mb-6">
          I led the UX/UI design stream, focusing on empathizing with user needs
          and delivering iterative designs in line with our agile workflow.
          Specifically, I:
        </p>
        <ul className="text-medium list-disc ml-4 space-y-3">
          <li>Defined design objectives (accessibility, clarity, etc.)</li>
          <li>Conducted user interviews for insights</li>
          <li>Led user testing & documented findings</li>
          <li>Collaborated on a cohesive design system for consistency</li>
        </ul>
      </section>

      {/* Final Thoughts Section */}
      <section className="px-[10px] md:px-[20px] lg:px-[70px] py-16 md:py-[5rem] lg:py-[7rem]">
        <h2 className="section-heading mb-8">Final Thoughts & Next Steps</h2>
        <p className="text-medium">
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
