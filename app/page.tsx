import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Calendar, Search, Menu, Globe2, Users, Trophy, Clock, MessageCircle, GraduationCap, Languages, BookOpen, Palette} from "lucide-react"
import { Button } from "@/components/ui/button"

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
            About Us
          </Link>
          <Link href="#" className="text-[#8B0000] font-medium hover:text-[#c00000]">
            Admissions
          </Link>
          <Link href="#" className="text-[#8B0000] font-medium hover:text-[#c00000]">
            Academic Programs
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
            Наша миссия – качественное обучение в комфортной среде. 
            Наша цель – развивать коммуникативные и творческие навыки детей и взрослых в местном комьюнити в теплой и дружеской атмосфере, с погружением в культуру стран изучаемых языков
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
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

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>March 10, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-[#8B0000] mb-2">Chinese Competition Winners</h3>
                <p className="text-gray-600 mb-4">
                  Congratulations to our students who received top honors at the Regional Chinese Competition this
                  weekend.
                </p>
                <Link href="#" className="inline-flex items-center text-[#8B0000] font-medium hover:text-[#c00000]">
                  Read more <ChevronRight className="ml-1" size={16} />
                </Link>
              </div>
            </div>

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
            {/* Features Grid */}
            <section className="border-t border-gray-800 bg-white py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="group space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Global Recognition</h3>
              <p className="text-gray-400">
                Our certifications are recognized by leading institutions worldwide, opening doors to international
                opportunities.
              </p>
            </div>
            <div className="group space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-500 group-hover:bg-green-500/20">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Expert Instructors</h3>
              <p className="text-gray-400">
                Learn from experienced native speakers and certified teachers who are passionate about your success.
              </p>
            </div>
            <div className="group space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500 group-hover:bg-yellow-500/20">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Proven Results</h3>
              <p className="text-gray-400">
                Our structured curriculum and teaching methods have helped thousands achieve their language goals.
              </p>
            </div>
            <div className="group space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-500 group-hover:bg-purple-500/20">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Flexible Schedule</h3>
              <p className="text-gray-400">
                Choose from morning, evening, or weekend classes to fit your busy lifestyle.
              </p>
            </div>
            <div className="group space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/10 text-pink-500 group-hover:bg-pink-500/20">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Interactive Learning</h3>
              <p className="text-gray-400">
                Engage in dynamic conversations and cultural exchange with students from around the world.
              </p>
            </div>
            <div className="group space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 group-hover:bg-orange-500/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">Career Support</h3>
              <p className="text-gray-400">
                Get guidance on resume writing, interview preparation, and professional networking in your target
                language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative border-t border-gray-800 bg-white py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative">
              <Image
                src="/assets/students.jpg"
                alt="Students learning"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -right-6 h-48 w-48 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-3xl"></div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Comprehensive Language
                <span className="block text-primary">& Art Programs</span>
              </h2>
              <p className="text-lg text-gray-400">
                Our programs are designed to help you achieve fluency and cultural understanding through immersive
                learning experiences.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <Languages className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">English Language Program</h3>
                    <p className="text-gray-400">Master English for academic, business, or personal growth</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Chinese Language Program</h3>
                    <p className="text-gray-400">Learn Mandarin Chinese and explore Chinese culture</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-500">
                    <Palette className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Art Program</h3>
                    <p className="text-gray-400">Develop your artistic skills and creative expression</p>
                  </div>
                </div>
              </div>
              <Button className="h-12 bg-primary px-8 text-lg hover:bg-black-600">Explore Programs</Button>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/2 -z-10">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,200 Q200,0 400,200" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.2" />
            <path d="M0,250 Q200,50 400,250" stroke="#22C55E" strokeWidth="2" fill="none" opacity="0.2" />
          </svg>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-gray-800 bg-black py-24">
        <div className="container text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to start your learning journey?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Join thousands of successful students who have transformed their lives through our programs.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="h-12 bg-primary px-8 text-lg hover:bg-black-600">Get Started Now</Button>
            <Button variant="outline" className="h-12 border-gray-700 px-8 text-lg text-white hover:bg-gray-800">
              Schedule a Tour
            </Button>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,300 Q600,0 1200,300" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.1" />
            <path d="M0,350 Q600,50 1200,350" stroke="#22C55E" strokeWidth="2" fill="none" opacity="0.1" />
            <path d="M0,400 Q600,100 1200,400" stroke="#A855F7" strokeWidth="2" fill="none" opacity="0.1" />
          </svg>
        </div>
      </section>
    </div>
  )
}

