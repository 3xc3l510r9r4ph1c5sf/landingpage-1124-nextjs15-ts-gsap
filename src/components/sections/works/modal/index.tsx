// src/components/sections/works/modal/index.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ModalProjectData {
  id: string;
  title: string;
  date: string;
  companyName: string;
  slug: string;
}

interface ModalProps {
  index: number;
  projectsData: ModalProjectData;
  manageModal: (active: boolean, index: number, x: number, y: number) => void;
}

export default function Modal({
  index,
  projectsData,
  manageModal,
}: ModalProps) {
  const { id, title, date, companyName, slug } = projectsData;

  // Function to handle hover events only on md screens and larger
  const handleHover = (e: React.MouseEvent, active: boolean) => {
    if (window.innerWidth >= 768) {
      // 768px is the default breakpoint for `md` in Tailwind
      manageModal(active, index, e.clientX, e.clientY);
    }
  };

  // Main content for each project row
  const content = (
    <div
      onMouseEnter={(e) => handleHover(e, true)}
      onMouseLeave={(e) => handleHover(e, false)}
      className="
        group cursor-pointer border-t-[3px] 
        transition-colors duration-300 ease-in
        md:hover:bg-hero-dark md:hover:text-white
        w-full px-[10px] pt-[10px] md:px-0 md:pt-0
      "
    >
      <div className="flex flex-row sm:flex-row p-5 justify-between items-center w-full">
        {/* Container for ID and DATE + COMPANY NAME */}
        <div className="flex flex-col gap-[10px] md:flex-row md:items-center md:gap-4 lg:gap-8">
          {/* ID */}
          <h2 className="number section-heading">{id}</h2>

          {/* Container for DATE and COMPANY NAME */}
          <div className="flex flex-col items-start">
            {/* COMPANY NAME with .text-small style */}
            <h3
              className="
                company-name
                text-small
                transition-colors duration-200 ease-out
                md:text-hero-dark md:group-hover:text-mainbody-weg
              "
            >
              {companyName}
            </h3>

            {/* DATE with .subheading class */}
            <h3
              className="
                date subheading
                mt-[4px] md:mt-[4px] lg:mt-[4px]
              "
            >
              {date}
            </h3>
          </div>
        </div>

        {/* Title with arrow icon */}
        <h3
          className="
            name  text-medium 
    md:text-large lg:text-large
            flex justify-end 
            md:inline-flex md:justify-end
          "
        >
          <span className="transition-colors duration-200 ease-out">
            {title}
          </span>
          <img
            src="/arrow-up.svg"
            className="size-[1.63rem] md:size-[2.625rem] md:group-hover:invert"
            alt="arrow icon"
          />
        </h3>
      </div>

      {/* Mobile-only image block */}
      <div className="relative my-[0.63rem] h-72 w-[calc(100%-20px)] mx-[10px] bg-hero-dark p-[1.41rem_3.1rem] md:hidden">
        <div className="relative w-full h-full">
          <Image
            src="/project-1.png"
            alt="Full-width image"
            className="object-cover object-center"
            fill
          />
        </div>
      </div>
    </div>
  );

  // Wrap content in a Link
  return (
    <Link href={`/projects/${slug}`} className="block w-full">
      {content}
    </Link>
  );
}
