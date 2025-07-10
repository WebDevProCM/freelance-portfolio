"use client"

import React from 'react'
// import {motion} from 'framer-motion'
import Link from 'next/link'
import { AnimatePresence, motion } from "motion/react"
import { delay } from 'motion'

const MobileNavbar = () => {
  const showLinks = {
    initial: {
      transform: 'translateX(60%)',
    },
    show: {
      transform: 'translateX(0%)',
    },
    hidden: {
      transform: 'translateX(60%)',
    },
  }

  const layoutEffect = {
    initial: {
      transform: 'translateX(60%)',
    },
    show: {
      opacity: 1,
      borderRadius: '50px 0px 0px 50px',
      transform: 'scaleX(100%)',
      transformOrigin: 'right center',
      transition: {
        type: 'tween',
        staggerChildren: 0.05,
      }
    },
    hidden: {
      opacity: 0,
    },
  }

  return (
    <AnimatePresence>
      <motion.div
        key="nav-mobile"
        layout 
        variants={layoutEffect}
        initial="hidden"
        animate="show"
        exit="exit"
        className='text-black font-[family-name:var(--font-poppins)] fixed h-screen w-[calc(100vw/1.5)] top-0 
        right-0 bg-white/50 backdrop-blur-md text-2xl border border-white/50 font-extrabold z-40 p-7 py-45 space-y-10'>
          <motion.a 
            variants={showLinks}         
            href="#services" 
            className='border-b block'>
              MY SERVICES
          </motion.a>

          <motion.a
            variants={showLinks}         
            href="#stack" className='border-b block'>TECH STACK</motion.a>

          <motion.a 
            variants={showLinks}         
            href="#project" className='border-b block'>PROJECTS</motion.a>

          <motion.a
            variants={showLinks}         
            href="#contact" className='border-b block'>CONTACT ME</motion.a>

      </motion.div>
    </AnimatePresence>
  )
}

export default MobileNavbar