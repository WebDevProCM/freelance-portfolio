"use client";

import {motion, useScroll, useTransform, useSpring} from "framer-motion";
import React, { useRef } from 'react';

const WorkWithMe = () => {
    const divRef = useRef(null)
    const {scrollYProgress} = useScroll({target: divRef, offset: ["start start", "end end"]});
    const moveDiv = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textReveal1 = useTransform(scrollYProgress, [0, 0.25], [0.3, 1]);
    const textReveal2 = useTransform(scrollYProgress, [0.25, 0.5], [0.3, 1]);
    const textReveal3 = useTransform(scrollYProgress, [0.5, 0.75], [0.3, 1]);
    const textReveal4 = useTransform(scrollYProgress, [0.75, 1], [0.3, 1]);

  return (
    <div className='text-center px-5 bg-black'>
        <h1 className='font-popin font-extrabold lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-white py-16 opacity-30'>Why work with me?</h1>
        <div ref={divRef} className="relative max-w-[1600px] mx-auto h-[200vh] pb-50">
            <div
                className='sticky top-1/4 font-popin font-extrabold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-white w-full flex flex-col justify-center items-center gap-14'
            >
                <motion.h3 className='mr-auto text-left' style={{opacity:textReveal1}}>“Clean, reusable, modern code.”</motion.h3>
                <motion.h3 className='mr-auto text-left' style={{opacity:textReveal2}}>“Smooth UX with subtle animations.”</motion.h3>
                <motion.h3 className='ml-auto text-right' style={{opacity:textReveal3}}>“Responsive designs for all devices.”</motion.h3>
                <motion.h3 className='mr-auto text-left' style={{opacity:textReveal4}}>“On-time delivery & great communication.”</motion.h3>
            </div>
        </div>
    </div>
  )
}

export default WorkWithMe