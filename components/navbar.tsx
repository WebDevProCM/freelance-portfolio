import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center bg-[#f0eff1] text-black font-[family-name:var(--font-poppins)] 
      font-semibold lg:px-16 md:px-8 sm:px-4 px-2 py-9 text-center'>
        <h3 className='lg:text-3xl md:text-2xl sm:text-1xl text-xl sm:max-w-1/4 font-extrabold'>WebDev</h3>

        <ul className='flex gap-4 justify-between text-wrap w-full sm:max-w-1/4 max-w-1/2 lg:text-base sm:text-sm text-xs'>
          <li>My Services</li>
          <li>Tech Stack</li>
          <li>Projects</li>
        </ul>

        <h4 className='lg:text-base text-sm text-wrap'>Lets Work together</h4>
    </nav>
  )
}

export default Navbar