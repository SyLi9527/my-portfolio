import { MainNav } from "@/components/main-nav"
import { mainPageCatalogs } from "@/config/mainConfig"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
    children,
    }: { children: React.ReactNode }) {
    return (
        // eslint-disable-next-line tailwindcss/no-contradicting-classname
        <div className="
            flex min-h-screen
            w-screen 
            flex-col 
            items-center overflow-x-hidden
            "
            >
        <div className="absolute inset-0 z-[-1] opacity-75 blur-sm"
        style={{ backgroundImage: "url('/bg/er-3.jpg')", backgroundSize: "cover", mixBlendMode: "hard-light" }}>
        </div>       
            <header>
                <MainNav catalogs={mainPageCatalogs}/>
            </header>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </div>
    )
}