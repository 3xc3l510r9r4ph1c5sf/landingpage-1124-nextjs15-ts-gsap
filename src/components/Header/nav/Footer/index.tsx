// src/components/Header/nav/Footer/index.tsx
import styles from './style.module.scss';
import React from 'react';

// Define the structure for footer links
interface FooterLink {
  href: string;
  label: string;
}

// Define the footer links data
const footerLinks: FooterLink[] = [
  {
    href: 'https://app.lamento.in',
    label: 'Blog',
  },
  {
    href: 'https://www.instagram.com/akilesh_io',
    label: 'Instagram',
  },
  {
    href: 'https://dribbble.com/Akilesh_io',
    label: 'Dribble',
  },
];

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      {footerLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Footer;
