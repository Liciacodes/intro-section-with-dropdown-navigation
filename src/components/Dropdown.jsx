import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Dropdown = ({dropdownList, title}) => {
    const [dropDown, setDropDown] = useState(false);
    const style = title === "Features" ? "left-[150px]" : title === "Company" ? "left-[300px]" : ""
  return (
    <>
    <ul className={dropDown ? 'hidden' : `font-bold w-30 absolute text-center top-10 ${style} bg-white border rounded-lg mx-5 my-7 px-1 shadow-[0px_0px_15px_#696969]`}
    onClick={() => setDropDown(!dropDown)}>
   {dropdownList.map(item => {
    return (
        <li key={item.id}  className="cursor-pointer">
            <Link 
              to={item.path} 
              className="block text-[#696969] w-full h-full p-2  hover:bg-blue-100 rounded-xl"
              onClick={() => setDropDown(false)}>
                <p className='flex items-center'>
                <span className='mx-2'>
               {item.icon &&  <img src={item.icon} alt="icon"/>}
              </span> 
              {item.title}</p>
            </Link>
        </li>
    )
   })
   }   
    </ul>
    </>
  )
}
