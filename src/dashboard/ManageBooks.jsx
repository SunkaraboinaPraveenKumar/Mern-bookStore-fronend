import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("https://mern-book-store-backend-1.onrender.com/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  // delete a book
  const handleDelete = (id) => {
    fetch(`https://mern-book-store-backend-1.onrender.com/book/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
          alert("Book is deleted successfully!!");
          // update the state to remove the deleted book
          setAllBooks(allBooks.filter(book => book._id !== id));
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Book</h2>
      {/* table for book data */}
      <div className="overflow-x-auto">
        <Table className='lg:w-[1024px]'>
          <Table.Head>
            <Table.HeadCell>ID No.</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit or Manage</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {
              allBooks.map((book) => (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={book._id}>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {book._id}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {book.bookTitle}
                  </Table.Cell>
                  <Table.Cell>{book.authorName}</Table.Cell>
                  <Table.Cell>{book.category}</Table.Cell>
                  <Table.Cell>₹ 10.00</Table.Cell>
                  <Table.Cell className='flex gap-1'>
                    <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>
                      Delete
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageBooks;
