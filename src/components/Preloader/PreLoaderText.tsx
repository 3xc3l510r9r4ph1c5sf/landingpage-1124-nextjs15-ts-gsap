'use client';
import { useAppContext } from '@/components/context/AppContext';

const PreLoaderText = () => {
  const { scrambleRef } = useAppContext();

  return (
    <div className="px-12 h-12 ">
      <h2 className="section-heading w-96 md:w-auto" ref={scrambleRef} />
    </div>
  );
};
export default PreLoaderText;
