import Image from 'next/image'
import React, { useState } from 'react'
import { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion";
import ProjectModel from './project-model';


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
    const scaleText = useTransform(scrollYProgress, [0, 1], [0.5,1.2]);
    const {scrollYProgress: scrollYRotatingCards} = useScroll({target: projectRef, offset: ["start start", "end end"]});
    const moveTextDown = useTransform(scrollYRotatingCards, [0, 0.8], ["0%", "300%"]);
    const [projectModalOpen, setProjectModalOpen] = useState({open:false, image: ""});

  return (
    <>
    <div className='banner relative w-full h-[calc(100vh+100vh)] text-center overflow-hidden mt-[200px]' ref={projectRef}>
        <motion.div 
            className='slider absolute w-[127px] h-[259px] top-[60%] left-[calc(50%-100px)]' 
            style={itemStyles}
        >
            <motion.div className='absolute item' style={imageStyles1} layoutId='e-commerce'>
                <Image 
                    // style={imageStyles1}
                    src="/images/e-commerce.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full'
                    onClick={() => setProjectModalOpen({open:true, image: "e-commerce"})}
                />
            </motion.div>
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
            <motion.div className='absolute item' style={imageStyles3} layoutId='meal-app'>
                <Image 
                    // style={imageStyles3}
                    src="/images/meal-app.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full'
                    onClick={() => setProjectModalOpen({open:true, image: "meal-app"})}
                />
            </motion.div>
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
            <motion.div className={`absolute item ${!projectModalOpen.open && "transform-3d"}`} style={imageStyles5} layoutId='portfolio'>
                <Image 
                    // style={imageStyles4}
                    src="/images/portfolio.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full'
                    onClick={() => setProjectModalOpen({open:true, image: "portfolio"})}
                />
            </motion.div>
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

        {projectModalOpen.open && <ProjectModel close={setProjectModalOpen} image={projectModalOpen.image}/>}
    </div>
    </>
  )
}

export default ProjectShowcase