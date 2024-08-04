import { Inter, Kanit, Cinzel } from "next/font/google";
import localFont from "next/font/local";

export const kanitFont = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const cinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--heading-font",
});

export const interFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--body-font",
});

const clashDisplayFont = localFont({
  src: [
    {
      path: '../../public/fonts/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    // Thêm các biến thể khác nếu có
  ],
  variable: '--font-clash-display',
});

const fonts = {
  kanit: kanitFont,
  cinzel: cinzelFont,
  inter: interFont,
  clashDisplay: clashDisplayFont
};

export default fonts;