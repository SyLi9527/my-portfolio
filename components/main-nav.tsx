import SolaireOfAstora from "@/public/praise_the_sun.jpg"
import Image from "next/image"
import Link from "next/link"
import { cn } from "./utils"
interface catalogItems {
    catalogs: string[]
}

export function MainNav({catalogs, fixedPosition}: { catalogs: string[], fixedPosition?: boolean }) {
  if (fixedPosition === undefined) {
    fixedPosition = false
  }
  return (
    <div className={cn("z-10 flex w-screen items-center gap-6 px-4 py-5 font-darumadrop backdrop-blur-[6px] md:gap-10 md:px-20 md:py-10",
      fixedPosition ? "fixed left-0 top-0" : "")}>
      <div className="flex flex-col items-center">
        <Image src={SolaireOfAstora} width={60} alt="Solaire of Astora" className="rounded-full" loading="lazy" />
        <Link href='/' className="space-x-2 md:flex">
          <span className=" text-xl font-bold sm:inline-block md:text-2xl">
                        Hi, there!
          </span>
        </Link>
      </div>
      { catalogs?.length > 0 ? (
        <nav className="hidden gap-6 md:flex">
          { catalogs.map((catalog, index) => (
            catalog === "Blog" || catalog === "Project"
              ? 
            // <Link href={`/${catalog.toLowerCase()}`} key={index} className="space-x-2 md:flex">
              <div className="group relative w-min space-x-2 md:flex">
                <span className="text-lg font-medium transition-colors group-hover:cursor-not-allowed group-hover:text-gold group-hover:underline group-hover:opacity-40 md:text-xl">
                  {catalog}
                </span>
                {/* <Ban color="#ea0000ee" strokeWidth="3px" size="14px" className=" absolute left-[50%] top-5 translate-x-[-50%] opacity-0 duration-500 hover:transition-opacity group-hover:opacity-75"/> */}
                <span className="absolute left-[50%] top-[-13px] inline-block w-24 translate-x-[-50%] opacity-0  duration-500 hover:transition-opacity group-hover:cursor-not-allowed group-hover:opacity-75">coming soon</span>
              </div>
            // </Link>
              :
              <Link href={`/${catalog.toLowerCase()}`} key={index} className="space-x-2 md:flex">
                <span className="text-lg font-medium text-slate-800 transition-colors hover:text-gold hover:underline md:text-xl">
                  {catalog}
                </span>
              </Link>
                        
          ))}
        </nav>
      ): null
      }
    </div>
  )
}