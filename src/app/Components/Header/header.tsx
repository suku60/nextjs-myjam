'use client';

import React, { useState } from 'react';
import './header.css';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className=''>
        <nav className={`${isOpen ? 'open' : ''}`}>
          <a className='logo' href='/'>
            <Image
              height={30}
              width={30}
              alt=''
              src={''}
            />
          </a>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <p>Websites</p>
              <ul className='websites_submenu'>
                <li><a href="/retail">Retail</a></li>
                <li><a href="/restaurant">Restaurant</a></li>
                <li><a href="/real-state">Real State</a></li>
              </ul>
            </li>
          </ul>
          <div
            className='menu_mobile'
            onClick={(e) => toggleMenu()}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className='menu_mobile_icon'></span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
