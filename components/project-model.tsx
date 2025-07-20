import React from 'react'
import {AnimatePresence, motion} from "framer-motion"
import useMobile from '@/hooks/use-mobile';
import Link from 'next/link';

const ProjectModel = ({image, close, github, live}
  : {
    image:string, 
    close: React.Dispatch<React.SetStateAction<{open:boolean; image:string; live:string; github:string}>>,
    github:string,
    live:string
  }) => {
  const isMobile = useMobile(768);
  
  return (
      <motion.div 
        className='fixed z-50 top-0 bottom-0 right-0 left-0 bg-white/20 backdrop-blur-sm p-8'
        initial={{
          opacity: 0
        }}
        animate= {{
          opacity: 1
        }}
        exit={{
          opacity: 0,
        }}
      >
        <motion.div 
            layoutId={image}
            style={{
              backgroundImage: isMobile ? `url(/images/${image}.png)`:`url(/images/${image}-modal.png)`
            }}
            className={`bg-cover w-full h-[80vh] rounded-2xl`}
        />
          <div className='flex justify-between items-center font-[family-name:var(--font-poppins)] text-black p-6 sm:max-w-[calc(100vw/4)] max-w-full mx-auto'>
            <Link 
              href={live}
              target='_blank'
              className='relative inline-flex items-center justify-center p-0.5 overflow-hidden sm:text-sm text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 cursor-pointer'
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Live Preview
              </span>

            </Link>

            <button 
              onClick={() => close({open: false, image:"", live:"", github:""})}
              className='relative cursor-pointer inline-flex items-center justify-center p-0.5 overflow-hidden sm:text-sm text-xs font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Close
              </span>

            </button>

            <Link 
              href={github}
              target='_blank'
              className='relative cursor-pointer inline-flex items-center justify-center p-0.5 overflow-hidden sm:text-sm text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Github
              </span>

            </Link>
          </div>
        </motion.div>
  )
}

export default ProjectModel