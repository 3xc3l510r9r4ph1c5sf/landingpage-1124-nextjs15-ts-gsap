import React from 'react';
import CardWrapper from './cardWrapper';
import Image from 'next/image';
import ToggleButton from '@/components/common/toggle';

const Card7 = () => {
  return (
    <CardWrapper className="px-6">
      <div className="flex rounded-lg bg-white text-[#212B36] filter-custom-drop-shadow w-[15rem]">
        <div className="p-3 text-[0.75rem] font-bold">
          <h2 className="py-1.5">New Event</h2>
          <input
            type="text"
            placeholder="Title"
            className="w-full rounded-lg border border-[#919EAB] pl-2 text-[#919EAB] placeholder:text-[0.4rem]"
          />
          <textarea
            placeholder="Description"
            className="mt-3 w-full resize-none rounded-lg border border-[#919EAB] pl-2 text-[#919EAB] placeholder:text-[0.4rem]"
          />

          <ToggleButton className="mt-1.5 text-[0.4rem] font-normal" />
          <fieldset className="border-gray-300 mt-1.5 rounded-lg border p-3 text-[0.4rem] font-normal text-gray">
            <legend className="">Start Date</legend>
            <p>30/12/2020 12:00 AM</p>
          </fieldset>
          <fieldset className="border-gray-300 rounded-lg border p-3 text-[0.4rem] mt-1.5 font-normal text-gray">
            <legend className="">End Date</legend>
            <p>31/12/2020 12:00 AM</p>
          </fieldset>

          <div className="flex items-center mt-1.5 gap-1">
            <span className="relative inline-block size-[0.435rem] rounded-full bg-[#00A76F] shadow-green">
              <img
                className="absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2"
                src="/check.svg"
                alt=""
              />
            </span>
            <span className="relative inline-block size-[0.435rem] rounded-full bg-[#00B8D9]" />
            <span className="relative inline-block size-[0.435rem] rounded-full bg-[#003768]" />
            <span className="relative inline-block size-[0.435rem] rounded-full bg-[#FFAB00]" />
            <span className="relative inline-block size-[0.435rem] rounded-full bg-[#FFAC82]" />
            <span className="relative inline-block size-[0.435rem] rounded-full bg-[#B71D18]" />
          </div>

          <div className="flex items-center justify-end gap-1.5 text-[0.4rem] font-bold mt-1.5">
            <button className="rounded-lg bg-[#212B36] p-[0.38rem] text-white">
              Save Changes
            </button>
            <button className="rounded-lg border border-[rgba(145,_158,_171,_0.32)] p-[0.38rem]">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card7;
