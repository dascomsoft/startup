'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../images/logo.jpg'

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  const handleToggleMenu = () => {
    setOpenLinks(!openLinks);
  };

  const toggleCategory = () => {
    setOpenCategory(!openCategory);
  };

  return (
    <nav className="bg-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/"><Image src={logo} width={200} alt='logo picture'/></a>        
        {/* Hamburger Icon visible à partir de 800px */}
        <div className="block lg:hidden" onClick={handleToggleMenu}>
          {openLinks ? (
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>

        {/* Menu Links cachés à partir de 800px */}
        <ul className={`lg:flex lg:items-center lg:space-x-8 lg:static left-0 top-16 lg:top-0 bg-white lg:bg-transparent w-full lg:w-auto transition-all duration-300 ease-in-out transform ${openLinks ? 'fixed inset-0 flex flex-col justify-center items-center z-50 bg-white' : 'hidden'}`}>
          
          {/* Category avec Toggle */}
          <li className="relative group z-20">
            <button onClick={toggleCategory} className="text-black hover:text-gray-700 px-4 py-2 font-semibold focus:outline-none flex items-center">
              Category
              {/* Flèche pour le dropdown */}
              <svg className={`w-5 h-5 ml-2 transform ${openCategory ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openCategory && (
              <ul className="absolute left-0 mt-2 w-48 bg-stone-200 text-black rounded-lg z-30 overflow-y-auto max-h-64">
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Add-ons</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Agencies</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Blogs</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Browser extensions</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Community startups</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Databases</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Directory websites</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Ecommerce businesses</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Info products</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Marketplce websites</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Mobile Apps</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Newsletters</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Sass Businesses</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Webs Apps</a></li>
                <li><a href="/" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Wordpress Businesses</a></li>


                {/* Autres sous-menus */}
              </ul>
            )}
          </li>

          {/* About et autres liens */}
          <li><a href="/about" className="text-black hover:text-gray-700 px-4 py-2 font-semibold">About</a></li>
          <li><a href="/contact" className="text-black hover:text-gray-700 px-4 py-2 font-semibold">Contact Us</a></li>
          
          {/* Login/Register avec hover et flèche */}
          <li className="relative group">
            <a href="/register" className="text-black hover:text-gray-700 px-4 py-2 font-semibold flex items-center">
              Register
              {/* Flèche pour le dropdown */}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <ul className="absolute left-0 mt-2 w-48 bg-stone-300 text-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <li><a href="/login" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Login</a></li>
              <li><a href="register" className="block px-4 py-2 hover:bg-red-500 hover:text-white hover:font-semibold">Register</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
