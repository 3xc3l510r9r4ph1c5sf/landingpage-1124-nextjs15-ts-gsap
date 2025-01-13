import React from 'react';
import { Card } from './card';

const Specialization = () => {
  return (
    <section className="max-w-[84.2rem] px-[0.63rem] pt-20 md:pl-[1.25rem] md:pr-[4.437rem] md:pt-[7.12rem] lg:mb-[200px] lg:p-[10rem_1.25rem_0rem_4.5625rem]">
      <div className="lg:flex lg:gap-[3.75rem]">
        <h2 className="title">Make it Work</h2>
        <div className="flex flex-col gap-[1.9rem] md:gap-[3.15rem]">
          <Card
            number={1}
            heading="Collaboration with Stakeholders and Teams"
            paragraph="I effectively collaborate with management, developers, and stakeholders to align project goals with business objectives, ensuring smooth and efficient project execution."
          />
          <Card
            number={2}
            heading="Web Development Expertise"
            paragraph="Specializing in Vue.js, I build robust and user-friendly web applications, leveraging the latest technologies to provide long-term value to clients."
          />
          <Card
            number={3}
            heading="Design Excellence"
            paragraph="With a college degree and experience in large companies, I create visually appealing and intuitive user interfaces that maintain brand consistency and resonate with target audiences."
          />
          <button className="sm relative self-start before:absolute before:-bottom-1 before:left-0 before:right-0 before:h-[1px] before:w-full before:bg-hero-dark">
            Let's work together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
