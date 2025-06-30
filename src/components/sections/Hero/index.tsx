'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.8')
      .from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.5');

      // Parallax effect
      gsap.to('.hero-bg', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text reveal on scroll
      gsap.to(titleRef.current, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bone"
    >
      {/* Background with texture */}
      <div className="hero-bg absolute inset-0 texture-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-bone via-transparent to-warm-gray opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1
          ref={titleRef}
          className="futura-black text-hero text-charcoal mb-8 animate-on-load"
        >
          Excelsior
          <br />
          <span className="text-soft-gold">Graphic Design</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-heading text-warm-gray mb-12 max-w-3xl mx-auto animate-on-load"
        >
          Where architectural minimalism meets luxury design.
          <br />
          We craft exceptional visual experiences that elevate brands.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center animate-on-load">
          <button className="glass-button text-body futura-bold magnetic-btn px-8 py-4">
            View Our Work
          </button>
          <button className="glass-button text-body futura-bold magnetic-btn px-8 py-4 bg-soft-gold text-charcoal">
            Start a Project
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-soft-gold rounded-full animate-float" />
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-bronze rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-warm-gray rounded-full animate-float" style={{ animationDelay: '4s' }} />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-warm-gray rounded-full flex justify-center">
          <div className="w-1 h-3 bg-warm-gray rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;