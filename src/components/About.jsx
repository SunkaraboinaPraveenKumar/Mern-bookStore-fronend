import React, { useEffect } from 'react'
import FavBookImg from '../assets/banner-books/favoritebook.jpg'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className="min-h-screen flex items-center justify-center p-6 mt-10">
      <div className='md:w-1/2'>
        <img src={FavBookImg} alt="" className='rounded md:w-10/12' />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mt-10">
        <h1 className="text-4xl font-bold text-center mb-4 text-indigo-600">About Our Book Store</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our Book Store Inventory! We are passionate about books and aim to provide a comprehensive selection of literature for all book lovers. Our inventory is meticulously curated to include a diverse range of genres and authors.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to create an inclusive and engaging environment where readers of all ages can find books that inspire, educate, and entertain. We believe in the power of reading to transform lives and are committed to promoting literacy and lifelong learning.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-500 mb-2">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>Customer satisfaction</li>
          <li>Quality and diversity of selection</li>
          <li>Community engagement</li>
          <li>Promoting literacy</li>
        </ul>
        <p className="text-lg text-gray-700">
          Thank you for visiting our Book Store Inventory. We hope you find the perfect book that resonates with you. Happy reading!
        </p>
      </div>
    </div>
  )
}

export default About
