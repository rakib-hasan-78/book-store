import React, { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';

export const BookContext =  createContext();

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() =>{
        fetch('/data/booksData.json')
            .then(res=>res.json())
            .then(data=>setBooks(data))
    },[])
    console.log(books);
    return (

        <BookContext.Provider  value={books}>
           <div className='w-full h-auto flex flex-col items-center'>

            <h2 className='font-serif font-bold xxs:text-3xl lg:text-4xl text-center capitalize my-7 pt-3'>books</h2>

            <div className='w-full grid xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items-center items-center gap-7 mb-5'>
                {
                books.map(book => (
                    <Card key={book.bookId} book={book} />
                ))
                }
            </div>
        </div>

        </BookContext.Provider>

    );
};

export default Books;