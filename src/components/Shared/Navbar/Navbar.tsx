import React, { useState } from 'react';
import LOGO from '../../../assets/logo.png'
import CHAIN from '../../../assets/chain.png'

import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = <>
    <li>
      <Link to={"/"}>Swap</Link>
    </li>
    <li>
      <Link to={"/"}>Dashboard</Link>
    </li>
    <li>
      <Link to={"/"}>Liquidity</Link>
    </li>
    <li>
      <Link to={"/"}>Vote</Link>
    </li>
    <li>
      <Link to={"/"}>Lock</Link>
    </li>
  </>

  return (
    <nav className="border-b border-[#2b2b2b] py-4">
      <div className="w-full mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Left site - Logo */}
          <div className="flex-shrink-0">
            <span className="flex items-center gap-2">
              <img className='drag-none' src={LOGO} alt="" />
              <h4 className='hidden md:flex font-bold text-2xl italic bg-gradient-to-r from-[#FFBF60] to-[#FC8415] bg-clip-text text-transparent'>MONISWAP</h4>
            </span>
          </div>

          {/* Middle site - Nav Items */}
          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-6 items-center text-[#cfcfcf]">
              {navItems}

              {/* More Dropdown */}
              <li className="relative">
                <button onClick={toggleDropdown} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown Content */}
                {isDropdownOpen && (
                  <ul className="absolute mt-2 w-40 left-0 bg-gray-800 rounded-md shadow-lg z-10">
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                        Incentives
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                        Launchpad
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">
                        Seekers
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          {/* Right site - Contact Button */}
          <div className='flex items-center gap-2'>

            <div className='flex items-center gap-3'>
              <button className='bg-[#3E3831] p-4 rounded-lg'>
                <img src={CHAIN} alt="" />
              </button>
              <button className='py-3 px-6 rounded-lg bg-gradient-to-r from-[#ffbf60] to-[#fcb415] text-white'>Contact</button>
            </div>
            <div className="flex-shrink-0 md:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 9a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0-4a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 8a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
              <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-white font-semibold text-xl">Logo</span>
                  </div>
                  <div className="-mr-2">
                    <button onClick={toggleMobileMenu} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span className="sr-only">Close menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <ul>
                    {navItems}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
