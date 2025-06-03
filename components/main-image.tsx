import React from 'react'
import mountain from "@/public/images/mountains.webp"
import Image from 'next/image'
import ServiceCard from './ui components/service-card'

const MainImage = () => {
  return (
    <div className='relative mt-[-6%] h-screen bg-cover bg-center bg-[#f0eff1] text-center z-10 bg-[url(/images/mountains.webp)] w-[95%] mx-auto'>
      <h1 className='text-8xl font-popin font-extrabold'>My Services</h1>

      <div className='flex justify-around items-center flex-wrap mt-16'>
        <ServiceCard img='frontend' title='Frontend' desc='craft modern, responsive, and visually appealing user interfaces using technologies like React.js, Next.js, and Tailwind CSS. I ensure that every website looks great and performs smoothly on all devices.'/>
        <ServiceCard img='api' title='Backend' desc='I build powerful and secure server-side applications using Node.js and Express. I handle everything from routing to authentication, ensuring your website works flawlessly behind the scenes.'/>
        <ServiceCard img='database' title='Database' desc='I design and manage efficient, scalable databases using MongoDB and MySQL. I ensure your data is stored securely and accessed quickly for optimal performance.'/>
        <ServiceCard img='api' title='Animations' desc='I bring websites to life with smooth animations using Framer Motion and CSS. From subtle transitions to interactive elements, I create engaging experiences that leave a lasting impression.'/>
      </div>
    </div>
  )
}

export default MainImage