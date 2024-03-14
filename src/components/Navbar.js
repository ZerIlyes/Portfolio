import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Logo or Brand name */}
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Z.I</span>
              </a>
            </div>
          </div>
          {/* Navbar links */}
          <div className="flex items-center space-x-1">
            <a href="#projets" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Projets</a>
            <a href="#skills" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Compétences</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="hidden mobile-menu">
        <ul>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#projets" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Projets</a></li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#competences" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Compétences</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

