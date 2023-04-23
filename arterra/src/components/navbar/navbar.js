import React from 'react';
import logo from './logo.png';
import './navbar.css';

function NavBar() {
  return (
    <div className="NavBar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="localhost:3000" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="localhost:3000" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="localhost:3000" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="localhost:3000" className="nav-link">Contact</a>
          </li>
        </ul>
        <img src={logo} alt="Arterra Interactive" className="logo" />
    </div>
  );
}

export default NavBar;
