'use client';

import { MenuItems } from '@/app/data/items';
import React, { useEffect, useState } from 'react';
import './anchors.css'

const Anchors: React.FC = () => {


  return (
    <>{
      MenuItems.map((menuItem: string, index: number) => {
        // if (index === 0) return null;
        return (
          <section 
          key={index} 
          id={`tema${index+1}`} 
          className='anchor'>
            {menuItem.replace('$', `${index+1}`).replace('_¿', '-')}
          </section>
        );
      })
    }
    </>
  );
};

export default Anchors;
