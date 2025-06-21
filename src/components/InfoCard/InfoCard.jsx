import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { RiFilePaper2Line } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { SiWish } from "react-icons/si";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useBook } from '../../../utilities/BookContext/BookContext';

const InfoCard = ({ book }) => {
    const { author, bookName, category, image, rating, tags, yearOfPublishing, totalPages, publisher, bookId } = book;
    const infoBook = useBook();
    const { removeBookHandler, transferListItemHandler, isInReadBookList } = infoBook;
    const detailNavigate = useNavigate();

    const detailHandler = (e) => {
        e.preventDefault();
        detailNavigate(`/books/${bookId}`);
    };

    const removeHandler = (e) => {
        e.preventDefault();
        removeBookHandler(book);
    };

    const addHandler = (e) => {
        e.preventDefault();
        transferListItemHandler(book);
    };

    return (
        <div
            className='w-full lg:w-10/12 xxs:h-[680px] md:h-auto border border-gray-200/90 rounded-2xl flex flex-col md:flex-row xxs:items-start md:items-center xxs:justify-center md:justify-normal px-5 xxs:space-x-0 md:space-x-6 xxs:space-y-3 md:space-y-0 xxs:pb-3 md:pb-5'>
            
            {/* Book image container */}
            <div className='xxs:w-full md:w-56 h-56 bg-hero rounded-2xl flex items-center justify-center'>
                <img className='w-32 h-44' src={image} alt={bookName} />
            </div>

            {/* Book info section */}
            <div className='flex flex-col justify-between space-y-4 w-full'>
                <h3 className='font-serif capitalize text-2xl font-bold mb-3'>{bookName}</h3>
                <h4 className='capitalize font-medium text-base text-title/70'>by : {author}</h4>

                <div className='w-full flex flex-col md:flex-row md:items-center justify-start xxs:space-y-3 md:space-y-0 md:space-x-5'>
                    <div className='flex items-center space-x-3'>
                        <h4 className='capitalize font-bold text-base text-shadow-title'>tag</h4>
                        {
                            tags.map(tag => (
                                <div key={tag} className='badge badge-soft badge-success'>
                                    <span className='text-project-green font-bold'>#{tag}</span>
                                </div>
                            ))
                        }
                    </div>

                    <div className='flex flex-col space-y-4'>
                        <div className='flex items-center space-x-3 text-base capitalize font-medium text-title/50'>
                            <SlLocationPin />
                            <h5>year of publishing : {yearOfPublishing}</h5>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col space-y-4'>
                    <div className='flex items-center space-x-3 text-base capitalize font-medium text-title/40'>
                        <FiUsers />
                        <h5 className='text-base'>Publisher : {publisher}</h5>
                        <div className='flex space-x-3 items-center'>
                            <RiFilePaper2Line />
                            <h5>Page: {totalPages}</h5>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex items-center space-x-3 text-base capitalize font-medium text-title/70'>
                        <div className="divider w-full -mt-1.5"></div>
                    </div>
                </div>

                <div className='flex flex-col -mt-6'>
                    <div className="flex flex-row flex-wrap items-center xxs:space-x-1 md:space-x-2 lg:space-x-3 xxs:space-y-2 md:space-y-0">
                        <button className="btn btn-soft btn-info font-normal rounded-4xl md:px-6 text-info hover:text-blue-100 -py-5">
                            Category: {category}
                        </button>

                        <button className="btn btn-soft btn-warning font-normal rounded-4xl px-4 text-warning hover:text-yellow-100 -py-5">
                            Rating: {rating}
                        </button>

                        <button
                            onClick={detailHandler}
                            className="btn btn-success font-normal rounded-4xl px-6 text-base-100 hover:text-blue-100 -py-5">
                            View Details
                        </button>

                        <button
                            title={isInReadBookList(book) ? `Add to WishList` : `Add to Read BookList`}
                            onClick={addHandler}
                            className="btn btn-soft btn-secondary font-medium">
                            {isInReadBookList(book) ? <SiWish /> : <CiBookmark />}
                        </button>

                        <button
                            onClick={removeHandler}
                            className="btn btn-circle btn-error text-red-100 hover:text-base-200">
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
