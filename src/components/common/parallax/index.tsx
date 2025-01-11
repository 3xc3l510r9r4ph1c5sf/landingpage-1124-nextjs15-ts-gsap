"use client";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { ReactNode, useRef } from "react";
import { twMerge } from "tailwind-merge";

const Parallax = ({
  children,
  speed = 5,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.5", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${-10 * speed}%`]);
  // useMotionValueEvent(y, "change", (curr) => {
  //   console.log(curr);
  // });

  return (
    <motion.div
      style={{ y }}
      className={twMerge("relative", className)}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default Parallax;
