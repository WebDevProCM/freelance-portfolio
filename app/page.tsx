"use client"

import Image from "next/image";
import person1 from "@/public/images/person1.jpg"
import person2 from "@/public/images/person2.jpg"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import MainImage from "@/components/main-image";
import IconsSection from "@/components/icons-section";
import ProjectShowcase from "@/components/project-showcase";
import WorkWithMe from "@/components/work-with-me";
import ContactMe from "@/components/contact-me";
import LoadingAnimation from "@/components/loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

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
    <motion.main className={`${loading && "h-screen overflow-hidden"} relative bg-[#f0eff1]`}>
      <AnimatePresence mode="sync">
        {loading ? (
          <motion.div>
            <LoadingAnimation setLoading={setLoading} />
          </motion.div>
        ):
        <>
        <Navbar />
        <Hero />
        <MainImage isloading={loading} />
        <IconsSection />
        <ProjectShowcase />
        <WorkWithMe />
        </>        
        }      
        <ContactMe />
      </AnimatePresence>       
    </motion.main>
    </>
  );
}
