'use client';

import React, { useState } from 'react';
import './header.css';
import Image from 'next/image';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import { MenuItems } from '@/app/data/items';

const Header: React.FC = () => {

  const isMobile1024 = useIsMobile(1024);

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

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
              MenuItems.map((menuItem, index) => {
                // if (index === 0) return null
                return <li key={menuItem} data-length={menuItem.length}>
                  <a href={`#tema${index+1}`}>
                    {/* {menuItem.toLocaleLowerCase().split('_¿')[0].replace('$', `${index}`)} */}
                    {index+1}
                  </a>
                </li>
              })
            }
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
