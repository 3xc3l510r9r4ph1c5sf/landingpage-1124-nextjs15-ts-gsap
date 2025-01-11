"use client";

import {
  animate,
  AnimationControls,
  delay,
  useAnimationControls,
} from "motion/react";
import React, {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useScramble } from "use-scramble";
import useMedia from "../hooks/useMedia";

// Define the context type
interface AppContextType {
  scrambleRef: React.RefObject<HTMLParagraphElement>;
  label: React.RefObject<HTMLParagraphElement>;
  scrollButton: React.RefObject<HTMLButtonElement>;
  heroIconControl: AnimationControls;
  startSecondaryHeadingScramble: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const isWide = useMedia("(min-width: 390px)");

  const heroIconControl = useAnimationControls();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("lock-scroll");
  }, []);
  const [startSecondaryHeadingScramble, setStartSecondaryHeadingScramble] =
    useState<boolean>(false);

  const { ref: label, replay: replayLabel } = useScramble({
    text: "DE | EN | ES | CAT | JS",
    playOnMount: false,
  });
  const { ref: scrollButton, replay: replayScrollButton } = useScramble({
    text: "(This Way ↓)",
    playOnMount: false,
  });

  const { ref: scrambleRef } = useScramble({
    text: !isWide
      ? "The way you say it,<br/> is everything"
      : "The way you say it, is everything",
    onAnimationEnd() {
      const handlePageLoad = () => {
        animate(
          "#preloader",
          {
            clipPath: "inset(100% 0 0 0)",
          },
          {
            delay: 2,
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],

            async onComplete() {
              document.getElementById("preloader")!.style.display = "none";
              await heroIconControl.start("visible");
              setStartSecondaryHeadingScramble(true);
              label.current.classList.remove("invisible");
              replayLabel();
              scrollButton.current.classList.remove("invisible");
              replayScrollButton();
              document.body.classList.remove("lock-scroll");
              document.body.classList.remove("overflow-y-clip");
            },
          },
        );
      };
      if (document.readyState === "complete") {
        handlePageLoad();
      } else {
        window.addEventListener("load", handlePageLoad);
      }
      return () => {
        window.removeEventListener("load", handlePageLoad);
      };
    },
  });

  return (
    <AppContext.Provider
      value={{
        scrambleRef,
        heroIconControl,
        label,
        scrollButton,
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
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
