import React, { useEffect, useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { Link } from 'react-router';
import Container from '../Container/Container';

const LoadLatestProjects = () => {

    const [projects, setProjects] = useState([]);

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
            <Container>
                <div className="grid md:grid-cols-2 gap-10 mt-15">
                    {projects.map((project) => (
                        <div key={project._id}>
                            <div
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
                                <Link to={`/project/details/${project._id}`} className="font-semibold text-2xl font-rajdhani flex items-center gap-4">{project.title}<FiExternalLink /> </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default LoadLatestProjects;