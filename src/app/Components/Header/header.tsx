'use client';

import React, { useState } from 'react';
import './header.css';
import Image from 'next/image';
import { useIsMobile } from '@/app/hooks/useIsMobile';

const Header: React.FC = () => {

  const isMobile1024 = useIsMobile(1024);

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const MenuItems = [
    'Websites',
    'Home',
    'About',
    'Contact',
  ]
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <>
      <header className=''>
        <nav className={`${isOpen ? 'open' : ''}`}>
          <a className='logo' href='/'>
            <Image
              height={30}
              width={30}
              alt='logo'
              src={'/assets/logo.jpg'}
            />
          </a>
          <ul
            onMouseOver={() => { setIsMenuHovered(true); }}
            onMouseLeave={() => { setIsMenuHovered(false); }}
            className={`${isMenuHovered ? 'active' : ''}`}>
            {

            }
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            {/* <li>
              <p
                onClick={(e) => toggleSubmenu()}
                aria-label="Toggle Websites submenu"
                aria-expanded={isOpen}
              >Websites</p>
              <ul className={`websites_submenu ${isSubmenuOpen ? 'active' : ''}`}>
                <li><a href="/retail">Retail</a></li>
                <li><a href="/restaurant">Restaurant</a></li>
                <li><a href="/real-state">Real State</a></li>
                <li><a href="/social-media">Social Media</a></li>
              </ul>
            </li> */}
          </ul>
          {
            isMobile1024 ? <div
              className='menu_mobile'
              onClick={(e) => toggleMenu()}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className='menu_mobile_icon'></span>
            </div> : null
          }

        </nav>
      </header>
    </>
  );
};

export default Header;
