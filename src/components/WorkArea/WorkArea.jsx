import React from 'react';
import Container from '../Container/Container';
import { workAreas } from '../../data/data';
const WorkArea = () => {
    return (
        <div>
            <Container>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-3 my-20'>
                    {workAreas.map((area, index) => (
                        <div key={index} className="flex flex-col items-center p-4 border border-gray-700 rounded-2xl
                         space-y-3 hover:border-rose-500 transition-all">
                            <area.icon size={60} className="primary-color" />
                            <h3 className="mt-2 text-xl font-bold">{area.title}</h3>
                            <p className="text-sm text-gray-500 text-center">{area.description}</p>
                        </div>
                    ))}

                </div>
            </Container>
        </div>
    );
};

export default WorkArea;