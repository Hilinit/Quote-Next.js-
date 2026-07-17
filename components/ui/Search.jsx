"use client";

import React, { useState } from "react";
import { booksData } from "@/data/db-books";
import Link from "next/link";
import Image from "next/image";

const Search = ({ inputClass = ""}) => {
  const [search, setSearch] = useState("");

  const filteredBooks = booksData.filter((book) => book.title.toLowerCase().includes(search.toLowerCase() || book.genre.toLowerCase().includes(search.toLowerCase()) ))

  return (
    <div className="container mx-auto relative mb-10">
      <input type="search" value={search} placeholder="Janr və ya Kitab axtar" onChange={(e) => setSearch(e.target.value)} className={`w-full border-4 text-white border-white px-4 py-6 rounded-lg outline-none hover:shadow-[0_0_25px_rgba(6,78,59,0.7)] ${inputClass}`}/>
      {search && (
        <div className="absolute top-20 left-0 w-full bg-white/99 rounded-lg shadow-xl border z-50 overflow-hidden">
          {filteredBooks.length > 0 ? (
            <>
              {filteredBooks.slice(0, 5).map((item) => (
                <Link key={item.id} href={`/book/${item.name}`} className="block">
                  <div className="flex items-center gap-4 p-3 hover:bg-gray-100 transition">
                    <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.title} fill className="object-cover"/>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800"> {item.title} </h3>
                      <p className="text-sm text-gray-500">{item.author}</p>
                      <p className="text-sm font-bold text-[#064e3b]">{item.price} ₼ </p>
                    </div>
                  </div>
                </Link>
              ))}
              {filteredBooks.length > 5 && (
                <button className="w-full py-3 text-center border-t hover:bg-gray-100">
                  Bütün nəticələrə bax
                </button>
              )}
            </>
          ) : (
            <p className="p-4 text-gray-500">
              Kitab tapılmadı
            </p>
          )}
        </div>
      )}
    </div>
  );}

export default Search;