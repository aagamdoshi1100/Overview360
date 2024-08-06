import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { faker } from "@faker-js/faker";
import { CiMenuFries } from "react-icons/ci";
import BarMenus from "./BarMenus";

const TopBar = () => {
  const [menus, setMenus] = useState(false);
  return (
    <div className="all-menus bg-[rgba(32,32,40,255)] w-[100vw] h-14 flex justify-between fixed z-10">
      <div className="left-menus sm:ml-14">
        <span className="relative">
          <input
            type="text"
            placeholder="Search"
            className="search ml-6 mt-4 rounded-sm pl-7 text-[12px] p-1 bg-[#2a2b30]"
          />
          <FiSearch className="absolute top-1 left-8 text-[#818283]" />
        </span>
      </div>
      <div className="mobile-view-menu sm:hidden">
        <CiMenuFries
          size="1.6em"
          className="text-white m-3 mr-5 cursor-pointer"
          onClick={() => setMenus(!menus)}
        />
      </div>
      {menus && <BarMenus handleChange={setMenus} />}
      <div className="right-menus hidden sm:flex gap-2 items-center pr-8">
        <span className="rounded-full bg-[#444549] h-8 w-8 p-[6px] ">
          <MdMailOutline style={{ color: "#818283", fontSize: "1.2em" }} />
        </span>
        <span className="rounded-full bg-[#444549] h-8 w-8 p-[6px] ">
          <IoSettingsOutline style={{ color: "#818283", fontSize: "1.2em" }} />
        </span>
        <span className="rounded-full bg-[#444549] h-8 w-8 p-[6px] ">
          <VscBellDot style={{ color: "#818283", fontSize: "1.2em" }} />
        </span>
        <span className="rounded-full bg-[#444549] h-8 w-8">
          <img
            src={faker.image.avatar()}
            className="object-cover mr-2 rounded-full"
            alt="imgavtar"
          />
        </span>
      </div>
    </div>
  );
};

export default TopBar;
