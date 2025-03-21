import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Calendar, BookOpen, ArrowRight, Star, Quote } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/english-TiE4u9Qb6Vz3ScyGFKi9UFoz9dqObq.png"
              width={120}
              height={40}
              alt="Tut-School Logo"
              className="h-10 w-auto"
            />
            <span className="text-xl font-semibold">Tut-School</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-sm hover:text-primary">
              Programs
            </a>
            <a href="/" className="text-sm hover:text-primary">
              Resources
            </a>
            <a href="/schedule" className="text-sm hover:text-primary">
              Schedule
            </a>
            <a href="/testimonials" className="text-sm hover:text-primary">
              Testimonials
            </a>
            <a href="/blog" className="text-sm hover:text-primary">
              Blog
            </a>
            <a href="/about" className="text-sm hover:text-primary">
              About Us
            </a>
            <a href="/contact" className="text-sm hover:text-primary">
              About Us
            </a>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Book Lesson
            </Button>
            <Button>
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat Support
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Master English with Personal Tutoring</h1>
            <p className="text-muted-foreground mb-6">
              Experience interactive learning with native speakers and AI-powered support. Join over 10,000 successful
              students!
            </p>
            <div className="flex gap-4">
              <Button size="lg">Start Learning</Button>
              <Button variant="outline" size="lg">
                Try Free Lesson
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student-2-UYjDLABOpW9Xm2NEKYbfPIzBDQAbou.png"
              width={500}
              height={400}
              alt="Students learning"
              className="rounded-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">24/7 Support</div>
              <div className="text-xs text-muted-foreground">AI-Powered Learning</div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Actions */}
      <section className="bg-blue-50 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Online Booking</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Schedule your lessons instantly with our easy booking system
              </p>
              <Button variant="link" className="p-0">
                Book Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <MessageCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">AI Chat Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Get instant answers and practice conversations 24/7</p>
              <Button variant="link" className="p-0">
                Start Chat <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <BookOpen className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Learning Resources</h3>
              <p className="text-sm text-muted-foreground mb-4">Access our library of materials and study guides</p>
              <Button variant="link" className="p-0">
                Browse Resources <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories & Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how our students achieved their language goals and transformed their careers with Tut-School
            </p>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Pass Rate</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-sm text-muted-foreground">Students</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">45+</div>
              <p className="text-sm text-muted-foreground">Countries</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>

          {/* Featured Success Story */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student-1-0YuNEbkJ2fTJiHdjHSPkZKxiF5FvIN.png"
                width={800}
                height={400}
                alt="Successful students"
                className="rounded-xl"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                Featured Story
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl font-medium">
                "Tut-School transformed my English skills completely. I went from struggling with basic conversations to
                confidently giving presentations at work."
              </blockquote>
              <div>
                <div className="font-semibold">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">Marketing Director | Achieved IELTS 8.0</div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Brown",
                role: "Software Engineer",
                achievement: "Business English Certified",
                quote:
                  "The AI chat support helped me practice conversations 24/7. It's like having a personal tutor always available.",
              },
              {
                name: "Emma Garcia",
                role: "University Student",
                achievement: "TOEFL Score: 110",
                quote:
                  "The structured curriculum and practice materials were exactly what I needed to achieve my target TOEFL score.",
              },
              {
                name: "David Kim",
                role: "Healthcare Professional",
                achievement: "Medical English Expert",
                quote:
                  "Specialized medical English courses helped me communicate effectively with international patients.",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.achievement}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Join Our Success Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Blog & Resources */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Latest from Our Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Top 10 English Learning Tips",
                category: "Study Tips",
                date: "March 15, 2024",
              },
              {
                title: "Business English Essentials",
                category: "Business English",
                date: "March 14, 2024",
              },
              {
                title: "Common English Idioms",
                category: "Language Guide",
                date: "March 13, 2024",
              },
            ].map((post) => (
              <div key={post.title} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-100" />
                <div className="p-6">
                  <div className="text-sm text-green-500 mb-2">{post.category}</div>
                  <h3 className="font-semibold mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn more about improving your English skills with our expert guides...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="link" className="p-0">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form with AI Chat */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Get Started Today</h2>
            <p className="text-muted-foreground mb-6">
              Book your first lesson or chat with our AI assistant to learn more about our programs.
            </p>
            <div className="space-y-6">
              <Button size="lg" className="w-full">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Free Trial
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with AI Assistant
              </Button>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-8">
            <form className="space-y-4">
              <Input placeholder="Your name" />
              <Input placeholder="Your email" type="email" />
              <select className="w-full h-10 px-3 rounded-md border border-input bg-white">
                <option>Select your level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <Textarea placeholder="Your learning goals" />
              <Button className="w-full">Request Information</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tut-School</h3>
              <p className="text-gray-400 mb-4">Your path to English fluency starts here</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>General English</li>
                <li>Business English</li>
                <li>IELTS Preparation</li>
                <li>TOEFL Preparation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Blog</li>
                <li>Study Materials</li>
                <li>Grammar Guide</li>
                <li>Vocabulary Lists</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Book a Lesson</li>
                <li>AI Chat Support</li>
                <li>info@tut-school.com</li>
                <li>+1 234 567 890</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-gray-400">
            © 2024 Tut-School. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Fixed AI Chat Button */}
      <div className="fixed bottom-6 right-6">
        <Button size="lg" className="rounded-full shadow-lg">
          <MessageCircle className="w-5 h-5 mr-2" />
          Chat with AI Tutor
        </Button>
      </div>
    </div>
  )
}

