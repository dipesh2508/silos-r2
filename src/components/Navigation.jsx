import React from 'react'
import logo from '../images/logo.png'
import { useState } from 'react'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="w-full bg-green-500 text-white body-font">

            {/* :DESKTOP MENU */}
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                {/* ::Burger icon standard */}
                <button
                    className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-3                                                                                         00"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 rounded-md text-gray-600 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:bg-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {/* ::Navbar */}
                <nav className="hidden md:mr-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
                    <a href="#link" className="mr-8 hover:text-gray-800">Solutions</a>
                    <a href="#link" className="mr-8 hover:text-gray-800">Prices</a>
                    <a href="#link" className="mr-8 hover:text-gray-800">About</a>
                    <a href="#link" className="mr-8 hover:text-gray-800">Contact</a>
                </nav>
                {/* ::Site logo and Name */}
                <a href="#link" className="flex flex-shrink-0 title-font font-medium items-center md:mb-0">
                    <img src={logo} alt='logo' className="w-24 h-24 text-white p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" />
                </a>
            </div>

            {/* :MOBILE MENU */}
            {isOpen &&
                <div className="w-full flex flex-col py-4 px-3 md:hidden bg-green-500 text-base uppercase text-center font-semibold">
                    <a href="#link" className="block px-3 py-2 rounded-md text-white hover:text-green-700 hover:bg-gray-700">Solutions</a>
                    <a href="#link" className="block px-3 py-2 rounded-md text-white hover:text-green-700 hover:bg-gray-700">Prices</a>
                    <a href="#link" className="block px-3 py-2 rounded-md text-white hover:text-green-700 hover:bg-gray-700">About</a>
                    <a href="#link" className="block px-3 py-2 rounded-md text-white hover:text-green-700 hover:bg-gray-700">Contact</a>
                </div>
            }

        </header>
    )
}

export default Navigation