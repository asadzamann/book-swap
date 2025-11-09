import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb } from '../../Utility/AddToDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookData = useLoaderData();
    const bookId = parseInt(id)

    const bookDetails = bookData.find(book => book.bookId === bookId);
    const {author, bookName, category, image, publisher, rating, review, totalPages, yearOfPublishing} = bookDetails;
    
    const handleReadButton = () => {
      addToStoredDb(bookId);
    }

    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-40' src={image} alt="" />
            <h2>Book Name: {bookDetails.bookName}</h2>
            <div className=''>
                <button onClick={handleReadButton} className='btn btn-primary m-2'>Read</button>
                <button className='btn btn-success m-2'>Wishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;