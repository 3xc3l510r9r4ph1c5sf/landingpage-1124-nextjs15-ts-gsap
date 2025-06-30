'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Content animation
      gsap.from(contentRef.current?.children || [], {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      // Stats counter animation
      gsap.from('.stat-number', {
        textContent: 0,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 bg-charcoal text-bone relative overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 texture-overlay opacity-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="futura-black text-display text-center mb-20"
        >
          About Excelsior
        </h2>

        <div ref={contentRef} className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-heading text-soft-gold futura-bold">
              We believe in the power of purposeful design.
            </p>
            
            <p className="text-body leading-relaxed">
              Founded on the principles of architectural minimalism, Excelsior Graphic Design 
              creates visual experiences that transcend the ordinary. Our approach combines 
              strategic thinking with aesthetic excellence, delivering solutions that are both 
              beautiful and functional.
            </p>

            <p className="text-body leading-relaxed">
              Every project is an opportunity to push boundaries, challenge conventions, 
              and create something extraordinary. We work with forward-thinking brands 
              who share our passion for innovation and excellence.
            </p>

            <div className="flex space-x-8 pt-8">
              <button className="glass-button futura-bold magnetic-btn">
                Our Process
              </button>
              <button className="glass-button futura-bold magnetic-btn bg-soft-gold text-charcoal">
                Get in Touch
              </button>
            </div>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 gap-8">
            <div className="text-center p-8 glass-card">
              <div className="stat-number futura-black text-6xl text-soft-gold mb-4">150</div>
              <p className="text-body">Projects Completed</p>
            </div>
            
            <div className="text-center p-8 glass-card">
              <div className="stat-number futura-black text-6xl text-soft-gold mb-4">50</div>
              <p className="text-body">Happy Clients</p>
            </div>
            
            <div className="text-center p-8 glass-card">
              <div className="stat-number futura-black text-6xl text-soft-gold mb-4">8</div>
              <p className="text-body">Years Experience</p>
            </div>
            
            <div className="text-center p-8 glass-card">
              <div className="stat-number futura-black text-6xl text-soft-gold mb-4">25</div>
              <p className="text-body">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;