import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <br /><div className="menu-icon" onClick={toggleDropdown}>
        &#9776; {/* Hamburger icon */}
      </div>
      <h1 className="navbar-title">NavBar</h1>
      <button className="login-button">Login</button>
      
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <a href="#home" onClick={closeDropdown}>Home</a>
          <a href="#about" onClick={closeDropdown}>About</a>
          <a href="#contact" onClick={closeDropdown}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
