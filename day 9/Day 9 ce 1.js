import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
const NavBar = () => {
 return (
 <div className="navbar">
 <Link to="/">Home</Link>
 <Link to="/singers">Singers</Link>
 <Link to="/albums">Albums</Link>
 </div>
 );
};
export default NavBar;