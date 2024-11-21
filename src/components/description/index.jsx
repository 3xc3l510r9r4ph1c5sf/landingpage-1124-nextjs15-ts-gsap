//src/components/description/index.jsx

'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import SlideUpWrapper from '../common/SlideUpWrapper';

gsap.registerPlugin(ScrambleTextPlugin);

const Description = () => {
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
          text: "Specify a set'XO'",
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
  }, []);

  return (
    <SlideUpWrapper className="demo bg-gray-900 text-white p-10 h-[800px]">
      <div id="textblock" className="text-2xl leading-8">
        <div id="scramble"></div>
        <span id="charsCustom" className="block mt-4">
          ffff
        </span>
        <br />
        <span id="charsNumbers" className="block mt-4"></span>
        <br />
        <span id="charsUppercase" className="block mt-4"></span>
        <br />
        <span id="charsLowercase" className="block mt-4"></span>
        <div id="newClass" className="mt-4"></div>
      </div>
    </SlideUpWrapper>
  );
};

export default Description;
