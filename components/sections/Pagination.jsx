"use client";

import React, { useState } from "react";
import Image from "next/image";
import { authorData } from "@/data/db-author";

const CriticsSection = () => {
  // Cari səhifə state-i
  const [currentPage, setCurrentPage] = useState(1);
  
  // Hər səhifədə neçə kart göstərilsin?
  const itemsPerPage = 3;

  // Ümumi səhifə sayını hesablayırıq
  const totalPages = Math.ceil(authorData.length / itemsPerPage);

  // Səhifə dəyişəndə səhifəni yuxarı sürüşdürmək üçün funksiya
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // İstəsən bunu silə bilərsən
  };

  // Massivi cari səhifəyə uyğun kəsirik
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCritics = authorData.slice(startIndex, endIndex);

  // Səhifə nömrələrinin massivini yaradırıq [1, 2, 3...]
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        
        {/* Səhifə Başlığı */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-full">
            Ədəbiyyat Dünyası
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight">
            Dahilərdən Şah Əsərlərə Rəylər
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xl mx-auto font-light">
            Dünya şöhrətli yazıçı və tənqidçilərin klassik əsərlər haqqında söylədiyi unudulmaz fikirlər.
          </p>
        </div>

        {/* Kartlar (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCritics.map((critic, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between relative transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              {/* Sitat İkonu */}
              <span className="absolute top-6 right-8 text-6xl text-emerald-100/70 font-serif pointer-events-none select-none">
                “
              </span>

              <div>
                {/* Haqqında danışılan Kitab */}
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50/60 px-2.5 py-1 rounded-md inline-block mb-4">
                  {critic.title}
                </span>

                {/* Tənqidçinin Sözü */}
                <p className="text-gray-700 font-medium italic leading-relaxed text-base relative z-10">
                  {critic.critic_quote}
                </p>
              </div>

              {/* Tənqidçi Profili */}
              <div className="flex items-center gap-4 mt-8 pt-4 border-t border-gray-50">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-100 shadow-sm bg-gray-100">
                  <Image
                    src={critic.critic_image}
                    alt={critic.critic_name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm tracking-tight">
                    {critic.critic_name}
                  </h4>
                  <span className="text-xs text-gray-400 font-medium block">
                    Ədəbiyyat Tənqidçisi
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* PAGINATION DÜYMƏLƏRİ */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {/* Əvvəlki Düyməsi */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ◄ Əvvəlki
            </button>

            {/* Səhifə Nömrələri */}
            <div className="flex items-center gap-1">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                    currentPage === page
                      ? "bg-[#064e3b] text-white shadow-md shadow-emerald-900/20"
                      : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Növbəti Düyməsi */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Növbəti ►
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default CriticsSection;