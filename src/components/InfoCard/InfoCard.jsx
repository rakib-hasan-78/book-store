import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";
import { RiFilePaper2Line } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useBook } from '../../../utilities/BookContext/BookContext';

const InfoCard = ({book}) => {
    const {author, bookName, category, image, rating, tags, yearOfPublishing, totalPages, publisher, bookId} = book;
    const infoBook =useBook();
    const {setReadBooks} = infoBook;
    const detailNavigate = useNavigate();
    const detailHandler=(e)=>{
        e.preventDefault();
        detailNavigate(`/books/${bookId}`)
    }
    const removeHandler = e=>{
        e.preventDefault();
        setReadBooks(prev=>{
          return  prev.filter(p=>p.bookId!==bookId)
        })

    }
    return (
        <div
        
        className='w-10/12 h-72 border border-gray-200/90 rounded-2xl flex items-center px-5 space-x-6'>
            <div className='w-56 h-56 bg-hero rounded-2xl flex items-center justify-center'>
                <img className='w-32 h-44' src={image} alt="#" />
            </div>
            {/* reading book info */}
            <div className='h-56 flex flex-col space-y-4 w-full'>
                <h3 className='font-serif capitalize text-2xl font-bold mb-3'>{bookName}</h3>
                <h4 className='capitalize font-medium text-base text-title/70'>by : {author}</h4>
                <div className='w-full h-auto flex items-center justify-start space-x-5'>
                    <div className='flex items-center space-x-3'>
                        <h4 className='capitalize font-bold text-base text-shadow-title'>tag</h4>
                        {
                            tags.map(tag=> <div key={tag} className='badge badge-soft badge-success'>
                                <span className='text-project-green font-bold'>
                                    #{tag}
                                </span>
                            </div> )
                        }
                    </div>
                    <div className='flex flex-col space-y-4'>
                        {/* publishing year */}
                        <div className='flex items-center space-x-3 text-base capitalize font-medium text-title/50'>
                            <SlLocationPin />
                            <h5>year of publishing : {yearOfPublishing}</h5>
                        </div>
                    </div>  
                </div>
                 <div className='flex flex-col space-y-4'>
                        {/* publisher */}
                        <div className='flex items-center space-x-3 text-base capitalize font-medium text-title/40'>
                            <FiUsers />
                            <h5>Publisher : {publisher}</h5>
                            <div className='flex space-x-3 items-center'>
                            <RiFilePaper2Line />
                            <h5>Page: {totalPages}</h5>
                            </div>
                        </div>
                    </div>  
                     <div className='flex flex-col'>
                        {/* divider */}
                        <div className='flex items-center space-x-3 text-base capitalize font-medium text-title/70'>
                            <div className="divider w-full -mt-1.5"></div>
                        </div>
                    </div>
                    <div className='flex flex-col -mt-6'>
                        <div className="flex items-center space-x-3">
                            <button 
                            className="btn btn-soft btn-info font-normal rounded-4xl px-6 text-info hover:text-blue-100 -py-5">
                            Category:   {category}
                            </button>

                            <button 
                            className="btn btn-soft btn-warning font-normal rounded-4xl px-4 text-warning hover:text-yellow-100 -py-5">
                            Rating: {rating}
                            </button>

                            <button
                            onClick={detailHandler} 
                            className="btn btn-success font-normal rounded-4xl px-6 text-base-100 hover:text-blue-100 -py-5">
                            View Details
                            </button>

                            <button className="btn btn-soft btn-secondary font-medium"><CiBookmark /></button>

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