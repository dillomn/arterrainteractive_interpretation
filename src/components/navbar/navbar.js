import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './navbar.css';

function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className={`NavBar ${isScrolled ? 'scrolled' : ''}`}>
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
