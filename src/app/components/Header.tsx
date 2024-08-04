"use client";
import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { useOnClickOutside } from "usehooks-ts";
import { Popover, PopoverBackdrop, PopoverButton, PopoverPanel } from "@headlessui/react";

import { navigationConfig } from "@/configs/navigation";
import LogoImg from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Button, {ButtonLink} from "./Button";


function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen((s) => !s);
  };

  useOnClickOutside(menuPanelRef, () => {
    setIsOpen(false);
  });

  return (
    <Popover>
      <PopoverButton as={Fragment}>
        <Button aria-label="Menu" onClick={toggleMenu} className="text-sm border h-10 border-white rounded-3xl bg-transparent text-white z-10">
        <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="3" fill="white" />
            <rect y="8" width="24" height="3" fill="white" />
            <rect y="16" width="24" height="3" fill="white" />
          </svg>
        </Button>
      </PopoverButton>
      <PopoverBackdrop className="fixed inset-0 bg-black/15" />
      <PopoverPanel
        transition
        anchor="bottom end"
        className="pt-2 z-[100] origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
      > 
          <div className="rounded-3xl bg-transparent p-1">
            <nav className="flex flex-col gap-1">
              {navigationConfig.map((item) => {
                return (
                  <ButtonLink
                    key={item.id}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-center font-medium bg-white text-black"
                  >
                    <Image src={item.icon} alt="logo" width={20} height={22} quality={100} className="mr-1 " />
                    {item.title}
                  </ButtonLink>
                );
              })}
            </nav>
          </div>
      </PopoverPanel>
      {/* <div ref={menuPanelRef} className={clsx("absolute")}></div> */}
    </Popover>
  );
}

export default function Header() {
  return (
    <header className="relative z-50 h-0">
      <div className="container max-w-full">
        <div className="flex items-center justify-between w-full gap-0 lg:gap-12 py-4">
          <Link href={"/"}>
            <Image src={LogoImg} alt="logo" priority className="min-w-28 w-28 h-8 sm:h-10" />
          </Link>
          <nav className="items-center flex-grow hidden gap-6 lg:flex justify-center">
            {navigationConfig.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-lg text-gray-400 hover:bg-white/15 hover:text-white transition-transform duration-300 hover:filter hover:invert hover:brightness-0 hover:contrast-100 "
                >
                  <Image src={item.icon} alt="logo" width={30} height={22} quality={100} className="mr-1 "  />
                  {item.title}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-3 sm:gap-4">
            <Button className="flex items-center justify-center min-w-32 h-9 ml-2 bg-button-gradient border border-white border-opacity-20 rounded-[20px] lg:hover:-translate-y-1">
              Connect wallet
            </Button>
          </div>
          <span className="lg:hidden">
              <MobileMenu />
            </span>
        </div>
      </div>
    </header>
  );
}
