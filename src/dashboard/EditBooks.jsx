import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const bookData = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Suspense",
    "Horror",
    "Love",
    "Fantasy",
    "History",
    "Business",
    "Children",
    "Self-help",
    "Memoir",
    "Travel",
    "Religious",
    "Art",
    "Design",
    "Motivational"
  ];

  const [bookTitle, setBookTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [category, setCategory] = useState(bookCategories[0]);
  const [bookDescription, setBookDescription] = useState('');
  const [bookPDFUrl, setBookPDFUrl] = useState('');

  useEffect(() => {
    if (bookData) {
      setBookTitle(bookData.bookTitle);
      setAuthorName(bookData.authorName);
      setImageURL(bookData.imageURL);
      setCategory(bookData.category);
      setBookDescription(bookData.bookDescription);
      setBookPDFUrl(bookData.bookPDFUrl);
    }
  }, [bookData]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedBook = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFUrl
    };

    fetch(`https://mern-book-store-backend-1.onrender.com/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedBook)
    })
      .then(res => res.json())
      .then(data => {
        alert("Book is updated successfully!!");
        // Form reset
        setBookTitle('');
        setAuthorName('');
        setImageURL('');
        setCategory(bookCategories[0]);
        setBookDescription('');
        setBookPDFUrl('');
      });
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book Data</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1000px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" value={authorName} onChange={(e) => setAuthorName(e.target.value)} required />
          </div>
        </div>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name="categoryName" className='w-full rounded' value={category} onChange={(e) => setCategory(e.target.value)}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" type="text" name="bookDescription" placeholder='Leave a Description' className='w-full' rows={6} value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFUrl" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFUrl" name="bookPDFUrl" type="text" placeholder="Book PDF URL" value={bookPDFUrl} onChange={(e) => setBookPDFUrl(e.target.value)} required />
        </div>
        <Button type="submit" className='mt-5'>
          Update The Book
        </Button>
      </form>
    </div>
  );
}

export default EditBooks;
