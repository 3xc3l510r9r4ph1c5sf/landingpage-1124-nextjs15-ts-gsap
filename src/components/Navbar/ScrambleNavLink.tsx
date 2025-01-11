"use client";
import { useScramble } from "use-scramble";
import Link from "next/link";
import { useTransitionRouter } from "next-transition-router";

const ScrambleNavLink = ({
  children,
  href,
  icons = false,
}: {
  children: string;
  href: string;
  icons?: boolean;
}) => {
  const router = useTransitionRouter();

  const { ref, replay } = useScramble({
    text: children,
    playOnMount: false,
  });

  return (
    <li className="relative">
      <div className={`${icons && "flex items-center justify-center"}`}>
        {icons && <img src="podest.svg" className="mr-2 inline-block" alt="" />}
        <Link
          href={href}
          onClick={() => {
            router.push(href);
          }}
         
        onMouseOver={replay} 
  onFocus={replay} 
        >
          <span className="invisible">{children}</span>
          <span className="absolute inset-0" ref={ref}></span>
        </Link>
        {icons && <img src="chevron-down.svg" className="ml-1" alt="" />}
      </div>
    </li>
  );
};

export default ScrambleNavLink;
