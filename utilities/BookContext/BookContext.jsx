import React, { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';

const bookContext  = createContext();
export const useBook =()=> useContext(bookContext);

const BookContext = ({children}) => {
    const  [readBooks, setReadBooks] = useState([]);
    const [wishList, setWishList] = useState([]);
    console.log(readBooks);

    const readingHandler = book=>{
        if (wishList.find(wL=>wL.bookId===book.bookId)) {
            toast.error(`${book.bookName} Is Already In Wish List.`,{
                position:'top-center',
            });
            return;
        } else{
            
            if (readBooks.find(listedBook=>listedBook.bookId===book.bookId)) {
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
    }
    const wishListHandler = book =>{
        if (readBooks.find(readBook=>readBook.bookId===book.bookId)) {
            toast.error(`${book.bookName} Is Already In Read Book List.`,{
                position:'top-center',
            });
            return;
        } else {
            
            if(wishList.find(selectedBook=>selectedBook.bookId===book.bookId)){
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
    }

    const removeBookHandler = book=>{
        const isReadList = readBooks.some(readBook=>readBook.bookId===book.bookId);
        const isWishList = wishList.some(wl=>wl.bookId===book.bookId);

        if (isReadList) {
            toast.error(`${book.bookName} Is Removed From Read Book List`, {
                position:'top-center',
            });
            setReadBooks(prev=>(
                prev.filter(pre=>pre.bookId!==book.bookId)
            ));
            return;
        }

        if (isWishList) {
            toast.error(`${book.bookName} Is Removed From Wish List`, {
                position:'top-center',
            });
            setWishList(prev=>(
                prev.filter(pre=> pre.bookId!==book.bookId)
            ))
        }
    }

    const isInReadBookList = book=>readBooks.some(readBook=>readBook.bookId===book.bookId);

    const transferListItemHandler = book=>{
        const isInReadBookList = readBooks.some(readBook=>readBook.bookId===book.bookId);
        const isInWishList = wishList.some(wL=>wL.bookId===book.bookId);

        if (isInReadBookList) {
            if (!(wishList.some(wL=>wL.bookId===book.bookId))) {
                toast.success(`${book.bookName} Removed From Read Book List & Added To Wish List.`, {
                    position:'top-center',
                });
                setReadBooks(prev=>(
                    prev.filter(pre=>pre.bookId!==book.bookId)
                ));
                setWishList([...wishList, book]);             
            }
            return;
        }

        if (isInWishList) {
            if (!(readBooks.some(readBook=>readBook.bookId===book.bookId))) {
                toast.success(`${book.bookName} Removed From WishList & Added to Read Book List.`, {
                    position:'top-center',
                });
                setWishList(wishItem=>(
                    wishItem.filter(item=>item.bookId!==book.bookId)
                ));
                setReadBooks([...readBooks, book]);
            }
            return;
        }
    }

    const value = {readBooks,setReadBooks, wishList, setWishList,readingHandler, wishListHandler, removeBookHandler, transferListItemHandler, isInReadBookList};

    return <bookContext.Provider value={value}>{children}</bookContext.Provider>

};

export default BookContext;