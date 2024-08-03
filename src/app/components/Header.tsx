"use client";

import { navigationConfig } from "@/configs/navigation";
import LogoImg from "@/public/logo.svg";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";


export default function Header() {
  return (
    <header className="relative z-50 h-0">
      <div className="container">
        <div className="flex items-center justify-between gap-12 py-4">
          <Link href={"/"}>
            <Image src={LogoImg} alt="logo" priority className="w-28 h-10 sm:h-10" />
          </Link>
          <nav className="items-center flex-grow hidden gap-6 lg:flex justify-center">
            {navigationConfig.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-lg text-gray-400 hover:bg-white/15 hover:text-white transition-transform duration-300 hover:filter hover:invert hover:brightness-0 hover:contrast-100 "
                >
                  <Image src={item.icon} alt="logo" width={20} height={22} quality={100} className="mr-1 "  />
                  {item.title}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3 sm:gap-4">
            <Button className="flex items-center justify-center h-9 bg-button-gradient border border-white border-opacity-20 rounded-[20px] hover:-translate-y-1">
              Connect wallet
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
