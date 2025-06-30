import React from 'react';
import Container from '../Container';
import banner from '../../../assets/sec-bg.svg'
import { Typewriter } from 'react-simple-typewriter';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdArrowForward } from "react-icons/md";
import { Link } from 'react-router';
import Card from '../../Card/Card';


const Hero = () => {
    return (

        <div className=' bg'>
            <Container>
                <div className='lg:grid grid-cols-2 items-center min-h-[100vh]'>
                    <div className="relative order-1 lg:order-2 pt-22 ">
                        <img
                            className="absolute bottom-0 z-10 w-full"
                            src={banner}
                            alt="Background"
                        />
                        <div className="absolute bottom-0 w-full h-[400px] bg-gradient-to-t from-black via-transparent to-transparent z-30"></div>
                        <img
                            className="relative w-80 xl:w-96 z-20 mx-auto"
                            src="https://i.ibb.co/0V8DHJQY/buniad-web.png"
                            alt="Buniad Image"
                        />


                        <div class="absolute bottom-10 z-40 flex justify-center w-[10%] left-[45%]">
                            <div class="chevron"></div>
                            <div class="chevron"></div>
                            <div class="chevron"></div>
                            <span class="text">Scroll down</span>
                        </div>
                    </div>

                    <div className='order-2 lg:order-1 py-5'>
                        <div className='font-rajdhani space-y-3 md:space-y-6'>
                            <h4 className='text-3xl font-bold'>HELLO</h4>
                            <h1 className='text-4xl md:text-7xl font-bold'>i'm Ebny Buniad a</h1>
                            <h1 className='text-4xl md:text-7xl font-bold primary-color'>
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
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero;