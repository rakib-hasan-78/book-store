import React, { useEffect } from 'react';
import { useBook } from '../../../utilities/BookContext/BookContext';
import EmptyState from './../EmptyState/EmptyState';
import InfoCard from '../InfoCard/InfoCard';
import Filter from './../Filter/Filter';
import { getToLS } from '../../../utilities/LS/LS';



const Tab = ({bookData}) => {
    const { 
        readBooks, 
        setReadBooks, 
        wishList, 
        setWishList

     } = useBook();

    useEffect(() =>{
        const read = getToLS('read-book-list', []);
        const wish = getToLS('wishlist-book-list', []);

        // converting string to number for ids

        const readIds = read.map(id=>parseInt(id));
        const wishIds = wish.map(id=>parseInt(id));

        // get data for  read book's list & wish book list ==>
        const booksData = bookData.filter(book=>readIds.includes(book.bookId));
        const wishData = bookData.filter(book=>wishIds.includes(book.bookId));
        // retrieve data in UI 
        setReadBooks(booksData);
        setWishList(wishData);
    },[bookData, setReadBooks, setWishList]);

    return (
        <div className='w-full flex flex-col'>
            <div className="tabs tabs-lift">
                <label className="tab font-semibold">
                    <input type="radio" name="my_tabs_4" defaultChecked />
                    Read Books
                </label>
                <div className="tab-content bg-base-100 border-t-base-300">
                    <div className='w-full flex justify-center'>
                        {readBooks.length > 0 && <Filter type='read' />}
                    </div>
                    <div className='w-full h-auto flex flex-col space-y-3 my-7 border-none'>
                        {
                            readBooks.length === 0
                                ? <EmptyState>Empty Read Book List</EmptyState>
                                : readBooks.map(book => (
                                    <InfoCard key={book.bookId} book={book} />
                                ))
                        }
                    </div>
                </div>

                <label className="tab font-semibold">
                    <input type="radio" name="my_tabs_4" />
                    Wishlist Books
                </label>
                <div className="tab-content bg-base-100 border-t-base-300 p-6">
                    <div className='w-full flex justify-center'>
                        {wishList.length > 0 && <Filter type='wishlist' />}
                    </div>
                    <div className='w-full h-auto flex flex-col space-y-3 my-1 border-none'>
                        {
                            wishList.length === 0
                                ? <EmptyState>Empty Wish Book List</EmptyState>
                                : wishList.map(book => (
                                    <InfoCard key={book.bookId} book={book} />
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tab;
