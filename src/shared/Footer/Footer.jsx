import React from 'react';
import logo from '../../assets/logo.svg';
import line from '../../assets/custom-line.webp'
import { Link } from 'react-router';
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center rounded-t-4xl bg-gray-950 border-t border-gray-700 text-base-content rounded p-10">
                <nav>
                    <Link to="/">
                        <img className="w-22" src={logo} alt="Logo" />
                    </Link>
                    <img className='mx-auto w-15' src={line} alt="" />
                </nav>
                <nav className="grid grid-flow-col gap-4">
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>

                <aside>
                    <p>Copyright © {new Date().getFullYear()} - E.Buniad</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;