import React from 'react'
import {Link} from 'react-router-dom'

export const LinkItem = ({title, path, id, icon}) => {
  return (
    <li className='mr-16'>
     <Link to={path} key={id} className='flex'>
      {title}
      {icon && <img src={icon} className='mt-2 ml-1 w-4 h-2' alt='icon'/>}
     </Link>
   
  </li>
  )
}
