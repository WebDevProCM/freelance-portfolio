import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full bg-[#f0eff1] font-[family-name:var(--font-poppins)] text-[150px] text-black font-bold flex flex-col leading-48'>
        <section className='relative px-14'>
          <h1>CHAMOD</h1>
          <p className='text-sm max-w-3xs absolute right-[18%] top-[30%]'>
            Driven and adaptable developer with hands-on experience delivering responsive, high-quality web interfaces
          </p>
        </section>
        <section className='text-center'>
          <h1>full-stack developer</h1>
        </section>
        <section className='relative text-center z-20'>
          <h1>UDUGAMA</h1>

          <div className='absolute left-[8%] bottom-[8%] flex justify-center items-center rounded-full size-[168px] text-sm bg-[#fff]'>
            Scroll Down
          </div>
        </section>
    </div>
  )
}

export default Hero