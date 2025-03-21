import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, Search, Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#8B0000] text-white py-2 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="hidden md:flex space-x-4 text-sm">
            <Link href="#" className="hover:underline">
              Parents
            </Link>
            <Link href="#" className="hover:underline">
              Students
            </Link>
            <Link href="#" className="hover:underline">
              Staff
            </Link>
            <Link href="#" className="hover:underline">
              Alumnae
            </Link>
          </div>
          <div className="flex space-x-4 text-sm">
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="#" className="hover:underline">
              News
            </Link>
            <Link href="/schedule" className="hover:underline">
              Calendar
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
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
                About
              </Link>
              <Link href="#" className="text-[#8B0000] font-medium hover:text-[#c00000]">
                Admissions
              </Link>
              <Link href="#" className="text-[#8B0000] font-medium hover:text-[#c00000]">
                Academic
              </Link>
              <Link href="#" className="text-[#8B0000] font-medium hover:text-[#c00000]">
                Co-Curricular
              </Link>
              <Link href="#" className="text-[#8B0000] font-medium hover:text-[#c00000]">
                Community
              </Link>
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

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/80 to-[#8B0000]/50 z-10"></div>
        <div className="relative h-full">
          <Image src="/assets/painting.jpg" alt="School lounge area" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Academic Excellence Through Language Immersion
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Developing communicative and creative skills in warm, friendly surroundings
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="bg-white text-[#8B0000] px-6 py-3 rounded-md font-medium inline-flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  Book a Visit <ChevronRight className="ml-2" size={18} />
                </Link>
                <Link
                  href="#"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  Discover More <ChevronRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000] mb-4">Welcome to TUT-SCHOOL</h2>
            <div className="w-20 h-1 bg-[#8B0000] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Our mission is to provide academic excellence in a comfortable environment. We aim to develop
              communicative and creative skills of our students from the local community in warm and friendly
              surroundings, providing intercultural competence through language immersion education.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src="/assets/lounge.jpg" alt="Students in classroom" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8B0000] mb-2">Student Life</h3>
                <p className="text-gray-600 mb-4">
                  Our warm and friendly community fosters communication skills, cultural awareness, and personal growth
                  through diverse activities.
                </p>
                <Link href="#" className="inline-flex items-center text-[#8B0000] font-medium hover:text-[#c00000]">
                  Learn more <ChevronRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src="/assets/students.jpg" alt="Art class" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8B0000] mb-2">Creative Expression</h3>
                <p className="text-gray-600 mb-4">
                  We encourage creative skills development through arts, language, and cultural programs designed for
                  self-expression.
                </p>
                <Link href="#" className="inline-flex items-center text-[#8B0000] font-medium hover:text-[#c00000]">
                  Learn more <ChevronRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image src="/assets/happy-student.jpg" alt="School events" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#8B0000] mb-2">Cultural Immersion</h3>
                <p className="text-gray-600 mb-4">
                  Throughout the year, we celebrate various cultural events that enhance intercultural competence and
                  create lasting connections.
                </p>
                <Link href="#" className="inline-flex items-center text-[#8B0000] font-medium hover:text-[#c00000]">
                  Learn more <ChevronRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-[#8B0000]">Latest News & Events</h2>
            <Link
              href="#"
              className="mt-4 md:mt-0 inline-flex items-center text-[#8B0000] font-medium hover:text-[#c00000]"
            >
              View all news <ChevronRight className="ml-1" size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>March 15, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-[#8B0000] mb-2">Spring Arts Festival Announced</h3>
                <p className="text-gray-600 mb-4">
                  Join us for our annual celebration of creativity featuring student performances, exhibitions, and
                  workshops.
                </p>
                <Link href="#" className="inline-flex items-center text-[#8B0000] font-medium hover:text-[#c00000]">
                  Read more <ChevronRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>March 10, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-[#8B0000] mb-2">Science Competition Winners</h3>
                <p className="text-gray-600 mb-4">
                  Congratulations to our students who received top honors at the Regional Science Competition this
                  weekend.
                </p>
                <Link href="#" className="inline-flex items-center text-[#8B0000] font-medium hover:text-[#c00000]">
                  Read more <ChevronRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>March 5, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-[#8B0000] mb-2">Open Day Registration Now Open</h3>
                <p className="text-gray-600 mb-4">
                  Prospective families are invited to experience our school community at our upcoming Open Day on April
                  12.
                </p>
                <Link href="#" className="inline-flex items-center text-[#8B0000] font-medium hover:text-[#c00000]">
                  Read more <ChevronRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#8B0000] text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Language Immersion Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover how TUT-SCHOOL can provide your child with intercultural competence and academic excellence in a
            warm, supportive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="bg-white text-[#8B0000] px-6 py-3 rounded-md font-medium inline-flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              Apply Now <ChevronRight className="ml-2" size={18} />
            </Link>
            <Link
              href="#"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium inline-flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              Request Prospectus <ChevronRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6B0000] text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TUT-SCHOOL</h3>
              <p className="text-gray-300 mb-4">
                123 School Lane
                <br />
                Greenfield, GF1 2AB
                <br />
                United Kingdom
              </p>
              <p className="text-gray-300">
                Tel: 01234 567890
                <br />
                Email: info@tut-school.edu
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Academic
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Co-Curricular
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    News & Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Information</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Term Dates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    School Policies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Safeguarding
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-6">
                <Link href="#" className="text-white hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-300">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
                />
                <button className="bg-[#8B0000] px-4 py-2 rounded-r-md hover:bg-[#a00000] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} TUT-SCHOOL. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Terms of Use
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

