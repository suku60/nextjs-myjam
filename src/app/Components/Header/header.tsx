'use client';

import React, { useState } from 'react';
import './header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=''>
      <div className='logo'></div>
      <nav className={`${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button
        className='menu'
        onClick={(e) => toggleMenu()}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className='menu_icon'></span>
      </button>
    </header>
  );
};

export default Header;
