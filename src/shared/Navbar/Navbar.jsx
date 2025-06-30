import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import Container from '../../components/Container/Container';
import { Link, NavLink } from 'react-router';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/projects'>Projects</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={'fixed top-2 left-0 w-full z-50'}>
            <Container>
                <div className={`navbar rounded-full border transition-all duration-500 ease-in-out ${scrolled ? 'navbar-bg' : ''}`}>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                            >
                                {navLinks}
                            </ul>
                        </div>
                        <Link to="/">
                            <img className="w-30 ms-2" src={logo} alt="Logo" />
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        <div className='rounded-full h-10 w-10 flex items-center justify-center'>
                            <Link
                                className="relative group inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-transparent text-black"
                                to="#">
                                <span className="absolute inset-0 rounded-full bg-[#ed2b5b] scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center z-0"></span>
                                <FaLinkedinIn size={18} className="relative z-10 text-white" />
                            </Link>
                        </div>
                        <div className='rounded-full h-10 w-10 flex items-center justify-center'>
                            <Link
                                className="relative group inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-transparent text-black"
                                to="#">
                                <span className="absolute inset-0 rounded-full bg-[#ed2b5b] scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center z-0"></span>
                                <FaXTwitter  size={18} className="relative z-10 text-white" />
                            </Link>
                        </div>
                        <div className='rounded-full h-10 w-10 flex items-center justify-center'>
                            <Link
                                className="relative group inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full bg-transparent text-black"
                                to="#">
                                <span className="absolute inset-0 rounded-full bg-[#ed2b5b] scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center z-0"></span>
                                <FaGithub size={18} className="relative z-10 text-white" />
                            </Link>
                        </div>

                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
