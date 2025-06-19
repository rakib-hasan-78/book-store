import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useBook } from '../../../utilities/BookContext/BookContext';
const Filter = ({type}) => {
    const [sort, setSort] = useState('');
    const {readBooks,setReadBooks, wishList, setWishList} = useBook();

    const sortHandler = sortType=>{
        setSort(sortType);
        
        if (sort=== 'Rating') {
            
            if (type==='read') {
                const sortedReadBooks = [...readBooks].sort((a,b)=>a.rating - b.rating);
                setReadBooks(sortedReadBooks);
                return;
            }

            if (type==='wishlist') {
                
                const sortedWishList = [...wishList].sort((a,b)=>a.rating - b.rating);

                setWishList(sortedWishList)
                return;
            }
        }
        if (sort=== 'Page Numbers') {
            
            if (type==='read') {
                const sortedReadBooks = [...readBooks].sort((a,b)=>a.totalPages - b.totalPages);
                setReadBooks(sortedReadBooks);
                return;
            }

            if (type==='wishlist') {
                
                const sortedWishList = [...wishList].sort((a,b)=>a.totalPages-b.totalPages);

                setWishList(sortedWishList)
                return;
            }
        }

        if (sort==='Year of Publish') {

            if (type==='read') {
                const sortedYear = [...readBooks].sort((a,b)=>a.yearOfPublishing - b.yearOfPublishing);

                setReadBooks(sortedYear);
                return;
            }
            if (type==='wishlist') {
                const sortedYear = [...wishList].sort((a,b)=>a.yearOfPublishing-b.yearOfPublishing);

                setWishList(sortedYear);
                return;
            }
        }

    }

    return (
        <div className='w-full flex items-center justify-center my-7'>
            <div className="dropdown dropdown-start bg-project-green rounded-lg">
            <div tabIndex={0} role="button" className="btn  bg-project-green w-72 h-20 rounded-lg flex items-center space-x-3 font-semibold text-lg text-white">
            <span className='text-base'>{sort ? `Sort By: ${sort}` : 'Sort By'}</span>
            <span>
                <IoIosArrowDown />
            </span>
             </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-72 p-2 shadow-sm">
                <li onClick={()=>sortHandler('Rating')}><a>Rating</a></li>
                <li onClick={()=>sortHandler('Page Numbers')}><a>Page Numbers</a></li>
                <li onClick={()=>sortHandler('Year of Publish')}><a>Years of Publish</a></li>
            </ul>
            </div>
            
        </div>
    );
};

export default Filter;

