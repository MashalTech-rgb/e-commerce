import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaShoppingCart,
  FaListAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa"; // Import icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Header Section */}
      <header className="bg-white shadow-md px-4 md:px-14 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/assets/images/logo-colored.png" // Change this to your logo path
            alt="Brand Logo"
            className="w-28 md:w-32 h-auto" // Adjust logo size
          />
        </div>

        {/* Search Bar (Hidden on small screens) */}
        <div className="hidden md:flex items-center border-2 border-blue-500 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 outline-none w-full md:w-60"
          />
          <div className="relative">
            <select className="px-2 py-2 border-l border-blue-300 outline-none bg-white appearance-none w-40">
              <option value="">All Categories</option>
              <option value="winter">Winter Collection</option>
              <option value="summer">Summer Collection</option>
            </select>
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              ▼
            </span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors">
            Search
          </button>
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

      {/* Section Under Header */}
      <div className="bg-white py-3 px-4 md:px-14 flex flex-wrap items-center justify-between border-t border-b border-gray-300">
        {/* Left Side: Navigation Links */}
        <div className="flex items-center space-x-4 md:space-x-6 text-black text-xs md:text-sm font-medium">
          <div className="flex items-center cursor-pointer hover:text-blue-500">
            <FaBars className="w-4 h-4 mr-2" />
            <span>All category</span>
          </div>
          <span className="cursor-pointer hover:text-blue-500">Hot offers</span>
          <span className="cursor-pointer hover:text-blue-500">Gift boxes</span>
          <span className="cursor-pointer hover:text-blue-500">Projects</span>
          <span className="cursor-pointer hover:text-blue-500">Menu item</span>
          <div className="flex items-center cursor-pointer hover:text-blue-500">
            <span>Help</span>
            <FaChevronDown className="ml-1 w-3 h-3 text-gray-500" />
          </div>
        </div>

        {/* Right Side: Language and Shipping */}
        <div className="flex items-center space-x-4 md:space-x-6 text-black text-xs md:text-sm font-medium">
          <div className="flex items-center cursor-pointer hover:text-blue-500">
            <span>English, USD</span>
            <FaChevronDown className="ml-1 w-3 h-3 text-gray-500" />
          </div>
          <div className="flex items-center cursor-pointer hover:text-blue-500">
            <span>Ship to</span>
            <img
              src="/assets/images/icon.png" // Replace with actual flag image path
              alt="Germany Flag"
              className="w-5 h-3 ml-2"
            />
            <FaChevronDown className="ml-1 w-3 h-3 text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
