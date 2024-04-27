import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const navlink = <>
        <li className='px-5 py-2 transition duration-300 ease-in-out rounded-md hover:bg-yellow-400'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-red-500' : 'text-black dark:text-white'}>Home</NavLink>
        </li>
        <li className='px-5 py-2 transition duration-300 ease-in-out rounded-md hover:bg-yellow-400'>
            <NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-red-500' : 'text-black dark:text-white'}>About</NavLink>
        </li>
        <li className='px-5 py-2 transition duration-300 ease-in-out rounded-md hover:bg-yellow-400'>
            <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'text-red-500' : 'text-black dark:text-white'}>Blog</NavLink>
        </li>
        <li className='px-5 py-2 transition duration-300 ease-in-out rounded-md hover:bg-yellow-400'>
            <NavLink to={'/login'} className={({ isActive }) => isActive ? 'text-red-500' : 'text-black dark:text-white'}>Login</NavLink>
        </li>
    </>;











    return (
        <div className="navbar bg-base-100 dark:bg-gray-900 dark:text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlink}
                    </ul>
                </div>
                <a className="text-xl btn btn-ghost">daisyUI</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="gap-6 px-1 menu-horizontal">
                    {navlink}
                </ul>
            </div>
            <div className="flex items-center gap-4 navbar-end">
                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="p-2 transition-all bg-gray-200 rounded-full dark:bg-gray-700"
                >
                    {theme === "dark" ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
                </button>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;
