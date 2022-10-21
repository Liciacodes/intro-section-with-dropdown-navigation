import React from 'react';
import { HeaderBtns } from './HeaderBtns'
import { Logo } from './Logo'
import NavBar from './nav/NavBar'

export const Header = () => {
  return (
    <div className='flex justify-between items-center py-6 px-20'>
        <div className='flex items-center'>
          <Logo/>
          <NavBar/>
        </div>
        <HeaderBtns />
    </div>
  )
}
