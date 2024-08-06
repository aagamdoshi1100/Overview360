import React from "react";
import { icons } from "../Data";

const BarMenus = ({ handleChange }) => {
  return (
    <div className="barmenus-background fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div className="barmenus fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col   gap-3 p-3 w-[60vw] rounded-lg">
        {icons.map(
          ({ Icon, color, size, additionalClasses = "", IconName }, index) => (
            <div
              key={index}
              className="flex items-center hover:bg-gray-200 cursor-pointer"
            >
              <Icon
                className={additionalClasses + " m-2 mr-5 cursor-pointer "}
                style={{ color, fontSize: size }}
              />
              <p className="text-gray-700">{IconName}</p>
            </div>
          )
        )}
        <p
          className="text-sm text-center text-gray-500 hover:underline cursor-pointer"
          onClick={() => handleChange(false)}
        >
          Close
        </p>
      </div>
    </div>
  );
};

export default BarMenus;
