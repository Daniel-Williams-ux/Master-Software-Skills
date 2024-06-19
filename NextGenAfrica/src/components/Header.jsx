import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-black flex justify-between items-center top-0 left-0 w-full h-24 z-50 shadow-md fixed">
      {/* Logo */}
      <img src={logo} alt="NextGen Africa" className="w-32 md:w-40 lg:w-48 h-44 object-contain" />

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className={`md:hidden text-white hover:text-green-200 font-display subpixel-antialiased px-2 py-1 mr-2 rounded-md z-50 ${
          isOpen ? 'fixed top-4 right-4 bg-red-500 border border-white' : 'bg-slate-500'
        }`}
      >
        {isOpen ? '✕' : 'Menu'}
      </button>

      {/* Mobile Menu Navigation */}
      <nav
        className={`fixed inset-0 py-8 hover:text-green-200 subpixel-antialiased bg-black bg-opacity-95 text-2xl  font-display flex flex-col items-center justify-center transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:relative md:inset-auto md:bg-transparent md:flex-row md:flex md:space-x-4 md:translate-x-0`}
      >
        <Link 
          to="/" 
          className="text-white hover:text-green-200 font-display subpixel-antialiased py-2 text-xl md:text-base" 
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link 
          to="/overview" 
          className="text-white hover:text-green-200 font-display subpixel-antialiased py-2 text-xl md:text-base" 
          onClick={handleLinkClick}
        >
          Overview
        </Link>
        <Link 
          to="/about" 
          className="text-white hover:text-green-200 font-display subpixel-antialiased py-2 text-xl md:text-base" 
          onClick={handleLinkClick}
        >
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;