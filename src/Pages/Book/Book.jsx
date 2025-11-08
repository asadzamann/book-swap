import React, { use } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStarHalf } from 'react-icons/fa';


const Book = ({ singleBook }) => {
    const { bookId, bookName, category, image, publisher, rating, author, review, totalPages, yearOfPublishing, tags} = singleBook;
    console.log(singleBook);
    return (
        <div >
            <div className="card bg-base-100 w-96 shadow-sm border-2 border-black rounded-2xl">
                <figure className='bg-gray-100 p-3 w-2/3 mx-auto'>
                    <img className='w-[134px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {bookName}
                        <div >
                             {tags.map(tag => <div className="badge badge-primary m-1">{tag}</div>)}
                        </div>
                    </h2>
                    <h2>Book by: {author}</h2>
                    <h2>Year of Publishing: {yearOfPublishing}</h2>
                    <h2>Category: {category}</h2>
                     <div className="badge badge-outline">Total Pages: {totalPages}</div>
                     <div className='border-1 border-dashed'></div>
         
                    <div className="card-actions justify-end">
                
                        <div className="badge badge-outline">Rating: {rating} <CiStar></CiStar></div>
                                           
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;