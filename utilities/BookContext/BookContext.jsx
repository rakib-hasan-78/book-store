import React, { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';

const bookContext  = createContext();
export const useBook =()=> useContext(bookContext);

const BookContext = ({children}) => {
    const  [readBooks, setReadBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const readingHandler = book=>{
         if (readBooks.find(book=>book.bookId===book.bookId)) {
                toast.error(`Error! You can't add a book twice here`, {
                    position:'top-center'
                });
                return;
         } else {
            toast.success(`${book.bookName} added to the list successfully`,{
                position:'top-center'
            });
            setReadBooks([...readBooks, book])
            return;
         }      
    }
    const wishListHandler = book =>{
        if(wishList.find(book=>book.bookId===book.bookId)){
            toast.error(`Error! Already in your wishlist`,{
                position:'top-center',
            });

            return
        } else{
            toast.success(`${book.bookName} has been added to the list`,{
                position: 'top-center'
            });
            setWishList([...wishList, book]);
            return;
        }
    }

    const value = {readBooks, wishList, readingHandler, wishListHandler};

    return <bookContext.Provider value={value}>{children}</bookContext.Provider>

};

export default BookContext;