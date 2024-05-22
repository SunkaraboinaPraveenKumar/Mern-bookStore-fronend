import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    // Destructure data from useLoaderData hook
    const { bookTitle, authorName, imageURL, bookDescription } = useLoaderData();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="mt-10 px-4 lg:px-24">
            <div className="flex flex-col lg:flex-row">
                {/* Left side with image, book title, and author */}
                <div className="lg:w-1/2 lg:pr-8 mb-8">
                    <img src={imageURL} alt="" className="h-auto lg:h-96 mx-auto mb-4 mt-10" />
                    <h2 className="text-2xl font-bold mb-2">{bookTitle}</h2>
                    <p className="text-lg text-gray-700 mb-4">By {authorName}</p>
                </div>

                {/* Right side with book description and add to cart button */}
                <div className="lg:w-1/2 lg:pl-8 mt-10">
                    <h3 className="text-2xl font-bold mb-4">Description</h3>
                    <p className="text-lg text-gray-700 mb-8">{bookDescription}</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-10">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
