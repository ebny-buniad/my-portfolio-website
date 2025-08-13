import React from 'react';
import Container from '../Container/Container';

const PageHeader = ({ children }) => {
    return (
        <div>
            <div className='relative'>
                <img className='h-[400px] w-full object-cover' src="https://i.ibb.co/6cVw4kG6/page-header.jpg" alt="" />
            </div>
            <div className='content top-40 space-y-3'>{children}</div>
        </div>
    );
};

export default PageHeader;