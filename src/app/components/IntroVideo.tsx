"use client";

import { useEffect, useRef, useState } from "react";



export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const isVideoPlaying = (video: HTMLVideoElement) => {
    return (
      video.currentTime > 0 &&
      !video.paused &&
      !video.ended &&
      video.readyState > 2
    );
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const isPlaying = isVideoPlaying(video);
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onended = (ev) => {
        setIsPlaying(false);
      };
    }
  }, []);

  return (
    <div className="relative py-20 ">
      <div className="container max-w-screen-xl bg-form-background pb-16 rounded-lg">
        <div className="flex flex-col items-center pt-16">
          <div className="text-center font-semibold text-[54px] leading-[54px]">
            THE POWER OF AGGREGATION
          </div>
          <div className="text-center font-light text-[16px] break-words w-[60%] m-7">
            TON Fusion’s intelligent routing system analyzes multiple DEXs in
            real-time to find the optimal trading path. This ensures you
            consistently receive the best possible price for your trades.
            Combined with our deep liquidity pools, you can execute large orders
            with minimal market impact.
          </div>
        </div>

        <div className="max-w-screen-md mx-auto w-full h-fit clipped relative border-8 border-solid border-gray-500 rounded-xl ">
          <video
            ref={videoRef}
            className="w-full aspect-video"
            poster="/videos/poster.png"
            onClick={toggleVideo}
            loop={false}
          >
            <source src="/videos/crypto.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
          <div className="flex items-center justify-center w-12 h-12 bg-slate-100 text-[#3636cc] rounded-full z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              d="M5 3L19 12L5 21V3Z"
            />
          </svg>
        </div>
                 
          )}
        </div>
      </div>
    </div>
  );
}

