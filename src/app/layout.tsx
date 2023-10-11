import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: 'CAAN App',
  description: 'CAAN User App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        {/* <div className='footer'>Footer</div> */}
      </body>
    </html>
  )
}
