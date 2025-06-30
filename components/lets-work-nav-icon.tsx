'use client';

import React, { useRef, useState } from 'react'
import {motion} from "framer-motion";

export const LetsWorkNavIcon = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({x:0, y:0});

    const mouseOverHandler = (e: React.MouseEvent<HTMLDivElement>)=>{
        const {clientX, clientY} = e;
        const {top, left, height, width} = ref.current?.getBoundingClientRect()!;
        const middleX = clientX - (left + width/2);
        const middleY = clientY - (top + height/2);
        setPosition({x: middleX, y: middleY});
    
    }

    const reset = () =>{
    setPosition({x:0, y:0});
    }
  return (
    <div className='relative w-[clamp(300px,100vw,1600px)] mx-auto'>
        <motion.div
        className='absolute right-[2%] top-2 z-30'
        onMouseOver={mouseOverHandler}
        onMouseLeave={reset}
        ref={ref}
        animate={{x:position.x, y:position.y}}
        whileHover={{color: "#CBACF9"}}
        transition={{type: "spring", stiffness: 40, damping: 15, mass: 0.5}}
        >
            <h4 className='md:text-sm text-[9px] md:size-26 size-18 rounded-full text-wrap flex justify-center items-center 
                shadow-lg text-black text-center text'>
                Lets Work together
            </h4>
        </motion.div>
    </div>
  )
}
