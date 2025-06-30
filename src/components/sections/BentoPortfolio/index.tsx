'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BentoCard from './BentoCard';

gsap.registerPlugin(ScrollTrigger);

const portfolioItems = [
  {
    id: 1,
    title: 'Architectural Branding',
    category: 'Identity Design',
    image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg',
    size: 'large',
    description: 'Minimalist identity system for luxury architecture firm',
    color: 'bg-charcoal',
    textColor: 'text-bone',
  },
  {
    id: 2,
    title: 'Luxury Packaging',
    category: 'Package Design',
    image: 'https://images.pexels.com/photos/1337477/pexels-photo-1337477.jpeg',
    size: 'medium',
    description: 'Premium packaging for artisanal products',
    color: 'bg-soft-gold',
    textColor: 'text-charcoal',
  },
  {
    id: 3,
    title: 'Editorial Layout',
    category: 'Print Design',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    size: 'small',
    description: 'Contemporary magazine design',
    color: 'bg-warm-gray',
    textColor: 'text-bone',
  },
  {
    id: 4,
    title: 'Digital Experience',
    category: 'Web Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    size: 'wide',
    description: 'Immersive digital platform',
    color: 'bg-bronze',
    textColor: 'text-bone',
  },
  {
    id: 5,
    title: 'Brand Strategy',
    category: 'Consulting',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    size: 'small',
    description: 'Strategic brand positioning',
    color: 'bg-bone',
    textColor: 'text-charcoal',
  },
  {
    id: 6,
    title: 'Art Direction',
    category: 'Creative Direction',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
    size: 'medium',
    description: 'Visual storytelling campaign',
    color: 'bg-charcoal',
    textColor: 'text-soft-gold',
  },
  {
    id: 7,
    title: 'Typography System',
    category: 'Type Design',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    size: 'wide',
    description: 'Custom typeface development',
    color: 'bg-soft-gold',
    textColor: 'text-charcoal',
  },
  {
    id: 8,
    title: 'Motion Graphics',
    category: 'Animation',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
    size: 'small',
    description: 'Dynamic visual narratives',
    color: 'bg-bronze',
    textColor: 'text-bone',
  },
];

const BentoPortfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Staggered card animations
      gsap.from('.bento-card', {
        y: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: {
          amount: 1.5,
          from: 'random',
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse',
        },
      });

      // Parallax effect for cards
      gsap.utils.toArray('.bento-card').forEach((card: any) => {
        gsap.to(card, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-32 px-6 bg-bone relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-soft-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-bronze rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="futura-black text-display text-center text-charcoal mb-20"
        >
          Selected Works
        </h2>

        <div ref={gridRef} className="bento-grid">
          {portfolioItems.map((item, index) => (
            <BentoCard
              key={item.id}
              item={item}
              index={index}
              className="bento-card"
            />
          ))}
        </div>

        {/* Easter egg trigger */}
        <div className="text-center mt-20">
          <button
            onClick={() => {
              // Easter egg: Chaotic mode
              gsap.to('.bento-card', {
                rotation: () => gsap.utils.random(-15, 15),
                scale: () => gsap.utils.random(0.8, 1.2),
                x: () => gsap.utils.random(-50, 50),
                y: () => gsap.utils.random(-50, 50),
                duration: 2,
                ease: 'elastic.out(1, 0.3)',
                stagger: 0.1,
              });
              
              setTimeout(() => {
                gsap.to('.bento-card', {
                  rotation: 0,
                  scale: 1,
                  x: 0,
                  y: 0,
                  duration: 1.5,
                  ease: 'power3.out',
                  stagger: 0.1,
                });
              }, 3000);
            }}
            className="glass-button text-caption text-warm-gray opacity-50 hover:opacity-100 transition-opacity"
          >
            ◆ Experimental Mode ◆
          </button>
        </div>
      </div>
    </section>
  );
};

export default BentoPortfolio;