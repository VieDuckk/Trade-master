"use client";

import React, { useRef } from "react";
import {
  Chart as ChartJS,
  ChartOptions,
  ChartData,
  ArcElement,
  Tooltip,
  Legend,
  Plugin,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.defaults.set("elements.arc", {
  borderWidth: 2,
  borderColor: "transparent",
  borderRadius: 15,
});

interface DoughnutChartData extends ChartData<"doughnut", number[], string> {
  datasets: Array<{
    data: number[];
    backgroundColor: string[];
  }>;
}

const centerImagePlugin: Plugin<"doughnut"> = {
  id: "centerImage",
  afterDraw: (chart) => {
    const { ctx, chartArea } = chart;
    if (!chartArea) return;

    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    const image = new Image();
    image.src = "/images/logo-noword.png";

    const radius =
      Math.min(
        chartArea.right - chartArea.left,
        chartArea.bottom - chartArea.top
      ) / 2;
    const innerRadius = radius * 0.6;
    const size = innerRadius * 1.5;
    image.onload = () => {
      ctx.drawImage(image, centerX - size / 2, centerY - size / 2, size, size);
    };
  },
};

const Tokenomics: React.FC = () => {
  const chartRef = useRef<ChartJS<"doughnut"> | null>(null);

  const data: DoughnutChartData = {
    labels: [
      "Liquidity Fund",
      "Advisors & Ambassadors",
      "Development Fund",
      "Team Allocation",
      "Marketing & Listings",
      "Community Rewards",
      "Rewards and Incentives",
    ],
    datasets: [
      {
        data: [11, 7, 20, 4, 10, 3, 45],
        backgroundColor: [
          "#2DD4BF",
          "#93C5FD",
          "#0284C7",
          "#FF5B5B",
          "#8349FF",
          "#FDFF85",
          "#2563EB",
        ],
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, 
      },
    },
    cutout: "60%",
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen bg-primary-background text-white p-6 mb-10">
      <div className="text-center uppercase font-semibold text-[54px] leading-[54px] mb-5">
        Tokenomics
      </div>
      <div className="w-full max-w-md mb-8 relative">
        <div className="absolute inset-0 bg-chart-background rounded-full blur-xl opacity-50"></div>
        <div className="relative bg-chart-background rounded-full p-5">
          <Doughnut
            data={data}
            options={options}
            plugins={[centerImagePlugin]}
            ref={chartRef}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 w-full max-w-4xl">
        <div className="flex flex-wrap justify-center gap-4 w-full mb-4">
          {(data.labels || []).slice(0, 4).map((label, index) => {
            const bgColor =
              data.datasets[0].backgroundColor[index] || "#ffffff";
            const percentage = data.datasets[0].data[index] ?? 0;
            const gradientBg = `linear-gradient(183.33deg, #030401 -4.81%, ${bgColor} 207.12%)`;

            return (
              <div
                key={label}
                className="flex flex-col p-4 min-w-[210px] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundImage: gradientBg,
                  border: `0.5px solid ${bgColor}`,
                }}
              >
                <div className="flex items-center mb-2">
                  <div
                    className="w-4 h-4 rounded-full mr-3"
                    style={{
                      backgroundColor: bgColor,
                    }}
                  ></div>
                  <span className="text-2xl font-normal">{percentage}%</span>
                </div>
                <span className="text-base font-normal text-gray-300">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {(data.labels || []).slice(4).map((label, index) => {
            const bgColor =
              data.datasets[0].backgroundColor[index + 4] || "#ffffff";
            const percentage = data.datasets[0].data[index + 4] ?? 0;
            const gradientBg = `linear-gradient(183.33deg, #030401 -4.81%, ${bgColor} 207.12%)`;

            return (
              <div
                key={label}
                className="flex flex-col p-4 min-w-[210px] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  backgroundImage: gradientBg,
                  border: `0.5px solid ${bgColor}`,
                }}
              >
                <div className="flex items-center mb-2">
                  <div
                    className="w-4 h-4 rounded-full mr-3"
                    style={{ backgroundColor: bgColor }}
                  ></div>
                  <span className="text-2xl font-normal">{percentage}%</span>
                </div>
                <span className="text-base font-normal text-gray-300">
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
