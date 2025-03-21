import { Star } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The web development course completely transformed my career. I went from knowing nothing about coding to landing a full-time developer position in just 6 months.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Data Analyst",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The data science curriculum is comprehensive and up-to-date. The instructors are knowledgeable and the community support is incredible.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "I've taken several digital marketing courses, but TutSchool's masterclass stands out. The practical strategies I learned helped me increase our company's conversion rate by 40%.",
    rating: 4,
  },
  {
    name: "David Kim",
    role: "UX Designer",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The UI/UX design course provided me with the skills and confidence to transition into a design role. The project-based approach was exactly what I needed.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Don't just take our word for it. Hear from our students who have transformed their careers with TutSchool.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

