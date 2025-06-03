import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between items-center bg-[#f0eff1] text-black font-[family-name:var(--font-poppins)] font-semibold px-16 py-9'>
        <h3 className='text-3xl max-w-1/4 font-extrabold'>WebDev</h3>

        <ul className='flex justify-between w-full max-w-1/4'>
          <li>My Services</li>
          <li>Tech Stack</li>
          <li>Projects</li>
        </ul>

        <h4>Lets Work together</h4>
    </nav>
  )
}

export default Navbar