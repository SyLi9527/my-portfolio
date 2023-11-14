"use client"

import { Card_Blockchain, Card_CLOUD, Card_DL, Card_Enhance, Card_Game, Card_OTHER, Card_WEB, Card_WEBGPU } from "@/components/card"
import { useSectionInView } from "@/components/intersection-observer"
import { motion } from "framer-motion"



export default function Skills() {
  const { ref } = useSectionInView("Skills")
  return (
    <section
      ref={ref}
      className="my-28 scroll-mt-28 text-center leading-8 sm:mb-40"
      //   initial={{ opacity: 0, y: 100 }}
      //   animate={{ opacity: 1, y: 0 }}
      //   transition={{ delay: 0.175 }}
      id="skills"
    >
      <h1 className="mb-28 text-3xl font-bold">Skills</h1>
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            type: "tween",
          },
        }
        }
        viewport={{
          once: true,
        }}
        className="mb-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">    
        <Card_WEB/>
        <Card_CLOUD/>
        <Card_DL/>
        <Card_OTHER/>
      </motion.div>
      <motion.div className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        <Card_Enhance />
        <Card_WEBGPU />
        <Card_Game/>
        <Card_Blockchain />
      </motion.div>
    </section>
  )

}