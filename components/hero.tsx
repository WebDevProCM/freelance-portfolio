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
    <div className='relative w-full overflow-x-hidden bg-[#f0eff1] font-[family-name:var(--font-poppins)] text-[150px] text-black font-bold flex flex-col leading-48'>
        <section className='relative px-14'>
          <h1><AnimatedLetters title='CHAMOD' align='start'/></h1>
          <p className='text-sm max-w-3xs absolute right-[18%] top-[30%]'>
            Driven and adaptable developer with hands-on experience delivering responsive, high-quality web interfaces
          </p>
        </section>
        <section className='text-center'>
          {/* <h1>full-stack developer</h1> */}
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
        <section className='relative text-center z-20 px-14'>
          {/* <h1>UDUGAMA</h1> */}
          <h1><AnimatedLetters title='UDUGAMA' align='end'/></h1>

          <div className='absolute left-[8%] bottom-[8%] flex justify-center items-center rounded-full size-[168px] text-sm bg-[#fff]'>
            Scroll Down
          </div>
        </section>
    </div>
  )
}

const AnimatedLetters = ({ title, align, disabled }:{title:string, align?:string, disabled?:boolean}) => (
  <motion.span
    className={`flex justify-${align}`}
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