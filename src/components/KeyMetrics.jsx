import React from "react";
import { GoTriangleUp } from "react-icons/go";
import { GoTriangleDown } from "react-icons/go";
import { utilies } from "../utils/utils";
const metrics = [
  {
    cardName: "Total Orders",
    isPositive: true,
  },

  {
    cardName: "Total Delivered",
    isPositive: false,
  },
  {
    cardName: "Total Cancelled",
    isPositive: true,
  },
  {
    cardName: "Total Revenue",
    isPositive: false,
  },
];

const KeyMetrics = () => {
  return (
    <section className="metrixes flex flex-col md:flex-row w-[90vw] sm:w-[40vw] sm:ml-20 md:w-[50vw]">
      {/* <p className="heading font-bold text-xl text-white mb-3">Dashboard</p> */}
      {metrics.map((data, i) => (
        <div
          key={data.cardName}
          className={`martixCard bg-[#202028] mb-3 p-3 text-white rounded-md flex flex-col flex-grow ${
            i === 3 ? "" : "md:mr-3"
          }`}
        >
          <p className="text-sm">{data.cardName}</p>
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl">
              {utilies.randomNumberGenerator(90, 10)}
            </p>
            {data.isPositive ? (
              <div className="flex items-center text-green-600">
                <GoTriangleUp />
                <span className=" text-[12px]">
                  {utilies.randomNumberGenerator(9, 1)}%
                </span>
              </div>
            ) : (
              <div className="flex items-center text-red-600">
                <GoTriangleDown />
                <span className=" text-[12px]">
                  {data.cardName === "Total Revenue"
                    ? `$${utilies.randomNumberGenerator(9, 1)}k`
                    : `${utilies.randomNumberGenerator(9, 1)}%`}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default KeyMetrics;
