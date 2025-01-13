const Purpose = () => {
  return (
    <section className="p-[5rem_0rem_1.25rem_0rem] md:p-[7.125rem_0rem_2.5rem_0rem] bg-mainbody-weg">
      <div className="flex gap-[1.875rem] px-[0.625rem]">
        <img
          src="arrow.svg"
          alt=""
          className="size-[1.81rem] translate-y-1/4 md:size-10 md:translate-y-0 lg:size-[3.125rem]"
        />
        <p className="title">Let's craft experiences that matter</p>
      </div>
      <div className="flex gap-[1.875rem] px-[0.625rem] lg:mt-[2.5rem] mt-[1.25rem]">
        <img
          src="arrow.svg"
          alt=""
          className="size-[1.81rem] invisible pointer-events-none opacity-0 translate-y-1/4 md:size-10 md:translate-y-0 lg:size-[3.125rem]"
        />
        <p className="title">Let's design with purpose</p>
      </div>
    </section>
  );
};

export default Purpose;
