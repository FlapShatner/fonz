import type { Metadata } from 'next'
import { cn } from './utils'
import { Open_Sans, Smooch } from 'next/font/google'
import './globals.css'
import Header from './header'
import Footer from './footer'

export const open_sans = Open_Sans({ subsets: ['latin'], display: 'swap', variable: '--font-open-sans' })
export const smooch = Smooch({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-smooch' })

export const metadata: Metadata = {
 title: 'FonzAI - AI design playground',
 description: 'Design and order your own decals',
}

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode
}>) {
 return (
  <html
   className='h-full'
   lang='en'>
   <body className={cn('flex flex-col justify-between h-full', open_sans.className)}>
    <Header />
    {children}
    <Footer />
   </body>
  </html>
 )
}
