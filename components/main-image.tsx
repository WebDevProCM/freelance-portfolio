import React, { useRef } from 'react'
import mountain from "@/public/images/mountains.webp"
import Image from 'next/image'
import ServiceCard from './ui components/service-card'
import {motion, useScroll, useTransform} from "framer-motion"
import useMobile from '@/hooks/use-mobile'

const MainImage = ({isloading}: {isloading:boolean}) => {
  const divRef = useRef(null);
  const isMobile = useMobile(768);

    const {scrollYProgress} = useScroll({target: divRef, offset: ["start end", "start start"]});
    const divWidth = useTransform(scrollYProgress, [0, 1], [isMobile ? "70%" : "90%", "100%"]);
    const divMargin = useTransform(scrollYProgress, [0, 1], ["-4%", "-15%"]);
    const divZindex = useTransform(scrollYProgress, [0, 0.3], [15, 20]);
    const {scrollYProgress:serviceCard} = useScroll({target: divRef, offset: ["start start", "end start"]});
    const serviceCardPos = useTransform(serviceCard, [0, 1], ["0%", "180%"]);
    const MainDivPos = useTransform(serviceCard, [0, 1], ["150%", "-100%"]);


  return (
    !isloading ?
    // lg:mt-[-4%] mt-[0%]
    <motion.div
      id='services'
      className='relative max-w-[1600px] mx-auto mt-[-1vw] overflow-hidden pt-[7%] sm:h-[calc(100vh+(100vh/2))] h-full bg-top bg-[#f0eff1] 
        text-center bg-[url(/images/mountains.webp)] sm:bg-auto bg-cover'
      style={{
        width: divWidth,
        // marginTop: isMobile ? "" : divMargin,
        zIndex: 20,
        backgroundSize: isMobile ? "auto%" : "150%",
        backgroundPositionY: isMobile ? "" : MainDivPos
      }}
      layout
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
      layoutId='main-image-1'
      ref={divRef}
    >
      <h1 className='lg:text-9xl md:text-7xl sm:text-6xl text-5xl font-popin font-extrabold'>My Services</h1>

      <motion.div
        layout
        className='flex sm:w-full w-[350px] mx-auto sm:justify-around justify-center items-center gap-3 flex-wrap sm:mt-16 sm:mb:0 my-8'
        style={{
          y: isMobile ? "0%" : serviceCardPos,
        }}
      >
        <ServiceCard img='frontend' title='Frontend' desc='craft modern, responsive, and visually appealing user interfaces using technologies like React.js, Next.js, and Tailwind CSS. I ensure that every website looks great and performs smoothly on all devices.'/>
        <ServiceCard img='api' title='Backend' desc='I build powerful and secure server-side applications using Node.js and Express. I handle everything from routing to authentication, ensuring your website works flawlessly behind the scenes.'/>
        <ServiceCard img='database' title='Database' desc='I design and manage efficient, scalable databases using MongoDB and MySQL. I ensure your data is stored securely and accessed quickly for optimal performance.'/>
        <ServiceCard img='animation' title='Animations' desc='I bring websites to life with smooth animations using Framer Motion and CSS. From subtle transitions to interactive elements, I create engaging experiences that leave a lasting impression.'/>
      </motion.div>
    </motion.div>
    :
    null
  )
}

export default MainImage