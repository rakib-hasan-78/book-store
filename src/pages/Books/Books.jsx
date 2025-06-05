import React  from 'react';
import PageHero from '../../components/PageHero/PageHero';
import Tab from '../../components/Tab/Tab';

const Books = () => {

    return (
        <div className='w-full h-auto'>
           <PageHero className={`flex items-center justify-center mb-3`}>
            <h2 className='text-3xl font-bold'>Books</h2>
           </PageHero>
           <Tab />
        </div>
    );
};

export default Books;