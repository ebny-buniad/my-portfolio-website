import React, { useState, useEffect } from 'react';
import Title from '../Title/Title';
import Container from '../Container/Container';
import { Link } from 'react-router';
import { FiExternalLink } from "react-icons/fi";
import { IoArrowForwardSharp } from "react-icons/io5";



const LatestProjects = () => {
    const [projects, setProjects] = useState([]);
    console.log(projects)

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const res = await fetch('http://localhost:3000/projects/latest');
                const data = await res.json();
                setProjects(data.data);
            } catch (error) {
                console.error('Error fetching latest projects:', error);
            }
        };

        loadProjects();
    }, []);

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

                <Container>
                    <div className="grid md:grid-cols-2 gap-10 mt-15">
                        {projects.map((project) => (
                            <div>
                                <div
                                    key={project._id}
                                    className="group bg-gray-950 border border-gray-700 rounded-2xl shadow-md p-5 hover:shadow-lg transition"
                                >
                                    <div className="overflow-hidden rounded-md">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full object-cover rounded-2xl  transform transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                </div>
                                <div className='mt-5'>
                                    <Link to='' className="font-semibold text-2xl font-rajdhani flex items-center gap-4">{project.title}<FiExternalLink /> </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='text-center mt-10'>
                        <Link to='/projects' className='btn w-40 primary-bg rounded-full py-6'>More Projects <IoArrowForwardSharp size={20} className='mt-1' /> </Link> 
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default LatestProjects;
