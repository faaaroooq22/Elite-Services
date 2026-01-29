
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">ELITE SERVICES</h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Dedicated to academic integrity and publishing excellence. We provide premium content polishing for students and comprehensive solutions for authors worldwide.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#policies" className="hover:text-white">Our Policies</a></li>
              <li><a href="#academic" className="hover:text-white">Academic Services</a></li>
              <li><a href="#books" className="hover:text-white">Book Services</a></li>
              <li><a href="#contact" className="hover:text-white">Inquire Now</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Ethical Guidelines</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Refund Policy</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Elite Academic & Publishing Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <p>US English Language Standard</p>
            <p>Certified Ethical Editing</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
