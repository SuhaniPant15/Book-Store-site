import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from 'react-modal';

const SingleBook = () => {
  const { _id, bookTitle, authorName, imageURL, bookDescription, category} = useLoaderData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handlePreviewClick = () => {
    setIsModalOpen(true);
  };

  const handleBuyClick = () => {
    console.log('Buy button clicked');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRatingClick = (index) => {
    setRating(index);
  };

  const styles = {
    bookContainer: {
      display: 'flex',
      background: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginTop: '90px',
      paddingLeft: '4px',
      paddingRight: '4px',
    },
    bookCover: {
      width: '500px',
      borderRadius: '10px',
    },
    bookDetails: {
      marginLeft: '20px',
    },
    rating: {
      marginRight: '10px',
    },
    award: {
      display: 'block',
    },
    genres: {
      display: 'inline-block',
      marginRight: '10px',
      background: '#e0e0e0',
      padding: '5px 10px',
      borderRadius: '5px',
    },
    purchase: {
      marginTop: '20px',
    },
    button: {
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginRight: '10px',
    },
    price: {
      marginTop: '10px',
      fontSize: '18px',
      color: '#555',
    },
    ratingStars: {
      marginTop: '20px',
    },
    stars: {
      fontSize: '24px',
      cursor: 'pointer',
      color: '#ccc',
    },
    starFilled: {
      color: 'gold',
    },
  };

  return (
    <div style={styles.bookContainer}>
      <div>
        <img src={imageURL} alt={bookTitle} style={styles.bookCover} />
      </div>
      <div style={styles.bookDetails}>
        <h1 className='text-3xl font-bold'>{bookTitle}</h1>
        <h2>{authorName}</h2>
        <div style={styles.rating}>
          <span>★★★★☆</span>
          <span>4.00</span>
          <span>184,414 ratings • 32,352 reviews</span>
        </div>
        <p className="description">
          {bookDescription}
        </p>
        <div>
        <span style={styles.genres}>{category}</span>
        </div>
        <div style={styles.purchase}>
          <button
            onClick={handlePreviewClick}
            style={{ ...styles.button, backgroundColor: '#FFDB00' }}
          >
            Preview
          </button>
          <button
            onClick={handleBuyClick}
            style={{ ...styles.button, backgroundColor: '#E72929' }}
          >
            Buy
          </button>
          <div style={styles.price}>
            <span>Kindle $8.99</span>
          </div>
        </div>
        <div style={styles.ratingStars}>
          <p>Rate this book</p>
          <div>
            {[...Array(5)].map((star, index) => (
              <span
                key={index}
                style={index < rating ? { ...styles.stars, ...styles.starFilled } : styles.stars}
                onClick={() => handleRatingClick(index + 1)}
              >
                ☆
              </span>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Book Preview"
        className="bg-white p-4 rounded shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <h2 className="text-xl font-bold">Preview of {bookTitle}</h2>
        {/* Include the preview content here */}
        <button onClick={closeModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </Modal>
    </div>
  );
};

export default SingleBook;
