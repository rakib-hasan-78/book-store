import React, { useContext } from 'react';
import { BookContext } from '../Books/Books';

const Notification = () => {
    const {books, setBooks, allBooks, setIsSearched} = useContext(BookContext);
    const returnHandler = e=>{
        e.preventDefault();
        setBooks(allBooks);
        setIsSearched(false);
    }
    return (
        <div
        className='w-full  h-auto py-5 flex items-center justify-between' 
        >
        {books.length>0? (
            <h3>{books.length} found</h3>
        ):(
            <h3>no books found!</h3>
        )}

        <button onClick={returnHandler} className="btn btn-soft btn-error">Return</button>
            
        </div>
    );
};

export default Notification;