//src/components/common/heading/index.tsx

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
const Heading = ({
  className = '',
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h2
      className={twMerge(
        'section-heading flex items-center gap-[5px] md:gap-[10px] lg:gap-[10px] ml-[35px] mr-[10px] md:ml-[50px] md:mr-[20px] lg:ml-[50px] lg:mr-[20px]',
        className
      )}
    >
      <div className="">
        <svg
          className="w-[68px] h-[70px] md:w-[95px] md:h-[98px] lg:w-[110px] lg:h-[130px] text-details-red"
          viewBox="0 0 110 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M61.2912 106L55.0568 99.8466L80.723 74.1804H14.25V65.2741H80.723L55.0568 39.6889L61.2912 33.4545L97.5639 69.7273L61.2912 106Z"
            fill="currentColor" // Use currentColor to inherit the text-details-red class
          />
        </svg>
      </div>
      <span className="block w-full">{children}</span>
    </h2>
  );
};

export default Heading;
