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

const icons = [
  {
    Icon: MdHome,
    color: "rgba(112,148,254,255)",
    size: "2em",
    IconName: "Home",
  },
  {
    Icon: MdMailOutline,
    color: "rgba(112,148,254,255)",
    size: "2em",
    IconName: "Inbox",
  },
  {
    Icon: IoSettingsOutline,
    color: "rgba(112,148,254,255)",
    size: "2em",
    IconName: "Setting",
  },
  {
    Icon: VscBellDot,
    color: "rgba(112,148,254,255)",
    size: "2em",
    IconName: "Notifications",
  },

  {
    Icon: MdInsertChartOutlined,
    color: "rgba(112,148,254,255)",
    size: "2em",
    IconName: "Graphs",
  },
  {
    Icon: GrCompliance,
    color: "rgba(112,148,254,255)",
    size: "2em",
    IconName: "Checklists",
  },
  {
    Icon: IoMdWallet,
    color: "rgba(112,148,254,255)",
    size: "2em",
    IconName: "Wallet",
  },
  {
    Icon: TbShoppingBagCheck,
    color: "rgba(112,148,254,255)",
    size: "2em",
    IconName: "Cart",
  },
  {
    Icon: AiOutlineLogout,
    color: "rgba(112,148,254,255)",
    size: "2em",
    IconName: "Logout",
  },
];

const BarMenus = ({ handleChange }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50">
      <div className="barmenus fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col   gap-3 p-3 w-[60vw] rounded-lg">
        {icons.map(
          ({ Icon, color, size, additionalClasses = "", IconName }, index) => (
            <div key={index} className="flex items-center hover:bg-gray-200">
              <Icon
                className={additionalClasses + " m-2 mr-5 cursor-pointer "}
                style={{ color, fontSize: size }}
              />
              <p className="text-gray-700">{IconName}</p>
            </div>
          )
        )}
        <p
          className="text-sm text-center text-gray-500 hover:underline"
          onClick={() => handleChange(false)}
        >
          Close
        </p>
      </div>
    </div>
  );
};

export default BarMenus;
