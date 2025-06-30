import React from 'react'

const Navbar = () => {
  return (
    <nav className='relative lg:w-[clamp(500px,88vw,1375px)] w-[80vw] flex justify-between items-center bg-[#f0eff1] text-black font-[family-name:var(--font-poppins)] 
      font-semibold lg:px-16 md:px-8 sm:px-4 px-2 md:py-10 py-6 pb-10 text-center mr-auto 2xl:mx-auto shrink'>
        <h3 className='lg:text-4xl md:text-2xl sm:text-1xl text-xl sm:max-w-1/4 font-extrabold'>WebDev</h3>

        <ul className='md:flex hidden font-extrabold gap-4 justify-between text-nowrap w-full lg:max-w-1/3 md:max-w-1/3 lg:text-base sm:text-sm text-xs'>
          <li>My Services</li>
          <li>Tech Stack</li>
          <li>Projects</li>
        </ul>
    </nav>
  )
}

export default Navbar