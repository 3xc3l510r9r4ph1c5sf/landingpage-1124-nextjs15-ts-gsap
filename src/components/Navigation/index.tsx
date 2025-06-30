'use client';

import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { label: 'Work', href: '#portfolio', icon: '◆' },
    { label: 'About', href: '#about', icon: '◇' },
    { label: 'Services', href: '#services', icon: '◈' },
    { label: 'Contact', href: '#contact', icon: '◉' },
  ];

  useEffect(() => {
    // Animate navigation on scroll
    gsap.to('.nav-container', {
      backgroundColor: isDarkMode ? 'rgba(26, 26, 26, 0.9)' : 'rgba(250, 249, 246, 0.9)',
      backdropFilter: 'blur(20px)',
      scrollTrigger: {
        trigger: 'body',
        start: 'top -100',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      },
    });
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 80 },
        ease: 'power3.out',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-container fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="futura-black text-2xl text-charcoal">
            <span className="text-soft-gold">E</span>xcelsior
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="group flex items-center space-x-2 glass-button text-sm futura-bold magnetic-btn"
              >
                <span className="text-soft-gold">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="glass-button p-3 magnetic-btn"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden glass-button p-3"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-charcoal transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-charcoal transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-charcoal transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass-card p-6 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-soft-gold hover:bg-opacity-10 transition-colors"
              >
                <span className="text-soft-gold text-xl">{item.icon}</span>
                <span className="futura-bold">{item.label}</span>
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-soft-gold hover:bg-opacity-10 transition-colors"
            >
              <span className="text-xl">{isDarkMode ? '☀️' : '🌙'}</span>
              <span className="futura-bold">Toggle Theme</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;