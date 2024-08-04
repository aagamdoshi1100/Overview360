import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const HighlightsSection = () => {
  return (
    <section className="highlights p-3 bg-[#202028] text-white flex flex-col gap-3 justify-between my-3 w-[90vw] sm:w-[84vw] md:w-[35vw] sm:mr-3 sm:ml-16 md:ml-3 rounded-md">
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
