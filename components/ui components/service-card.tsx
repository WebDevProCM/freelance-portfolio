import Image from 'next/image'
import React from 'react'

const ServiceCard = ({img, title, desc}:{img:string, title:string, desc:string}) => {
  return (
    <div className='flex flex-col items-center justify-center w-full max-w-80 p-4 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-xl'>
        <Image src={`/images/${img}.png`} alt='service-icon' width={150} height={150}/>
        <h1 className='text-5xl font-popin font-extrabold text-blue-950'>{title}</h1>
        <p className='text-md text-shadow-white'>
            {desc}
        </p>
    </div>
  )
}

export default ServiceCard