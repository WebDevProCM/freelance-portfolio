import React from 'react'
import {motion} from 'framer-motion'

const MobileNavbar = () => {
  return (
    <motion.div layout className='text-black font-[family-name:var(--font-poppins)] absolute h-screen w-[calc(100vw/1.5)] top-0 
      right-0 bg-white/50 backdrop-blur-md text-2xl rounded-2xl border border-white/50 font-extrabold z-40 p-7 py-45 space-y-10'>
        <h2 className='border-b'>MY SERVICES</h2>
        <h2 className='border-b'>TECH STACK</h2>
        <h2 className='border-b'>PROJECTS</h2>
        <h2 className='border-b'>CONTACT ME</h2>
    </motion.div>
  )
}

export default MobileNavbar