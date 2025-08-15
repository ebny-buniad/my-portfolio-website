import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Link, NavLink } from 'react-router';
import { MdKeyboardArrowRight } from 'react-icons/md';
import LatestProjects from '../../components/LatestProjects/LatestProjects';
import LoadLatestProjects from '../../components/LatestProjects/LoadLatestProjects';
import Title from '../../components/Title/Title';
const Projects = () => {
    return (
        <div>
            <PageHeader>
                <h2 className='text-4xl font-bold'>Projects</h2>
                <div className='flex items-center justify-center'>
                    <Link to='/'>Home</Link>
                    <MdKeyboardArrowRight size={25} />
                    <NavLink to='/projects'>Projects</NavLink>
                </div>
            </PageHeader>

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
            </div>

        </div>
    );
};

export default Projects;