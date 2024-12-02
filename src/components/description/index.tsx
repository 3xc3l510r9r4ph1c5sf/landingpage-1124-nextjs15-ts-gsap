// src/components/Description/Description.tsx

'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SlideUpWrapper from '../common/SlideUpWrapper'; // Ensure this path is correct
import styles from './Description.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Description: React.FC = () => {
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure code runs only on client

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(descriptionRef.current, { y: 0 });
      return;
    }

    const descriptionElement = descriptionRef.current;
    if (!descriptionElement) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: descriptionElement,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        // markers: true, // Uncomment for debugging
      },
    });

    // Animate Description scrolling 40% faster than Hero
    tl.to(descriptionElement, { y: '-40%', ease: 'none' });

    return () => {
      ScrollTrigger.kill();
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 2, ease: 'none' } });

    tl.to('#scramble', {
      duration: 3,
      scrambleText: {
        text: 'Animate the scrambling of text.',
        chars: 'lowerCase',
        revealDelay: 0.5,
        tweenLength: false,
      },
    })
      .to('#charsCustom', {
        duration: 2,
        scrambleText: {
          text: "Specify a set 'XO'",
          chars: 'XO',
          revealDelay: 1,
          tweenLength: false,
          speed: 0.4,
        },
      })
      .to('#charsNumbers', {
        duration: 4,
        scrambleText: { text: 'or use only numbers,', chars: '0123456789' },
      })
      .to('#charsUppercase', {
        scrambleText: { text: 'UPPERCASE', chars: 'upperCase', speed: 0.3 },
      })
      .to('#charsLowercase', {
        scrambleText: { text: 'or lowercase.', chars: 'lowerCase', speed: 0.3 },
      })
      .to('#newClass', {
        scrambleText: {
          text: 'Even apply a custom class to the text.',
          chars: 'lowerCase',
          speed: 0.3,
          newClass: 'text-orange-500', // Use Tailwind CSS text color class
          revealDelay: 0.5,
          tweenLength: false,
        },
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <SlideUpWrapper className={styles.descriptionWrapper}>
      <div id="textblock" className={styles.textBlock} ref={descriptionRef}>
        <div id="scramble" className={styles.scrambleText}></div>
        <span id="charsCustom" className={styles.block}>
          ffff
        </span>
        <br />
        <span id="charsNumbers" className={styles.block}></span>
        <br />
        <span id="charsUppercase" className={styles.block}></span>
        <br />
        <span id="charsLowercase" className={styles.block}></span>
        <div id="newClass" className={styles.block}></div>
      </div>
    </SlideUpWrapper>
  );
};

export default Description;
