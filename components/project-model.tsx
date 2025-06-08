import React from 'react'
import {motion} from "framer-motion"

const ProjectModel = ({image, close}: {image:string, close: React.Dispatch<React.SetStateAction<{open:boolean; image:string}>>}) => {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 bg-white/20 backdrop-blur-sm p-8 rounded-lg overflow-y-hidden'>
        <button onClick={() => close({open: false, image:""})}>close</button>
        <motion.div 
            layoutId={image}
            className={`bg-[url(/images/${image}-modal.png)] bg-cover w-full h-[90vh]`}
        >
            ProjectModel
        </motion.div>
    </div>
  )
}

export default ProjectModel