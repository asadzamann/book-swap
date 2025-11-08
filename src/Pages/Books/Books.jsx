import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
   const [allBooks, setAllBooks] = useState([]);
//    useEffect (
//     () => {
//         fetch("booksData.json")
//         .then(res => res.json())
//         .then(data => setAllBooks(data))
//     } , []
//    ) 
   
    const bookPromise = fetch("booksData.json").then(response => response.json())
    return (    
        <div>
            <h3 className='text-3xl text-center font-extrabold'>Books</h3>
            <br />
            <div className='grid grid-cols-3'>
         <Suspense fallback={<span>Loading...</span>}>
            {data.map(singleBook=> <Book key={singleBook.bookId} singleBook={singleBook}></Book>)}
            </Suspense>
            </div>
           
        </div>
    );
};

export default Books;