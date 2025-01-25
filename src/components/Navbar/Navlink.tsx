// src/components/Navbar/NavLink.tsx

'use client';

import Link from 'next/link';
import { useTransitionRouter } from 'next-transition-router';
import TextHover from './TextHover';

interface NavLinkProps {
  children: string;
  href: string;
  icons?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, icons = false }) => {
  const router = useTransitionRouter();

  return (
    <li className="group relative">
      <div
        className={`relative ${icons ? 'flex items-center justify-center' : ''}`}
      >
        {/* Optional Icon */}
        {icons && (
          <>
            <img src="/podest.svg" className="mr-2 inline-block" alt="Icon" />
          </>
        )}

        {/* Navigation Link with TextHover Animation */}
        <Link
          href={href}
          onClick={() => {
            router.push(href);
          }}
          className="relative z-10"
        >
          <TextHover title1={children} title2={children} />
        </Link>

        {/* Optional Chevron Icon */}
        {icons && (
          <img src="/chevron-down.svg" className="ml-1" alt="Chevron" />
        )}
      </div>
    </li>
  );
};

export default NavLink;
