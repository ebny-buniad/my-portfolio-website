import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-289px)]'>
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;