import React from "react";
import { faker } from "@faker-js/faker";

let recentPlacedOrders = [
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
const RecentOrders = () => {
  return (
    <div className="recent-orders p-3 bg-[#202028] w-[50vw] ml-20 mb-6 rounded-md">
      <h3 className="heading text-white font-bold text-xl ">Recent Orders</h3>
      <table className="customers">
        <thead>
          <tr>
            <th className="w-[40%]">Customer</th>
            <th className="w-[22.5%]">Order No.</th>
            <th className="w-[22.5%]">Amount</th>
            <th className="w-[15%]">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentPlacedOrders.map((cus) => {
            return (
              <tr key={cus.orderNo}>
                <td className="flex items-center align-middle py-3">
                  <img
                    src={cus.avtar}
                    className="h-6 w-6 object-cover mr-2 rounded-full"
                    alt="imgavtar"
                  />
                  {cus.customer}
                </td>
                <td className="align-middle">{cus.orderNo}</td>
                <td className="align-middle">${cus.amount}</td>
                <td className="align-middle">
                  <span
                    className={`my-1 ${
                      cus.status === "Delivered"
                        ? "bg-[#165346] text-[#099f74]"
                        : "bg-[#5d3238] text-[#b84f51]"
                    } rounded-xl inline-flex p-1 text-[10px] px-3`}
                  >
                    {cus.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
