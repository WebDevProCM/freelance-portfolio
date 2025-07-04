import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"


const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const Hero = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    //  xl:text-[150px] lg:text-9xl md:text-7xl sm:text-6xl text-5xl
    <div className='relative max-w-[1600px] mx-auto w-full overflow-hidden bg-[#f0eff1] font-[family-name:var(--font-poppins)] 
      text-[clamp(3rem,10vw,150px)] text-black font-bold flex flex-col sm:gap-10 md:gap-6 gap-6 lg:leading-48'>
        <section className='relative lg:px-14 md:px-7 sm:px-4 px-2'>
          <h1><AnimatedLetters title='CHAMOD' align='start'/></h1>
          
          <motion.p 
            className='lg:text-sm text-[10px] sm:max-w-3xs max-w-32 absolute right-[8%] sm:top-[30%] top-[10%]'
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 1,
              type: "spring"
            }}
          >
            Driven and adaptable developer with hands-on experience delivering responsive, high-quality web interfaces
          </motion.p>
        </section>

        <section className='text-center'>
          <div className={`${playMarquee && "animate"}`}>
            <motion.div
              initial={{ y: 310 }}
              animate={{ y: 0 }}
              transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
              className='marquee__inner flex gap-12'>
              <AnimatedLetters title="Full-stack-developer" disabled={true} />
              <AnimatedLetters title="Full-stack-developer" />
              <AnimatedLetters title="Full-stack-developer" disabled={true} />
              <AnimatedLetters title="Full-stack-developer" disabled={true} />
            </motion.div>
          </div>
        </section>
        
        <section className='relative text-center z-20 lg:px-14 md:px-7 sm:px-4 px-2 h-full'>
          <h1><AnimatedLetters title='UDUGAMA' align='end'/></h1>

          <motion.div 
            className='absolute z-20 left-[8%] bottom-[-30%] content-center rounded-full 
            lg:size-[168px] md:size-36 sm:size-32 size-24 text-sm bg-[#fff]'
            initial={{
              scale: 0,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            transition={{
              duration: 2,
              type: "spring",
              bounce: 0.45
            }}
          >
            Scroll Down
          </motion.div>
        </section>
    </div>
  )
}

const AnimatedLetters = ({ title, align, disabled }:{title:string, align?:string, disabled?:boolean}) => (
  <motion.span
    key={title}
    style={{justifyContent: align === "end" ? "flex-end" : "flex-start"}}
    className={`flex`}
    variants={disabled ? undefined : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter, index) => (
      <motion.span
        key={letter+index}
        variants={disabled ? undefined : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

export default Hero