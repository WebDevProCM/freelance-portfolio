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
import ProjectModel from "@/components/project-model";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <motion.main className={`${loading && "h-screen overflow-hidden"} relative bg-[#f0eff1]`}>
      <AnimatePresence mode="wait">
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
  );
}
