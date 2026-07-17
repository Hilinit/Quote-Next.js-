"use client";
import Catalogs from '@/components/sections/Catalogs'
import BookCards from '@/components/ui/BookCards'
import Search from '@/components/ui/Search'
import { booksData } from '@/data/db-books'
import { useState } from 'react'

const Catalog = () => {
  const [selectCat,setSelectCat] = useState('')
    const filterData = selectCat ? booksData.filter(book => book.category.toLowerCase() === selectCat.toLowerCase()) : []
  return (
    <div className="pt-30">
      <Search inputClass="bg-white/40 text-white border-white/90" />
      <BookCards books={filterData} 
        title={selectCat ? `${selectCat} Kateqoriyası` : ""}/>
      <Catalogs selectCat={selectCat} setSelectCat={setSelectCat}/>
    </div>
  )
}
export default Catalog
