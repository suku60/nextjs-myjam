'use client';

import { MenuItems } from '@/app/data/items';
import React, { useState } from 'react';
import './anchors.css'

const Anchors: React.FC = () => {

  // const MenuItems: string[] = [
  //   'Websites',
  //   'Home',
  //   'About',
  //   'Contact',
  //   'Try',
  //   'Prueba',
  //   'A',
  //   '13',
  //   'Jesucristo'
  // ];

  return (
    <>{
      MenuItems.map((menuItem: string, index: number) => {
        if (index === 0) return null;
        return (
          <section key={menuItem} id={menuItem.toLocaleLowerCase()} className='anchor'>
            {menuItem}
          </section>
        );
      })
    }
    </>
  );
};

export default Anchors;
