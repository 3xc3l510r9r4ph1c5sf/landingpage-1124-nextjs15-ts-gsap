'use client';
import PreLoaderText from './PreLoaderText';

const PreLoader = () => {
  return (
    <div
      id="preloader"
      className="fixed left-0 right-0 top-0 z-80 flex h-[calc(100svh-var(--about-heading--height))] items-center bg-mainbody-weg ..."
    >
      <PreLoaderText />
    </div>
  );
};

export default PreLoader;
