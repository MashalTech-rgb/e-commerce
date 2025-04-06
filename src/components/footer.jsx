import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"; // Correct import

const Footer = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const languages = ["English", "Spanish", "French", "German", "Chinese"];

  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="container">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-16 py-8">
          {/* Left Section: Logo & Description */}
          <div className="mb-6 md:mb-0 max-w-sm">
            <div className="flex items-center space-x-2 mb-3">
              <img src="/assets/images/logo-colored.png" alt="Brand Logo" className="w-30 h-10" />
            </div>
            <p className="text-black">
              Best information about the company <br /> goes here but now lorem ipsum is
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <FaFacebook className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <FaYoutube className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer" />
            </div>
          </div>

          {/* Middle Section: Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full md:w-auto">
            {/* About */}
            <div>
              <h3 className="font-semibold mb-3">About</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Find store</a></li>
                <li><a href="#" className="hover:text-blue-500">Categories</a></li>
                <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
              </ul>
            </div>

            {/* Partnership */}
            <div>
              <h3 className="font-semibold mb-3">Partnership</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Find store</a></li>
                <li><a href="#" className="hover:text-blue-500">Categories</a></li>
                <li><a href="#" className="hover:text-blue-500">Blogs</a></li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="font-semibold mb-3">Information</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-500">Money Refund</a></li>
                <li><a href="#" className="hover:text-blue-500">Shipping</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact us</a></li>
              </ul>
            </div>

            {/* For Users */}
            <div>
              <h3 className="font-semibold mb-3">For Users</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-blue-500">Login</a></li>
                <li><a href="#" className="hover:text-blue-500">Register</a></li>
                <li><a href="#" className="hover:text-blue-500">Settings</a></li>
                <li><a href="#" className="hover:text-blue-500">My Orders</a></li>
              </ul>
            </div>

            {/* Get App */}
            <div>
              <h3 className="font-semibold mb-3">Get app</h3>
              <div className="flex flex-col space-y-2">
                <img
                  src="/assets/images/market-button 1.png"
                  alt="App Store"
                  className="w-32 cursor-pointer"
                />
                <img
                  src="/assets/images/market-button.png"
                  alt="Google Play"
                  className="w-32 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section (Fixed & Styled) */}
        <div className="bg-gray-200 px-14">
          <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6 text-gray-700 text-sm">
            <p>© {new Date().getFullYear()} Ecommerce.</p>
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                <img src="/assets/images/US@2x.png" alt="US Flag" className="w-5 h-5" />
                <span>English</span>
                {languageOpen ? (
                  <MdKeyboardArrowUp className="w-4 h-4" />
                ) : (
                  <MdKeyboardArrowDown className="w-4 h-4" />
                )}
              </div>
              {/* Language Dropdown (Opens Upwards and Aligns Right) */}
              {languageOpen && (
                <div className="absolute bottom-full right-0 bg-white shadow-md rounded-md p-2 z-10 min-w-[120px]">
                  {languages.map((language, index) => (
                    <div
                      key={index}
                      className="cursor-pointer hover:text-blue-500 p-1"
                      onClick={() => setLanguageOpen(false)}
                    >
                      {language}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;