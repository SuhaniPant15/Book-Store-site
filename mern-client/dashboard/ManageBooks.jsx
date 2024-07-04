import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(  () => {
    fetch("http://localhost:5000/upload.book").then(res => res.json()).then(data => setAllBooks(data));
  }, [])
  return (
    <div className='px-4 my-12'>
      <h2 className='text-3xl font-bold text-center'>Manage Your Books</h2>
      <div className='shadow-2xl bg-white'>
      <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell>1.</Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>
      </div>
      
    </div>

    
  )
}

export default ManageBooks