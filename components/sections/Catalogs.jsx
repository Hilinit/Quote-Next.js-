"use client";

import React, { useState } from 'react'
import { booksData,categoriesData} from '@/data/db-books'

// const catagory = [... new Set(booksData.map(book => book.category))]

const Catalogs = ({ selectCat, setSelectCat }) => {

  return (
    <div className="container mx-auto pb-5 p-5">
      <div  className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {categoriesData.map((cat) => (
          <div onClick={() => setSelectCat(cat.name)} key={cat.id} className="relative h-55 overflow-hidden rounded-xl group"><div
              className="absolute inset-0 bg-cover bg-center blur-[2px] scale-105 transition-all duration-500 group-hover:blur-0 group-hover:scale-120" style={{ backgroundImage: `url(${cat.image})`}}></div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition"></div>
            <h1 className="relative z-10 h-full flex items-center justify-center text-white text-2xl font-bold">
              {cat.title}
            </h1>
          </div>
        ))}
      </div>
  </div>
  )
}
export default Catalogs
