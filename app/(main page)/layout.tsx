import { MainNav } from "@/components/main-nav"
import { mainPageCatalogs } from "@/config/mainConfig"

export default function RootLayout({
    children,
    }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-screen flex-col">
            <header>
                <MainNav catalogs={mainPageCatalogs}/>
            </header>
            {children}
        </div>
    )
}