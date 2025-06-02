import React from 'react';
import { useBook } from '../../../utilities/BookContext/BookContext';
import EmptyState from './../EmptyState/EmptyState';
import InfoCard from '../InfoCard/InfoCard';

const Tab = () => {
    const {readBooks} = useBook();

    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
            <label className="tab">
                <input type="radio" name="my_tabs_4" defaultChecked  />
                Read Books
            </label>
            <div className="tab-content bg-base-100 border-t-base-300">
                <div className='w-full h-auto flex flex-col space-y-3 my-5 border-none'>
                    {
                        readBooks.length===0 ? <EmptyState /> 
                        : readBooks.map(book=> <InfoCard key={book.bookId} book={book} /> )
                    }
                </div>
            </div>

            <label className="tab">
                <input type="radio" name="my_tabs_4" />
                Wishlist Books
            </label>
            <div className="tab-content bg-base-100 border-t-base-300 p-6">Tab content 2</div>

            </div>
            
        </div>
    );
};

export default Tab;