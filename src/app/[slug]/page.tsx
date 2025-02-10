// src/app/[slug]/page.tsx

import { use } from 'react';
import Image from 'next/image';
import { projectData } from '@/components/sections/works/projectData';
import RelatedProjectsSection from '@/components/projects/RelatedProjectsSection'; // existing related projects component
import { getRandomItems } from '@/utils/randomSelection';

// Import all content components
import {
  TrainspotContent,
  // KurskonfiguratorContent,
  // DesignSystemContent,
  // kursplannungContent,
} from '@/components/projects';

type SlugPromise = Promise<{ slug: string }>;

export default function ProjectPage({ params }: { params: SlugPromise }) {
  const { slug } = use(params);
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-2xl">Project Not Found</h1>
      </main>
    );
  }

  // Prepare related projects
  const filteredProjects = projectData.filter((p) => p.slug !== slug);
  const relatedProjects = getRandomItems(filteredProjects, 3);

  // Mapping slugs to their respective content components
  const contentComponents: { [key: string]: React.ReactNode } = {
    trainspot: <TrainspotContent />,
    // kurskonfigurator: <KurskonfiguratorContent />,
    // designsystem: <DesignSystemContent />,
    // kursplannung: <kursplannungContent />,
  };

  // Get the corresponding content component based on the slug
  const ProjectContent = contentComponents[slug] || (
    <section className="max-w-[84.2rem] px-[0.63rem] pt-20 md:pl-[1.25rem] md:pr-[4.437rem] md:pt-[7.12rem] lg:mb-[200px] lg:p-[10rem_1.25rem_0rem_4.5625rem]">
      <h2 className="display-heading mb-8">Content Coming Soon</h2>
      <p className="text-medium">
        We are working on adding more detailed content for this project. Stay
        tuned!
      </p>
    </section>
  );

  return (
    <main className="bg-mainbody-weg text-hero-dark">
      {/* 1. HERO / PROJECT OVERVIEW SECTION */}
      <section
        className="
          p-[5rem_0.625rem_0.625rem_0.625rem] 
          sm:p-[4rem_0.5rem] 
          md:grid md:grid-cols-2 md:gap-[1.578rem] 
          md:p-[7.125rem_1.25rem_0.625rem_1.25rem] 
          md:pl-[clamp(0.4453125rem,_-10.4222rem_+_23.3397vw,_10rem)]
          bg-hero-dark text-mainbody-weg
        "
      >
        <div className="flex flex-col gap-[2.5rem] pt-12 md:pt-0 lg:mb-[500px]">
          <h2 className="display-heading">
            {project.title} <br />
            Case Study
          </h2>
          <p className="text-medium">
            <strong>Project Name:</strong> {project.title} <br />
            <strong>Client:</strong> {project.companyName} <br />
            <strong>Sector:</strong> {project.sector}
          </p>
          <p className="text-medium">
            <strong>Timeframe:</strong> {project.date} <br />
            <strong>My Role:</strong> {project.myRole}
          </p>
          <div className="flex flex-wrap gap-4 items-start">
            {project.gallery?.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${project.title} gallery image ${index + 1}`}
                className="h-[60px] w-auto"
              />
            ))}
          </div>
        </div>
        <div
          className="
            relative 
            h-[30.3125rem] 
            w-full 
            md:sticky md:top-[3.75rem] 
            md:w-11/12 
            lg:w-[clamp(19rem,6.4885rem+26.8702vw,30rem)]
          "
        >
          <Image
            src="/project1-hero.png"
            alt="Project Hero"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 2. CONTENT SECTIONS (Project-specific content) */}
      {ProjectContent}

      {/* 7. OTHER PROJECTS YOU MIGHT LIKE (Cards) */}
      <RelatedProjectsSection relatedProjects={relatedProjects} />
    </main>
  );
}
