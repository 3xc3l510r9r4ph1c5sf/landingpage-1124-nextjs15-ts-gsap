// src/config/navItems.ts

export interface NavItem {
  id: number;
  label: string;
  href: string; // e.g. "/#hero" or "/#contact"
  type: 'anchor' | 'route';
  /** Optional: custom offset for smooth scroll, if needed */
  offset?: number;
}

export const navItems: NavItem[] = [
  {
    id: 1,
    label: 'Home',
    href: '/#hero',
    type: 'anchor',
    // Adjust this value until the hero content is fully visible.
    offset: 7400,
  },
  {
    id: 2,
    label: 'Projects',
    href: '/#projects',
    type: 'anchor',
    offset: -120,
  },
  {
    id: 3,
    label: 'Contact',
    href: '/#contact',
    type: 'anchor',
    offset: -1200,
  },
];
