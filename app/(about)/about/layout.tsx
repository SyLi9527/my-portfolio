import { MainNav } from "@/components/main-nav"
import { mainPageCatalogs } from "@/config/mainConfig"

export default function AboutLayout({
    children,
    }: { children: React.ReactNode }) {
    return (
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        <div className="
            flex min-h-screen 
            w-full 
            flex-col 
            overflow-x-hidden

            ">
            <header>
                <MainNav catalogs={mainPageCatalogs} fixedPosition={true}/>
            </header>
            {children}
        </div>
    )
}

// bg-[url('../public/bg/bb-1.jpg'),_url('../public/bg/bb-3.jpg'),_url('../public/bg/er-2.jpg')]
// bg-[length:33.4vw,_33.4vw,_33.4vw]
// bg-[position:top_left,_top_center,_top_right]
// bg-repeat-y
// md:bg-[url('../public/bg/bb-1.jpg'),_url('../public/bg/er-1.jpg'),_url('../public/bg/er-2.jpg')]  

