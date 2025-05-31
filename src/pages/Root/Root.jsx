import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BookContext from '../../../utilities/BookContext/BookContext';

const Root = () => {
    return (
        <BookContext>
            <div className='xxs:w-screen xl:w-6xl mx-auto min-h-screen flex flex-col'>
                <Header />
                <Outlet />            
                <Footer />
                <ToastContainer />
            </div>
        </BookContext>
    );
};

export default Root;
