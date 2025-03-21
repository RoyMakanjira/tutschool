"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">TutSchool</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#courses" className="text-sm font-medium hover:text-primary">
              Courses
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="/contact-us" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/schedule" className="text-sm font-medium hover:text-primary">
              Schedule
            </Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm" className="bg-[#8B0000] hover:bg-[#6B0000] text-white">
              Sign up
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-6">
                <Link href="#courses" className="text-sm font-medium hover:text-primary">
                  Courses
                </Link>
                <Link href="#features" className="text-sm font-medium hover:text-primary">
                  Features
                </Link>
                <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
                  Testimonials
                </Link>
                <Link href="/contact-us" className="flex w-full items-center py-2 text-lg font-semibold">
                  Contact
                </Link>
                <Link href="/blog" className="flex w-full items-center py-2 text-lg font-semibold">
                  Blog
                </Link>
                <Link href="/schedule" className="flex w-full items-center py-2 text-lg font-semibold">
                  Schedule
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    Log in
                  </Button>
                  <Button size="sm">Sign up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

