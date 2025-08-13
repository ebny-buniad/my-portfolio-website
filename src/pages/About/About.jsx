import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Link, NavLink } from 'react-router';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Container from '../../components/Container/Container';
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Line from '../../assets/custom-line.webp'
import EducationTimeline from '../../components/Education/EducationTimeline';


const About = () => {
    return (
        <div>
            <PageHeader>
                <h2 className='text-4xl font-bold'>About</h2>
                <div className='flex items-center justify-center'>
                    <Link to='/'>Home</Link>
                    <MdKeyboardArrowRight size={25} />
                    <NavLink to='/about'>About</NavLink>
                </div>
            </PageHeader>

            <Container>
                <div className='md:grid items-center grid-cols-2 gap-5 my-10'>
                    <div>
                        <img className='h-[750px] rounded-2xl border-[#ed2b5b]  object-cover w-full'
                            src="https://i.ibb.co/B5W29wY7/about-pic.jpg" alt="" />
                    </div>
                    <div className='space-y-3'>
                        <h3 className='text-3xl font-bold font-mono mt-5'>Who am i?</h3>
                        <img className='mb-10' src={Line} alt="" />
                        <p className='leading-6'>
                            Hi, I’m Ebny Buniad, a visionary and passionate Junior MERN Stack Developer with a keen eye for solving real-world problems using modern web technologies. Currently pursuing my B.Sc. in Computer Science and Engineering at Northern University Bangladesh, I’ve been actively building my skills and gaining hands-on experience in full-stack development for the past 6 months.
                        </p>
                        <p className='leading-6'>
                            As a tech enthusiast deeply interested in innovation, I thrive on creating dynamic and user-centric applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). I’m always exploring new tools, frameworks, and best practices to stay updated in the fast-evolving tech landscape.
                        </p>
                        <p className='leading-6'>
                            I see every project as an opportunity to improve, innovate, and deliver meaningful digital solutions. Whether it’s crafting seamless user interfaces or architecting robust backend systems, I aim to bring ideas to life through clean, scalable, and efficient code.
                        </p>

                        <div className='flex gap-3 mt-10'>
                            <Link to=''><p className='h-10 w-10 border flex items-center justify-center rounded-full'><FaFacebookF /></p></Link>
                            <Link to=''><p className='h-10 w-10 border flex items-center justify-center rounded-full'><FaLinkedin /></p></Link>
                            <Link to=''><p className='h-10 w-10 border flex items-center justify-center rounded-full'><FaTwitter /></p></Link>
                            <Link to=''><p className='h-10 w-10 border flex items-center justify-center rounded-full'><FaYoutube /></p></Link>
                        </div>
                    </div>
                </div>

                <EducationTimeline></EducationTimeline>
            </Container>
        </div>
    );
};

export default About;