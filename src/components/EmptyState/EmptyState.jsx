import React from 'react';
import emptyState from '../../assets/empty-list-state.gif';
import { useNavigate } from 'react-router-dom';

const EmptyState = () => {
    const returnNavigate = useNavigate();

    return (
        <div
            className="w-full max-w-4xl mx-auto  py-42  flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat relative z-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-stone-200/5 before:bg-opacity-40 before:-z-10"
            style={{ backgroundImage: `url(${emptyState})` }}
        >
            <h3 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-title capitalize mb-5">
                no book added yet!
            </h3>
            <button 
                onClick={() => returnNavigate(-1)} 
                className="btn btn-error capitalize hover:text-white transition-all duration-300"
            >
                return
            </button>
        </div>
    );
};

export default EmptyState;

