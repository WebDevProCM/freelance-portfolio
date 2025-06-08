import React from 'react'
import Link from 'next/link';
import {motion} from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className='mx-auto text-center md:mt-[200px] mt-[100px] lg:px-12 md:px-5 px-1' id="contact">

        <h1 className='max-w-[600px] mx-auto md:text-5xl text-4xl font-popin font-extrabold text-black'>
            {/* I&#39;m Ready to take your dreamed website to the  */}
            Do you have a 
            <span className="dark:text-page-purple text-text-page-light"> job opportunity </span>
            or want to take your dreamed website to the
            <span className="dark:text-page-purple text-text-page-lighte"> next level</span>?
        </h1>

        <motion.p 
            className='mt-[40px] mx-auto font-popin font-bold text-xl text-black max-w-[900px]'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.3}}
        >
            Reach out to me today, Let&#39;s build something amazing. Your website awaits.
        </motion.p>

        <button className="p-[3px] relative mt-[20px] font-fjalla">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                <Link href="http://www.linkedin.com/in/chamod-udugama" target='_blank'>Reach to Chamod Ud</Link>
            </div>
        </button>

        <div className='flex justify-between items-end mt-[130px] lg:px-12 md:px-5 px-1 text-black'>
            <p className='font-fjalla md:text-[15px] text-[10px] uppercase'>copyright &#169; 2025 Chamod Udugama</p>
            <div className='flex items-center gap-[10px]'>
                <Link href="https://github.com/WebDevProCM" target='_blank'><FaGithub size={30}/></Link>
                <Link href="mailto:chamodmenuka320@gmail.com" target='_blank'><SiGmail size={30}/></Link>
                <Link href="http://www.linkedin.com/in/chamod-udugama" target='_blank'><FaLinkedin size={30}/></Link>

            </div>
        </div>

    </div>
  )
}

export default ContactMe