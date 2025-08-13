import React from 'react';
import banner from '../../assets/sec-bg.svg'
import { Typewriter } from 'react-simple-typewriter';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";
import { Link } from 'react-router';
import Container from '../Container/Container';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className='hero-bg'>
            <Container>
                <div className='lg:grid grid-cols-2 items-end min-h-[100vh]'>
                    <motion.div className="relative order-1 lg:order-2 pt-24"
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img
                            className="absolute bottom-0 z-10 w-full"
                            src={banner}
                            alt="Background"
                        />
                        <img
                            className="relative bottom-0 w-80 xl:w-96 z-20 mx-auto"
                            src="https://i.ibb.co.com/FbVPQyCn/buniad-web-min-2.png"
                            alt="Buniad Image"
                        />

                        <div className="absolute bottom-10 z-40 flex justify-center w-[10%] left-[45%]">
                            <div className="chevron"></div>
                            <div className="chevron"></div>
                            <div className="chevron"></div>
                            <span className="text">Scroll down</span>
                        </div>
                    </motion.div>

                    <motion.div className='order-2 lg:order-1 py-5'
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className='font-rajdhani space-y-1 md:space-y-5 lg:pb-30 xl:pb-60'>
                            <h4 className='text-2xl font-bold'>HELLO</h4>
                            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold'>i'm Ebny Buniad a</h1>
                            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold primary-color'>
                                {' '}
                                <span>
                                    <Typewriter
                                        words={['Web Developer', 'Web Designer', 'Freelancher']}
                                        loop={50}
                                        cursor
                                        cursorBlinking='|'
                                        typeSpeed={50}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>
                            <p className='text-[16px]'>
                                I transform ideas into powerful digital experiences as a passionate Web Designer, Developer, Freelancer, and MERN Stack enthusiast—crafting clean, responsive, and user-focused solutions that drive real impact.
                            </p>
                            <div className='gap-2 flex'>
                                <button className='btn hero-btn gap-3 rounded-full'>Download Resume <IoCloudDownloadOutline size={20} /></button>
                                <Link to='/projects'><button className='btn hero-btn rounded-full gap-3'>View Projects <MdArrowForward /></button></Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;