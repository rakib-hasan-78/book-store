import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='xxs:w-screen xl:w-6xl mx-auto min-h-screen flex flex-col'>
            <Header />
            <Outlet />            
            <Footer />
        </div>
    );
};

export default Root;
