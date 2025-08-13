import React from 'react';
import line from '../../assets/custom-line.webp'

const Title = ({children}) => {
    return (
        <div>
            <h3 className='text-3xl md:text-4xl mb-1 primary-color text-center font-rajdhani font-bold'>{children}</h3>
            <img className='mx-auto' src={line} alt="" />
        </div>
    );
};

export default Title;