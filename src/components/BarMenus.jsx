import React from "react";
import { MdMailOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { MdHome } from "react-icons/md";
import { MdInsertChartOutlined } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { IoMdWallet } from "react-icons/io";
import { TbShoppingBagCheck } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";
import { PiSquaresFourFill } from "react-icons/pi";

const icons = [
  { Icon: MdMailOutline, color: "#818283", size: "1.2em" },
  { Icon: IoSettingsOutline, color: "#818283", size: "1.2em" },
  { Icon: VscBellDot, color: "#818283", size: "1.2em" },
  {
    Icon: PiSquaresFourFill,
    color: "rgba(112,148,254,255)",
    size: "2.2em",
    additionalClasses: "mb-2 m-2 ",
  },
  { Icon: MdHome, color: "rgba(112,148,254,255)", size: "1.8em" },
  { Icon: MdInsertChartOutlined, color: "#818283", size: "1.6em" },
  { Icon: GrCompliance, color: "#818283", size: "1.6em" },
  { Icon: IoMdWallet, color: "#818283", size: "1.6em" },
  { Icon: TbShoppingBagCheck, color: "#818283", size: "1.6em" },
  { Icon: AiOutlineLogout, color: "#818283", size: "1.6em" },
];

const BarMenus = () => {
  return (
    <div className="barmenus fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex justify-center items-center gap-4">
      {icons.map(({ Icon, color, size, additionalClasses = "" }, index) => (
        <Icon
          key={index}
          className={additionalClasses}
          style={{ color, fontSize: size }}
        />
      ))}
    </div>
  );
};

export default BarMenus;
