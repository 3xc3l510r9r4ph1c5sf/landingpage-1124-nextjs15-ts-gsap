// src/app/projects/ProjectLayout.tsx

import Image from 'next/image';
import {
  projectData,
  ProjectData,
} from '@/components/sections/works/projectData';
import RelatedProjectsSection from '@/app/projects/RelatedProjectsSection';
import { ReactNode } from 'react';
import CodaDoc from '@/components/Coda/CodaDoc'; // Import the new CodaDoc component

interface ProjectLayoutProps {
  slug: string;
  children: ReactNode;
}

// (Helper function getNextProjects remains unchanged)

function getNextProjects(
  allProjects: ProjectData[],
  currentSlug: string
): ProjectData[] {
  const total = allProjects.length;
  if (total < 2) return [];
  const currentIndex = allProjects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) {
    return allProjects.slice(0, 3);
  }
  const results: ProjectData[] = [];
  for (let i = 1; i < total; i++) {
    const nextIndex = (currentIndex + i) % total;
    const candidate = allProjects[nextIndex];
    if (candidate.slug !== currentSlug) {
      results.push(candidate);
      if (results.length === 3) break;
    }
  }
  return results;
}

export default function ProjectLayout({ slug, children }: ProjectLayoutProps) {
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex items-center justify-center h-screen">
        <h1 className="text-2xl">Project Not Found</h1>
      </main>
    );
  }

  const relatedProjects = getNextProjects(projectData, slug);

  return (
    <main className="bg-mainbody-weg text-hero-dark">
      {/* 1. HERO / PROJECT OVERVIEW */}
      <section
        className="
          px-[10px] md:px-[20px] lg:px-[73px]
          py-20
          md:grid md:grid-cols-2 md:gap-6
          bg-hero-dark text-mainbody-weg
        "
      >
        <div
          className="
            relative
            h-[30.3125rem]
            md:sticky md:top-[3.75rem]
            lg:w-[clamp(19rem,6.49rem+26.87vw,30rem)]
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
      </section>

      {/* 2. Unique project content */}
      {children}

      {/* 3. Insert the Coda doc content (read-only case study text) */}
      <CodaDoc />

      {/* 4. Related projects section */}
      <RelatedProjectsSection relatedProjects={relatedProjects} />
    </main>
  );
}
