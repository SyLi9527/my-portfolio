import { useSectionInView } from "@/components/intersection-observer"
import Project from "@/components/project"
import { projectsData } from "@/config/mainConfig"

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2)
  
  return (
    <section ref={ref} id="projects" className='my-28 scroll-mt-28 text-center leading-8 sm:mb-40'>
      <h1 className="mb-[8.25rem] text-3xl font-bold">Projects</h1>
      <div className="flex flex-col gap-8">
        {projectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}