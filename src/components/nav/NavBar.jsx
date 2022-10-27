import React, { useState } from 'react';
import { LinkItem } from './LinkItem';
import {menuLinks} from '../../data';
import { Dropdown } from '../Dropdown';




const NavBar = () => {
  const [dropDown, setDropDown] = useState({
    isVisible: false,
     id: null,
    })

  return (
      <ul className='md:flex mr-14 sm:ml-0 text-[#696969] font-medium
      hidden'>
        {
            menuLinks.map((item)  => {
              if (item.dropdown) {
                return(
                    <li
                  key={item.id}
                  onMouseEnter={() => setDropDown({isVisible: true, id: item.id})}
                  onMouseLeave={() => setDropDown({isVisible: false, id: null})}>
                    <LinkItem 
                    title={item.title} 
                    to={item.path}
                    key={item.id}
                    icon={item.icon}
                   />
                 
                  {dropDown.isVisible && dropDown.id === item.id && item.dropdown && <Dropdown 
                  dropdownList={item.dropdown}
                  title={item.title}/>}
                  </li>
                  );
                  
                }
               
                
                  
              return(
                <LinkItem 
                title={item.title} 
                to={item.path} 
                key={item.id}
                icon={item.icon}/>
                )})  
               
        }
        
       
      </ul>
      )
}

export default NavBar;
