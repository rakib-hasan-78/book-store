import React from 'react';

const SearchCard = ({target, setTarget, placeholder='search here..', children}) => {
    return (
        <div 
        className='w-full py-5 bg-hero flex flex-wrap flex-col items-center justify-center rounded-md inset-0 drop-shadow-sm'
        >
            {children}
            <input
            value={target}
            onChange={(e)=>setTarget(e.target.value)}
             type="text" placeholder={placeholder} className="input py-5 outline-none focus:outline-none border-gray-500/40 focus:ring-2 focus:ring-project-green" />
        </div>
    );
};

export default SearchCard;