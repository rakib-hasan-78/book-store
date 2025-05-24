import React from 'react';
import { NavLink } from 'react-router-dom';
import navLinks from '../../../utilities/navLinks/navLinks';

const Nav = () => {
    const links = (
        <>
            <li><NavLink to="/" className={navLinks}>Home</NavLink></li>
            <li><NavLink to="/listed-books" className={navLinks}>Listed Books</NavLink></li>
            <li><NavLink to="/pages" className={navLinks}>Pages to Read</NavLink></li>
        </>
    );

    return (
        <nav className="w-full bg-base-100 shadow-sm m-0 px-2 py-0.5">
            <div className="flex items-center justify-between flex-wrap w-full p-2">

                {/* Left Section */}
                <div className="flex items-center">
                    {/* Mobile Dropdown Menu */}
                    <div className="lg:hidden mr-2">
                        <div className="dropdown">
                            <button
                                tabIndex={0}
                                className="btn btn-ghost"
                                aria-label="Toggle Menu"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {links}
                            </ul>
                        </div>
                    </div>

                    {/* Logo */}
                    <NavLink to="/"  className="text-lg font-bold xxs:text-sm sm:text-base lg:text-xl">
                        Book Store
                    </NavLink>
                </div>

                {/* Center Links - Desktop */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-2">
                        {links}
                    </ul>
                </div>

                {/* Right Side Buttons */}
                <div className="flex space-x-2">
                    <button className="btn xxs:btn-xs lg:btn-md bg-project-green border-project-green text-green-50">
                        Sign In
                    </button>
                    <button className="btn xxs:btn-xs lg:btn-md bg-cyan-400 border-cyan-400 text-white">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
