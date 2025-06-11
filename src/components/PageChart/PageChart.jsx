import React from 'react';
import { useBook } from '../../../utilities/BookContext/BookContext';


const PageChart = () => {
    const {readBooks} = useBook();
    return (
        <div className='w-full h-[30.25rem] my-7 bg-hero flex items-center justify-center'>
            {readBooks.length===0 ? 'empty read book list!':''}
        </div>
    );
};

export default PageChart;