import React, { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card';
import Search from '../Search/Search';
import Notification from '../Notification/Notification';

export const BookContext =  createContext();

const Books = () => {

    const [books, setBooks] = useState([]);
    const [allBooks, setAllBooks] = useState([])
    const [isSearched, setIsSearched] = useState(false);
    const [currentPage, setCurrentPage]  = useState(1);
    const contents = 6;

    useEffect(() =>{
        fetch('/data/booksData.json')
            .then(res=>res.json())
            .then(data=>{
                setBooks(data)
                setAllBooks(data);
            })
    },[])
    console.log(books);

    const totalPages = Math.ceil(books.length / contents);
    const currentIndex = (currentPage - 1) * contents;
    const currentItems = books.slice(currentIndex, currentIndex + contents);

    const paginationHandler = value =>{
        if (value>=1 && value<= totalPages) {
            setCurrentPage(value)
        }
    }

    return (

        <BookContext.Provider  value={{books, setBooks, setIsSearched, allBooks}}>
           <Search />
           {
            isSearched&&(
                <Notification />
            )
           }
           <div className='w-full h-auto flex flex-col items-center'>

            <h2 className='font-serif font-bold xxs:text-3xl lg:text-4xl text-center capitalize my-7 pt-3'>books</h2>

                <div className='w-full grid xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items-center items-center gap-7 mb-5'>
                    {
                    currentItems.map(book => (
                        <Card key={book.bookId} book={book} />
                    ))
                    }
                </div>
            </div>

            {/* pagination for book cards */}

            <div className='w-full h-auto py-5 flex items-center justify-center space-x-3 my-5'>
                {
                    currentPage===1? <button className="btn" disabled="disabled">prev</button>  :  <button className="btn btn-accent bg-project-green text-green-50"
                    onClick={()=>paginationHandler(currentPage-1)}
                    >Prev</button>
                }

                    {
                        Array.from({length:totalPages}, (_, idx)=>{
                            return <button 
                                    className="btn btn-xs"
                                    onClick={()=>paginationHandler(idx+1)}
                                    >
                                    {idx+1}
                                    </button>
                        })
                    }

                {
                    currentPage===totalPages ? <button className="btn" disabled="disabled">Next</button>  :  <button className="btn btn-accent bg-project-green text-green-50"
                    onClick={()=>paginationHandler(currentPage+1)}
                    >Next</button>
                }
            </div>

        </BookContext.Provider>

    );
};

export default Books;