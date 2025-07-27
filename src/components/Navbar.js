import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Name/Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-gray-900">
              Anmol
            </h1>
          </div>

          {/* Right side - Navigation Links */}
          <div className="flex space-x-8">
            <Link 
                to="/about" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
                About
            </Link>
            <Link 
                to="/experience" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
                Experience
            </Link>
            <Link 
                to="/contact" 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
                Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;