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
        'title flex gap-[1.88rem] md:gap-[5.94rem] lg:items-center lg:gap-[7.5rem]',
        className
      )}
    >
      <div className="">
        <img src="arrow.svg" alt="Arrow Icon" className="" />
      </div>
      <span className="block w-full">{children}</span>
    </h2>
  );
};

export default Heading;
