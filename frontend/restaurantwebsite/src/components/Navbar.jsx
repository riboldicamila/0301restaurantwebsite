import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#2D3142] text-[#F1FAEE] shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#E63946]">SABAI THAI</h1>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/menu" className="hover:text-[#A5D8A6] transition-colors">MENU</Link>
          <Link to="/our-story" className="hover:text-[#A5D8A6] transition-colors">OUR STORY</Link>
          <Link to="/recipes" className="hover:text-[#A5D8A6] transition-colors">RESERVATIONS</Link>
          <Link to="/contact" className="hover:text-[#A5D8A6] transition-colors">CONTACT</Link>
        </div>

        <div className="hidden md:block">
          <Button>ORDER NOW</Button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#1D2030] px-4 py-2">
          <div className="flex flex-col space-y-3 pb-3">
            <Link to="/menu" className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]">MENU</Link>
            <Link to="/specials" className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]">SPECIALS</Link>
            <Link to="/about" className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]">OUR STORY</Link>
            <Link to="/recipes" className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]">RECIPES</Link>
            <Link to="/contact" className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]">CONTACT</Link>
            <Button fullWidth>ORDER NOW</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
