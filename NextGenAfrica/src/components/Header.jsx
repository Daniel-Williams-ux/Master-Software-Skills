import React from 'react';

function Header() {
	  return (
		      <header className="">
		        <h1 className="">NextGen Africa</h1>
		        <nav className="">
		          <a href="#linux" className="text-white hover:text-gray-300">Linux</a>
		          <a href="#mongodb" className="text-white hover:text-gray-300">MongoDB</a>
		          <a href="#frontend" className="text-white hover:text-gray-300">Frontend</a>
		          <a href="#backend" className="text-white hover:text-gray-300">Backend</a>
		        </nav>
		        <button className="md:hidden text-white">Menu</button>
		      </header>
		    );
}

export default Header;

