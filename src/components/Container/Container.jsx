import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='lg:w-10/12 max-w-screen-xl mx-auto px-1 lg:px-0'>
            {children}
        </div>
    );
};

export default Container;