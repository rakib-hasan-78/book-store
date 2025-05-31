import React, { useState } from 'react';
import { useBook } from '../../../utilities/BookContext/BookContext';
import PageHero from '../../components/PageHero/PageHero';
import Tab from '../../components/Tab/Tab';

const Books = () => {
    const [buttonType, setButtonType] = useState('readingList');
    const {readBooks, wishList} = useBook();

    return (
        <div className='w-full h-auto'>
           <PageHero className={`flex items-center justify-center`}>
            <h2 className='text-3xl font-bold'>Books</h2>
           </PageHero>
           <Tab />
        </div>
    );
};

export default Books;