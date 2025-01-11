import CardWrapper from "./cardWrapper";

const Card4 = () => {
  return (
    <CardWrapper className="py-[3.31rem]">
      <div className="h-[18.88rem] w-[13.87rem] rounded-lg bg-white text-primary filter-custom-drop-shadow">
        <div className="flex items-center justify-between gap-2 p-5">
          <h3 className="text-[0.56rem] font-bold">Cards</h3>
          <button className="inline-flex items-center justify-center gap-1 text-[0.475rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
            >
              <path
                d="M4.125 7.75C4.125 7.84946 4.16451 7.94484 4.23484 8.01517C4.30516 8.08549 4.40054 8.125 4.5 8.125C4.59946 8.125 4.69484 8.08549 4.76516 8.01517C4.83549 7.94484 4.875 7.84946 4.875 7.75V5.125H7.5C7.59946 5.125 7.69484 5.08549 7.76517 5.01516C7.83549 4.94484 7.875 4.84946 7.875 4.75C7.875 4.65054 7.83549 4.55516 7.76517 4.48484C7.69484 4.41451 7.59946 4.375 7.5 4.375H4.875V1.75C4.875 1.65054 4.83549 1.55516 4.76516 1.48483C4.69484 1.41451 4.59946 1.375 4.5 1.375C4.40054 1.375 4.30516 1.41451 4.23484 1.48483C4.16451 1.55516 4.125 1.65054 4.125 1.75V4.375H1.5C1.40054 4.375 1.30516 4.41451 1.23483 4.48484C1.16451 4.55516 1.125 4.65054 1.125 4.75C1.125 4.84946 1.16451 4.94484 1.23483 5.01516C1.30516 5.08549 1.40054 5.125 1.5 5.125H4.125V7.75Z"
                fill="#212B36"
              />
            </svg>
            <span>New</span>
          </button>
        </div>

        <div className="px-3">
          <div className="relative h-[1.69rem] w-full">
            <input
              type="text"
              className="size-full rounded-lg border border-[#919EAB] focus:outline-none"
            />
            <span className="absolute left-[0.53rem] top-1/2 inline-block size-4 -translate-y-1/4 scale-150 bg-search-svg bg-no-repeat" />
            <span className="xl absolute left-[1.54rem] top-1/2 inline-block -translate-y-1/2 text-gray">
              Search...
            </span>
          </div>
        </div>
        <div className=" px-[0.62rem] mt-[0.69rem]">
          <div className="rounded-lg border border-[#919EAB] p-[0.62rem]">
            <div className="flex items-center justify-between">
              <img className="1.1rem" src="layer.svg" alt="" />
              <img className="1.1rem" src="3dots.svg" alt="" />
            </div>
            <p className="mt-1 text-[0.43rem]">**** **** **** 5678</p>
          </div>
        </div>
        <div className=" px-[0.62rem] mt-[0.69rem]">
          <div className="rounded-lg border border-[#212B36] p-[0.62rem]">
            <div className="flex items-center justify-between">
              <div className="inline-flex">
                <img src="visa.png" alt="" />
                <img src="default.svg" alt="" />
              </div>
              <img className="1.1rem" src="3dots.svg" alt="" />
            </div>
            <p className="mt-1 text-[0.43rem]">**** **** **** 1243</p>
          </div>
        </div>
        <div className=" px-[0.62rem] mt-[0.69rem]">
          <div className="rounded-lg border border-[#919EAB] p-[0.62rem]">
            <div className="flex items-center justify-between">
              <div className="inline-flex">
                <img src="visa.png" alt="" />
              </div>
              <img className="1.1rem" src="3dots.svg" alt="" />
            </div>
            <p className="mt-1 text-[0.43rem]">**** **** **** 7892</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card4;
