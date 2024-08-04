import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const HighlightsSection = () => {
  return (
    <section className=" p-3 bg-[#202028] text-white flex flex-col gap-2 justify-between mx-3 mb-3 w-[38vw] rounded-md">
      <div className="goals flex justify-between">
        <span>Goals</span>
        <span className="rounded-full bg-[#47484c] p-1">
          <MdKeyboardArrowRight className="text-[1em] text-[#e4e4e7]" />
        </span>
      </div>
      <div className="dishes flex justify-between">
        <span>Popular Dishes</span>
        <span className="rounded-full bg-[#47484c] p-1">
          <MdKeyboardArrowRight className="text-[1em] text-[#e4e4e7]" />
        </span>{" "}
      </div>
      <div className="menus flex justify-between">
        <span>Menus</span>
        <span className="rounded-full bg-[#47484c] p-1">
          <MdKeyboardArrowRight className="text-[1em] text-[#e4e4e7]" />
        </span>{" "}
      </div>
    </section>
  );
};

export default HighlightsSection;
