//src/components/Navbar/NavItemLink.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Next.js 13-15
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { NavItem } from '@/config/navItems';
import TextHover from './TextHover'; // or wherever you import your fancy text

gsap.registerPlugin(ScrollToPlugin);

interface NavItemLinkProps {
  item: NavItem;
}

export const NavItemLink: React.FC<NavItemLinkProps> = ({ item }) => {
  const pathname = usePathname();

  /**
   * Smooth scrolling handler (GSAP).
   * Splits `"/#hero"` into `["/", "hero"]` so we can scroll to `"#hero"`.
   */
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // e.g. "/#hero" => ["","hero"] if we split on '#'
    const [_, hash] = item.href.split('#');
    const target = `#${hash}`; // => "#hero", "#projects", etc.

    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: target,
        // optional: apply an offset if needed
        offsetY: item.offset ?? 0,
        autoKill: true,
      },
      ease: 'power2.out',
    });
  };

  // 1) If this link is "anchor" type, and we're on '/', do local smooth scroll:
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

  // 2) Otherwise, let Next.js handle route navigation:
  return (
    <Link
      href={item.href}
      className="group relative inline-block overflow-hidden cursor-pointer z-10 text-lg"
    >
      <TextHover titile1={item.label} titile2={item.label} />
    </Link>
  );
};
