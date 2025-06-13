import React from 'react'
import {AnimatePresence, motion} from "framer-motion"
import useMobile from '@/hooks/use-mobile';

const ProjectModel = ({image, close}: {image:string, close: React.Dispatch<React.SetStateAction<{open:boolean; image:string}>>}) => {
  const isMobile = useMobile(768);
  
  return (
    <AnimatePresence mode='wait'>
      <motion.div 
        className='fixed top-0 bottom-0 right-0 left-0 bg-white/20 backdrop-blur-sm p-8 rounded-lg overflow-y-hidden'
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
              className={`bg-cover w-full h-[80vh]`}
          />
          <div className='flex justify-between items-center font-[family-name:var(--font-poppins)] text-black p-6 sm:max-w-[calc(100vw/4)] max-w-full mx-auto'>
            <button 
              className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'
              onClick={() => close({open: false, image:""})}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Live Preview
              </span>

            </button>

            <button 
              onClick={() => close({open: false, image:""})}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              close
            </button>

            <button 
              className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800'
              onClick={() => close({open: false, image:""})}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Github
              </span>

            </button>
          </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModel