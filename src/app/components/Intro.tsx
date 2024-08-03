import React from "react";
import WhaleLogoImg from "@/public/images/whale-logo.png";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="relative">
      <div className="bg-[url('/images/intro-background.jpg')] bg-no-repeat bg-center bg-cover absolute top-0 left-0 w-full h-full -z-[1] ">
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#070a13] to-transparent"></div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen pb-20 pt-36">
        <div className="flex flex-col items-center">
          <div className="text-center font-semibold text-[54px] leading-[54px]">
            TRADE SMARTER
            <br />
            FASTER & SAFER
          </div>
          <div className="text-center font-light text-[16px] break-words w-[60%] mt-4">
            Welcome to TON Fusion, the premier DEX aggregator built on
            TONSquare, offering lightning-fast swaps, high-yield staking, and
            deep liquidity pools.
          </div>
        </div>

        <Image
          src={WhaleLogoImg}
          alt="whale logo"
          priority
          className="w-full max-w-[min(70vw,1023px)] 2xl:max-w-[1023px] h-auto"
        />
      </div>
    </section>
  );
}
