import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { highlights } from "../Data";

const HighlightItem = ({ icon, iconBg, label }) => {
  return (
    <div className="highlight-item flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <span
          className={`icon-box ${iconBg} w-14 h-14 sm:w-12 sm:h-12 rounded-full flex items-center justify-center`}
        >
          {icon}
        </span>
        <span>{label}</span>
      </div>
      <span className="rounded-full bg-[#47484c] p-1 h-6">
        <MdKeyboardArrowRight className="text-[1em] text-[#e4e4e7]" />
      </span>
    </div>
  );
};

const HighlightsSection = () => {
  return (
    <section className="highlights p-3 bg-[#202028] text-white flex flex-col gap-3 justify-between w-[90vw] sm:w-[84vw] md:w-[35vw] rounded-md md:h-full">
      {highlights.map((item, index) => (
        <HighlightItem
          key={index}
          icon={item.icon}
          iconBg={item.iconBg}
          label={item.label}
        />
      ))}
    </section>
  );
};

export default HighlightsSection;
