// src/components/context/AppContext.tsx
'use client';

import { animate, useAnimationControls } from 'motion/react';
import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { useScramble } from 'use-scramble';
import useMedia from '../hooks/useMedia';

// Define the context type
interface AppContextType {
  scrambleRef: React.RefObject<HTMLParagraphElement>;
  label: React.RefObject<HTMLParagraphElement>;
  scrollButton: React.RefObject<HTMLButtonElement>;
  startSecondaryHeadingScramble: boolean;
  heroIconControl: ReturnType<typeof useAnimationControls>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const isWide = useMedia('(min-width: 390px)');

  // Controls for the Hero Icon animation
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

              // 2. Show the hero icon
              await heroIconControl.start('visible');

              // 3. Trigger the next scramble
              setStartSecondaryHeadingScramble(true);

              // 4. Reveal label & scroll button if they exist
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
            },
          }
        );
      };

      // If the page is already loaded, run immediately
      if (document.readyState === 'complete') {
        handlePageLoad();
      } else {
        // Otherwise, wait for window 'load'
        window.addEventListener('load', handlePageLoad);
      }

      // Cleanup the event listener if unmounted
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
