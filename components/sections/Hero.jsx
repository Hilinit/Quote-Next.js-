
import React from "react";
import Search from "@/components/ui/Search"

const Hero = () => {
  return (
    <div 
      style={{backgroundImage: "url('https://i.pinimg.com/1200x/bf/80/00/bf80007ef2548f820dc121c6bd064767.jpg')"}} 
      className="relative min-h-[750px] flex items-center justify-center overflow-hidden pt-40 w-full">
      <div className="absolute  z-10"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 z-20">
      </div>
      <div className="max-w-screen-xl mx-auto w-full px-6 sm:px-8 text-center relative z-20 flex flex-col items-center justify-center">
        <div className="w-full absolute bottom-75 lg:bottom-85 mb-8">
        <Search inputClass="bg-white/10 text-white border border-white/40 backdrop-blur-sm focus:border-white/80"  />
          </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#fbf6ee] leading-[1.1] tracking-tight grayscale hover:grayscale-0 transition-all duration-700 ">
          Sənin Növbəti <br /> <span className="text-emerald-400">Dünyanı Kəşf Et</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Biz sadəcə kitab satmırıq — düşüncənizi formalaşdıran və sizinlə
          əbədi qalacaq <span className="text-white font-semibold italic border-b-2 border-emerald-500/50"> təcrübələr </span> təqdim edirik.
        </p>
      </div>
      <div className="absolute bottom-10 right-5 sm:right-10  bg-emerald-500/10 backdrop-blur-md p-4 rounded-lg border border-white/10 select-none">
        <p className="text-white text-sm font-bold">+50,000 Nəşr</p>
        <p className="text-emerald-400 text-xs">Hər gün yenilənir</p>
      </div>
    </div>
  );
};
export default Hero;