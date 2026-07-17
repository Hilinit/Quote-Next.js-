import React from "react";
import { booksData } from "@/data/db-books";
import Image from "next/image";

const Detail = async ({ params }) => {
  const { name } = await params;
  const book = booksData.find((item) => item.name === name);
  if (!book) {
    return (
      <div className="container mx-auto px-4 pt-100 text-center">
        <h1 className="text-3xl font-extrabold text-white">Kitab tapılmadı</h1>
        <p className="text-gray-500 mt-2">Axtardığınız kitab bazada mövcud deyil.</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 pt-30 pb-10 max-w-6xl ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-black/90 rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.04)] p-6 md:p-12 border border-gray-300">
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-4">
          <div className="relative w-full aspect-[3/4] max-w-[400px] lg:max-w-none rounded-2xl overflow-hidden shadow-2xl">
            <Image src={book.image} alt={book.title} fill priority sizes="(max-width: 1024px) 100vw, 400px" className="object-cover"/>{book.isBestseller && (
              <span className="absolute top-4 left-4 bg-amber-500 text-white font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md backdrop-blur-sm bg-opacity-90">
                Çox Satan
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-2 bg-emerald-50/40 px-4 py-2 rounded-xl border border-gray-100 w-fit">
            <span className="text-amber-500 text-lg">★</span>
            <span className="font-bold text-gray-800 text-sm">{book.rating}</span>
            <span className="text-gray-400 text-xs">/ 5.0 Qiymətləndirmə</span>
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-emerald-50 text-[#064e3b] font-medium rounded-full text-xs uppercase tracking-wider">{book.category}</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 font-medium rounded-full text-xs">{book.genre}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              {book.title}
            </h1>
            <p className="text-xl text-gray-500 mt-2 font-medium">Müəllif: 
              <span className="text-gray-800 font-semibold">{book.author}</span>
            </p>
            <hr className="my-6 border-gray-100" />
            {book.quote && (
              <blockquote className="relative border-l-4 border-emerald-700 bg-emerald-50/40 p-4 rounded-r-xl my-6">
                <p className="text-gray-700 italic font-medium leading-relaxed">
                  {book.quote}
                </p>
              </blockquote>
            )}
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-2">Kitab Haqqında</h3>
              <p className="text-white/90 leading-relaxed text-base font-light">
                {book.description}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 bg-emerald-50/40 p-4 rounded-2xl border border-gray-100">
              <div>
                <span className="text-xs text-gray-400 block mb-0.5">Səhifə Sayı</span>
                <span className="font-semibold text-gray-800 text-sm">{book.pageCount} səhifə</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block mb-0.5">Nəşriyyat</span>
                <span className="font-semibold text-gray-800 text-sm">{book.publisher}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block mb-0.5">Nəşr İli</span>
                <span className="font-semibold text-gray-800 text-sm">{book.year}</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wider block">Satış Qiyməti</span>
              <h2 className="text-4xl font-black text-emerald-900 tracking-tight">
                {book.price.toFixed(2)} <span className="text-2xl font-semibold">₼</span>
              </h2>
            </div>
            <button className="w-full sm:w-auto px-10 py-4 bg-[#064e3b]/70 text-white rounded-xl font-bold tracking-wide transition-all duration-300  hover:scale-[1.03] hover:shadow-[0_12px_30px_rgba(6,78,59,0.3)] active:scale-[0.98]">
              Səbətə əlavə et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;


// import React from 'react'
// import BookDetail from '@/components/BookDetail'
// import { booksData } from "@/data/db-books";
// const BookNameDetail = () => {
//   return (
//     <BookDetail  booksData={ booksData }/>
//   )
// }

// export default BookNameDetail