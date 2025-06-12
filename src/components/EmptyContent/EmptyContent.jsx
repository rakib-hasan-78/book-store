import React from 'react';
import emptyContentImg from '../../assets/no-content.gif';
import { useNavigate } from 'react-router-dom';

const EmptyContent = ({children}) => {
    const returnNavigate = useNavigate();
    return (
        <div className='w-auto h-auto flex flex-col items-center justify-center space-y-2'>
            <img className='w-6/12' src={emptyContentImg} alt="no-content-gif" />
            <h3 className='font-semibold uppercase my-3 text-red-500'>{children}</h3>
            <button onClick={()=>returnNavigate(-1)} className="btn btn-outline btn-error hover:text-red-50">Return</button>
        </div>
    );
};

export default EmptyContent;