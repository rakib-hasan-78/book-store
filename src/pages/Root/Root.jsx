import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='xxs:w-screen xl:w-6xl mx-auto min-h-screen flex flex-col justify-between'>
            <Header />
            <Footer />
        </div>
    );
};

export default Root;