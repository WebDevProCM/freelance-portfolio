import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.6,
    },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
  },
};

const LoadingAnimation = ({ setLoading } : {setLoading:Dispatch<SetStateAction<boolean>>}) => {
  return (
    <motion.div className="overflow-hidden h-screen w-screen max-w-[1600px] mx-auto">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <SmallImage variants={item} id="image-1" name="e-commerce" />
        <SmallImage variants={item} id="image-2" name="chat" />
        <motion.div variants={itemMain} className="absolute top-0 left-0 h-screen w-full flex justify-center items-center">
        <motion.img
          className="w-[800px] flex"
          layoutId="main-image-1"
          src={`/images/mountains.webp`}
        />
        </motion.div>
        <SmallImage variants={item} id="image-3" name="portfolio" />
        <SmallImage variants={item} id="image-4" name="meal-app" />
      </motion.div>
    </motion.div>
  );
};

export const SmallImage = ({ variants, id, name }:{variants: {}, id:string, name:string}) => {
  return (
    <motion.div
      variants={variants}
      className={`absolute origin-center justify-center items-center ${id}`}
    >
      <Image
        src={`/images/${name}.png`}
        alt={id}
        width={100}
        height={100}
      />
    </motion.div>
  );
};
export default LoadingAnimation;