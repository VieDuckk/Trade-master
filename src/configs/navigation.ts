export type NavConfigItem = {
  id: string;
  href: string;
  title: string;
  icon: string;
};

export const navigationConfig: NavConfigItem[] = [
  {
    id: "home",
    href: "#home",
    title: "Home",
    icon: "/icons/home.svg",
  },
  {
    id: "swap",
    href: "#swap",
    title: "Swap",
    icon: "/icons/swap.svg",
  },
  {
    id: "liquidity",
    href: "#liquidity",
    title: "Liquidity",
    icon: "/icons/liquidity.svg",
  },
  {
    id: "retroactive-program",
    href: "#retroactive-program",
    title: "Retroactive Program",
    icon: "/icons/retroactive-program.svg",
  },
  {
    id: "portfolio",
    href: "#portfolio",
    title: "Portfolio",
    icon: "/icons/portfolio.svg",
  },
];
