import React from "react";
import { NavLink, useLocation } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="bg-black flex justify-between items-center p-4 navbar z-50 sticky top-0">
        <div className="flex items-center">
          <img src="" alt="Logo" className="h-8 w-8" />
          <span className="ml-2 text-white text-xl font-medium white-space-nowrap">
            Demo
          </span>
        </div>
        <div className="flex items-center">
          <NavLink
            to="/home"
            href="#home"
            className="text-white mx-8 menu-item"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            href="#about"
            className="text-white mx-8 menu-item"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            href="#contact"
            className="text-white mx-8 menu-item"
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
