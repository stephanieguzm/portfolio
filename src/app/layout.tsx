import type { Metadata } from 'next'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'

import './globals.css'
import { Inter } from 'next/font/google'
import { SITE_NAME, SITE_DESCRIPTION } from "@lib/constants"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
