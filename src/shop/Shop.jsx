import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
const Shop = () => {
  const [books,setBooks]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setBooks(data));
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center'>All Books are here</h2>
        <div className='grid gap-8 my-12 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 grid-cols-1'>
          {
            books.map((book)=>(
                <Card key={book._id}>
                  <img src={book.imageURL} alt="" className='h-96' />
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {book.bookTitle}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {book.bookDescription}
                  </p>
                  <Link to={`/book/${book._id}`}  className='bg-blue-700 text-white font-semibold px-5 py-2 rounded'>Buy Now</Link>
                </Card>
            ))
          }
        </div>
    </div>
  )
}

export default Shop