import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Navbar dibuat menyatu dengan hero (overlay), tidak berubah saat scroll

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={"navbar overlay"}>
      <div className="navbar-wrapper">
        <div className="logo-container">
          <a href="#home" className="logo">
            <img src={logo} alt="INSAN KONSTRUKSI NUSANTARA" className="logo-image" />
          </a>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          ☰
        </button>

        <nav className={`nav-container ${menuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


