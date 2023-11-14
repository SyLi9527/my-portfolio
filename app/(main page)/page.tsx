"use client"

import About from "@/components/about"
import Intro from "@/components/intro"
import Projects from "@/components/projects"
import SectionDivider from "@/components/section-divider"
import Skills from "@/components/skills"

export default function Home() {
  


  return (
    <section className='container flex flex-col items-center font-rs text-primary md:mx-20'>
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
    </section>
  )
}
