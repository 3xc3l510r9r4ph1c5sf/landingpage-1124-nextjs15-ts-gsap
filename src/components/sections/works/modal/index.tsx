// src/components/sections/works/modal/index.tsx
'use client';

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

// Only valid if the *parent* component is also 'use client'
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

  // This is the main content for each project row.
  const content = (
    <div
      onMouseEnter={(e) => manageModal(true, index, e.clientX, e.clientY)}
      onMouseLeave={(e) => manageModal(false, index, e.clientX, e.clientY)}
      className="
        group cursor-pointer border-t-[3px] p-[0.63rem]
        transition-colors duration-300 ease-in
        md:hover:bg-hero-dark md:hover:text-white
      "
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        <h2 className="number title md:order-1">{id}</h2>
        <h3 className="name md flex justify-end md:order-3 md:col-span-2 md:inline-flex md:justify-end">
          <span className="transition-colors duration-200 ease-out">
            {title}
          </span>
          <img
            src="arrow-up.svg"
            className="size-[1.63rem] md:size-[2.625rem] md:group-hover:invert"
          />
        </h3>
        <h3 className="date md md:order-2 md:ml-4 md:-translate-x-3/4 md:text-nowrap lg:ml-8">
          {date}
        </h3>
        <h3
          className="
            company-name md col-start-2 row-start-2 text-nowrap
            text-[#9D9B94] transition-colors duration-200 ease-out
            md:order-4 md:ml-4 md:-translate-x-3/4
            md:text-[1.3125rem] md:text-hero-dark md:group-hover:text-mainbody-weg
            lg:ml-8
          "
        >
          {companyName}
        </h3>
      </div>

      {/* Mobile-only image block */}
      <div className="relative my-[0.63rem] h-72 w-full bg-hero-dark p-[1.41rem_3.1rem] md:hidden">
        <div className="relative size-full">
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

  // Wrap the entire “content” in a Link to `/projects/${slug}`
  return (
    <Link href={`/${slug}`} className="block">
      {content}
    </Link>
  );
}
