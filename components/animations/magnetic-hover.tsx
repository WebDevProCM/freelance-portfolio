"use client";

import React, { ReactNode, useRef, useState } from 'react'
import {motion} from "framer-motion";

const MagneticHover = ({children}: {children: ReactNode}) => {
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
    <motion.div
      className='relative'
      onMouseOver={mouseOverHandler}
      onMouseLeave={reset}
      ref={ref}
      animate={{x:position.x, y:position.y}}
      whileHover={{color: "#CBACF9"}}
      transition={{type: "spring", stiffness: 150, damping: 15, mass: 0.1}}
    >
        {children}
    </motion.div>
  )
}

export default MagneticHover