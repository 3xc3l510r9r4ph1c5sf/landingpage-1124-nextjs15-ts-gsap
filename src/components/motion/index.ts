// src/components/motion/index.ts

export const imageAnimation = {
  initial: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};
