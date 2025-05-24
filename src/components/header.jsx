import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import '../fonts.css';

import './header.css';
// SVG imports
import logo from '../assets/logo.svg';
import searchIcon from '../assets/search.svg';
import cartIcon from '../assets/cart.svg';
import heartIcon from '../assets/heart.svg';
import hamburgerIcon from '../assets/hamburger.svg';
import instagramIcon from '../assets/instagram.svg';
import youtubeIcon from '../assets/youtube.svg';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Header */}
      <header className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-6 bg-white border-b-8 border-gray-300 relative min-h-[100px] font-karla">

{/* Left Section */}
<div className="flex items-center gap-4 sm:gap-6 flex-1">
  {/* Hamburger Icon */}
  <div className="hamburger-container flex items-center gap-3">
    <img
      src={hamburgerIcon}
      alt="Menu"
      className="w-7 cursor-pointer transition-transform hover:scale-110"
      onClick={toggleSidebar}
    />
    
    {/* Search icon for small screens only */}
    <img
      src={searchIcon}
      alt="Search"
      className="search-icon-mobile"
    />
  </div>
</div>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src={logo} alt="Laksh Closet Logo" className="h-20" />
        </div>

{/* Right Section */}
<div className="flex items-center gap-4 sm:gap-6 flex-1 justify-end">
  {/* Search icon for large screens only */}
  <img
    src={searchIcon}
    alt="Search"
    className="search-icon-desktop"
  />
  <img
    src={heartIcon}
    alt="Wishlist"
    className="w-6 cursor-pointer transition-transform hover:scale-110"
  />
  <div className="cart-container">
    <img
      src={cartIcon}
      alt="Cart"
      className="w-6 cursor-pointer transition-transform hover:scale-110"
    />
  </div>
</div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[250px] bg-gray-100 shadow-lg px-6 py-8 transition-all z-[1000] font-karla ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl font-bold"
          onClick={toggleSidebar}
        >
          ×
        </button>

        {/* Sidebar Heading */}
        <h3 className="text-lg font-kanit mb-6 uppercase tracking-wide text-gray-800">
          Categories
        </h3>

        {/* Category List */}
        <ul className="space-y-4 text-gray-700 text-base">
          <li className="cursor-pointer hover:text-gray-900">Products</li>
          <li className="cursor-pointer hover:text-gray-900">Unisex</li>
          <li className="cursor-pointer hover:text-gray-900">Baggy</li>
          <li className="cursor-pointer hover:text-gray-900">Straight Fit</li>
          <li className="cursor-pointer hover:text-gray-900">Bootcut</li>
          <li className="cursor-pointer hover:text-gray-900">Ripped Jeans</li>
          <li className="cursor-pointer hover:text-gray-900">Mom Jeans</li>
        </ul>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Login/Register */}
        <div className="space-y-2 text-base text-blue-700">
          <Link to="/login" className="block hover:underline">Login</Link>
          <Link to="/register" className="block hover:underline">Register</Link>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Social Icons */}
        <div className="sidebar-social-icons">
          <img
            src={instagramIcon}
            alt="Instagram"
            className="w-6 cursor-pointer hover:scale-110 transition-transform"
          />
          <img
            src={youtubeIcon}
            alt="YouTube"
            className="w-6 cursor-pointer hover:scale-110 transition-transform"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
