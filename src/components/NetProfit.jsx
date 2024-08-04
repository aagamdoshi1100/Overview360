import React from "react";
import { utilies } from "../utils/utils";
import { GoTriangleUp } from "react-icons/go";
import ProgressCircle from "./ProgressCircle";

const NetProfit = () => {
  return (
    <section className="NetProfits flex sm:flex-col md:flex-row bg-[#202028] sm:ml-6 sm:mb-3 p-3 text-white rounded-md justify-between w-[90vw] sm:w-[40vw] md:w-[35vw]">
      <div className="Data">
        <p className="text-[12px]">Net Profit</p>
        <p className="font-bold text-2xl">
          $ {utilies.randomNumberGenerator(9000, 1000)}.30
        </p>
        <div className="flex items-center text-green-600 font-semibold">
          <GoTriangleUp />
          <span className=" text-[12px]">
            {utilies.randomNumberGenerator(9, 1)}%
          </span>
        </div>
      </div>
      <div className="ProgressBar sm:mt-5">
        <div className="progress relative ml-8">
          <p className="absolute top-[50%] left-[40%] -translate-x-[50%] -translate-y-[50%] flex flex-col">
            <span className="percentage fone-bold text-[16px] text-center">
              75%
            </span>
            <span className="status text-[8px] text-center">
              Goal <br /> completed
            </span>
          </p>
          <ProgressCircle progress={75} />
        </div>
        <p className="notice text-[8px]">
          *The value here has been rounded off.
        </p>
      </div>
    </section>
  );
};

export default NetProfit;
