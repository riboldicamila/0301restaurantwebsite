import React, { useState } from 'react';
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
          <a href="#menu" className="hover:text-[#A5D8A6] transition-colors">MENU</a>
          <a href="#specials" className="hover:text-[#A5D8A6] transition-colors">SPECIALS</a>
          <a href="#about" className="hover:text-[#A5D8A6] transition-colors">OUR STORY</a>
          <a href="#recipes" className="hover:text-[#A5D8A6] transition-colors">RECIPES</a>
          <a href="#contact" className="hover:text-[#A5D8A6] transition-colors">CONTACT</a>
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
            <a href="#menu" className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]">MENU</a>
            <a href="#specials" className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]">SPECIALS</a>
            <a href="#about" className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]">OUR STORY</a>
            <a href="#recipes" className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]">RECIPES</a>
            <a href="#contact" className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]">CONTACT</a>
            <Button fullWidth>ORDER NOW</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;