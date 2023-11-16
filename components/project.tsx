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
      <div className="relative max-w-[70rem] overflow-hidden rounded-lg border-[0.3rem] border-white duration-300 sm:min-h-[18rem] sm:hover:scale-105 md:min-h-[23rem] lg:min-h-[20rem]">
        <div className="sm:max-w-[52%] sm:group-even:ml-[50%]">
          <h3 className="py-2 text-xl font-semibold sm:pb-4 sm:pt-10  md:text-2xl">{title}</h3>
          <p className="text-md mt-2 p-2 leading-relaxed dark:text-white/70 sm:p-4 sm:text-xl">{description}</p>
          <ul className="flex flex-wrap justify-center gap-4 p-2 sm:bottom-8 sm:left-8 sm:p-4 ">
            {
              tags.map((tag, index) => (
                <li className="rounded-lg border-[0.1rem] border-white px-1 text-sm shadow-sm hover:bg-green-500/60" 
                  key={index}>{tag}</li>
              ))
            }
          </ul>
        </div>
       
        <Image className="absolute hidden max-h-[80%] w-[50%] rounded-t-lg object-cover shadow-2xl transition
          group-odd:bottom-[0rem] group-odd:right-[-4rem] 
          group-even:left-[-4rem]
          group-even:top-[0rem]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          group-hover:scale-[1.04]
          group-even:group-hover:origin-bottom-left
          group-even:group-hover:translate-x-[1rem]
          group-even:group-hover:translate-y-[-0.5rem] group-even:group-hover:rotate-2 sm:block"
        alt={title} src={imageUrl} quality={95} width={600} height={600} />

      </div>
        
    </motion.div>
  )
}