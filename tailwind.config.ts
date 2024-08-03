import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "button-gradient": "linear-gradient(180deg, #3B82F6 0%, #1E40AF 56.56%, #3B82F6 100%);",
        "form-background": "linear-gradient(180deg, rgba(30, 64, 175, 0.5) -19.67%, rgba(0, 0, 0, 0.15) 129.79%);",
        "form2-background": "linear-gradient(123.11deg, #000000 38.75%, rgba(59, 130, 246, 0.5) 120.49%);",
        "roadmap-background": "linear-gradient(183.33deg, #030712 38.75%, rgba(59, 130, 246, 0.5) 120.49%);",
        "chart-background": "linear-gradient(183.33deg, #030401 -4.81%, #93C5FD 207.12%);",        
        "primary-background": "#030712",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },

    },
  },
  plugins: [],
};
export default config;
