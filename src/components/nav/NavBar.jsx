import React, { useState } from 'react';
import { LinkItem } from './LinkItem';
import {menuLinks} from '../../data';
import { Dropdown } from '../Dropdown';



const NavBar = () => {
  const [dropDown, setDropDown] = useState(false)

  
  return (
      <ul className='flex ml-10 text-[#696969] font-medium'>
        {
            menuLinks.map((item)  => {
              if (item.title === "Features") {
                return(
                    <li
                  key={item.id}
                  onMouseEnter={() => setDropDown(true)}
                  onMouseLeave={() => setDropDown(false)}>
                    <LinkItem 
                    title={item.title} 
                    to={item.path}
                    key={item.id}
                    icon={item.icon}
                   />
                 
                  {dropDown && <Dropdown/>}
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
