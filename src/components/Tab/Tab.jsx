import React from 'react';
import { useBook } from '../../../utilities/BookContext/BookContext';
import EmptyState from './../EmptyState/EmptyState';
import InfoCard from '../InfoCard/InfoCard';

const Tab = () => {
    const {readBooks, wishList} = useBook();

    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <label className="tab font-semibold">
                    <input type="radio" name="my_tabs_4" defaultChecked  />
                    Read Books
                </label>
                <div className="tab-content bg-base-100 border-t-base-300">
                    <div className='w-full h-auto flex flex-col space-y-3 my-5 border-none'>
                        {
                            readBooks.length===0 ? <EmptyState>Empty Read Book List</EmptyState> 
                            : readBooks.map(book=> <InfoCard key={book.bookId} book={book} /> )
                        }
                    </div>
                </div>

                <label className="tab font-semibold">
                    <input type="radio" name="my_tabs_4" />
                    Wishlist Books
                </label>
                <div className="tab-content bg-base-100 border-t-base-300 p-6">
                    {
                            wishList.length===0 ? <EmptyState>Empty Wish Book List</EmptyState> 
                            : wishList.map(book=> <InfoCard key={book.bookId} book={book} /> )
                    }
                </div>

            </div>
            
        </div>
    );
};

export default Tab;