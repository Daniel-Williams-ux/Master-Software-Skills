// Header.js
import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.jpg'; 

const navigation = [
  { name: 'Home', href: '/', current: true }, 
  { name: 'Models', href: '/models', current: false },
  { name: 'Ownership', href: '/ownership', current: false },
  { name: 'Experience', href: '/experience', current: false }, 
  { name: 'About', href: '/about', current: false }, 
  { name: 'Contact Us', href: '/contact us', current: false }, 
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-24">
        <div className="flex items-center">
          <img
            className="block lg:hidden h-20 w-auto" // Increased height for mobile logo
            src={logo} // Replace with actual mobile logo path
            alt="Your Logo"
          />
          <img
            className="hidden lg:block h-24 w-auto" // Increased height for desktop logo
            src={logo}
            alt="Your Logo"
          />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navigation.map((item) => (
               <Link
               key={item.name}
               to={item.href} // Use Link component with the correct path
               className={classNames(
                 item.current
                   ? 'border-indigo-500 text-gray-900'
                   : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
               )}
               aria-current={item.current ? 'page' : undefined}
             >
               {item.name}
             </Link>
            ))}
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="-mr-2 p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={classNames(mobileMenuOpen ? 'block' : 'hidden', 'sm:hidden')}>
        <div className="pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
