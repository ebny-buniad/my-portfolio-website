import React from 'react';
import Title from '../Title/Title';
import LoadLatestProjects from './LoadLatestProjects';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { Link } from 'react-router';

const LatestProjects = () => {
    
    return (
        <div>
            <h2 className="text-center font-bold text-xl mb-2 mt-15">LATEST PROJECTS</h2>
            <Title>Transforming Ideas into Exceptional</Title>

            <div className="mt-5 mb-10">
                <p className="text-center">
                    I build innovative, high-performance web solutions that turn ideas into reality—
                    delivering measurable results,
                    <span className="block">
                        exceptional design, and seamless functionality for businesses and their audiences.
                    </span>
                </p>

                <LoadLatestProjects></LoadLatestProjects>
                
                <div className='text-center mt-10'>
                    <Link to='/projects' className='btn w-40 primary-bg rounded-full py-6'>More Projects <IoArrowForwardSharp size={20} className='mt-1' /> </Link>
                </div>
            </div>
        </div>
    );
};

export default LatestProjects;
