"use client"

import { Card_Blockchain, Card_CLOUD, Card_DL, Card_Enhance, Card_Game, Card_OTHER, Card_WEB, Card_WEBGPU } from "@/components/card"
// import { useSectionInView } from "@/components/intersection-observer"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"



export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const variants = {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      ref={ref}
      className="my-28 scroll-mt-28 text-center leading-8 text-primary-dark sm:mb-40"
      id="skills"
    >
      <h1 className="mb-[8.25rem] text-3xl font-bold">Skills</h1>

      <motion.div 
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.265 }}
        variants={variants}

        className="mb-8 grid grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-4">    
        <Card_WEB/>
        <Card_CLOUD/>
        <Card_DL/>
        <Card_OTHER/>
      </motion.div>
      <motion.div 
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.765 }}
        variants={variants}
        className=" grid grid-cols-1 gap-10 md:grid-cols-2 2xl:grid-cols-4">
        <Card_Enhance />
        <Card_WEBGPU />
        <Card_Game/>
        <Card_Blockchain />
      </motion.div>
    </section>
  )

}