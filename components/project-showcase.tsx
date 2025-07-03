import Image from 'next/image'
import React, { useState } from 'react'
import { useRef } from 'react'
import {motion, useScroll, useTransform} from "framer-motion";
import ProjectModel from './project-model';
import useMobile from '@/hooks/use-mobile';


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
    const projectRef = useRef(null);
    const isMobile = useMobile(768);

    const {scrollYProgress} = useScroll({target: projectRef, offset: ["start end", "start start"]});
    const scaleText = useTransform(scrollYProgress, [0,0.7, 1], [0.5,1.2, 0.7]);
    const {scrollYProgress: scrollYRotatingCards} = useScroll({target: projectRef, offset: ["start start", "end end"]});
    const moveTextDown = useTransform(scrollYRotatingCards, [0, 0.8], ["0%", "450%"]);
    const [projectModalOpen, setProjectModalOpen] = useState({open:false, image: "", live:"", github:""});

  return (
    <>
    <motion.div 
        id='project'
        className='banner mx-auto relative sm:max-w-[1600px] sm:h-[calc(100vh+100vh)] h-screen text-center overflow-hidden mt-[200px]' ref={projectRef}>
        <motion.div 
            className='slider absolute z-20 sm:w-[127px] w-[63px] sm:h-[259px] h-[130px] sm:top-[60%] top-[50%] sm:left-[calc(50%-100px)] left-[calc(50%-40px)]' 
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
                    onClick={() => setProjectModalOpen({open:true, image: "e-commerce", live:"https://e-commerce-frontend-hmet.onrender.com/", github: "https://github.com/WebDevProCM/E-commerce-FrontEnd"})}
                />
            </motion.div>
            <motion.div className='absolute item' style={imageStyles2} layoutId='meal-app'>
                <Image 
                    // style={imageStyles3}
                    src="/images/meal-app.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full'
                    onClick={() => setProjectModalOpen({open:true, image: "meal-app", live: "https://nextgenrecipes.netlify.app", github: "https://github.com/WebDevProCM/Meals-App"})}
                />
            </motion.div>
            <motion.div className='absolute item' style={imageStyles3} layoutId='chat'>
                <Image 
                    // style={imageStyles4}
                    src="/images/chat.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full'
                    onClick={() => setProjectModalOpen({open:true, image: "chat", live: "https://github.com/WebDevProCM/chat-app-frontend", github:"https://github.com/WebDevProCM/chat-app-frontend"})}
                />
            </motion.div>
            <motion.div className='absolute item' style={imageStyles4} layoutId='e-commerce1'>
                <Image 
                    // style={imageStyles1}
                    src="/images/e-commerce.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full'
                    onClick={() => setProjectModalOpen({open:true, image: "e-commerce", live:"https://e-commerce-frontend-hmet.onrender.com/", github: "https://github.com/WebDevProCM/E-commerce-FrontEnd"})}
                />
            </motion.div>
            <motion.div className='absolute item' style={imageStyles5} layoutId='meal-app2'>
                <Image 
                    // style={imageStyles3}
                    src="/images/meal-app.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full'
                    onClick={() => setProjectModalOpen({open:true, image: "meal-app", live: "https://nextgenrecipes.netlify.app", github: "https://github.com/WebDevProCM/Meals-App"})}
                />
            </motion.div>
            <motion.div className='absolute item' style={imageStyles6} layoutId='chat3'>
                <Image 
                    // style={imageStyles4}
                    src="/images/chat.png"
                    width={200} 
                    height={200} 
                    alt='project-image' 
                    objectFit='cover' 
                    className='w-full h-full'
                    onClick={() => setProjectModalOpen({open:true, image: "chat", live: "https://github.com/WebDevProCM/chat-app-frontend", github:"https://github.com/WebDevProCM/chat-app-frontend"})}
                />
            </motion.div>
        </motion.div>

        <div className='absolute z-10 top-0'>
            <motion.h1 
                className='font-popin font-extrabold lg:text-8xl text-6xl text-black'
                style={{scale:scaleText, y: isMobile ? "0%" : moveTextDown}}
            >
                Interactive Project Showcase
            </motion.h1>
        </div>

        {projectModalOpen.open && <ProjectModel live={projectModalOpen.live} github={projectModalOpen.github} close={setProjectModalOpen} image={projectModalOpen.image}/>}
    </motion.div>
    </>
  )
}

export default ProjectShowcase