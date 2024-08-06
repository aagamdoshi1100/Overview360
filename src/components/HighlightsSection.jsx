import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { GiHamburger } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";

const HighlightsSection = () => {
  return (
    <section className="highlights p-3 bg-[#202028] text-white flex flex-col gap-3 justify-between w-[90vw] sm:w-[84vw] md:w-[35vw] rounded-md md:h-full">
      <div className="goals flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <span
            className={`icon-box bg-[#bb4d4f] w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center`}
          >
            <GoGoal size="1.6em" />
          </span>{" "}
          Goals
        </div>
        <span className="rounded-full bg-[#47484c] p-1 h-6">
          <MdKeyboardArrowRight className="text-[1em] text-[#e4e4e7]" />
        </span>
      </div>

      <div className="dishes flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <span
            className={`icon-box bg-[#283367] w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center`}
          >
            <GiHamburger size="1.6em" />
          </span>
          <span>Popular Dishes</span>
        </div>
        <span className="rounded-full bg-[#47484c] p-1 h-6">
          <MdKeyboardArrowRight className="text-[1em] text-[#e4e4e7]" />
        </span>{" "}
      </div>
      <div className="menus flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <span
            className={`icon-box bg-[#214a60] w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center`}
          >
            <BiDish size="1.6em" />
          </span>
          <span>Menus</span>
        </div>
        <span className="rounded-full bg-[#47484c] p-1 h-6">
          <MdKeyboardArrowRight className="text-[1em] text-[#e4e4e7]" />
        </span>{" "}
      </div>
      <div className="guests flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <span
            className={`icon-box bg-[#5b294a] w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center`}
          >
            <BsPeopleFill size="1.6em" />
          </span>
          <span>Guests</span>
        </div>
        <span className="rounded-full bg-[#47484c] p-1 h-6">
          <MdKeyboardArrowRight className="text-[1em] text-[#e4e4e7]" />
        </span>{" "}
      </div>
      <div className="guests flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <span
            className={`icon-box bg-[#165246] w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center`}
          >
            <MdOutlineLibraryBooks size="1.6em" />
          </span>
          <span>Guests</span>
        </div>
        <span className="rounded-full bg-[#47484c] p-1 h-6">
          <MdKeyboardArrowRight className="text-[1em] text-[#e4e4e7]" />
        </span>{" "}
      </div>
    </section>
  );
};

export default HighlightsSection;
