import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars, FaBasketShopping, FaHeart } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <div
        style={{ backgroundImage:"url('https://i.pinimg.com/1200x/bf/80/00/bf80007ef2548f820dc121c6bd064767.jpg')"}} className="flex fixed z-50  items-center justify-between px-5 py-4 w-full ">
        <Link href="/home"><Image src="/logo.png" alt="logo" width={120} height={100} className="flex items-center justify-start lg:justify-start"/>
        </Link>

        <div className="hidden lg:flex cursor-pointer">
          <div className="flex space-x-6 font-semibold text-white text-[18px]">
            <Link href="/home" className="p-1 rounded-md hover:font-bold hover: hover:scale-150 text-white transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]" > Ana Səhifə</Link>
            <Link href="/catalog" className="p-1 rounded-md hover:font-bold hover: hover:scale-150 text-white transition-all hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]"  > Kataloq </Link>
            <Link href="/about" className="p-1 rounded-md hover:font-bold hover: hover:scale-150 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] text-white transition-all"
            > Haqqımızda</Link>
          </div>
        </div>
        <div className="flex items-center justify-evenly gap-10  font-semibold cursor-pointer">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">

            <div className="flex lg:hidden items-center justify-center px-4 py-2 bg-white/20 hover:bg-white/40 text-white font-medium rounded-xl border border-white/10 transition-all active:scale-95">
              <FaBars className="text-[25px]" />
            </div>

            <div className="hidden  lg:flex  gap-10">

              <div className="relative flex items-center justify-center px-4 py-2 bg-white/20 hover:bg-white/40 text-white font-medium rounded-xl border border-white/10 transition-all active:scale-95">
                <FaBasketShopping className="text-[25px] text-white" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center"></span>
              </div>

              <div className="flex items-center justify-center px-4 py-2 bg-white/20 hover:bg-white/40 text-white font-medium rounded-xl border border-white/10 transition-all active:scale-95">
                <FaHeart className="text-[25px]" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
