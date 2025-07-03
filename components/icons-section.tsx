"use client";

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
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


const IconsSection = () => {
    const iconsArray = [
      [
        <TbBrandJavascript size={180} key={4} color='white' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <SiTypescript size={145} key={10} color='white' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
      ],
      [
        <FaReact size={160} key={1} color='white' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <RiNextjsFill size={180} key={9} color='white' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <FaNodeJs size={160} key={7} color='white' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
      ],
      [
        <SiExpress size={170} key={8} color='white' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <DiMongodb size={160} key={2} color='white' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
      ],
      [
        <SiMysql size={170} key={3} color='white' className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <RiTailwindCssFill size={160} color='white' key={6} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
        <FaBootstrap size={170} key={5} color='white' className='md:mx-[40px] mx-[20px] my-[40px]'/>
      ]
    ];

    const [screenSize, setScreenSize] = useState<boolean>(true);
    const [postions, setPositions] = useState({x: 0, y: 0});
    const ref = useRef<HTMLDivElement>(null);
  
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
      hidden: { opacity: 0.3 },
      show: { opacity: 0.3 }
    }

    const onMouseOverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
      const {clientX, clientY} = e;
      const {top, left, height, width} = ref.current?.getBoundingClientRect()!;
      const middleX = clientX - (left + width/2);
      const middleY = clientY - (top + height/2);
      setPositions({x: (middleX*-1)/3, y: (middleY*-1)/3})
    }

    const onTouchHandler = (e: React.TouchEvent<HTMLDivElement>) => {
      const {clientX, clientY} = e.touches[0];
      const {top, left, height, width} = ref.current?.getBoundingClientRect()!;
      const middleX = clientX - (left + width/2);
      const middleY = clientY - (top + height/2);
      setPositions({x: middleX/4, y: middleY/4})
    }

  return (
    <motion.div 
      id='stack'
      className='overflow-hidden w-full flex flex-row flex-wrap justify-center items-center pt-[200px] mx-auto'
      style={{
        backgroundColor: `rgba(0, 0, 0, 1)`
      }}
    >

      <motion.div
        layout
        className='w-[180vw] flex flex-col flex-wrap justify-center items-center'
        style={{
          x: postions.x,
          y: postions.y
        }}
        onMouseMove={onMouseOverHandler}
        onTouchMove={onTouchHandler}
        onTouchEnd={() => setPositions({x:0, y:0})}
        ref={ref}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
      >
        {iconsArray.map((icons, i) =>(
          <motion.div key={i} 
            className='relative w-[180vw] flex flex-wrap justify-around items-center z-20'
          >
            {icons.map((icon, index) => {
              return(
                <motion.div
                className='relative z-20'
                key={index+i}
                whileHover={{opacity: 1}}
                variants={iconAnimations}
                viewport={{once: true}}
                transition={{duration: 0.8}}
                >
                  <MagneticHover>{icon}</MagneticHover>
                </motion.div>
              )
            })}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default IconsSection