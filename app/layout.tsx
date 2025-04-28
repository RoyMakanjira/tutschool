import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "easymde/dist/easymde.min.css";
import ChatWidget from "./chat-widget"
import type React from "react" 
import Footer from "@/components/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TUT School - Art & Language Learning",
  description: "Learn Art, Chinese, and English at TUT School",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatWidget />
        <Footer />
      </body>
    
    </html>
  )
}

