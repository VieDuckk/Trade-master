import { Kanit, Cinzel } from "next/font/google";

export const kanitFont = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const cinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--heading-font",
});

const fonts = {
  kanit: kanitFont,
  cinzel: cinzelFont,
};

export default fonts;

