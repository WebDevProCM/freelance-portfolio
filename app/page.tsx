"use client"

import { AnimatePresence, motion } from "motion/react"
import { useState } from "react";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import MainImage from "@/components/main-image";
import IconsSection from "@/components/icons-section";
import ProjectShowcase from "@/components/project-showcase";
import WorkWithMe from "@/components/work-with-me";
import ContactMe from "@/components/contact-me";
import LoadingAnimation from "@/components/animations/loader";
import LenisScrollProvider from "@/components/lenis";
import { LetsWorkNavIcon } from "@/components/lets-work-nav-icon";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence>
    <motion.main className={`${loading && "h-screen"} relative bg-[#f0eff1]`}>
      <LenisScrollProvider>
        {loading ? (
          <motion.div>
            <LoadingAnimation setLoading={setLoading} />
          </motion.div>
        ):
        <>
        <LetsWorkNavIcon />
        <Navbar />
        <Hero />
        <MainImage isloading={loading} />
        <IconsSection />
        <ProjectShowcase />
        <WorkWithMe />
        <ContactMe />
        </>        
        }      
      </LenisScrollProvider>
    </motion.main>
    </AnimatePresence>       
  );
}
