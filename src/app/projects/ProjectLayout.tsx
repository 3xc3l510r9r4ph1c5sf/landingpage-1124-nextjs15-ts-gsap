// src/app/projects/ProjectLayout.tsx

import Image from 'next/image';
import { projectData } from '@/components/sections/works/projectData';
import RelatedProjectsSection from '@/app/projects/RelatedProjectsSection';
import { getRandomItems } from '@/utils/randomSelection';
import { ReactNode } from 'react';

interface ProjectLayoutProps {
  slug: string;
  children: ReactNode;
}

export default function ProjectLayout({ slug, children }: ProjectLayoutProps) {
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    // fallback if the project was not found
    return (
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-2xl">Project Not Found</h1>
      </main>
    );
  }

  // Get related projects
  const filteredProjects = projectData.filter((p) => p.slug !== slug);
  const relatedProjects = getRandomItems(filteredProjects, 3);

  return (
    <main className="bg-mainbody-weg text-hero-dark">
      {/* 1. HERO / PROJECT OVERVIEW */}
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
            src={project.imageUrl}
            alt="Project Hero"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 2. Children: the unique content (Trainspot sections, etc.) */}
      {children}

      {/* 3. Other Projects (cards) */}
      <RelatedProjectsSection relatedProjects={relatedProjects} />
    </main>
  );
}
