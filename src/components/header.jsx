import { Link } from "react-router-dom"; // Correct import for Link
import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaShoppingCart,
  FaListAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa"; // Import FontAwesome icons
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [shipToOpen, setShipToOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const currencies = ["USD", "EUR", "GBP", "INR", "JPY"];
  const countries = [
    { name: "Germany", flag: "/assets/images/germany.png" },
    { name: "USA", flag: "/assets/images/australia.png" },
    { name: "UK", flag: "/assets/images/england.png" },
    { name: "France", flag: "/assets/images/france.png" },
    { name: "China", flag: "/assets/images/china.png" },
  ];
  const categories = ["Hot offers", "Gift boxes", "Projects", "Menu items"];
  const helpOptions = ["FAQ", "Contact Us", "Shipping Info", "Returns", "Privacy Policy"];

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div>
      {/* Header Section */}
      <header className="bg-white shadow-md px-4 md:px-14 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/assets/images/logo-colored.png"
            alt="Brand Logo"
            className="w-28 md:w-32 h-auto"
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
              <option value="winter">Electronics</option>
              <option value="summer">Fashion</option>
              <option value="summer">Home & Kitchen</option>
            </select>
            <MdKeyboardArrowDown className="absolute right-2 top-1/2 -translate-y-1/2 text-black text-2xl pointer-events-none" />
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
            <span className="text-xs"> <Link to="/MyCart">My Cart</Link></span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu (Opens when FaBars is clicked) */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
            {/* Profile */}
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
              <FaUser className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </div>
            {/* Message */}
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
              <FaEnvelope className="w-5 h-5" />
              <span className="text-xs">Message</span>
            </div>
            {/* Orders */}
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
              <FaListAlt className="w-5 h-5" />
              <span className="text-xs">Orders</span>
            </div>
            {/* My Cart */}
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
              <FaShoppingCart className="w-5 h-5" />
              <span className="text-xs">  <Link to="/MyCart">My Cart</Link></span>
            </div>
          </div>
        )}
      </header>

      {/* Section Under Header */}
      <div className="bg-white py-3 px-4 md:px-14 border-t border-b border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Left Side: Navigation Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 text-black text-xs md:text-sm font-medium">
            {/* All Category Menu (Only Text and Icon, No Dropdown) */}
            <div className="relative">
              <div className="flex items-center cursor-pointer hover:text-blue-500">
                <FaBars className="w-4 h-4 mr-2" />
                <span> <Link to="/listing">All category</Link></span>
              </div>
            </div>

            {/* Categories in Menu Options */}
            <div className="flex flex-wrap gap-4">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={`/${category.toLowerCase().replace(/ /g, "-")}`} // Example: /hot-offers
                  className="cursor-pointer hover:text-blue-500"
                >
                  {category}
                </Link>
              ))}
            </div>

            {/* Help Dropdown */}
            <div className="relative">
              <div
                className="flex items-center cursor-pointer hover:text-blue-500"
                onClick={() => setHelpOpen(!helpOpen)}
              >
                <span>Help</span>
                <FaChevronDown className="ml-1 w-3 h-3 text-gray-500" />
              </div>
              {helpOpen && (
                <div className="absolute top-6 left-0 bg-white shadow-md rounded-md p-2 z-10 min-w-[150px]">
                  {helpOptions.map((option, index) => (
                    <div
                      key={index}
                      className="cursor-pointer hover:text-blue-500 p-1"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Language and Shipping */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 text-black text-xs md:text-sm font-medium">
            {/* Currency Dropdown */}
            <div className="relative">
              <div
                className="flex items-center cursor-pointer hover:text-blue-500"
                onClick={() => setCurrencyOpen(!currencyOpen)}
              >
                <span>English, {selectedCurrency}</span>
                <FaChevronDown className="ml-1 w-3 h-3 text-gray-500" />
              </div>
              {currencyOpen && (
                <div className="absolute top-6 left-0 bg-white shadow-md rounded-md p-2 z-10 min-w-[120px]">
                  {currencies.map((currency, index) => (
                    <div
                      key={index}
                      className="cursor-pointer hover:text-blue-500 p-1"
                      onClick={() => {
                        setSelectedCurrency(currency);
                        setCurrencyOpen(false);
                      }}
                    >
                      {currency}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Ship to Dropdown */}
            <div className="relative">
              <div
                className="flex items-center cursor-pointer hover:text-blue-500"
                onClick={() => setShipToOpen(!shipToOpen)}
              >
                <span>Ship to</span>
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  className="w-5 h-3 ml-2"
                />
                <FaChevronDown className="ml-1 w-3 h-3 text-gray-500" />
              </div>
              {shipToOpen && (
                <div className="absolute top-6 left-0 bg-white shadow-md rounded-md p-2 z-10 min-w-[120px]">
                  {countries.map((country, index) => (
                    <div
                      key={index}
                      className="flex items-center cursor-pointer hover:text-blue-500 p-1"
                      onClick={() => {
                        setSelectedCountry(country);
                        setShipToOpen(false);
                      }}
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-5 h-3 mr-2"
                      />
                      <span>{country.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;