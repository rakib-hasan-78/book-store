import React from 'react';
import { useBook } from '../../../utilities/BookContext/BookContext';
import EmptyContent from '../EmptyContent/EmptyContent';
import { ResponsiveContainer } from 'recharts';


const PageChart = () => {
    const {readBooks} = useBook();
    const chartData = readBooks.map(book=>({
        name: book.bookName,
        page: book.totalPages,
    }))
    return (
        <div className='w-full h-[30.25rem] my-7 bg-hero flex items-center justify-center'>
            {readBooks.length===0 ? <EmptyContent>no book added to read list</EmptyContent>:
            <ResponsiveContainer width={`100%`} height={`450px`}>
                
            </ResponsiveContainer>
            }
        </div>
    );
};

export default PageChart;