import { MainNav } from "@/components/main-nav"
import { mainPageCatalogs } from "@/config/mainConfig"

export default function BlogLayout({
    children,
    }: { children: React.ReactNode }) {
    return (
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        <div className="
            flex min-h-screen 
            w-screen 
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