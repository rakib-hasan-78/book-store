import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi";


const InfoCard = ({book}) => {
    const {author, bookName, category, image, rating, tags, yearOfPublishing, totalPages} = book;
    return (
        <div 
        className='w-full h-72 border border-gray-200/90 rounded-2xl flex items-center px-5 space-x-6'>
            <div className='w-56 h-56 bg-hero rounded-2xl flex items-center justify-center'>
                <img className='w-32 h-44' src={image} alt="#" />
            </div>
            {/* reading book info */}
            <div className='h-56 flex flex-col space-y-4'>
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
                        <div className='flex items-center space-x-3 text-base capitalize font-medium text-title/70'>
                            <SlLocationPin />
                            <h5>year of publishing : {yearOfPublishing}</h5>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default InfoCard;