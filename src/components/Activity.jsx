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
    <div className="activity bg-[#202028] ml-20 rounded-md mr-3 mb-3 w-[50vw] p-3">
      <div className="flex justify-between">
        <h3 className="activity text-2xl font-bold text-white">Activity</h3>
        <h4 className="text-xl p-2 border-1 border-gray-500 bg-[#4c4d52] inline-flex ">
          Weekly
        </h4>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Activity;
