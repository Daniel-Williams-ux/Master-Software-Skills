import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}
	  return (
		      <header className="bg-black text-white flex justify-between items-center top-0 left-0 w-full h-24 z-50 shadow-md fixed">
		        <img src={logo} alt="NextGen Africa" className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain" />
		        <nav className={`flex-col md:flex-row md:flex space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
		          <Link to="/" className="hover:text-gray-300">Home</Link>
		          <Link to="/overview" className="hover:text-gray-300">Overview</Link>
		          <Link to="/about" className="hover:text-gray-300">About</Link>
		        </nav>
		        <button onClick={toggleMenu} className="md:hidden text-white">
		          {isOpen ? 'close' : ' Menu'}
		        </button>
		      </header>
		    );
}

export default Header;

