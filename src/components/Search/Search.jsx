import React, { useContext, useEffect, useState } from 'react';
import SearchCard from '../SearchCard/SearchCard';
import { BookContext } from '../Books/Books';


const Search = () => {
    const { setBooks, setIsSearched, allBooks} = useContext(BookContext);
    const [name, setName] =  useState('');
    const [authorName , setAuthorName] = useState('');
    const [tagLine, setTagLine] = useState('');


    useEffect(()=>{
        if (name.trim()==='' && authorName.trim() === '' && tagLine.trim()==='') {
            setIsSearched(false)
            setBooks(allBooks)
            return
        }

        
        const result = allBooks.filter(book=>{
            const bookSearch = name.trim()==='' ||
             book.bookName.toLowerCase().includes(name.toLowerCase());

            const authorSearch = authorName.trim()==='' ||
             book.author.toLowerCase().includes(authorName.toLowerCase());
            
            const searchByTag = tagLine.trim()==='' ||
                book.tags.some(tag=>tag.toLowerCase().includes(tagLine.toLowerCase()));


             return bookSearch && authorSearch && searchByTag
        }
        )
        setBooks(result);
        setIsSearched(true);
    }, [name, authorName,  allBooks, setIsSearched, tagLine, setBooks])

    return (
        <div className='w-full h-auto py-10 grid lg:grid-cols-3 justify-items-center items-center gap-5'>

        {/* searching book by bookName */}
            <SearchCard 
            target={name} 
            setTarget={setName} 
            placeholder='search book name here'>
                <h2 className='capitalize pb-3 font-bold  text-xl'>search by book name</h2>
            </SearchCard>

        {/* search book by author */}
        <SearchCard 
        target={authorName} 
        setTarget={setAuthorName}
        placeholder='search by author' 
        >
        <h2 className='capitalize pb-3 font-bold  text-xl'>search by author</h2>
        </SearchCard>
        {/* search book with tagName */}
        <SearchCard 
        target={tagLine} 
        setTarget={setTagLine}
        placeholder='search  by tags'
         >
            <h2 className='capitalize pb-3 font-bold  text-xl'>search books by tags</h2>
        </SearchCard>
        </div>
    );
};

export default Search;