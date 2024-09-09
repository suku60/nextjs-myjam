'use client';

import React, { useState } from 'react';

const Anchors: React.FC = () => {

  const MenuItems: string[] = [
    'Websites',
    'Home',
    'About',
    'Contact',
    'Try',
    'Prueba',
    'A',
    '13',
    'Jesucristo'
  ];

  return (
    <>{
      MenuItems.map((menuItem: string, index: number) => {
        if (index === 0) return null;
        return (
          <div key={menuItem} id={menuItem.toLocaleLowerCase()}>
            {menuItem}
          </div>
        );
      })
    }
    </>
  );
};

export default Anchors;
