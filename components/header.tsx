"use client"

import { lists } from "@/config/mainConfig"
import { motion } from "framer-motion"
import Link from "next/link"
import { useActiveSectionContext } from "./active-section-context"
import { cn } from "./utils"
export default function Header() {

  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    

  return (
    <header className="relative top-8 z-[99] flex justify-center font-darumadrop">
      <nav className="fixed flex backdrop-blur-xl">
        <motion.ul className="flex flex-wrap gap-6 rounded-2xl border-2 bg-gray-400/30 px-2 py-1 text-2xl sm:flex-nowrap"
          initial={{ y:-100, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {
            lists.map((item, index) => {
              return (
                <motion.li key={item.name} className="group rounded-lg px-4 py-1 duration-300 hover:bg-green-400/10" 
                  initial={{ y:-100, opacity: 0 }}
                  animate={{ y:0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    className={cn(
                      "group-hover:text-green-400",
                      item.name === activeSection && "text-green-400"
                    )}
                    href={item.hashtag}
                    onClick={() => {
                      setActiveSection(item.name)
                      setTimeOfLastClick(Date.now())
                    }}
                  >
                                        
                    {item.name}
                    {item.name === activeSection && 
                                            <motion.span
                                              layoutId="activeSection"
                                              transition={{ 
                                                type: "spring",
                                                // duration: 0.3,
                                                stiffness: 400,
                                                damping: 30,
                                              }}
                                            >

                                            </motion.span>
                    }
                  </Link>
                </motion.li>
              )
            })
          }
        </motion.ul>
      </nav>
    </header>
  )
}