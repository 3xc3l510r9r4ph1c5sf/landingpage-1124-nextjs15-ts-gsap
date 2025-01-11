"use client";
import { motion, useSpring } from "motion/react";
import { useRef, MouseEvent, ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";

interface MagneticProps {
  children: ReactNode;
  element?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Magnetic: React.FC<MagneticProps> = ({
  children,
  element: Wrapper = "div",
  className,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const position = {
    x: useSpring(0, { stiffness: 70, damping: 10, mass: 1 }),
    y: useSpring(0, { stiffness: 70, damping: 10, mass: 1 }),
  };

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    position.x.set(x);
    position.y.set(y);
  };

  const handleMouseLeave = () => {
    position.x.set(0);
    position.y.set(0);
  };

  return (
    <motion.div style={{ x: position.x, y: position.y }}>
      <span
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={ref}
        className={twMerge("inline-block", className)}
      >
        {children}
      </span>
    </motion.div>
  );
};

export default Magnetic;
