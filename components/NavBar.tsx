import React from 'react'
import Link from 'next/link'
import { Search, Menu} from 'lucide-react'

const NavBar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-2xl text-[#8B0000]">
            TUT-SCHOOL
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="text-[#8B0000] font-medium hover:text-[#c00000]">
            About Us
          </Link>
          <Link href="/schedule" className="text-[#8B0000] font-medium hover:text-[#c00000]">
            Schedule
          </Link>
          <Link href="/testimonials" className="text-[#8B0000] font-medium hover:text-[#c00000]">
            Testimonials
          </Link>
          <Link href="/blog" className="text-[#8B0000] font-medium hover:text-[#c00000]">
            Blog
          </Link>
          <Link href="/contact" className="text-[#8B0000] font-medium hover:text-[#c00000]">
            Contact
          </Link>
          <h2  className="text-[#8B0000] font-medium hover:text-[#c00000]">
            Academic Programs
          </h2>
          <h2  className="text-[#8B0000] font-medium hover:text-[#c00000]">
            Admissions
          </h2>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-[#8B0000]">
            <Search size={20} />
          </button>
          <button className="md:hidden text-[#8B0000]">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default NavBar