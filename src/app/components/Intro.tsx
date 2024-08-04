import React from "react";
import WhaleLogoImg from "@/public/images/whale-logo.png";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="relative h-[1010px]">
      <div className="absolute top-0 left-0 w-full h-full bg-[#030712] -z-[2]"></div>
      {/* <div className=" bg-[url('/images/intro-background.png')] bg-no-repeat bg-center absolute top-0 left-0 w-full h-full -z-[1] p-10 ">
      </div> */}

      <div className="relative flex flex-col items-center justify-center min-h-screen w-full h-[1010px] pt-20 pb-36">
        <Image
          src="/images/intro-background.png"
          alt="Background"
          className="inset-0 object-fit: contain -z-[1]"
          fill
          quality={100}
        />
        <div className="flex flex-col items-center">
          <div className="text-center font-semibold text-6xl lg:text-[54px] lg:leading-[54px]">
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