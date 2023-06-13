import Link from "next/link"
import Image from "next/image"
import SolaireOfAstora from "@/public/praise_the_sun.jpg"
import { cn } from "./utils"

interface catalogItems {
    catalogs: string[]
}

export function MainNav({catalogs, fixedPosition}: { catalogs: string[], fixedPosition?: boolean }) {
    if (fixedPosition === undefined) {
        fixedPosition = false
    }
    return (
        <div className={cn("flex w-screen items-center gap-6 px-4 py-5 font-darumadrop md:gap-10 md:px-20 md:py-10",
            fixedPosition ? "fixed left-0 top-0" : "")}>
            <div className="flex flex-col items-center">
                <Image src={SolaireOfAstora} width={60} alt="Solaire of Astora" className="rounded-full" />
                <Link href='/' className="space-x-2 md:flex">
                    <span className=" text-xl font-bold sm:inline-block md:text-2xl">
                        Hi, there!
                    </span>
                </Link>
            </div>
            { catalogs?.length > 0 ? (
                <nav className="hidden gap-6 md:flex">
                    { catalogs.map((catalog, index) => (
                        <Link href={`/${catalog.toLowerCase()}`} key={index} className="space-x-2 md:flex">
                            <span className="text-slate-800 text-lg font-medium transition-colors md:text-xl">
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