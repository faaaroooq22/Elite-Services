
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600">
              ELITE SERVICES
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#policies" className="hover:text-blue-700 transition-colors">Policies</a>
            <a href="#academic" className="hover:text-blue-700 transition-colors">Academic</a>
            <a href="#books" className="hover:text-blue-700 transition-colors">Books</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button simplified */}
            <button className="text-gray-500 hover:text-blue-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
