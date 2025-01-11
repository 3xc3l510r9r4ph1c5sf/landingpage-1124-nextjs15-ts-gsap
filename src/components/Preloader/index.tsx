"use client";
import PreLoaderText from "./PreLoaderText";

const PreLoader = () => {
  return (
    <div
      id="preloader"
      className="fixed left-0 right-0 top-0 z-50 flex h-[calc(100svh-var(--about-heading--height))] items-center bg-mainbody-weg [clip-path:_inset(0_0_0_0);]"
    >
      <PreLoaderText />
    </div>
  );
};

export default PreLoader;
