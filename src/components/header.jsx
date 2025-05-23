import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// SVG imports
import logo from '../assets/logo.svg';
import searchIcon from '../assets/search.svg';
import cartIcon from '../assets/cart.svg';
import heartIcon from '../assets/heart.svg';
import hamburgerIcon from '../assets/hamburger.svg';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header">
        {/* Left section with hamburger and Products */}
        <div className="left-section">
          <img
            src={hamburgerIcon}
            alt="Menu"
            className="icon hamburger"
            onClick={toggleSidebar}
          />
          <Link to="/products" className="nav-link products-link">
            Products
          </Link>
        </div>

        {/* Center logo */}
        <div className="center-section">
          <img src={logo} alt="Laksh Closet Logo" className="site-logo" />
        </div>

        {/* Right section with icons */}
        <div className="right-section">
          <img src={searchIcon} alt="Search" className="icon" />
          <img src={heartIcon} alt="Wishlist" className="icon" />
          <img src={cartIcon} alt="Cart" className="icon" />
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>×</button>
        <h3>Categories</h3>
        <ul>
          <li>Unisex</li>
          <li>Baggy</li>
          <li>Straight Fit</li>
          <li>Bootcut</li>
          <li>Ripped Jeans</li>
          <li>Mom Jeans</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
