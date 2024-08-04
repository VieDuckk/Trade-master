import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="container flex flex-col min-h-[526px] justify-between bg-primary-background text-white p-6 relative">
      <div className="flex flex-col justify-start items-start ml-8 ">
        <div className="text-left mb-8">
          <h1 className="text-[54px] font-semibold ">JOIN OUR COMMUNITY</h1>
        </div>
        <div className="flex space-x-4">
          <a href="https://t.me/yourtelegram" className="flex">
            <Button className="flex items-center text-sm border h-10 border-white rounded-xl bg-transparent">
              <Image
                src="/icons/telegram.svg"
                alt="telegram"
                width={20}
                height={20}
                quality={100}
              />
              <span className="ml-2">Telegram</span>
            </Button>
          </a>
          <a href="https://twitter.com/yourtwitter" className="flex">
            <Button className="flex items-center text-sm border h-10 border-white rounded-xl bg-transparent">
              <Image
                src="/icons/twitter.svg"
                alt="twitter"
                width={20}
                height={20}
                quality={100}
              />
              <span className="ml-2">Twitter</span>
            </Button>
          </a>
        </div>
      </div>
      <div className="w-full mb-4 flex justify-between items-end">
        <Image src="/logo.svg" alt="Logo" width={115} height={40} />
        <p className="text-sm mx-8">© 2024 Tonfusion. All rights reserved.</p>
      </div>
      <div className="absolute -bottom-[280px] -right-[424px] lg:-bottom-[280px] lg:-right-[350px] w-[574px] h-[540px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 z-0">
        <Image
          src="/images/light.png"
          alt="Background Image 2"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>
    </div>
  );
};

export default Footer;
