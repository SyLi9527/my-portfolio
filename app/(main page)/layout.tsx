import { MainNav } from "@/components/main-nav"
import { mainPageCatalogs } from "@/config/mainConfig"

export default function RootLayout({
    children,
    }: { children: React.ReactNode }) {
    return (
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        <div className="
            flex min-h-screen 
            w-screen 
            flex-col 
            overflow-x-hidden
            bg-[url('../public/bg/bb-1.jpg'),_url('../public/bg/bb-3.jpg'),_url('../public/bg/er-2.jpg')]
            bg-[length:33.4vw,_33.4vw,_33.4vw]
            bg-[position:top_left,_top_center,_top_right]
            bg-repeat-y
            md:bg-[url('../public/bg/bb-1.jpg'),_url('../public/bg/er-1.jpg'),_url('../public/bg/er-2.jpg')]  
            ">
            <header>
                <MainNav catalogs={mainPageCatalogs}/>
            </header>
            {children}
        </div>
    )
}