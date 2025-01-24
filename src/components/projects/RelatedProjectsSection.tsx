// src/components/projects/RelatedProjectsSection.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface RelatedProject {
  slug: string;
  title: string;
  companyName: string;
  date: string;
  imageUrl: string;
}

interface RelatedProjectsSectionProps {
  relatedProjects: RelatedProject[];
}

const RelatedProjectsSection: React.FC<RelatedProjectsSectionProps> = ({
  relatedProjects,
}) => {
  return (
    <section className="w-full bg-hero-dark text-mainbody-weg py-16 px-[0.63rem] sm:px-[4rem_0.5rem] md:px-[1.25rem] lg:px-[10rem_4.5625rem_4rem_4.5625rem]">
      <div className="max-w-[84.2rem] mx-auto">
        {/* Section Heading */}
        <h2 className="main-heading mb-8">Other Projects You Might Like</h2>

        {/* Card Container */}
        <div className="w-full flex flex-wrap gap-6">
          {relatedProjects.map((relatedProject) => (
            <div
              key={relatedProject.slug}
              className="group relative overflow-hidden border-2 border-[#ffffff33] p-4 w-full sm:w-[47%] md:w-[31%] lg:w-[31%] xl:w-[31%]"
            >
              <Link href={`/${relatedProject.slug}`} className="block">
                {/* Image */}
                <div className="overflow-hidden transition-transform transform duration-700 ease-in-out mb-4 relative h-[200px] w-full">
                  <Image
                    src={relatedProject.imageUrl}
                    alt={relatedProject.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* Title / Info */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-mainbody-weg text-lg leading-snug">
                    {relatedProject.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    <strong>Company:</strong> {relatedProject.companyName}
                  </p>
                  <p className="text-gray-500 text-xs">
                    <strong>Date:</strong> {relatedProject.date}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjectsSection;
