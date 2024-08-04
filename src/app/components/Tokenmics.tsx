"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  Chart as ChartJS,
  ChartOptions,
  ChartData,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import fonts from "@/configs/fonts";
import clsx from "clsx";

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
        enabled: true,
      },
    },
    cutout: "60%",
  };

  return (
    <div className="container relative flex flex-col items-center justify-center min-h-screen bg-primary-background text-white p-6 mb-10">
      <div
        className={clsx(
          fonts.clashDisplay.className,
          "text-center uppercase font-semibold text-[54px]  lg:leading-[54px] mb-5"
        )}
      >
        Tokenomics
      </div>
      <div className="lg:w-[448px] lg:h-[448px] w-[300px] h-[300px] mb-8 relative">
        <div className="absolute inset-0 bg-chart-background rounded-full blur-xl opacity-50"></div>
        <div className="relative lg:w-[448px] lg:h-[448px] w-[300px] h-[300px] bg-chart-background rounded-full p-5">
          <Doughnut data={data} options={options} ref={chartRef} />
          <div className="absolute lg:top-[30%] lg:left-[30%] top-[24%] left-[22%] w-40 h-40 z-[2]">
            <Image
              src="/images/logo-noword.png"
              alt="logo"
              fill
              quality={100}
            />
          </div>
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
                  <span className="text-[28px] font-medium">{percentage}%</span>
                </div>
                <span className="text-base font-extralight text-gray-300">
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
                  <span className="text-[28px] font-medium">{percentage}%</span>
                </div>
                <span className="text-base font-extralight text-gray-300">
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
