import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Gowtham Jenarthanan</h3>
            <p className="text-gray-400">Implementation Analyst | CRM & SaaS Expert</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <p className="text-gray-400 flex items-center">
              Made with <Heart className="text-red-500 mx-1" size={16} /> for better business solutions
            </p>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Gowtham Jenarthanan. All rights reserved. | Ready to transform your business with smart CRM solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;