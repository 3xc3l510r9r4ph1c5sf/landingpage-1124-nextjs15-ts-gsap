// src/components/ParallaxIntro.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function ParallaxIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animaciones de imágenes
    const setupParallax = () => {
      if (
        image1Ref.current &&
        image2Ref.current &&
        image3Ref.current &&
        parallaxRef.current
      ) {
        gsap.fromTo(
          image1Ref.current,
          { y: 0 },
          {
            y: 300,
            ease: 'none',
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5,
            },
          }
        );

        gsap.fromTo(
          image2Ref.current,
          { y: 0 },
          {
            y: 600,
            ease: 'none',
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          }
        );

        gsap.fromTo(
          image3Ref.current,
          { y: 0 },
          {
            y: 900,
            ease: 'none',
            scrollTrigger: {
              trigger: parallaxRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }
    };

    // Animación del título
    const setupTitleAnimation = () => {
      if (titleRef.current && sectionRef.current) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 20%',
              end: 'bottom 80%',
              scrub: 1,
              markers: false, // Activar true para debug
            },
          })
          .fromTo(
            titleRef.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1 }
          )
          .to(titleRef.current, { opacity: 0, y: -100, duration: 1 }, '+=0.5');
      }
    };

    setupParallax();
    setupTitleAnimation();

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="bg-black text-white relative">
      {/* Sección Intro */}

      {/* Sección Parallax */}
      <section ref={sectionRef} className="relative min-h-[300vh]">
        {/* Capa de texto */}
        <div className="sticky top-0 h-screen flex items-center justify-center z-[999] pointer-events-none">
          <div
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-center px-4 text-

                    "
          >
            Educational Ecosystem Reinvented
          </div>
        </div>

        {/* Capa de imágenes */}
        <div ref={parallaxRef} className="absolute inset-0 min-h-[300vh] z-0">
          <div
            ref={image1Ref}
            className="absolute top-[15%] left-[5%] w-[300px] h-[400px] overflow-hidden rounded-xl"
          >
            <Image
              src="/projects/trainspot/dashboard-preview.jpg"
              alt="Dashboard"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            ref={image2Ref}
            className="absolute top-[35%] right-[10%] w-[250px] h-[350px] overflow-hidden rounded-xl"
          >
            <Image
              src="/projects/trainspot/collaboration-view.jpg"
              alt="Collaboration"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            ref={image3Ref}
            className="absolute top-[60%] left-[20%] w-[350px] h-[250px] overflow-hidden rounded-xl"
          >
            <Image
              src="/projects/trainspot/progress-tracking.jpg"
              alt="Progress"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Sección de Transición */}
    </div>
  );
}
