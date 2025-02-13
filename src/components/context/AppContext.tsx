// src/components/context/AppContext.tsx
'use client';

import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { animate, useAnimationControls } from 'motion/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useScramble } from 'use-scramble';
import useMedia from '../hooks/useMedia';
import { navItems } from '@/config/navItems';

// Register the ScrollToPlugin once:
gsap.registerPlugin(ScrollToPlugin);

// Define the context type including the missing properties:
interface AppContextType {
  scrambleRef: React.RefObject<HTMLElement>;
  label: React.RefObject<HTMLParagraphElement>;
  scrollButton: React.RefObject<HTMLButtonElement>;
  heroIconControl: ReturnType<typeof useAnimationControls>;
  startSecondaryHeadingScramble: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const isWide = useMedia('(min-width: 390px)');
  const heroIconControl = useAnimationControls();

  // On mount, reset scroll & lock body scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('lock-scroll');
  }, []);

  // Manages whether secondary heading scramble should start
  const [startSecondaryHeadingScramble, setStartSecondaryHeadingScramble] =
    useState(false);

  // Scramble references
  const { ref: label, replay: replayLabel } = useScramble({
    text: 'DE | EN | ES | CAT | JS',
    playOnMount: false,
  });
  const { ref: scrollButton, replay: replayScrollButton } = useScramble({
    text: '(This Way ↓)',
    playOnMount: false,
  });

  // Main Hero text scramble
  const { ref: scrambleRef } = useScramble({
    text: !isWide
      ? 'The way you say it,<br/> is everything'
      : 'The way you say it, is everything',

    onAnimationEnd() {
      const handlePageLoad = () => {
        animate(
          '#preloader',
          { clipPath: 'inset(100% 0 0 0)' },
          {
            delay: 2,
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
            async onComplete() {
              // 1. Hide the preloader if it exists
              const preloader = document.getElementById('preloader');
              if (preloader) {
                preloader.style.display = 'none';
              }

              // 2. Show the hero icon (assuming you have a variant with 'visible')
              await heroIconControl.start('visible');

              // 3. Trigger next scramble
              setStartSecondaryHeadingScramble(true);

              // 4. Reveal label & scroll button
              if (label.current) {
                label.current.classList.remove('invisible');
                replayLabel();
              }
              if (scrollButton.current) {
                scrollButton.current.classList.remove('invisible');
                replayScrollButton();
              }

              // 5. Unlock body scroll
              document.body.classList.remove('lock-scroll');
              document.body.classList.remove('overflow-y-clip');

              // 6. NOW do the offset scrolling if there's a hash:
              const hash = window.location.hash; // "#hero", "#projects", "#contact", etc.
              if (hash) {
                const navItem = navItems.find((item) =>
                  item.href.endsWith(hash)
                );
                const offset = navItem?.offset ?? 0;

                console.log('Scrolling to', hash, 'with offset', offset);

                gsap.to(window, {
                  duration: 1.5,
                  scrollTo: {
                    y: hash,
                    offsetY: offset,
                    autoKill: false,
                  },
                  ease: 'power2.out',
                });
              }
            },
          }
        );
      };

      if (document.readyState === 'complete') {
        handlePageLoad();
      } else {
        window.addEventListener('load', handlePageLoad);
      }

      return () => {
        window.removeEventListener('load', handlePageLoad);
      };
    },
  });

  return (
    <AppContext.Provider
      value={{
        scrambleRef,
        label,
        scrollButton,
        heroIconControl,
        startSecondaryHeadingScramble,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
