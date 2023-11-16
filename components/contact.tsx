import { useActiveSectionContext } from "@/components/active-section-context"
import { useSectionInView } from "@/components/intersection-observer"
import { motion } from "framer-motion"

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  return (
    <motion.section
      ref={ref} id="contact" className="m-40 flex w-full flex-col flex-wrap items-center gap-8 p-4 sm:w-1/2 sm:p-0"
      initial={{ opacity: 0, y: 100, x: 100 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.175 }}
    >
        
      
      <h1 className="mb-28 text-3xl font-bold">Contact</h1>
      <div className="text-2xl">
        <p>via email:<a target="_blank" href="mailto:sky14566541@gmail.com" className="underline hover:text-green-500 hover:no-underline">{" "}sky14566541@gmail.com</a></p>
        <p>via linkedin:<a target="_blank" rel="noopener" className="underline hover:text-green-500 hover:no-underline" href="https://www.linkedin.com/in/li-shaoyan-0b83281a8/">{" "}here</a></p>
      </div>
      {/* <p>via the form</p> */}
    </motion.section>
  )
}