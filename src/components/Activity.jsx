import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { IoMdArrowDropdown } from "react-icons/io";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      display: false,
    },
    title: {
      display: false,
      text: " ",
    },
  },
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        min: 0, // Set the minimum value
        max: 15, // Set the maximum value
        stepSize: 5, // Set the step size between ticks
        callback: function (value) {
          // Custom format for y-axis labels
          return value + " K"; // Adds "units" to each tick value
        },
      },
    },
  },
};

const labels = ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"];
export const data = {
  labels,
  datasets: [
    {
      label: "Activities",
      data: labels.map(() => faker.datatype.number({ min: 2, max: 15 })),
      backgroundColor: "rgba(114,148,254,255)",
      // borderRadius: {
      //   topLeft: 50,
      //   topRight: 50,
      //   bottomLeft: 50,
      //   bottomRight: 50,
      // },
    },
  ],
};

const Activity = () => {
  return (
    <div className="activity bg-[#202028] w-[90vw] sm:w-[84vw] md:w-[50vw] p-3  rounded-md md:h-full md:flex md:items-center md:justify-center md:flex-col">
      <div className="flex justify-between md:w-full">
        <h3 className="activity text-xl font-bold text-white">Activity</h3>
        <h4 className="text-sm text-white rounded-3xl p-1 px-3 border-1 border-gray-500 bg-[#4c4d52] inline-flex items-center justify-center">
          Weekly
          <IoMdArrowDropdown className="m-1" />
        </h4>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Activity;
