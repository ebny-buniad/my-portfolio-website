import React from 'react';

const PageHeader = ({children}) => {
    return (
        <div id=''>
            <div className='relative'>
                <img className='h-[400px] w-full object-cover' src="https://i.ibb.co/MDf80LG6/page-header.jpg" alt="" />
            </div>
            <div className='content top-50 le'>{children}</div>
        </div>
    );
};

export default PageHeader;