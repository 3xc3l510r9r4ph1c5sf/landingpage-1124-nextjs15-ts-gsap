// src/components/Navbar/NavItemLink.tsx
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { NavItem } from '@/config/navItems';
import TextHover from './TextHover';

gsap.registerPlugin(ScrollToPlugin);

interface NavItemLinkProps {
  item: NavItem;
}

export const NavItemLink: React.FC<NavItemLinkProps> = ({ item }) => {
  const pathname = usePathname();

  /**
   * Smooth scrolling for anchor links if we are already on '/'.
   */
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const [_, hash] = item.href.split('#'); // "/#hero" => ["", "hero"]
    const target = `#${hash}`;

    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: target,
        offsetY: item.offset ?? 0,
      },
      ease: 'power2.out',
    });
  };

  // 1. If it's an anchor link AND we're ALREADY on "/", do local GSAP scroll:
  if (item.type === 'anchor' && pathname === '/') {
    return (
      <a
        href={item.href}
        onClick={handleSmoothScroll}
        className="group relative inline-block overflow-hidden cursor-pointer z-10 text-lg"
      >
        <TextHover titile1={item.label} titile2={item.label} />
      </a>
    );
  }

  // 2. If it's an anchor link, but we are on SOME OTHER PAGE (e.g. "/projects/…"):
  //    => Force a FULL page reload by using window.location.href
  if (item.type === 'anchor' && pathname !== '/') {
    return (
      <a
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          // Force the browser to reload the entire page:
          window.location.href = item.href;
        }}
        className="group relative inline-block overflow-hidden cursor-pointer z-10 text-lg"
      >
        <TextHover titile1={item.label} titile2={item.label} />
      </a>
    );
  }

  // 3. Otherwise, for normal routes, use Next.js <Link> so it can do a normal client transition
  return (
    <a
      href={item.href}
      className="group relative inline-block overflow-hidden cursor-pointer z-10 text-lg"
    >
      <TextHover titile1={item.label} titile2={item.label} />
    </a>
  );
};
