"use client";
import { useScroll, useSpring, useTransform } from "motion/react";
import Heading from "../../common/heading/index";
import { useLayoutEffect, useRef, useState } from "react";
import Stacks from "./stacks";

const HorizentalSection = () => {
  const container = useRef<null>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<{
    windowWidth: number;
    width: number;
  }>({
    windowWidth: 0,
    width: 0,
  });
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start", "end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, width.windowWidth - width.width - 40],
  );
  const xSpring = useSpring(x, { duration: 1.2, bounce: 0.03 });
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setWidth({
        width: stackRef.current?.getBoundingClientRect().width || 0,
        windowWidth: window.innerWidth,
      });
    }
  }, []);

  return (
    <>
      <section
        className="h-[300svh] overflow-x-clip px-[0.62rem] md:h-[200svh]"
        ref={container}
      >
        <div className="sticky top-0 h-svh pb-[1.88rem]">
          <Heading className="pt-4">
            Enjoy user- <br className="block md:hidden" /> friendly
            <br className="hidden md:block lg:hidden" /> designs
          </Heading>
          <Stacks ref={stackRef} x={xSpring} />

          <button className="xs absolute bottom-[0.64rem] right-[0.64rem] p-4">
            (Keep going ↓ )
          </button>
        </div>
      </section>
    </>
  );
};

export default HorizentalSection;
