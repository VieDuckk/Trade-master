import React from "react";
import WhaleLogoImg from "@/public/images/whale-logo.png";
import Image from "next/image";
import fonts from "@/configs/fonts";
import clsx from "clsx";

import { Trans } from 'react-i18next/TransWithoutContext'
import { languages, fallbackLng } from '../../i18n/settings'
import { useTranslation } from '../../i18n/client'

export default function Intro ({ params: { lng } }: {
  params: {
    lng: string;
  };
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng,'intro')
  return (
    <section className="relative h-auto">
      <div className="absolute top-0 left-0 w-full h-full bg-[#030712] -z-[2]"></div>

      <div className="relative flex flex-col items-center justify-center min-h-screen w-full h-auto pt-20 pb-36">
        <Image
          src="/images/intro-background.png"
          alt="Background"
          className="inset-0 object-fit: contain -z-[1]"
          fill
          quality={100}
        />
        <div className="flex flex-col items-center">
          <div
            className={clsx(
              fonts.kanit.className,
              "text-center font-semibold text-4xl lg:text-[54px] w-[53%] lg:leading-[54px] mt-36"
            )}
          >
             <Trans t={t}  i18nKey="intro">
             TRADE SMARTER FASTER & SAFER
            </Trans>
            
          </div>
          <div
            className={clsx(
              fonts.inter.className,
              "text-center font-thin text-[16px] break-words w-[60%] mt-4"
            )}
          >
             <Trans t={t}  i18nKey="intro-content">
             Welcome to TON Fusion, the premier DEX aggregator built on TONSquare, offering lightning-fast swaps, high-yield staking, and deep liquidity pools.
            </Trans>
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
