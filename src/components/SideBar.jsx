import React from "react";
import { MdHome } from "react-icons/md";
import { MdInsertChartOutlined } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { IoMdWallet } from "react-icons/io";
import { TbShoppingBagCheck } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";
import { PiSquaresFourFill } from "react-icons/pi";

const SideBar = () => {
  return (
    <div className="all-menus hidden sm:bg-[rgba(32,32,40,255)] sm:h-[100vh] sm:inline-flex sm:flex-col sm:justify-between sm:items-center sm:fixed">
      <div className="top-menus flex flex-col gap-5 cursor-pointer">
        <span className="pt-3 px-3">
          <PiSquaresFourFill
            className="mb-2"
            style={{ color: "rgba(112,148,254,255)", fontSize: "2.2em" }}
          />
        </span>
        <span className="border-l-2 border-[rgba(112,148,254,255)] px-3">
          <MdHome
            style={{ color: "rgba(112,148,254,255)", fontSize: "1.8em" }}
          />
        </span>
        <span className="border-l-2 border-[rgba(32,32,40,255)] px-3">
          <MdInsertChartOutlined
            style={{ color: "#818283", fontSize: "1.6em" }}
          />
        </span>
        <span className="border-l-2 border-[rgba(32,32,40,255)] px-3">
          <GrCompliance style={{ color: "#818283", fontSize: "1.6em" }} />{" "}
        </span>

        <span className="border-l-2 border-[rgba(32,32,40,255)] px-3">
          <IoMdWallet
            style={{
              color: "#818283",
              fontSize: "1.6em",
            }}
          />{" "}
        </span>

        <span className="border-l-2 border-[rgba(32,32,40,255)] px-3">
          <TbShoppingBagCheck style={{ color: "#818283", fontSize: "1.6em" }} />{" "}
        </span>
      </div>
      <div className="bottom-menus cursor-pointer">
        <span className="border-l-2 border-[rgba(32,32,40,255)] px-3">
          <AiOutlineLogout style={{ color: "#818283", fontSize: "1.6em" }} />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
