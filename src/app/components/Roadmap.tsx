
import React from "react";
import Button from "./Button";
import fonts from "@/configs/fonts";
import clsx from "clsx";

interface Phase {
  title: string;
  quarter: string;
  items: string[];
  bg: string;
  active: boolean;
}

const phases: Phase[] = [
  {
    title: "DEVELOPMENT & TESTING",
    quarter: "Quarter 2 - 2024",
    items: [
      "Smart contracts deployment",
      "Core features",
      "DEX integrations",
      "Internal testing",
      "Front-end development",
      "User acceptance testing",
    ],
    bg: "linear-gradient(183.33deg, #030401 -4.81%, #2563EB 207.12%)",
    active: true,
  },
  {
    title: "LAUNCH & INITIAL GROWTH",
    quarter: "Quarter 3 - 2024",
    items: [
      "Mainnet deployment",
      "Marketing campaigns",
      "User feedback",
      "Analytics tools",
      "CEX listing",
      "Additional DEX integrations",
    ],
    bg: "linear-gradient(229.64deg, #030712 56.13%, rgba(59, 130, 246, 0.5) 210.94%)",
    active: false,
  },
  {
    title: "EXPANSION & OPTIMIZATION",
    quarter: "Quarter 4 - 2024",
    items: [
      "Additional DEXes",
      "Performance optimization",
      "Marketing expansion",
      "Advanced features",
      "Security audits",
      "User feedback",
    ],
    bg: "linear-gradient(229.64deg, #030712 56.13%, rgba(59, 130, 246, 0.5) 210.94%)",
    active: false,
  },
  {
    title: "ADVANCED DEVELOPMENT",
    quarter: "Quarter 1 - 2025",
    items: [
      "Advanced features",
      "Cross-chain support",
      "Liquidity optimization",
      "Community engagement",
      "Governance integration",
      "Strategic partnership",
    ],
    bg: "linear-gradient(229.64deg, #030712 56.13%, rgba(59, 130, 246, 0.5) 210.94%)",
    active: false,
  },
];

const Roadmap: React.FC = () => {
  return (
    <div className="bg-roadmap-background text-white py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
        <div className={clsx(
                          fonts.clashDisplay.className,"text-center uppercase font-semibold text-[54px]  lg:leading-[54px]")}>
            Roadmap
          </div>
          <div className="text-center break-words text-sm font-thin w-[60%] mt-4">
            Follow our strategic roadmap designed to ensure continuous growth, innovation, and the enhancement of the TON Fusion ecosystem. Each phase focuses on delivering key features and improvements that drive the platform forward.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`rounded-lg px-6 pt-6 border ${
                phase.active ? "border-blue-500" : "border-gray-500"
              } flex flex-col items-center pb-10`}
              style={{ background: phase.bg }}
            >
              <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
              <Button className="flex text-sm border h-10 border-white rounded-3xl bg-transparent mb-2">{phase.quarter}</Button>
              <ul className="ml-2 list-disc text-left space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm ">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
