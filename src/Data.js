import { faker } from "@faker-js/faker";
import { MdMailOutline, MdOutlineLibraryBooks, MdHome } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import { MdInsertChartOutlined } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { IoMdWallet } from "react-icons/io";
import {
  TbShoppingBagCheck,
  TbShoppingBagX,
  TbBasketPlus,
} from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";
import { GoGoal } from "react-icons/go";
import { GiHamburger, GiProfit } from "react-icons/gi";
import { BiDish } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";

export const icons = [
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

export const userFeedbacks = [
  {
    avtar: faker.image.avatar(),
    customer: faker.person.fullName(),
    ratings: faker.number.int({ min: 1, max: 5 }),
    feedback: faker.lorem.paragraph(),
  },
  {
    avtar: faker.image.avatar(),
    customer: faker.person.fullName(),
    ratings: faker.number.int({ min: 1, max: 5 }),
    feedback: faker.lorem.paragraph(),
  },
  {
    avtar: faker.image.avatar(),
    customer: faker.person.fullName(),
    ratings: faker.number.int({ min: 1, max: 5 }),
    feedback: faker.lorem.paragraph(),
  },
  {
    avtar: faker.image.avatar(),
    customer: faker.person.fullName(),
    ratings: faker.number.int({ min: 1, max: 5 }),
    feedback: faker.lorem.paragraph(),
  },
  {
    avtar: faker.image.avatar(),
    customer: faker.person.fullName(),
    ratings: faker.number.int({ min: 2, max: 5 }),
    feedback: faker.lorem.sentence(),
  },
  {
    avtar: faker.image.avatar(),
    customer: faker.person.fullName(),
    ratings: faker.number.int({ min: 2, max: 5 }),
    feedback: faker.lorem.paragraph({ min: 3, max: 5 }),
  },
];

export const highlights = [
  {
    icon: <GoGoal size="1.6em" />,
    iconBg: "bg-[#bb4d4f]",
    label: "Goals",
  },
  {
    icon: <GiHamburger size="1.6em" />,
    iconBg: "bg-[#283367]",
    label: "Popular Dishes",
  },
  {
    icon: <BiDish size="1.6em" />,
    iconBg: "bg-[#214a60]",
    label: "Menus",
  },
  {
    icon: <BsPeopleFill size="1.6em" />,
    iconBg: "bg-[#5b294a]",
    label: "Guests",
  },
  {
    icon: <MdOutlineLibraryBooks size="1.6em" />,
    iconBg: "bg-[#165246]",
    label: "Library",
  },
];

export const metrics = [
  {
    icon: TbBasketPlus,
    iconBGDefaultColor: "bg-[#283368]",
    cardName: "Total Orders",
    isPositive: true,
  },

  {
    icon: TbShoppingBagCheck,
    iconBGDefaultColor: "bg-[#165246]",
    cardName: "Total Delivered",
    isPositive: false,
  },
  {
    icon: TbShoppingBagX,
    iconBGDefaultColor: "bg-[#bb4d4f]",
    cardName: "Total Cancelled",
    isPositive: true,
  },
  {
    icon: GiProfit,
    iconBGDefaultColor: "bg-[#5b2a4a]",
    cardName: "Total Revenue",
    isPositive: false,
  },
];

export const recentPlacedOrders = [
  {
    avtar: faker.image.avatar(),
    customer: faker.person.fullName(),
    orderNo: faker.number.int({ min: 100000, max: 900000 }),
    amount: faker.number.float({ min: 1000, max: 10000, multipleOf: 0.01 }),
    status: "Delivered",
  },
  {
    avtar: faker.image.avatar(),
    customer: faker.person.fullName(),
    orderNo: faker.number.int({ min: 100000, max: 900000 }),
    amount: faker.number.float({ min: 1000, max: 10000, multipleOf: 0.01 }),
    status: "Delivered",
  },
  {
    avtar: faker.image.avatar(),
    customer: faker.person.fullName(),
    orderNo: faker.number.int({ min: 100000, max: 900000 }),
    amount: faker.number.float({ min: 1000, max: 10000, multipleOf: 0.01 }),
    status: "Cancelled",
  },
  {
    avtar: faker.image.avatar(),
    customer: faker.person.fullName(),
    orderNo: faker.number.int({ min: 100000, max: 900000 }),
    amount: faker.number.float({ min: 1000, max: 10000, multipleOf: 0.01 }),
    status: "Cancelled",
  },
  {
    avtar: faker.image.avatar(),
    customer: faker.person.fullName(),
    orderNo: faker.number.int({ min: 100000, max: 900000 }),
    amount: faker.number.float({ min: 1000, max: 10000, multipleOf: 0.01 }),
    status: "Delivered",
  },
  {
    avtar: faker.image.avatar(),
    customer: faker.person.fullName(),
    orderNo: faker.number.int({ min: 100000, max: 900000 }),
    amount: faker.number.float({ min: 1000, max: 10000, multipleOf: 0.01 }),
    status: "Delivered",
  },
];
