import React from 'react'
import { HeroBackgroundImage } from './HeroBackgroundImage'
import { HeroText } from './HeroText'

export const HeroSection = () => {
  return (
        <div className='flex w-[95%] md:w-[90%] lg:w-[85%] mx-auto flex-col-reverse lg:flex-row'>
           <HeroText/>
           <HeroBackgroundImage/>
        </div>
  
  )
}
