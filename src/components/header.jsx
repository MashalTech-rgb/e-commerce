import React, { useState } from "react";
import { FaUser, FaEnvelope, FaShoppingCart, FaListAlt, FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-14 py-3 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="/src/assets/logo-colored.png" // Change this to your logo path
          alt="Brand Logo"
          className="w-30 h-10" // Adjust logo size
        />
        
      </div>

      {/* Search Bar (Hidden on small screens) */}
      <div className="hidden md:flex items-center border border-blue-500 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 outline-none w-60"
        />
        <select className="px-4 py-2 border-l border-blue-300 outline-none">
          <option>All category</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2">Search</button>
      </div>

      {/* Desktop Icons (Hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-6 text-gray-500">
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
          <FaUser className="w-5 h-5" />
          <span className="text-xs">Profile</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
          <FaEnvelope className="w-5 h-5" />
          <span className="text-xs">Message</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
          <FaListAlt className="w-5 h-5" />
          <span className="text-xs">Orders</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
          <FaShoppingCart className="w-5 h-5" />
          <span className="text-xs">My cart</span>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
            <FaUser className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
            <FaEnvelope className="w-5 h-5" />
            <span className="text-xs">Message</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
            <FaListAlt className="w-5 h-5" />
            <span className="text-xs">Orders</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
            <FaShoppingCart className="w-5 h-5" />
            <span className="text-xs">My cart</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
