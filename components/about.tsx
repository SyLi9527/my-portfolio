"use client"

import { skillCatalogs } from "@/config/mainConfig"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useSectionInView } from "./intersection-observer"
// import SectionHeading from "./section-heading"

export default function About() {
  const { ref } = useSectionInView("About", 0.5)
  const [index, setIndex] = useState<number>(0)
  const [showedText, setShowedText] = useState<string>("")
  const [remove, setRemove] = useState<boolean>(false)

  useEffect(() => {

    if (!remove) {
      // console.log(showedText)
      setIndex(index => (index + 1) % skillCatalogs.length)
      setShowedText("")

    }
  }, [remove])

  useEffect(() => {
    if (!remove) {
      const interval = setInterval(() => {
        setShowedText(skillCatalogs[index].slice(0, Math.min(showedText.length + 1, skillCatalogs[index].length)))
        if (showedText.length + 1 > skillCatalogs[index].length) {
          const timer = setTimeout(() => setRemove(true), 2000)
          return () => {
            clearTimeout(timer)
          }
        }
      }, 75)
  
      return () => {
        clearInterval(interval)
      }
    }
  }, [showedText, remove, index])

  useEffect(() => {
    if (remove) {
      const interval = setInterval(() => {
        setShowedText(showedText.slice(0, showedText.length - 1))
        if (showedText.length - 1 === 0) {
          const timer = setTimeout(() => setRemove(false), 2000)
          return () => {
            clearTimeout(timer)
          }
        }
      }, 50)
      return () => {
        clearInterval(interval)
      }
    }
  }, [remove, showedText])
  return (
    <motion.section
      ref={ref}
      className="my-28 max-w-[65rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h1 className="mb-28 text-3xl font-bold">About me</h1>
      <p className="text-md mb-3 sm:text-lg md:text-xl lg:text-2xl">
        <span className="text-3xl italic sm:text-4xl md:text-5xl">I</span> am currently a master student majoring in{" "}
        <span className="font-darumadrop text-3xl font-medium text-green-200">Software Systems</span> at Univeristy of Zurich and will grauate in 02.2024. Prior to that, I studied in 
        Xi&apos;an Jiaotong University and got my bachelor degree in <span className="font-darumadrop text-3xl font-medium text-green-200">Control Engineering (EECS)</span> in 07.2020.
        <br />
        <span className="text-3xl italic sm:text-4xl md:text-5xl">I</span> work remotely as a part-time software engineer at YantuTech, a startup company in Shanghai, China, which aims to provide visual materials and tools for affordable scientific illustrations to researchers.
        <span>{" "}I have done serveral projects with React.js/VSTO(C#)/Tauri as frontend, and Django as backend. I know how to make the whole system robust and stable and when to scale it by monitoring and testing.</span>
        <br />
        <span className="text-3xl italic sm:text-4xl md:text-5xl">I</span> am familiar with{" "}
        <span className="font-darumadrop text-3xl font-medium text-green-200">full-stack web development</span>.{" "}
        <span>My core tech stack is </span><span className="animate-text-color-change font-darumadrop text-3xl font-medium [--color-item:75deg]">{showedText}</span>
        <br />
        <span>
         Regarding the front-end, I am familiar with React.js, Next.js, and Typescript.{" "}
        </span>
        <span>
          Regarding the back-end, I am familiar with Django and Golang as well as Next.js.{" "}
        </span>
        I am also fond of learning new technologies like webGPU, web3 and dl/rl. 
        <br />
        <span className="text-3xl italic sm:text-4xl md:text-5xl">I</span> am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a <span className="font-darumadrop text-3xl font-medium text-green-200">front-end/back-end/full-stack</span> software
        developer.
      </p>

      <p className="text-2xl">
        <span className="text-3xl italic sm:text-4xl md:text-5xl">B</span>esides,<span> when I&apos;m not coding</span>, I enjoy playing
        video games (soul-like games especially) and go swimming. Btw, I am currently
        learning about{" "}
        <span className="font-medium">C# and .NET frameworks</span>.
      </p>
    </motion.section>
  )
}