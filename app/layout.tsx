import '@/styles/globals.css'
import { Inter as FontSans, Roboto_Slab as FontRS,  } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/components/utils'

const fontSans = FontSans({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontRS = FontRS({
  subsets: ['latin'],
  variable: '--font-rs',
})

const fontDarumadrop = localFont({
  src: '../assets/Darumadrop_One/DarumadropOne-Regular.ttf',
  variable: '--font-darumadrop',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: 'Shaoyan Li\'s Homepage',
  description: 'Homepage of Shaoyan Li',
  keywords: [
    "personal page",
    "landing page",
    "template for homepage",
  ],
  authors: [{
    name: 'Shaoyan Li(Tim)',
    // need to fill in
    url: 'placeholder',
    // github: 'https://github.com/SyLi9527',
    // // need to fill in
    // twitter: 'placeholder',
  }],
  creator: 'Shaoyan Li(Tim)',
  themeColor: '#000000',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/ds3.png',
    apple: '/ds3.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (

    
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(
        "min-h-screen font-sans antialiased",
        fontDarumadrop.variable,
        fontSans.variable,
        fontRS.variable,
      )}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
    </body>
    </html>
  )
}
