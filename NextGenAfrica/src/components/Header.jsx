import React, { useState }  from 'react';
import { Link } from 'react-router-dom';

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}
	  return (
		      <header className="bg-blue-500 p-4 flex justify-between items-center ">
		        <h1 className="text-white text-3xl">NextGen Africa</h1>
		        <nav className={`flex-col md:flex-row md:flex space-x-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
		          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
		          <Link to="/overview" className="text-white hover:text-gray-300">Overview</Link>
		          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
		        </nav>
		        <button onClick={toggleMenu} className="md:hidden text-white">
		          {isOpen ? 'close' : 'Menu'}
		        </button>
		      </header>
		    );
}

export default Header;

