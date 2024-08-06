import React from "react";
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import { utilies } from "../utils/utils";
import { metrics } from "../Data";

const KeyMetrics = () => {
  return (
    <section className="metrixes flex flex-col md:flex-row w-[90vw] sm:w-[40vw] md:w-[50vw] md:h-full gap-3">
      {metrics.map((data, i) => {
        const IconComponent = data.icon;
        return (
          <div
            key={data.cardName}
            className={`martixCard bg-[#202028] p-3 text-white rounded-md flex flex-col flex-grow md:h-full ${
              i === 3 ? "" : "md:mr-3"
            }`}
          >
            <span
              className={`icon-box ${data.iconBGDefaultColor} w-14 h-14 sm:w-12 sm:h-12 mb-2 rounded-lg flex items-center justify-center`}
            >
              <IconComponent size="1.6em" className="" />
            </span>
            <p className="text-sm">{data.cardName}</p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-2xl">
                {utilies.randomNumberGenerator(90, 10)}
              </p>
              {data.isPositive ? (
                <div className="flex items-center gap-1 text-green-600">
                  <GoTriangleUp />
                  <span className=" text-[14px] font-extrabold">
                    {utilies.randomNumberGenerator(9, 1)}%
                  </span>
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <GoTriangleDown />
                  <span className=" text-[14px] font-extrabold">
                    {data.cardName === "Total Revenue"
                      ? `$${utilies.randomNumberGenerator(9, 1)}k`
                      : `${utilies.randomNumberGenerator(9, 1)}%`}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default KeyMetrics;
