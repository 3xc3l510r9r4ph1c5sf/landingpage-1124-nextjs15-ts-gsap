import Image from "next/image";

const Process = () => {
  return (
    <section className="bg-mainbody-weg p-[5rem_0.625rem_0.625rem_0.625rem] md:grid md:grid-cols-2 md:gap-[1.578rem] md:p-[7.125rem_1.25rem_0.625rem_1.25rem] md:pl-[clamp(0.4453125rem,_-10.4222rem_+_23.3397vw,_10rem)]">
      <div className="img relative h-[30.3125rem] w-full md:sticky md:top-[3.75rem] md:w-[clamp(19rem,6.4885rem+26.8702vw,30rem)]">
        <Image
          fill
          src="/design-process.png"
          alt="design process"
          className="object-cover object-center md:sticky md:top-[3.75rem]"
        />
      </div>
      <div className="flex flex-col gap-[2.5rem] lg:mb-[500px]">
        <h2 className="main-heading pt-12 md:pt-0">
          Explain <br /> better <br /> stories
        </h2>
        <p className="paragraph-2">
          Elevate your projects with a focus on{" "}
          <b>User-Centered Design and the design thinking process.</b> I
          specialize in creating solutions that prioritize user needs and drive
          results.
        </p>
        <p className="paragraph-2">
          <b>Through a agile design process</b> grounded in empathy and
          collaboration, I guide projects from ideation to iteration, ensuring
          each step brings us closer to a solution that truly resonates.{" "}
        </p>
      </div>
    </section>
  );
};

export default Process;
