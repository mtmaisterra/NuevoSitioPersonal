import { Link } from 'react-router-dom';
import { React, useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-purpleDark bg-opacity-80 shadow-md py-4 md:py-8">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-left text-lg font-bold">
                    <span className="text-orangeDark font-bold text-2xl md:text-4xl">Port</span>
                    <span className="text-white italic font-extrabold text-xl md:text-3xl">Folio</span>
                </div>
                {/* Center Text */}
                <div className="hidden md:block text-center text-xl md:text-4xl text-white w-full">
                    <Link to='/Home'>
                        Maria Teresa Maisterra
                    </Link>
                </div>
                {/* Hamburger Menu */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
                {/* Navigation Links */}
                <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} text-white mt-4 md:mt-0 `}>
                    <li>
                        <Link to="/proyects" className="block md:inline-block hover:text-gray-700 text-lg md:text-xl">
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link to="/estudies" className="block md:inline-block hover:text-gray-700 text-lg md:text-xl">
                            Estudios
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block md:inline-block hover:text-gray-700 text-lg md:text-xl">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Center Text for Mobile */}
            <div className="md:hidden text-center text-lg mt-2 text-white">
                Maria Teresa Maisterra
            </div>
        </nav>
    );
};

export default NavBar;