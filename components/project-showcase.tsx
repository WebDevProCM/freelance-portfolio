import Image from 'next/image'
import React from 'react'
import { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion";


const itemStyles = {
"--quantity": 6,
} as React.CSSProperties & Record<string, string | number>;

const imageStyles1 = {
"--position": 1,
} as React.CSSProperties & Record<string, string | number>;
const imageStyles2 = {
"--position": 2,
} as React.CSSProperties & Record<string, string | number>;
const imageStyles3 = {
"--position": 3,
} as React.CSSProperties & Record<string, string | number>;
const imageStyles4 = {
"--position": 4,
} as React.CSSProperties & Record<string, string | number>;
const imageStyles5 = {
"--position": 5,
} as React.CSSProperties & Record<string, string | number>;
const imageStyles6 = {
"--position": 6,
} as React.CSSProperties & Record<string, string | number>;

const ProjectShowcase = () => {
    const projectRef = useRef(null)
    const {scrollYProgress} = useScroll({target: projectRef, offset: ["start end", "start start"]});
    const scaleText = useTransform(scrollYProgress, [0, 1], [0.5,1.2])
    const {scrollYProgress: scrollYRotatingCards} = useScroll({target: projectRef, offset: ["start start", "end end"]});
    const moveTextDown = useTransform(scrollYRotatingCards, [0, 0.8], ["0%", "300%"])

  return (
    <div className='banner relative w-full h-[calc(100vh+100vh)] text-center overflow-hidden mt-[200px]' ref={projectRef}>
        <motion.div 
            className='slider absolute w-[107px] h-[239px] top-[60%] left-[calc(50%-100px)]' 
            style={itemStyles}
        >
            <div className='absolute item' style={imageStyles1}>
                <Image 
                    // style={imageStyles1}
                    src="/images/e-commerce.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full'
                />
            </div>
            {/* <div className='absolute item' style={imageStyles2}>
                <Image 
                    // style={imageStyles2}
                    src="/images/e-commerce.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full rotate-90'
                />
            </div> */}
            <div className='absolute item' style={imageStyles3}>
                <Image 
                    // style={imageStyles3}
                    src="/images/meal-app.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full'
                />
            </div>
            {/* <div className='absolute item' style={imageStyles4}>
                <Image 
                    // style={imageStyles4}
                    src="/images/meal-app.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full rotate-90'
                />
            </div> */}
            <div className='absolute item' style={imageStyles5}>
                <Image 
                    // style={imageStyles4}
                    src="/images/portfolio.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full'
                />
            </div>
            {/* <div className='absolute item' style={imageStyles6}>
                <Image 
                    // style={imageStyles4}
                    src="/images/portfolio.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full rotate-90'
                />
            </div> */}
        </motion.div>

        <div className='absolute top-0'>
            <motion.h1 
                className='font-popin font-extrabold text-8xl text-black'
                style={{scale: scaleText, y: moveTextDown}}
            >
                Interactive Project Showcase
            </motion.h1>
        </div>
    </div>
  )
}

export default ProjectShowcase