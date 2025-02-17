//src/components/sections/purpose/index.tsx

import React from 'react';
import HeadingArrow from '../../common/HeadingArrow';

const Purpose: React.FC = () => {
  return (
    <section className="bg-mainbody-weg pb-4">
      <h2
        className="
    section-heading
    ml-[1.88rem] md:ml-[4.38rem] lg:ml-[4.38rem]
    mr-[0.63rem] md:mr-[1.25rem] lg:mr-[1.25rem]
    mb-[1.875rem] lg:mb-[2.5rem]
  "
      >
        <span className="inline-block mr-[1.875rem] md:mr-[2.19rem] lg:mr-[2.19rem]">
          <HeadingArrow />
        </span>
        <span>Let's design with purpose</span>
      </h2>
    </section>
  );
};

export default Purpose;
