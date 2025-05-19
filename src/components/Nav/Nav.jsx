import React from 'react';
import { NavLink } from 'react-router-dom';
import navLinks from '../../../utilities/navLinks/navLinks';

const Nav = () => {
    const links = <>
        <NavLink to={'/'} className={navLinks}>Home</NavLink>
        <NavLink to={'/books'} className={navLinks}>Listed Books</NavLink>
        <NavLink to={'/pages'} className={navLinks}>Pages to Read</NavLink>
        <NavLink to={'/dashboard'} className={navLinks}>Dashboard</NavLink>
    </>
    return (
        <nav className="navbar bg-base-100  border-x-0 px-5">
            {/* Mobile Menu */}
            <div className="navbar-start">
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                        aria-label="Toggle Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 py-2 shadow"
                    >
                       {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">Book Store</a>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    {
                        links
                    }
                </ul>
            </div>

            {/* Action Buttons */}
            <div className="navbar-end space-x-3">
                <a className="btn bg-project-green border-project-green text-green-50">Sign in</a>
                <a className="btn bg-cyan-400 border-cyan-400 text-cyan-50">Sign Up</a>
            </div>
        </nav>
    );
};

export default Nav;
