import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion';
import useMobile from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useMobile(800);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const showNavLinks = {
    initial: {
      opacity: 0,
      transform: 'translateY(50%)'
    },
    show: {
      opacity: 1,
      transform: 'translateY(0%)',
      transition: {type: 'spring'}
    },
  }

  return (
    <motion.nav 
      id='nav' 
      variants={container} 
      initial='initial'
      animate='show'
      className='relative lg:w-[clamp(500px,88vw,1375px)] w-[80vw] flex justify-between items-center bg-[#f0eff1] text-black font-[family-name:var(--font-poppins)] 
      font-semibold lg:pr-16 md:pr-8 px-4 md:py-10 py-6 pb-16 text-center mr-auto 2xl:mx-auto shrink'>
        <motion.h3 
          variants={showNavLinks} 
          className='lg:text-4xl text-2xl sm:max-w-1/4 font-extrabold'>
          <Link href='#nav'>WebDev</Link>
        </motion.h3>
        {!isMobile &&         
        <motion.ul
          className='md:flex hidden font-extrabold gap-4 justify-between text-nowrap w-full lg:max-w-1/3 md:max-w-1/3 lg:text-base sm:text-sm text-xs'>
          <motion.li
            variants={showNavLinks} 
            whileHover={{opacity: 0.7, scale: 1.1}}
            transition={{type:'spring'}}
          >
            <Link href='#services' scroll={true}>My Services</Link>
          </motion.li>
          <motion.li
            variants={showNavLinks} 
            whileHover={{ opacity: 0.7 ,scale: 1.1}}
            transition={{type:'spring'}}
          >
            <Link href='#stack'>Tech Stack</Link>
          </motion.li>

          <motion.li
            variants={showNavLinks} 
            whileHover={{opacity: 0.7, scale: 1.1}}
            transition={{type:'spring'}}
          >
            <Link href='#project'>Projects</Link>
          </motion.li>
        </motion.ul>
        }
    </motion.nav>
  )
}

export default Navbar