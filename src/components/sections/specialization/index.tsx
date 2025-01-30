import React from 'react';
import { Card } from './card';

const Specialization = () => {
  return (
    <section className="w-full pr-5 pt-20 md:pt-28 lg:pt-40 lg:mb-48">
      <div className="flex flex-col lg:flex-row lg:gap-16 w-full">
        {/* Main Heading */}
        <h2 className="display-heading mb-8 lg:ml-20">Make it Work</h2>
        <div className="flex flex-col gap-8 md:gap-12 w-full">
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
          <button className="relative self-start before:absolute before:-bottom-1 before:left-0 before:right-0 before:h-px before:w-full before:bg-hero-dark">
            Let's work together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
