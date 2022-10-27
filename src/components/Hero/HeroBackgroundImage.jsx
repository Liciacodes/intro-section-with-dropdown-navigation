import React from 'react'

export const HeroBackgroundImage = () => {
  return (
    <div className='flex-1'>
        <img 
         className='hidden lg:block object-cover w-[85%] px-4 py-6 h-[100%]' 
         src='images/image-hero-desktop.png'
         alt='hero'
         />
         <img 
         className='lg:hidden object-cover w-[85%] px-4 py-6 h-[100%]'
         src='images/image-hero-mobile.png' 
         alt='hero'
         />
    </div>
  )
}
