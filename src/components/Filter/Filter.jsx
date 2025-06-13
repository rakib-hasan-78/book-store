import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
const Filter = () => {
    return (
        <div className='w-full flex items-center justify-center my-7'>
            <div className="dropdown dropdown-start bg-project-green rounded-lg">
            <div tabIndex={0} role="button" className="btn  bg-project-green w-44 h-14 rounded-lg flex items-center space-x-3 font-semibold text-lg text-white">
            <span>Sort By</span>
            <span>
                <IoIosArrowDown />
            </span>
             </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
            </div>
            
        </div>
    );
};

export default Filter;