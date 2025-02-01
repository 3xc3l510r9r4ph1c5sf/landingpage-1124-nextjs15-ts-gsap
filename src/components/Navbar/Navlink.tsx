// src/components/Navbar/Navlink.tsx

'use client';

import Link from 'next/link';
import { useTransitionRouter } from 'next-transition-router';
import TextHover from './TextHover';

interface NavLinkProps {
  children: string;
  href: string; // ensure href is strictly a string
  icons?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, icons = false }) => {
  const router = useTransitionRouter();

  // Dedicated click handler for transition routing (or scroll if needed)
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <li className="relative">
      <Link
        href={href}
        onClick={handleClick}
        // These classes ensure that the hover group is applied only once
        className="group relative inline-block overflow-hidden cursor-pointer z-10"
      >
        <TextHover titile1={children} titile2={children} />
      </Link>
    </li>
  );
};

export default NavLink;
