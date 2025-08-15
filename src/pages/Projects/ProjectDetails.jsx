import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router';
import PageHeader from '../../components/PageHeader/PageHeader';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Container from '../../components/Container/Container';
import { IoIosLink } from "react-icons/io";


const ProjectDetails = () => {
    const { id } = useParams();
    const [projectData, setProjectData] = useState([]);
    console.log(projectData)
    useEffect(() => {
        const loadProject = async () => {
            const res = await fetch(`http://localhost:3000/projects/${id}`);
            const data = await res.json();
            setProjectData(data.data)
        }
        loadProject();
    }, [id]);

    return (
        <div>
            <PageHeader>
                <h2 className='text-4xl font-bold primary-color'>{projectData.title}</h2>
                <div className='flex items-center justify-center'>
                    <Link to='/'>Home</Link>
                    <MdKeyboardArrowRight size={25} />
                    <NavLink to='/projects'>Projects</NavLink>
                </div>
            </PageHeader>

            <Container>
                <img className='my-10 rounded-2xl' src={projectData.image} alt="" />

                <div className='grid gap-5 lg:grid-cols-4 mb-10'>
                    <div className='col-span-3 space-y-3'>
                        <h1 className='text-4xl lg:text-5xl font-bold font-rajdhani'>{projectData.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: projectData.description }} />

                        <div className='grid grid-cols-2 gap-5'>
                            <p className='flex items-center gap-1 border border-gray-700 p-3 rounded-md'><IoIosLink size={16} /> Live Link : <Link target='_blank' to={projectData.liveLink}>{projectData.liveLink}</Link></p>
                            <p className='flex items-center gap-1 border border-gray-700 p-3 rounded-md'> <IoIosLink size={16} />Source Code: {projectData.sourceLink === '' ?
                                'Private Repository' : <><Link target='_blank' to={`${projectData.sourceLink}`}> {projectData.sourceLink}</Link></>}</p>
                        </div>
                    </div>
                    <div>
                        <div className='border border-gray-700 bg-gray-950 p-5 rounded-xl space-y-2'>
                            <h3 className='text-xl font-rajdhani font-semibold primary-color'>Project Details</h3>
                            <p>Name: <span className='font-bold text-gray-400'>{projectData.title}</span></p>
                            <p>Start: <span className='font-bold text-gray-400'>{projectData.startDate}</span></p>
                            <p>End: <span className='font-bold text-gray-400'>{projectData.endDate}</span></p>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default ProjectDetails;

// somaj kormo, dulal dali - 01750696680