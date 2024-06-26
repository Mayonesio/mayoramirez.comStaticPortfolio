'use client'
import React, { useState } from 'react';
import Link from 'next/link';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black p-4 fixed top-0 w-full z-10">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">Mayo Ramírez</div>

                {/* Hamburger menu for small screens */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation links */}
                <div className={`lg:flex flex-col lg:flex-row ${isOpen ? 'block' : 'hidden'} lg:space-x-4 lg:mt-0 mt-4 flex flex-col items-center text-xl`}>
                    <Link href="/home/Resume" className="text-white px-4 py-2 hover:text-orange-600">CV</Link>
                    <Link href="/home/about" className="text-white px-4 py-2 hover:text-orange-600">Proyectos</Link>
                    <Link href="/home/formacion" className="text-white px-4 py-2 hover:text-orange-600">Formación</Link>
                    <Link href="/home/contacto" className="text-white px-4 py-2 hover:text-orange-600">Contacto</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
