import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

const ServiceCard = ({img, title, desc}:{img:string, title:string, desc:string}) => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center max-w-40 lg:max-w-80 p-4 sm:max-w-72
      bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl'
      initial={{opacity: 0, translateY: 100}}
      whileInView={{opacity: 1, translateY: 0}}
      transition={{duration: 1}}
      viewport={{once:true}}
      >
        <Image 
          className='lg:size-[150px] md:size-[130px] sm:size-[110px] size-[40px]'
          src={`/images/${img}.png`} alt='service-icon' width={150} height={150}/>
        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-lg font-popin font-extrabold text-blue-950'>{title}</h1>
        <p className='sm:text-lg text-[10px] text-shadow-white'>
            {desc}
        </p>
    </motion.div>
  )
}

export default ServiceCard