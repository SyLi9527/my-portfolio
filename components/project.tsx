"use client"

import { projectsData } from "@/config/mainConfig"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

type ProjectProps = (typeof projectsData)[number]

export default function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <div className="relative max-w-[70rem] overflow-hidden rounded-lg border-[0.3rem] border-white duration-300 hover:scale-105 sm:h-[18rem] md:h-[23rem] lg:h-[27rem]">
        <div className="sm:max-w-[50%] sm:group-even:ml-[50%]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-xl leading-relaxed dark:text-white/70">{description}</p>
          <ul className="absolute flex flex-wrap justify-center gap-4 sm:bottom-8 sm:left-8 sm:group-even:left-[60%]">
            {
              tags.map((tag, index) => (
                <li className="rounded-lg border-[0.1rem] border-white px-1 text-sm shadow-sm hover:bg-green-500/90" 
                  key={index}>{tag}</li>
              ))
            }
          </ul>
        </div>
       
        <Image className="absolute hidden h-[16.25rem] w-[24.25rem] rounded-t-lg shadow-2xl transition
          group-odd:bottom-[-2rem] group-odd:right-[-4rem] 
          group-even:left-[-4rem]
          group-even:top-[-2rem]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          group-hover:scale-[1.04]
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
        alt={title} src={imageUrl} quality={95} width={600} height={600} object-cover />

      </div>
        
    </motion.div>
  )
}