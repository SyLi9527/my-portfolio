import { MainNav } from "@/components/main-nav"
import { mainPageCatalogs } from "@/config/mainConfig"

export default function ProjectLayout({
    children,
    }: { children: React.ReactNode }) {
    return (
        <div className="">
            <header className=" fixed">
                <MainNav catalogs={mainPageCatalogs}/>
            </header>
            {children}
        </div>
    )
}