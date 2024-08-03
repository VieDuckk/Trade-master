export type NavConfigItem = {
  id: string;
  href: string;
  title: string;
  icon: string;
  comingSoon: boolean;
  external: boolean;
};

export const navigationConfig: NavConfigItem[] = [
  {
    id: "home",
    href: "#home",
    title: "Home",
    icon: "/icons/home.svg",
    comingSoon: false,
    external: false,
  },
  {
    id: "swap",
    href: "#swap",
    title: "Swap",
    icon: "/icons/swap.svg",
    comingSoon: false,
    external: false,
  },
  {
    id: "liquidity",
    href: "#liquidity",
    title: "Liquidity",
    icon: "/icons/liquidity.svg",
    comingSoon: false,
    external: false,
  },
  {
    id: "retroactive-program",
    href: "#retroactive-program",
    title: "Retroactive Program",
    icon: "/icons/retroactive-program.svg",
    comingSoon: false,
    external: false,
  },
  {
    id: "portfolio",
    href: "#portfolio",
    title: "Portfolio",
    icon: "/icons/portfolio.svg",
    comingSoon: false,
    external: false,
  },
];
