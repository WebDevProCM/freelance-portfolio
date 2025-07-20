'use client';

import React, { useRef, useState } from 'react'
import {motion} from "framer-motion";
import Link from 'next/link';
import useMobile from '@/hooks/use-mobile';
import MobileNavbar from './mobile-navbar';

export const LetsWorkNavIcon = () => {
    const isMobile = useMobile(800);
    const [position, setPosition] = useState({x:0, y:0});
    const [showNavbar, setShowNavbar] = useState(false);
    
    const ref = useRef<HTMLDivElement>(null);

    const link = !isMobile ? '#contact' : '#'

    const mouseOverHandler = (e: React.MouseEvent<HTMLDivElement>)=>{
        const {clientX, clientY} = e;
        const {top, left, height, width} = ref.current?.getBoundingClientRect()!;
        const middleX = clientX - (left + width/2);
        const middleY = clientY - (top + height/2);
        setPosition({x: middleX, y: middleY});
    
    }

    const clickHandler = () =>{
      if(!isMobile){
        const contactDiv = document.getElementById("contact");
        contactDiv?.scrollIntoView();
        return;
      }

      setShowNavbar(prev => !prev);
      
    }

    const reset = () =>{
    setPosition({x:0, y:0});
    }
  return (
    <>
        <motion.div
        className='fixed right-[2%] top-2 z-50'
        onMouseOver={mouseOverHandler}
        onMouseLeave={reset}
        ref={ref}
        animate={{x:position.x, y:position.y}}
        whileHover={{color: "#CBACF9"}}
        transition={{type: "spring", stiffness: 40, damping: 15, mass: 0.5}}
        >
        

        <div 
        onClick={clickHandler}
        className='md:text-sm text-[9px] md:size-26 size-18 rounded-full text-wrap flex justify-center items-center font-extrabold text-transparent 
            shadow-lg text-center bg-white/10 backdrop-blur-sm bg-clip-text bg-linear-to-bl from-violet-500 to-fuchsia-500 
            text-shadow-sm cursor-pointer
            '>
            Lets Work together
        </div>
        </motion.div>
        {showNavbar && <MobileNavbar />}
    </>
  )
}
