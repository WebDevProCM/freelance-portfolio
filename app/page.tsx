"use client"

import Image from "next/image";
import person1 from "@/public/images/person1.jpg"
import person2 from "@/public/images/person2.jpg"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import MainImage from "@/components/main-image";

export default function Home() {
  const wrapper = useRef(null);
  const {scrollYProgress} = useScroll({
    target: wrapper,
    offset: ["start end", "end start"]
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["350%", "-350%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-80%", "80%"]);

  const wrapper2 = useRef(null);
  const {scrollYProgress: scrollYProgress2} = useScroll({
    target: wrapper2,
    offset: ["start end", "end start"]
  });

  const text2Y = useTransform(scrollYProgress2, [0, 1], ["350%", "-350%"]);
  const background2Y = useTransform(scrollYProgress2, [0, 1], ["-80%", "80%"]);

  return (
    <>
    {/* <div ref={wrapper} className="overflow-hidden bg-white w-full h-screen font-[family-name:var(--font-poppins)] relative flex justify-center items-center">
      <motion.h1 
        className="text-9xl text-black font-extrabold"
        style={{
          translateY: textY
        }}
      >
        Hello world
      </motion.h1>

      <motion.img 
        src="/images/person1.jpg" 
        className="w-[500px] h-[700px]" 
        alt="person1"
        style={{
          translateY: backgroundY
        }}
      />
    </div>

    <div ref={wrapper2} className="overflow-hidden bg-gray-50 w-full h-screen relative flex justify-center items-center">
      <motion.img 
        src="/images/person2.jpg" 
        className="w-[500px] h-[600px]" 
        alt="person1"
        style={{
          translateY: background2Y
        }}
      />
      
      <motion.h1 
        className="text-9xl text-black font-extrabold"
        style={{
          translateY: text2Y
        }}
      >
        Hello world
      </motion.h1>

    </div> */}
    <main className="relative bg-[#f0eff1]">
      <Navbar />
      <Hero />
      <MainImage />
    </main>
    </>
  );
}
