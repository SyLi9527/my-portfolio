import ActiveSectionContextProvider from "@/components/active-section-context"
import Header from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/components/utils"
import "@/styles/globals.css"
import { Roboto_Slab as FontRS, Inter as FontSans, } from "next/font/google"
import localFont from "next/font/local"

const fontSans = FontSans({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontRS = FontRS({
  subsets: ["latin"],
  variable: "--font-rs",
})

const fontDarumadrop = localFont({
  src: "../../assets/Darumadrop_One/DarumadropOne-Regular.ttf",
  variable: "--font-darumadrop",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const viewport = {
  themeColor: "#000000",
}

export const metadata = {
  title: "Shaoyan Li | Personal Portfolio",
  description: "Homepage of Shaoyan Li",
  keywords: [
    "personal page",
    "landing page",
    "template for homepage",
  ],
  authors: [{
    name: "Shaoyan Li (Tim)",
    // need to fill in
    url: "placeholder",
    // github: "https://github.com/SyLi9527",
    // // need to fill in
    // twitter: 'placeholder',
  }],
  creator: "Shaoyan Li (Tim)",
  icons: {
    icon: "/ds3.png",
    // shortcut: '/ds3.png',
    apple: "/ds3.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (

    
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(
        "flex min-h-screen flex-col items-center bg-slate-950 font-sans text-primary-dark antialiased",
        fontDarumadrop.variable,
        fontSans.variable,
        fontRS.variable,
      )}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <ActiveSectionContextProvider> 
            <Header />
            {children}
          </ActiveSectionContextProvider> 
        </ThemeProvider>
      </body>
    </html>
  )
}
