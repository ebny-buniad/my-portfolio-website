import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Link, NavLink } from 'react-router';
import { MdKeyboardArrowRight } from 'react-icons/md';
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
        </div>
    );
};

export default Projects;