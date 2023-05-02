"use client"

import { useState, useEffect } from 'react'
import { skillCatalogs } from '@/config/mainConfig'
import { cn } from '@/components/utils'

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    console.log((index + 1) % skillCatalogs.length)
    const interval = setInterval(() => {
      setIndex((index + 1) % skillCatalogs.length)
      
    }, 4000)
    return () => {
      clearInterval(interval)
      console.log('clear')
    }
  }, [index])

  function getClassByDelay(delay: number) {
    return {
      0: 'delay-0',
      1: 'delay-100',
      2: 'delay-200',
      3: 'delay-300',
      4: 'delay-400',
      5: 'delay-500',
      6: 'delay-600',
      7: 'delay-700',
      8: 'delay-800',
      9: 'delay-900',
      10: 'delay-1000',
    
    }[delay]
  }

  return (
    <section className='container flex flex-col font-rs text-primary md:mx-20'>
      <h1 className='mx-4 text-2xl font-medium md:mx-8 md:mt-20 md:text-4xl lg:text-5xl'>
        Hi, there! Good to see you!
      </h1>
      <div className='text-md mx-4 mt-8 grid gap-6 md:mx-12 md:mt-20 md:gap-12 md:text-2xl'>
       
        <p>My name is <span className=' text-secondary'>Shaoyan Li</span>, you can also call me <span className=' text-secondary'>Tim</span>.</p>
        <p>I&apos;m a full stack web developer working with {skillCatalogs[index].split('').map((char, charIndex) => (
        <span
          key={charIndex}
          className={cn("animate-type-animation-in text-ind-red", `delay-${charIndex * 100}`)}
          // style={{ animationDelay: `${(index + 1) * 1000}ms` }}
        >

          {char}
        </span>
      ))}.</p>
        <p>I&apos;m also interested in <span className=' text-gold'>finance</span> and <span className=' text-gold'>world history</span>.</p>
        <p>If possible, I would like to do some research on <span className='text-violet'>computer graphics</span>, <span className='text-violet'>programming language design</span>, 
          <span className='text-violet'>audio generation</span> and <span className='text-violet'>gpu acceleration</span>.</p>
        <p>By the way, the background images are from two video games, <span className=' text-cyan'>Bloodborne</span>  and <span className='text-cyan'>Elden Ring</span> respectively.</p>
      </div>
    </section>
  )
}
