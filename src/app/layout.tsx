import "./globals.css";

import fonts from "@/configs/fonts";
import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://piraterealm.io"),
  title: "Welcome To Trade Master",
  description:
    "Welcome to TON Fusion, the premier DEX aggregator built on TONSquare, offering lightning-fast swaps, high-yield staking, and deep liquidity pools.",
  twitter: {
    title: "Welcome To Trade Master",
    description:
      "Welcome to TON Fusion, the premier DEX aggregator built on TONSquare, offering lightning-fast swaps, high-yield staking, and deep liquidity pools.",
    site: "@piraterealm",
    images: "/covers/main.jpeg",
  },
  openGraph: {
    title: "Welcome To Trade Master",
    description:
      "Welcome to TON Fusion, the premier DEX aggregator built on TONSquare, offering lightning-fast swaps, high-yield staking, and deep liquidity pools.",
    images: "/covers/main.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.kanit.className}>
        <Header />
        <main className="overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
