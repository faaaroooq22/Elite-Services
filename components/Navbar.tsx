import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tight text-blue-700">
              ELITE<span className="text-gray-900">SERVICES</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
            <a href="#policies" className="hover:text-blue-700 transition-colors">Policies</a>
            <a href="#academic" className="hover:text-blue-700 transition-colors">Academic</a>
            <a href="#books" className="hover:text-blue-700 transition-colors">Books</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-blue-700 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-4">
          <a href="#policies" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-blue-700 font-medium">Policies</a>
          <a href="#academic" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-blue-700 font-medium">Academic</a>
          <a href="#books" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-blue-700 font-medium">Books</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-blue-700 font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;