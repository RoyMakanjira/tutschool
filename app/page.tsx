import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm border-b">
        <Link href="/" className="text-2xl font-serif">
          TUT SCHOOL
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-red-500 transition-colors">
            ABOUT
          </Link>
          <Link href="#programs" className="hover:text-red-500 transition-colors">
            PROGRAMS
          </Link>
          <Link href="#enroll" className="hover:text-red-500 transition-colors">
            ENROLL
          </Link>
          <Link href="#contact" className="hover:text-red-500 transition-colors">
            CONTACT
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
          <Image
            src="/student-1.png"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                Discover Your
                <span className="text-red-500"> Creative</span>
                <br />
                Potential
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Excellence in Art, Chinese, and English education. Join our vibrant learning community.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-red-500 hover:bg-red-600">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Book a Tour <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/student-2.png"
                alt="Students"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Art Studio",
                description: "Explore various mediums and develop your artistic voice through hands-on projects.",
                image: "/placeholder.svg?height=400&width=600",
                color: "bg-red-500",
              },
              {
                title: "Chinese Language",
                description: "Master Mandarin through our immersive and interactive learning approach.",
                image: "/placeholder.svg?height=400&width=600",
                color: "bg-blue-500",
              },
              {
                title: "English Excellence",
                description: "Build confidence in English communication through our comprehensive program.",
                image: "/placeholder.svg?height=400&width=600",
                color: "bg-green-500",
              },
            ].map((program, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 z-10" />
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  width={600}
                  height={400}
                  className="w-full aspect-[4/3] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className={`w-12 h-1 ${program.color} mb-4`} />
                  <h3 className="text-2xl font-serif text-white mb-2">{program.title}</h3>
                  <p className="text-white/80">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Student Success Stories</h2>
              <div className="space-y-8">
                {[1, 2].map((_, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-lg mb-4">
                      "The learning environment at TUT School is exceptional. The teachers are passionate and
                      supportive."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-neutral-200 rounded-full" />
                      <div>
                        <p className="font-medium">Student Name</p>
                        <p className="text-sm text-neutral-600">Art & Chinese Program</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngimg.com%20-%20student_PNG142-pMr3wfP1mzz7eR1hrADs9aJiAkAib2.png"
                alt="Happy students"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-500 text-white p-6 rounded-lg">
                <p className="text-4xl font-bold">95%</p>
                <p className="text-sm">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-serif mb-6">Begin Your Journey</h2>
              <p className="text-xl text-white/80 mb-8">
                Take the first step towards mastering art and languages. Enroll now for our upcoming sessions.
              </p>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Textarea
                  placeholder="Tell us about your interests"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button size="lg" className="w-full bg-red-500 hover:bg-red-600">
                  Request Information
                </Button>
              </form>
            </div>
            <div className="space-y-6 lg:pl-12">
              <h3 className="text-2xl font-serif">Why Choose TUT School?</h3>
              <div className="grid gap-6">
                {[
                  "Expert instructors with industry experience",
                  "Small class sizes for personalized attention",
                  "Modern facilities and resources",
                  "Flexible scheduling options",
                  "Regular exhibitions and performances",
                  "Strong community of learners",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                    <p className="text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget Button */}
      <button className="fixed bottom-6 right-6 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors">
        <MessageCircle className="w-6 h-6" />
        <span className="sr-only">Open live chat</span>
      </button>
    </div>
  )
}

