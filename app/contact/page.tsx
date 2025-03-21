"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"


export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your server here
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    // Reset the form submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-[#8B0000] text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[700px] text-white/80 md:text-xl">
                We're here to help. Reach out to us with any questions or inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#8B0000] mb-6">Get In Touch</h2>
                  <p className="text-gray-700 mb-8">
                    Have questions about our courses, admissions, or anything else? Our team is ready to assist you.
                    Fill out the form or use our contact information below to reach us.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-[#8B0000]/10">
                          <MapPin className="h-6 w-6 text-[#8B0000]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">Our Location</h3>
                          <p className="text-gray-600">123 Education Street, Learning City, 10001</p>
                          <Link
                            href="https://maps.google.com"
                            target="_blank"
                            className="text-[#8B0000] hover:underline mt-1 inline-block"
                          >
                            Get Directions
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-[#8B0000]/10">
                          <Mail className="h-6 w-6 text-[#8B0000]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">Email Us</h3>
                          <p className="text-gray-600">info@tutschool.com</p>
                          <p className="text-gray-600">admissions@tutschool.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-[#8B0000]/10">
                          <Phone className="h-6 w-6 text-[#8B0000]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">Call Us</h3>
                          <p className="text-gray-600">Main: +1 (555) 123-4567</p>
                          <p className="text-gray-600">Support: +1 (555) 987-6543</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-[#8B0000]/10">
                          <Clock className="h-6 w-6 text-[#8B0000]" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">Office Hours</h3>
                          <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-[#8B0000] mb-6">Send Us a Message</h2>

                    {formSubmitted ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                        <p className="text-green-700">
                          Thank you for contacting us. We'll get back to you as soon as possible.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">
                              Full Name <span className="text-[#8B0000]">*</span>
                            </label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="John Doe"
                              required
                              className="border-gray-300 focus:border-[#8B0000] focus:ring-[#8B0000]"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                              Email Address <span className="text-[#8B0000]">*</span>
                            </label>
                            <Input
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              type="email"
                              placeholder="john@example.com"
                              required
                              className="border-gray-300 focus:border-[#8B0000] focus:ring-[#8B0000]"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                              Phone Number
                            </label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+1 (555) 123-4567"
                              className="border-gray-300 focus:border-[#8B0000] focus:ring-[#8B0000]"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                              Subject <span className="text-[#8B0000]">*</span>
                            </label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Course Inquiry"
                              required
                              className="border-gray-300 focus:border-[#8B0000] focus:ring-[#8B0000]"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-gray-700">
                            Message <span className="text-[#8B0000]">*</span>
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here..."
                            required
                            className="min-h-[150px] border-gray-300 focus:border-[#8B0000] focus:ring-[#8B0000]"
                          />
                        </div>
                        <Button type="submit" className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white">
                          <Send className="h-4 w-4 mr-2" /> Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-12 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#8B0000]">Find Us</h2>
              <p className="text-gray-600 mt-2">Visit our campus and experience TutSchool in person</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596552044!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1619826381244!5m2!1sen!2s"
                className="w-full h-[400px]"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[#8B0000]">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Find answers to common questions about contacting and visiting TutSchool
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#8B0000] mb-2">What are your response times?</h3>
                  <p className="text-gray-700">
                    We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, we
                    recommend calling our support line.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#8B0000] mb-2">Do you offer campus tours?</h3>
                  <p className="text-gray-700">
                    Yes, we offer guided campus tours every Tuesday and Thursday. Please contact our admissions office
                    to schedule a visit.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#8B0000] mb-2">How can I apply for a course?</h3>
                  <p className="text-gray-700">
                    You can apply for courses through our website's application portal or by contacting our admissions
                    team directly via email or phone.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#8B0000] mb-2">Is there parking available on campus?</h3>
                  <p className="text-gray-700">
                    Yes, we have visitor parking available on campus. Please use the main entrance and follow signs to
                    the visitor parking area.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

