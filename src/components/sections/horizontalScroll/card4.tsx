// src/components/Card4.tsx

import CardWrapper from './cardWrapper';

const Card4 = () => {
  return (
    <CardWrapper className="py-[3.31rem]">
      <div className="h-[18.88rem] w-[13.87rem] rounded-lg bg-white text-primary filter-custom-drop-shadow">
        {/* Header Section */}
        <div className="flex items-center justify-between gap-2 p-5">
          <h3 className="text-[0.56rem] font-bold">Cards</h3>
          <button className="inline-flex items-center justify-center gap-1 text-[0.475rem]">
            <img
              src="/new.svg" // Reference to the SVG in /public
              alt="New Icon"
              className="w-[9px] h-[10px]"
            />
            <span>New</span>
          </button>
        </div>

        {/* Search Input Section */}
        <div className="px-3">
          <div className="relative h-[1.69rem] w-full">
            <input
              type="text"
              className="w-full rounded-lg border border-[#919EAB] focus:outline-none pl-4 pr-4"
              placeholder="Search..."
            />
            <span className="absolute left-[0.53rem] top-1/2 transform -translate-y-1/2 scale-150 bg-search-svg"></span>
          </div>
        </div>

        {/* Card Items */}
        <div className="px-[0.62rem] mt-[0.69rem]">
          {/* First Card Item */}
          <div className="rounded-lg border border-[#919EAB] p-[0.62rem]">
            <div className="flex items-center justify-between">
              <img
                className="h-[1.1rem]"
                src="/layer.svg" // Reference to the SVG in /public
                alt="Layer Icon"
              />
              <img
                className="h-[1.1rem]"
                src="/3dots.svg" // Reference to the SVG in /public
                alt="More Options"
              />
            </div>
            <p className="mt-1 text-[0.43rem]">**** **** **** 5678</p>
          </div>
        </div>

        <div className="px-[0.62rem] mt-[0.69rem]">
          {/* Second Card Item */}
          <div className="rounded-lg border border-[#212B36] p-[0.62rem]">
            <div className="flex items-center justify-between">
              <div className="inline-flex gap-2">
                <img
                  src="/visa.png" // Reference to the image in /public
                  alt="Visa"
                  className="h-[1.1rem]"
                />
                <img
                  src="/default.svg" // Reference to the SVG in /public
                  alt="Default"
                  className="h-[1.1rem]"
                />
              </div>
              <img
                className="h-[1.1rem]"
                src="/3dots.svg" // Reference to the SVG in /public
                alt="More Options"
              />
            </div>
            <p className="mt-1 text-[0.43rem]">**** **** **** 1243</p>
          </div>
        </div>

        <div className="px-[0.62rem] mt-[0.69rem]">
          {/* Third Card Item */}
          <div className="rounded-lg border border-[#919EAB] p-[0.62rem]">
            <div className="flex items-center justify-between">
              <div className="inline-flex gap-2">
                <img
                  src="/visa.png" // Reference to the image in /public
                  alt="Visa"
                  className="h-[1.1rem]"
                />
              </div>
              <img
                className="h-[1.1rem]"
                src="/3dots.svg" // Reference to the SVG in /public
                alt="More Options"
              />
            </div>
            <p className="mt-1 text-[0.43rem]">**** **** **** 7892</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card4;
