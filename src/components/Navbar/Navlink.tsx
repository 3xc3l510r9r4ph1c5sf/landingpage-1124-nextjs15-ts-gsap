// src/components/Navbar/Navlink.tsx
'use client';

import Link from 'next/link';
import { useTransitionRouter } from 'next-transition-router';

interface NavLinkProps {
  children: React.ReactNode; // allow any React node as children
  href: string;
  icons?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ children, href, icons = false }) => {
  const router = useTransitionRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <li className="relative">
      <Link
        href={href}
        onClick={handleClick}
        className="group relative inline-block overflow-hidden cursor-pointer z-10"
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
