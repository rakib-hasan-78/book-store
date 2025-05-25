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

        <BookContext.Provider value={books}>
            <div className='w-full h-auto flex flex-col flex-wrap justify-center items-center'>

                <h2 className='font-serif font-bold text-4xl text-center capitalize my-7 pt-3'>books</h2>
                <div className='w-full h-auto pb-5 grid grid-cols-3 gap-7'>
                    {
                        books.map(book=>(
                            <Card key={book.bookId} book={book}  />
                        ))
                    }
                </div>
            </div>
        </BookContext.Provider>

    );
};

export default Books;