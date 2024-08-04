"use client";

import Image from "next/image";
import { LearnButton } from "./Button";
import fonts from "@/configs/fonts";
import clsx from "clsx";

export default function Backer() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col items-center">
          <div
            className={clsx(
              fonts.clashDisplay.className,
              "text-center font-semibold text-[54px]  lg:leading-[54px]"
            )}
          >
            TONSQUARE x TON BLOCKCHAIN
          </div>
          <div className="text-center break-words text-sm font-thin w-[60%] mt-4">
            TON Fusion leverages Tonsquare, a Layer 2 solution on the TON
            Blockchain, enhancing transaction throughput and significantly
            reducing fees. Handle millions of transactions per second
            seamlessly.
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between mt-8 gap-4 ">
          <div className="lg:w-2/3 w-full bg-form-background border border-blue-600 rounded-xl p-6 flex relative overflow-hidden">
            <div className="w-1/2 pr-4">
              <div className="mb-28">
                <h3 className="text-white max-w-[60%] font-bold text-[25px] mb-4">
                  CROSS-CHAIN ASSET FLEXIBILITY
                </h3>
                <p className="text-white font-thin text-[16px] w-[100%] mb-4">
                  Easily transfer assets between TON and EVM-compatible chains.
                  Our integrated system ensures you benefit from the best of
                  both ecosystems, optimizing your trading and staking.
                </p>
              </div>
              <LearnButton className="absolute bg-transparent bottom-10 border border-solid border-white w-40 " />
            </div>
            <div className="absolute lg:top-7 lg:left-[52%] top-32 left-[52%] lg:w-[60%] lg:h-[105%] w-[100%] h-[105%] z-0 object-cover">
              <Image
                src="/images/backers/form1.png"
                alt="Background Image 1"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
              />
            </div>
          </div>
          <div className="lg:w-1/3 w-full bg-form2-background border border-gray-600 rounded-xl p-6 relative overflow-hidden">
            <div className="mb-28 max-w-[70%] ">
              <h3 className="text-white font-bold text-[25px] mb-4">
                DATA INTEGRITY AND TRANSPARENCY
              </h3>
              <p className="text-white text-sm font-thin mb-4">
                Trust and transparency are fundamental to DeFi. TON Fusion
                leverages Celestias Data Availability solution to ensure the
                integrity and accessibility of all on-chain data.
              </p>
            </div>
            <LearnButton className="absolute bg-transparent bottom-10 border border-solid border-white w-40" />
            <div className="absolute bottom-1 left-[52%] w-[82%] h-[50%] lg:w-[60%] z-0 object-cover">
              <Image
                src="/images/backers/form2.png"
                alt="Background Image 2"
                fill
                style={{ objectFit: "cover" }}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
