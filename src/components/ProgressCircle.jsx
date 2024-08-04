import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressCircle = ({ progress }) => {
  const data = {
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ["rgba(114,148,254,255)", "rgba(41,50,104,255)"],
        borderWidth: 0,
        cutout: "73%",
      },
    ],
  };

  const options = {
    rotation: 0,
    circumference: 360,
    borderRadius: 3,
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false },
    },
  };

  return (
    <div style={{ width: "80px", height: "80px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProgressCircle;
