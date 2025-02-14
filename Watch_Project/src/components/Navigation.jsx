import { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold"
        >
          Ethos Watches
        </motion.div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-600 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Watches</a>
          <a href="#" className="hover:text-gray-600 transition-colors">About</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Contact</a>
        </div>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
