import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Divider from '../Divider/Divider';
import { useBook } from '../../../utilities/BookContext/BookContext';



const BookDetail = () => {
    const {bookId} = useParams();
    const books = useLoaderData();
    const returnNavigate = useNavigate();
    const {readingHandler, wishListHandler}  = useBook();
    const book = books.find(book=>book.bookId===parseInt(bookId));
    const {image, bookName, author,category, review, tags, totalPages, publisher, yearOfPublishing, rating } =book;
    // addToRead handler 
    const addToReadHandler =(e)=>{
        e.preventDefault();
        readingHandler(book);
        
    }
    // addToWishList Handler 
    const addToWishListHandler = e=>{
        e.preventDefault();
        wishListHandler(book);
        
    }
    // return handler===>
        const returnHandler =e=>{
            e.preventDefault();
            returnNavigate(-1);
        }
    return (
        <div
        className='w-full xxs:h-auto lg:h-[610px] flex flex-col lg:flex-row items-center justify-center my-5 space-x-5'>
        {/* book image---> */}
            <div className='w-full md:w-10/12 lg:w-6/12 h-full bg-hero flex items-center justify-center rounded-lg xxs:py-10 lg:py-0'>
                <img className='xxs:w-full md:max-w-7/12 lg:w-9/12 xxs:h-[480px] md:h-[490px] lg:h-[564px] xxs:m-7 md:m-0' src={image} alt={`book image of ${bookName}`} />
            </div>
            {/* book info ----> */}
            <div className='w-full lg:w-6/12 h-full flex flex-col'>
                <div className='flex flex-col space-y-4'>
                    <h2 className='capitalize xxs:text-3xl md:text-5xl font-bold font-serif text-center lg:text-left'>{bookName}</h2>
                    <h4 className='capitalize font-medium text-xl text-title/80 text-center lg:text-left'>by: {author}</h4>
                </div>
                <Divider />
                <div className='flex flex-col xxs:px-3 lg:px-0'>
                <h4 className='capitalize text-2xl text-title'>{category}</h4>
                </div>
               <Divider />
                <p className='xxs:text-base md:text-xl lg:text-base text-title/70 xxs:px-3 lg:px-0'><span className='capitalize font-black'>review : </span> {review}</p>
                <div 
                className='w-full flex items-start justify-start space-x-5 pb-2 mt-4 xxs:px-3 lg:px-0 xxs:text-base md:text-lg lg:text-base'>
                <span className='font-bold capitalize text-title'>tags:</span>
                    {
                        tags.map(tag=>(
                            <div key={tag} className="badge badge-soft badge-success">
                              <span className='text-project-green font-bold'>
                                {tag}
                              </span>  
                                
                            </div>
                        ))
                    }
                </div>
                <Divider />
                <div className="flex flex-col space-y-5 xxs:px-3 lg:px-0 xxs:text-base md:text-xl lg:text-base">
                    <h5 className="flex space-x-12">
                    <span className='text-title/70'>Number of Pages : </span>
                    <span className='font-bold'>{totalPages}</span>
                    </h5>
                    <h5 className="flex space-x-27">
                    <span className='text-title/70'>Publisher : </span>
                    <span className='font-bold'>{publisher}</span>
                    </h5>
                    <h5 className="flex space-x-12">
                    <span className='text-title/70'>Year of Publishing :</span>
                    <span className='font-bold'>{yearOfPublishing}</span>
                    </h5>
                    <h5 className="flex space-x-32">
                    <span className='text-title/70'>Rating : </span>
                    <span className='font-bold'>{rating}</span>
                    </h5>
                </div>
                <div className="flex xxs:flex-col lg:flex-row xxs:space-x-0 lg:space-x-2 xxs:space-y-4 lg:space-y-0  mt-14 xxs:px-3 lg:px-0">
                    <button
                    onClick={addToReadHandler}
                     className="btn xxs:btn-xl lg:btn-md bg-project-green border-project-green text-green-50 xxs:w-full lg:w-auto">
                        Read
                    </button>
                    <button
                    onClick={addToWishListHandler} 
                    className="btn xxs:btn-xl lg:btn-md bg-cyan-400 border-cyan-400 text-cyan-100 xxs:w-full lg:w-auto">
                        Wishlist
                    </button>
                    <button
                    onClick={returnHandler}
                     className="btn xxs:btn-xl lg:btn-md bg-red-400 border-red-400 text-red-100 xxs:w-full lg:w-auto">
                        Return
                    </button>
                </div>
            </div>    
        </div>
    );
};

export default BookDetail;