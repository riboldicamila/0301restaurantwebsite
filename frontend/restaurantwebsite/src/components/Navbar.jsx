import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";
import Banner from "../components/BannerInfo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const handleOrderNowClick = () => {
    setShowBanner(true);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#2D3142] text-[#F1FAEE] shadow-md font-primary">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dav7tzdzv/image/upload/v1746006222/Logo_Inchiostro_Semplice_Bianco_Nero-removebg-preview_wf00gz.png"
              alt="Sabai Thai Logo"
              className="h-10 w-auto scale-120 ml-1"
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 font-semibold text-[16px]">
          <Link to="/" className="hover:text-[#A5D8A6] transition-colors">
            HOME
          </Link>
          <Link to="/menu" className="hover:text-[#A5D8A6] transition-colors">
            MENU
          </Link>
          <Link
            to="/our-story"
            className="hover:text-[#A5D8A6] transition-colors"
          >
            OUR STORY
          </Link>
          <Link
            to="/reservations"
            className="hover:text-[#A5D8A6] transition-colors"
          >
            RESERVATIONS
          </Link>
        </div>

        <div className="hidden md:block">
          <Button onClick={handleOrderNowClick}>ORDER NOW</Button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#1D2030] px-4 py-2">
          <div className="flex flex-col space-y-3 pb-3">
            <Link
              to="/"
              className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]"
            >
              HOME
            </Link>
            <Link
              to="/menu"
              className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]"
            >
              MENU
            </Link>
            <Link
              to="/our-story"
              className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]"
            >
              OUR STORY
            </Link>
            <Link
              to="/reservations"
              className="hover:text-[#A5D8A6] transition-colors pb-2 border-b border-[#3D4152]"
            >
              RESERVATIONS
            </Link>
            <Button fullWidth onClick={handleOrderNowClick}>
              ORDER NOW
            </Button>
          </div>
        </div>
      )}

      {showBanner && <Banner onClose={handleCloseBanner} />}
    </nav>
  );
};

export default Navbar;
