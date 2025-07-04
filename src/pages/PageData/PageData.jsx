import React from 'react';
import PageHero from '../../components/PageHero/PageHero';
import PageChart from '../../components/PageChart/PageChart';

const PageData = () => {
    return (
        <div className='w-full h-auto'>
            <PageHero className={`flex items-center justify-center mb-5`}>
                <h2 className='font-bold capitalize xxs:text-xl md:text-3xl'>reading books' page Data</h2>
            </PageHero>
            <PageChart />
        </div>
    );
};

export default PageData;