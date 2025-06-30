'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: '◆',
    title: 'Brand Identity',
    description: 'Comprehensive visual identity systems that capture your brand essence.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Strategy', 'Brand Architecture'],
  },
  {
    icon: '◇',
    title: 'Digital Design',
    description: 'Cutting-edge digital experiences that engage and convert.',
    features: ['Web Design', 'UI/UX Design', 'Mobile Apps', 'Digital Campaigns'],
  },
  {
    icon: '◈',
    title: 'Print & Packaging',
    description: 'Tactile designs that make lasting impressions.',
    features: ['Package Design', 'Editorial Design', 'Marketing Collateral', 'Environmental Graphics'],
  },
  {
    icon: '◉',
    title: 'Creative Direction',
    description: 'Strategic creative leadership for complex projects.',
    features: ['Art Direction', 'Campaign Strategy', 'Creative Consulting', 'Brand Positioning'],
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

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

      // Services cards animation
      gsap.from('.service-card', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      // Hover animations
      gsap.utils.toArray('.service-card').forEach((card: any) => {
        const icon = card.querySelector('.service-icon');
        const content = card.querySelector('.service-content');
        
        card.addEventListener('mouseenter', () => {
          gsap.to(icon, { scale: 1.2, rotation: 360, duration: 0.5, ease: 'power2.out' });
          gsap.to(content, { y: -10, duration: 0.3, ease: 'power2.out' });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.5, ease: 'power2.out' });
          gsap.to(content, { y: 0, duration: 0.3, ease: 'power2.out' });
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 px-6 bg-bone relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-warm-gray to-transparent opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="futura-black text-display text-center text-charcoal mb-20"
        >
          Our Services
        </h2>

        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card glass-card p-8 text-center group cursor-pointer magnetic-btn"
            >
              <div className="service-icon text-6xl text-soft-gold mb-6 transition-transform duration-300">
                {service.icon}
              </div>
              
              <div className="service-content">
                <h3 className="futura-bold text-heading text-charcoal mb-4">
                  {service.title}
                </h3>
                
                <p className="text-body text-warm-gray mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-caption text-charcoal opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="glass-button futura-bold text-body magnetic-btn px-12 py-4 bg-soft-gold text-charcoal">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;