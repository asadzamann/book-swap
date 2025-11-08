import React, { use } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStarHalf } from 'react-icons/fa';


const Book = ({ singleBook }) => {
    const { bookId, bookName, category, image, publisher, rating, author, review, totalPages, yearOfPublishing } = singleBook;
    console.log(singleBook);
    return (
        <div >
            <div className="card bg-base-100 w-96 shadow-sm border-2 border-black rounded-2xl">
                <figure>
                    <img className='w-[134px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {bookName}
                        <div className="badge badge-primary">{author}</div>
                    </h2>
                    <p>{review}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Publisher: {publisher}</div>
                        <div className="badge badge-outline">Rating: {rating} <CiStar></CiStar></div>
                        <div className="badge badge-outline">Category: {category}</div>
                        <div className="badge badge-outline">Year of Publishing: {yearOfPublishing}</div>
                        <div className="badge badge-outline">Total Pages: {totalPages}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;