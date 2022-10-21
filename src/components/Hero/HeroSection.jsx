import React from 'react'
import { HeroBackgroundImage } from './HeroBackgroundImage'
import { HeroText } from './HeroText'

export const HeroSection = () => {
  return (
        <div className='flex'>
           <HeroText/>
           <HeroBackgroundImage/>
        </div>
  
  )
}
