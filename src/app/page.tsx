import IntroVideo from "./components/IntroVideo";
import Backer from "./components/Backer";
import Intro from "./components/Intro";
import News from "./components/News";
import Roadmap from "./components/Roadmap";
import Tokenmics from "./components/Tokenmics";

import Footer from "./components/Footer";

import "react-multi-carousel/lib/styles.css";

export default function Home() {
  return (
    <>
      <Intro />
      <div style={{background:"#030712",}}>
        <News />
        <IntroVideo />
        <Backer />
        <Roadmap />
        <div className="relative text-[#534532]">
          <div className="absolute z-0 left-0 right-0 bottom-0 bg-[url('/images/beach2-mobile.webp')] md:bg-[url('/images/beach2.webp')] bg-no-repeat bg-top bg-cover h-[23%] md:h-[42%]"></div>
          <div className="relative z-[1]">
            <Tokenmics />
            <Footer />
          </div>
        </div>
      </div>
      {/* <div className="">
        <svg className="absolute w-0 h-0">
          <clipPath id="intro-video-clippath" clipPathUnits="objectBoundingBox">
            <path d="M1,0.931 L0.987,0.932 C0.985,0.933,0.984,0.933,0.982,0.933 L0.979,0.934 C0.973,0.934,0.967,0.935,0.96,0.936 C0.96,0.936,0.96,0.936,0.959,0.936 C0.903,0.944,0.796,0.958,0.691,0.971 C0.57,0.986,0.453,0.999,0.418,1 C0.376,1,0.246,0.969,0.145,0.942 C0.071,0.922,0.011,0.905,0.011,0.905 L0.026,0.592 L0.145,0.553 H0.032 L0.034,0.482 H0.093 L0.034,0.438 C0.034,0.438,0.035,0.182,0,0 C0,0,0.047,0.01,0.108,0.022 C0.204,0.041,0.335,0.066,0.381,0.068 C0.382,0.068,0.383,0.068,0.383,0.068 C0.404,0.069,0.449,0.065,0.507,0.059 C0.563,0.053,0.632,0.045,0.698,0.036 C0.838,0.019,0.969,0,0.969,0 L0.957,0.115 L0.921,0.148 H0.954 C0.954,0.148,0.953,0.176,0.952,0.223 C0.951,0.296,0.95,0.413,0.954,0.535 C0.959,0.676,0.971,0.823,0.996,0.916 L0.996,0.916 C0.997,0.921,0.999,0.926,1,0.931 H1"></path>
          </clipPath>
          <clipPath id="Learn-clippath" clipPathUnits="objectBoundingBox">
            <path d="M0.204,0.932 L0.204,0.932 L0.204,0.932 L0.014,0.567 C0.014,0.567,0.014,0.567,0.014,0.567 C0.005,0.55,0,0.526,0,0.5 C0,0.474,0.005,0.449,0.014,0.432 L0.204,0.067 L0.204,0.067 C0.213,0.05,0.229,0.033,0.25,0.02 C0.27,0.007,0.292,0,0.31,0 H0.69 C0.708,0,0.73,0.007,0.75,0.02 C0.771,0.033,0.787,0.05,0.796,0.067 L0.796,0.067 L0.986,0.432 C0.995,0.449,1,0.474,1,0.5 C1,0.526,0.995,0.55,0.986,0.567 C0.986,0.567,0.986,0.567,0.986,0.567 L0.796,0.932 L0.796,0.932 L0.796,0.932 C0.787,0.949,0.77,0.967,0.75,0.98 C0.73,0.993,0.708,1,0.69,1 H0.31 C0.292,1,0.27,0.993,0.25,0.98 C0.23,0.967,0.213,0.949,0.204,0.932"></path>
          </clipPath>
        </svg>
      </div> */}
    </>
  );
}
