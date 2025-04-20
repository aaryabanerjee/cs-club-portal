import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="matrix-nav">
      <div className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link to="/submit-project" className="nav-link" onClick={() => setIsOpen(false)}>
          Submit Project
        </Link>
        <Link to="/hall-of-fame" className="nav-link" onClick={() => setIsOpen(false)}>
          Hall of Fame
        </Link>
        <Link to="/resources" className="nav-link" onClick={() => setIsOpen(false)}>
          Resources
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;