import React from 'react'
import BookCards from "@/components/ui/BookCards";
import Hero from "@/components/sections/Hero";
import Pagination from "@/components/sections/Pagination";
import { booksData } from "@/data/db-books";
const isBestseller = booksData.filter(item => item.isBestseller)
const Home = () => {
  return (
    <div>
       <Hero />
       {/* <Pagination/> */}
       <BookCards books={isBestseller} title={"BestSellers"}/>
    </div>
  )
}

export default Home
