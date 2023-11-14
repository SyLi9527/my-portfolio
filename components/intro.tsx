import { useActiveSectionContext } from "@/components/active-section-context"
import { useSectionInView } from "@/components/intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
      ref={ref} id="Home" className="item-center m-40 flex w-full flex-col flex-wrap gap-8 p-4 sm:w-1/2 sm:p-0"
    >
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <Image 
          src={"/ds3.png"}
          alt="my profile picture"
          width={200}
          height={200}
          priority={true}
          className="h-24 w-24 rounded-full border-[0.25rem] border-white object-cover shadow-2xl"
        />
      </motion.div>
      <motion.span>

      </motion.span>

      <motion.h1 className="font-rs text-lg sm:text-xl md:text-2xl lg:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Shaoyan Li. </span>I&apos;m a {"" }
        <span className="font-bold">full-stack developer</span> with {" "}
        <span className="font-bold">5 years</span> of experience. I enjoy
            building<span className="italic">{" "}robust and stable websites & applications</span>. My focus is{" "}
        <span className="underline">React.js/Next.js/Django/Golang</span>.
      </motion.h1>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold sm:text-sm md:text-lg lg:text-xl "
        initial={{ opacity: 0, y: 0, x: 300 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5, type: "tween" }}
      >
        <Link href={"#contact"} 
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
          className="flex items-center gap-2 rounded-2xl border-[0.15rem] border-white bg-black px-2 py-1 shadow-xl hover:scale-[111%] hover:bg-green-700/50">
            
            Contact me here{" "}
          <Image
            src={"/rightArrow.svg"}
            alt="linkedin icon"
            width={40}
            height={40}
            priority={true}
            className="hidden h-4 w-6 hover:bg-gold/50 md:block"
          />
        </Link>
        <a  href='/Shaoyan_Li_CV.pdf' className="flex items-center gap-2 rounded-2xl border-[0.15rem] border-white bg-black px-2 py-1 shadow-xl hover:scale-[111%] hover:bg-green-700/50">
            Download CV{" "}
          <Image
            src={"/downloadIcon.svg"}
            alt="linkedin icon"
            width={40}
            height={40}
            priority={true}
            className="hidden h-4  w-6 hover:bg-gold/50 md:block"
          />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/li-shaoyan-0b83281a8/" rel="noopener" title="Linkedin Profile">
          <Image
            src={"/linkedin.svg"}
            alt="linkedin icon"
            width={40}
            height={40}
            priority={true}
            className="h-10 w-10 rounded-2xl border-white bg-black p-1 shadow-xl hover:scale-[111%] hover:bg-green-700/50 sm:border-[0.15rem]"
          />
        </a>
        <a target="_blank" href="https://github.com/SyLi9527" rel="noopener" title="Github Profile">
          <Image
            src={"/github.svg"}
            alt="github icon"
            width={40}
            height={40}
            priority={true}
            style={{ fill: "#f9321f" }}
            className="h-10 w-10 rounded-2xl border-white bg-black p-1 shadow-xl hover:scale-[111%] hover:bg-green-700/50 sm:border-[0.15rem]"
          />
        </a>
      </motion.div>
    </section>
  )
    
}