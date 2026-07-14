import React, { useState } from 'react';
import { FaLeaf, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/')}>
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <FaLeaf className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AgriSathi</h1>
                <p className="text-xs text-green-600 font-semibold">AI Farming</p>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('/')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/features')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('/generate-report')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Generate Report
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-white border-t border-gray-200">
            <button
              onClick={() => handleNavigation('/')}
              className="w-full text-left block py-2 text-gray-700 hover:text-green-600 font-medium px-4"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/features')}
              className="w-full text-left block py-2 text-gray-700 hover:text-green-600 font-medium px-4"
            >
              Features
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="w-full text-left block py-2 text-gray-700 hover:text-green-600 font-medium px-4"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('/generate-report')}
              className="w-full mt-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium mx-4"
            >
              Generate Report
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
