"use client";

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import MagneticHover from './animations/magnetic-hover';
// import Particles from './ui/particles';


const IconsSection = () => {
    const iconsArray = [
      [
        <TbBrandJavascript size={120} key={4} color='black' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <SiTypescript size={85} key={10} color='black' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
      ],
      [
        <FaReact size={100} key={1} color='black' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <RiNextjsFill size={120} key={9} color='black' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <FaNodeJs size={100} key={7} color='black' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
      ],
      [
        <SiExpress size={110} key={8} color='black' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <DiMongodb size={100} key={2} color='black' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
      ],
      [
        <SiMysql size={110} key={3} color='black' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <RiTailwindCssFill size={100} color='black' key={6} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <FaBootstrap size={110} key={5} color='black' className='md:mx-[40px] mx-[20px] my-[40px]'/>
      ]
    ];

    const [screenSize, setScreenSize] = useState<boolean>(true);
  
    useEffect(() =>{
      const resize = () =>{
        setScreenSize(window.innerWidth > 500);
      }
  
      resize();
      window.addEventListener("resize", resize);
  
      return () => window.removeEventListener("resize", resize);
    }, [])

    const container = {
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.3
        }
      }
    }
    const iconAnimations = {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }

  return (
    <div 
      className='overflow-x-hidden w-full flex flex-row flex-wrap justify-center items-center mt-[200px] mx-auto'>
      <motion.div
        className='w-[200vw] flex flex-col flex-wrap justify-center items-center'
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
      >
        {iconsArray.map((icons, i) =>(
          <div key={i} className='relative w-full flex flex-wrap justify-around items-center z-20'>
            {icons.map((icon, index) => {
              return(
                <motion.div
                className='relative z-20'
                key={index+i}
                variants={iconAnimations}
                viewport={{once: true}}
                transition={{duration: 0.8}}
                >
                  <MagneticHover>{icon}</MagneticHover>
                </motion.div>
              )
            })}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default IconsSection