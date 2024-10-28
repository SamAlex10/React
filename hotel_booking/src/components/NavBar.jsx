import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>AlexMotels</h1> 
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/signup" className="nav-link">Register</Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
