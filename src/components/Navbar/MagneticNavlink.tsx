'use client'
import Link from "next/link";
import Magnetic from "../common/Magnetic";
import { useTransitionRouter } from "next-transition-router";

const MagneticNavLink = ({
  children,
  href,
  icons = false,
}: {
  children: string;
  href: string;
  icons?: boolean;
}) => {
  const router = useTransitionRouter();
  return (
    <li className="group relative">
      <Magnetic className="relative" element="div">
        <div className={`${icons && "flex items-center justify-center"}`}>
          {icons && (
            <img src="podest.svg" className="mr-2 inline-block" alt="" />
          )}
          <Link
            href={href}
            onClick={() => {
              router.push(href);
            }}
          >
            {children}
          </Link>
          {icons && <img src="chevron-down.svg" className="ml-1" alt="" />}

          <div className="absolute -bottom-4 right-1/2 size-2 -translate-y-1/2 scale-0 rounded-full bg-details-white duration-300 group-hover:scale-100" />
        </div>
      </Magnetic>
    </li>
  );
};

export default MagneticNavLink;
