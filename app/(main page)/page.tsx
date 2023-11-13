"use client"

import About from "@/components/about"
import { cn } from "@/components/utils"
import { skillCatalogs } from "@/config/mainConfig"
import { useEffect, useState } from "react"
// import { url } from 'inspector'

export default function Home() {
  const [index, setIndex] = useState<number>(0)
  const [showedText, setShowedText] = useState<string>("")
  const [remove, setRemove] = useState<boolean>(false)

  useEffect(() => {

    if (!remove) {
      console.log(showedText)
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
    <section className='container flex flex-col items-center font-rs text-primary md:mx-20'>
      <h1 className='mx-4 mt-[6rem] text-4xl font-medium md:mx-8 md:mt-20 md:text-5xl lg:text-6xl'>
        Hi, there! Good to see you!
      </h1>
      <div className='text-md mx-4 mt-[6rem] grid gap-20 md:mx-12 md:mt-24 md:gap-20 md:text-2xl lg:gap-24'>
       
        <p>My name is <span className='animate-text-color-change [--color-item:0deg]'>Shaoyan Li</span>, you can also call me <span className='animate-text-color-change [--color-item:0deg]'>Tim</span>.</p>
        <p className=' h-8'>I&apos;m a full stack web developer working with &nbsp;
          <span className={cn("animate-text-color-change select-none text-ind-red [--color-item:75deg]")}>
            {showedText}
          </span>

          
        </p>
        <p>I&apos;m also interested in <span className='animate-text-color-change [--color-item:150deg]'>WebGPU</span> and <span className='animate-text-color-change [--color-item:150deg]'>Blockchain</span>.</p>
        <p>If possible, I would like to do some research on <span className='animate-text-color-change [--color-item:225deg]'>&nbsp;computer graphics</span>, <span className='animate-text-color-change [--color-item:275deg]'>&nbsp;framework optimization</span>, 
          <span className='animate-text-color-change [--color-item:305deg]'>&nbsp;audio generation</span> ,<br/> as well as <span className='animate-text-color-change [--color-item:330deg]'>gpu acceleration</span>.</p>
        <p>By the way, the background images are from two video games, <span className=' text-cyan'>Dark Souls 3</span>  and <span className='text-cyan'>Elden Ring</span> respectively.</p>
      </div>
      <div className='text-md mx-4 mt-[6rem] grid gap-20 md:mx-12 md:mt-24 md:gap-20 md:text-2xl lg:gap-24'>
       
        <p>My name is <span className='animate-text-color-change [--color-item:0deg]'>Shaoyan Li</span>, you can also call me <span className='animate-text-color-change [--color-item:0deg]'>Tim</span>.</p>
        <p className=' h-8'>I&apos;m a full stack web developer working with &nbsp;
          <span className={cn("animate-text-color-change select-none text-ind-red [--color-item:75deg]")}>
            {showedText}
          </span>

          
        </p>
        <p>I&apos;m also interested in <span className='animate-text-color-change [--color-item:150deg]'>WebGPU</span> and <span className='animate-text-color-change [--color-item:150deg]'>Blockchain</span>.</p>
        <p>If possible, I would like to do some research on <span className='animate-text-color-change [--color-item:225deg]'>&nbsp;computer graphics</span>, <span className='animate-text-color-change [--color-item:275deg]'>&nbsp;framework optimization</span>, 
          <span className='animate-text-color-change [--color-item:305deg]'>&nbsp;audio generation</span> ,<br/> as well as <span className='animate-text-color-change [--color-item:330deg]'>gpu acceleration</span>.</p>
        <p>By the way, the background images are from two video games, <span className=' text-cyan'>Dark Souls 3</span>  and <span className='text-cyan'>Elden Ring</span> respectively.</p>
      </div>
      <div className='text-md mx-4 mt-[6rem] grid gap-20 md:mx-12 md:mt-24 md:gap-20 md:text-2xl lg:gap-24'>
       
        <p>My name is <span className='animate-text-color-change [--color-item:0deg]'>Shaoyan Li</span>, you can also call me <span className='animate-text-color-change [--color-item:0deg]'>Tim</span>.</p>
        <p className=' h-8'>I&apos;m a full stack web developer working with &nbsp;
          <span className={cn("animate-text-color-change select-none text-ind-red [--color-item:75deg]")}>
            {showedText}
          </span>

          
        </p>
        <p>I&apos;m also interested in <span className='animate-text-color-change [--color-item:150deg]'>WebGPU</span> and <span className='animate-text-color-change [--color-item:150deg]'>Blockchain</span>.</p>
        <p>If possible, I would like to do some research on <span className='animate-text-color-change [--color-item:225deg]'>&nbsp;computer graphics</span>, <span className='animate-text-color-change [--color-item:275deg]'>&nbsp;framework optimization</span>, 
          <span className='animate-text-color-change [--color-item:305deg]'>&nbsp;audio generation</span> ,<br/> as well as <span className='animate-text-color-change [--color-item:330deg]'>gpu acceleration</span>.</p>
        <p>By the way, the background images are from two video games, <span className=' text-cyan'>Dark Souls 3</span>  and <span className='text-cyan'>Elden Ring</span> respectively.</p>
      </div>
      <About />
    </section>
  )
}
