import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Fantasy", 
    "Science Fiction",
    "Mystery",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-Help",
    "Memoir",
    "Buisness",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, SetSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (Event) =>{
    console.log(Event.target.value);
    setSelectedBookCategory(Event.target.value);
  }

  const handleBookSubmit =(Event) =>{
    Event.preventDefault();
    const form = Event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFUrl = form.bookPDFUrl.value;
    
    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFUrl
    }
    console.log(bookObj);

    // send data to db

    fetch("http://localhost:5000/upload.book", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      // console.log(data)
      alert('Book uploaded successfully!')
    })
  }
  return (
    <div className='mt-28 px-4 lg:px-24 w-full'>
      <h2 className='mb-8 text-3xl font-bold text-center'>Upload A Book</h2>
      <form onSubmit={handleBookSubmit} className="flex flex-col gap-4">
      <div className='lg:w-1/2'>
        <div className='flex gap-8'>
          {/*Book Name*/}
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Name" />
          </div>
          <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Book Name" required />
          {/*Author Name*/}
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required />
        </div>

        {/* Second Row */}
        <div className='flex gap-8'>
          {/*Book Name*/}
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Book Image URL" />
          </div>
          <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required />
          {/*Author Name*/}
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>
          <select id="inputState" name="category" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
            {
              bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }
          </select>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name="bookDescription"  placeholder="Write Your Book Description" required rows={5} className='w-full'/>
        </div>

        {/* Book Link */}
        <div className="mb-2 block">
            <Label htmlFor="bookPDFUrl" value="Book PDF Url" />
          </div>
          <TextInput id="bookPDFUrl" name="bookPDFUrl" type="text" placeholder="Book PDF Url" required />

        
      </div>

      <button type="submit" className='mt-5 bg-red-700 font-semibold text-white py-2 rounded'>Upload A Book</button>
      
    </form>
    </div>
  )
}

export default UploadBook
