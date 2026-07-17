import React from "react";
import Image from "next/image";
import "@/app/globals.css";
import Link from "next/link";

const BookCards = ({ books, title }) => {

    
  return (
    <div className="mx-auto px-4 py-8 fadeInUp">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl text-center m-10 border-b-2 font-extrabold text-white/80 leading-[1.1]">{title}</h2>
      <div key={title} className="max-w-6xl mx-auto group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books?.map((item, index) => (
            <div key={item.id} style={{ animationDelay: `${index * 100}ms` }} 
            className="animate-fade-in-up opacity-0 hover:shadow-[0_0_35px_rgba(255,255,255,0.9)] h-full border border-[#064e3b] hover:border border-white/80 transition bg-black/90 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105" 
           >
              <div className="relative w-full h-64">
              <Link href={`/book/${item.name}`}><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" /></Link>
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">{item.title} | {item.author}</h3>
                <p className="text-xs font-semibold text-gray-400 mt-2">JANR: {item.genre} | Səhifə sayı: {item.pageCount}</p>
                <p className="text-gray-500 mt-4">{item.quote}</p>
                <h4 className="mt-4 font-bold"> Qiymət: {item.price} ₼ </h4>
                <div className="flex justify-between flex-wrap">
                <button className="px-5 py-2 mt-3 border rounded-lg transition hover:shadow-[0_0_35px_rgba(255,255,255,0.7)]">
                  Səbətə Əlavə Et
                </button>
                <Link href={`/book/${item.name}`}>
                  <button className="px-5 py-2 mt-3 border rounded-lg transition hover:shadow-[0_0_35px_rgba(255,255,255,0.7)]">
                    Ətraflı bax
                  </button>
                </Link>
                </div> 
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default BookCards
