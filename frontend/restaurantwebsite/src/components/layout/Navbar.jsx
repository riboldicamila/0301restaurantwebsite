import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import Button from "../Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleReserveNow = () => {
    // Not <Link>, so can add future logic, extra validation before click.
    navigate("/reservations");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#2D3142] text-[#F1FAEE] shadow-md font-trirong">
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
          <Button onClick={handleReserveNow}>RESERVE NOW</Button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
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
            <Button fullWidth onClick={handleReserveNow}>
              RESERVE NOW
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;