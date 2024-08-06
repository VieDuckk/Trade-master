"use client";
import IntroVideo from "./components/IntroVideo";
import Backer from "./components/Backer";
import Intro from "./components/Intro";
import News from "./components/News";
import Roadmap from "./components/Roadmap";
import Tokenmics from "./components/Tokenmics";

import Footer from "./components/Footer";
import "react-multi-carousel/lib/styles.css";

export default function Home({ params }: { params: { lng: string } }) {
  return (
    <>
      <Intro params={params} />
      <div style={{ background: "#030712" }}>
        <News params={params} />
        <IntroVideo params={params} />
        <Backer params={params} />
        <Roadmap params={params} />
        <div className="relative text-[#534532]">
          <div className="relative z-10">
            <Tokenmics params={params} />
            <Footer params={params} />
          </div>
        </div>
      </div>
    </>
  );
}
