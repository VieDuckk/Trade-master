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
          <div className="relative z-[1]">
            <Tokenmics />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
