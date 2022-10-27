import React, {useState} from 'react';
import { HeaderBtns } from './HeaderBtns'
import { Logo } from './Logo'
import NavBar from './nav/NavBar'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { MobileNavLinks } from './MobileNavLinks';

export const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const style = {fontSize: "2rem", fontWeight: "bold"}


  return (
    <div className='flex justify-between items-center py-6 px-20'>
        <div className='flex items-center'>
          <Logo/>
          <NavBar/>
        </div>
        <HeaderBtns />
        <div className='block  md:hidden absolute
        right-8 top-4 cursor-pointer'>
        {  click ?  
          <AiOutlineMenu onClick={handleClick} style={style}/> :
          <AiOutlineClose onClick={handleClick} style={style}/> 
        }
        </div>
       <MobileNavLinks click={click}/>
    </div>
  )
}
