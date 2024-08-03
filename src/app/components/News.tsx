/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import { LearnButton } from "./Button";
import { news } from "@/configs/news";
import fonts from "@/configs/fonts";
import clsx from "clsx";
import "swiper/css";

import type { Swiper as SwiperType } from "swiper/types";

export default function News() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="news" className="relative text-[#534532] py-14">
      <div className="container relative z-[1]">
        <h2
          className={clsx(
            fonts.cinzel.className,
            "capitalize font-bold text-3xl text-center text-white sm:text-4xl md:text-5xl !leading-tight mb-10"
          )}
        >
          WHY CHOOSE TON FUSION?
        </h2>

        <div className="relative px-12">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            loop={false}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            initialSlide={1}
            className="mySwiper"
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {news.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className={clsx(
                    "bg-form-background text-white rounded-lg overflow-hidden h-full transition-all duration-300 pb-2"
                  )}
                >
                  <div className="flex flex-col gap-6 h-full justify-between">
                    <div className="flex-1">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-48 object-cover drop-shadow-md"
                      />
                    </div>
                    <div className="space-y-2 flex flex-col p-6">
                      <h4
                        className={clsx(
                          fonts.cinzel.className,
                          "capitalize font-bold text-xl sm:text-2xl !leading-tight"
                        )}
                      >
                        {item.title}
                      </h4>
                      <p className="text-base">{item.description}</p>
                    </div>
                    <div className="p-6">
                      <LearnButton className="w-[100%]"/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="custom-swiper-button-prev flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full absolute z-10 left-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div className="custom-swiper-button-next flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full absolute z-10 right-2 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <div className="swiper-pagination flex justify-center items-center gap-1 mt-5"></div>
        </div>
      </div>
    </section>
  );
}
