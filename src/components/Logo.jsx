import React from 'react'
import { Link } from 'react-router-dom'
// import {menuLinks} from '../../helpers/data'

export const Logo = (item) => {
  return (
    <Link to="/">
     <h1 className="sm:text-3xl font-bold text-[#141414] mr-7
     text-2xl ml-11">Snap</h1>
     </Link>
   
  )
}
