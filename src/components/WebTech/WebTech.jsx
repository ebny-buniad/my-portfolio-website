import React from 'react';
import Container from '../Container/Container';
import Title from '../Title/Title';

import { webTech } from '../../data/data';
console.log(webTech)

const WebTech = () => {
    return (
        <div>
            <Container>
                <Title>Behind the Code</Title>

                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 my-10'>
                    {webTech.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center p-4 border-gray-700 
                        border rounded-2xl hover:border-rose-500 transition-all">
                            <tech.icon size={40} color={tech.color} />
                            <p className="mt-2 text-sm font-medium">{tech.name}</p>
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    );
};

export default WebTech;