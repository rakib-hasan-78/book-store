import React from 'react';
import emptyState from '../../assets/empty-list-state.gif';
import { useNavigate } from 'react-router-dom';

const EmptyState = () => {
    const returnNavigate = useNavigate();
    return (
        <div
        className="w-full py-38 my-14 flex flex-wrap flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative z-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-stone-200/5 before:bg-opacity-40 before:-z-10" 
        style={{ backgroundImage: `url(${emptyState})` }}
        >
         <h3 className='font-serif capitalize font-bold text-4xl text-title'>
         no book added yet!
         </h3>
         <button onClick={()=>returnNavigate(-1)} className="btn btn-dash btn-error capitalize hover:text-red-50">return</button>
        </div>
    );
};

export default EmptyState;