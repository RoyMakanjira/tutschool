"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users, Filter, Download, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Sample academic terms
const academicTerms = [
  { id: "spring2025", name: "Spring 2025" },
  { id: "summer2025", name: "Summer 2025" },
  { id: "fall2025", name: "Fall 2025" },
  { id: "winter2026", name: "Winter 2026" },
]

// Sample months for navigation
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

// Sample events data
const events = [
  {
    id: 1,
    title: "Spring Semester Begins",
    date: "March 15, 2025",
    time: "All Day",
    location: "All Campuses",
    category: "Academic Calendar",
    description: "First day of classes for the Spring 2025 semester.",
  },
  {
    id: 2,
    title: "Web Development Workshop",
    date: "March 18, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Tech Lab, Main Campus",
    category: "Workshop",
    description: "Hands-on workshop covering the latest web development frameworks and techniques.",
  },
  {
    id: 3,
    title: "Data Science Guest Lecture",
    date: "March 20, 2025",
    time: "3:30 PM - 5:00 PM",
    location: "Auditorium B",
    category: "Guest Lecture",
    description: "Industry expert discusses real-world applications of data science and machine learning.",
  },
  {
    id: 4,
    title: "Add/Drop Deadline",
    date: "March 22, 2025",
    time: "11:59 PM",
    location: "Online",
    category: "Academic Calendar",
    description: "Last day to add or drop courses for the Spring 2025 semester without academic penalty.",
  },
  {
    id: 5,
    title: "Career Fair: Tech Industry",
    date: "March 25, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Student Center",
    category: "Career Event",
    description: "Connect with employers from leading technology companies. Bring your resume and portfolio.",
  },
  {
    id: 6,
    title: "Digital Marketing Masterclass",
    date: "March 27, 2025",
    time: "1:00 PM - 4:00 PM",
    location: "Room 302, Business Building",
    category: "Workshop",
    description: "Learn advanced digital marketing strategies from industry professionals.",
  },
  {
    id: 7,
    title: "Spring Break Begins",
    date: "March 29, 2025",
    time: "All Day",
    location: "All Campuses",
    category: "Academic Calendar",
    description: "No classes during Spring Break (March 29 - April 6).",
  },
]

// Sample class schedule data
const classSchedules = [
  {
    id: 101,
    courseCode: "WEB101",
    courseName: "Web Development Fundamentals",
    instructor: "Dr. Sarah Johnson",
    schedule: "Mondays & Wednesdays, 9:00 AM - 10:30 AM",
    location: "Tech Lab 1",
    startDate: "March 15, 2025",
    endDate: "June 5, 2025",
  },
  {
    id: 102,
    courseCode: "DATA201",
    courseName: "Introduction to Data Science",
    instructor: "Prof. Michael Chen",
    schedule: "Tuesdays & Thursdays, 1:00 PM - 2:30 PM",
    location: "Science Building, Room 305",
    startDate: "March 15, 2025",
    endDate: "June 5, 2025",
  },
  {
    id: 103,
    courseCode: "MKT150",
    courseName: "Digital Marketing Essentials",
    instructor: "Emily Rodriguez, MBA",
    schedule: "Fridays, 10:00 AM - 1:00 PM",
    location: "Business Building, Room 210",
    startDate: "March 15, 2025",
    endDate: "June 5, 2025",
  },
  {
    id: 104,
    courseCode: "DESIGN120",
    courseName: "UI/UX Design Principles",
    instructor: "David Kim, MFA",
    schedule: "Mondays & Wednesdays, 2:00 PM - 3:30 PM",
    location: "Design Studio 2",
    startDate: "March 15, 2025",
    endDate: "June 5, 2025",
  },
  {
    id: 105,
    courseCode: "CS250",
    courseName: "Algorithms and Data Structures",
    instructor: "Dr. Robert Martinez",
    schedule: "Tuesdays & Thursdays, 9:00 AM - 10:30 AM",
    location: "Tech Lab 3",
    startDate: "March 15, 2025",
    endDate: "June 5, 2025",
  },
]

// Sample important dates
const importantDates = [
  {
    id: 1,
    title: "Application Deadline - Spring 2025",
    date: "February 15, 2025",
    category: "Admissions",
  },
  {
    id: 2,
    title: "Spring Semester Begins",
    date: "March 15, 2025",
    category: "Academic Calendar",
  },
  {
    id: 3,
    title: "Add/Drop Deadline",
    date: "March 22, 2025",
    category: "Academic Calendar",
  },
  {
    id: 4,
    title: "Spring Break",
    date: "March 29 - April 6, 2025",
    category: "Academic Calendar",
  },
  {
    id: 5,
    title: "Midterm Exams",
    date: "April 15-19, 2025",
    category: "Academic Calendar",
  },
  {
    id: 6,
    title: "Last Day of Classes",
    date: "June 5, 2025",
    category: "Academic Calendar",
  },
  {
    id: 7,
    title: "Final Exams",
    date: "June 8-12, 2025",
    category: "Academic Calendar",
  },
  {
    id: 8,
    title: "Commencement Ceremony",
    date: "June 20, 2025",
    category: "Special Events",
  },
]

export default function SchedulePage() {
  const [currentMonth, setCurrentMonth] = useState(2) // March (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025)
  const [selectedTerm, setSelectedTerm] = useState("spring2025")
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  // Filter events based on search query and category
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || event.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  // Get unique categories for filter
  const categories = ["all", ...new Set(events.map((event) => event.category))]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative bg-[#8B0000] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/placeholder.svg?height=400&width=1600"
              alt="Calendar background"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative px-4 py-12 md:py-16 mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Calendar & Schedule</h1>
              <p className="text-xl text-white/80 mb-6">
                View important dates, class schedules, and upcoming events for the academic year.
              </p>
              <div className="flex flex-wrap gap-4">
                <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                  <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select Term" />
                  </SelectTrigger>
                  <SelectContent>
                    {academicTerms.map((term) => (
                      <SelectItem key={term.id} value={term.id}>
                        {term.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="bg-white text-[#8B0000] hover:bg-gray-100">
                  <Download className="mr-2 h-4 w-4" /> Download Calendar
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Calendar Navigation */}
        <section className="py-8 bg-white border-b">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between">
              <Button variant="outline" size="sm" onClick={handlePreviousMonth}>
                <ChevronLeft className="h-4 w-4 mr-2" /> Previous
              </Button>
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B0000]">
                {months[currentMonth]} {currentYear}
              </h2>
              <Button variant="outline" size="sm" onClick={handleNextMonth}>
                Next <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 bg-gray-50">
          <div className="container px-4 mx-auto">
            <Tabs defaultValue="events" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3 mx-auto mb-8">
                <TabsTrigger value="events" className="data-[state=active]:bg-[#8B0000] data-[state=active]:text-white">
                  Events
                </TabsTrigger>
                <TabsTrigger
                  value="classes"
                  className="data-[state=active]:bg-[#8B0000] data-[state=active]:text-white"
                >
                  Class Schedule
                </TabsTrigger>
                <TabsTrigger
                  value="important"
                  className="data-[state=active]:bg-[#8B0000] data-[state=active]:text-white"
                >
                  Important Dates
                </TabsTrigger>
              </TabsList>

              {/* Events Tab */}
              <TabsContent value="events" className="mt-0">
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-full md:w-2/3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="text"
                        placeholder="Search events..."
                        className="pl-10 border-gray-300"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/3">
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                      <SelectTrigger className="w-full border-gray-300">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Filter by category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category, index) => (
                          <SelectItem key={index} value={category}>
                            {category === "all" ? "All Categories" : category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-6">
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => (
                      <Card
                        key={event.id}
                        className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
                      >
                        <CardContent className="p-0">
                          <div className="grid md:grid-cols-4 gap-0">
                            <div className="bg-[#8B0000] text-white p-6 flex flex-col justify-center items-center text-center">
                              <div className="text-sm uppercase font-semibold">{event.date.split(", ")[0]}</div>
                              <div className="text-3xl font-bold my-1">{event.date.split(" ")[1].replace(",", "")}</div>
                              <div className="text-sm">{event.date.split(", ")[1].split(" ")[1]}</div>
                              <Badge className="mt-3 bg-white text-[#8B0000]">{event.category}</Badge>
                            </div>
                            <div className="md:col-span-3 p-6">
                              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                              <p className="text-gray-600 mb-4">{event.description}</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center text-gray-600">
                                  <Clock className="h-4 w-4 mr-2 text-[#8B0000]" />
                                  {event.time}
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <MapPin className="h-4 w-4 mr-2 text-[#8B0000]" />
                                  {event.location}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                      <h3 className="text-xl font-medium text-gray-600 mb-2">No events found</h3>
                      <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              {/* Class Schedule Tab */}
              <TabsContent value="classes" className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-bold text-[#8B0000] mb-4">Spring 2025 Class Schedule</h3>
                  <p className="text-gray-600 mb-6">
                    Classes for the Spring 2025 semester run from March 15 to June 5, 2025. Please check with your
                    instructor for any schedule changes or special sessions.
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border px-4 py-2 text-left">Course</th>
                          <th className="border px-4 py-2 text-left">Instructor</th>
                          <th className="border px-4 py-2 text-left">Schedule</th>
                          <th className="border px-4 py-2 text-left">Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        {classSchedules.map((course) => (
                          <tr key={course.id} className="hover:bg-gray-50">
                            <td className="border px-4 py-3">
                              <div className="font-medium">{course.courseCode}</div>
                              <div className="text-sm text-gray-600">{course.courseName}</div>
                            </td>
                            <td className="border px-4 py-3">{course.instructor}</td>
                            <td className="border px-4 py-3">{course.schedule}</td>
                            <td className="border px-4 py-3">{course.location}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-none shadow-md">
                    <CardHeader className="bg-[#8B0000]/5">
                      <CardTitle className="text-[#8B0000]">Class Policies</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#8B0000]"></div>
                          <span>
                            <strong>Attendance:</strong> Students are expected to attend all scheduled classes. More
                            than three unexcused absences may affect your final grade.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#8B0000]"></div>
                          <span>
                            <strong>Late Arrivals:</strong> Students arriving more than 15 minutes late may be marked
                            absent.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#8B0000]"></div>
                          <span>
                            <strong>Make-up Work:</strong> Arrangements for make-up work must be made directly with your
                            instructor.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-[#8B0000]"></div>
                          <span>
                            <strong>Office Hours:</strong> Instructors maintain regular office hours for student
                            consultations.
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md">
                    <CardHeader className="bg-[#8B0000]/5">
                      <CardTitle className="text-[#8B0000]">Resources</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Users className="h-5 w-5 mr-3 text-[#8B0000]" />
                          <div>
                            <h4 className="font-medium">Academic Advising</h4>
                            <p className="text-sm text-gray-600">
                              Schedule an appointment with your academic advisor for course planning and registration
                              assistance.
                            </p>
                            <Link href="#" className="text-sm text-[#8B0000] hover:underline">
                              Book Appointment
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Calendar className="h-5 w-5 mr-3 text-[#8B0000]" />
                          <div>
                            <h4 className="font-medium">Study Room Reservations</h4>
                            <p className="text-sm text-gray-600">
                              Reserve study rooms and collaboration spaces for group projects or individual study.
                            </p>
                            <Link href="#" className="text-sm text-[#8B0000] hover:underline">
                              Make Reservation
                            </Link>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 mr-3 text-[#8B0000]" />
                          <div>
                            <h4 className="font-medium">Campus Map</h4>
                            <p className="text-sm text-gray-600">
                              Find your way around campus with our interactive map.
                            </p>
                            <Link href="#" className="text-sm text-[#8B0000] hover:underline">
                              View Map
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Important Dates Tab */}
              <TabsContent value="important" className="mt-0">
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-bold text-[#8B0000] mb-4">Important Academic Dates</h3>
                  <p className="text-gray-600 mb-6">
                    Mark these key dates on your calendar for the Spring 2025 semester. All deadlines are effective at
                    11:59 PM Eastern Time on the date listed unless otherwise specified.
                  </p>
                </div>

                <div className="space-y-6">
                  {importantDates.map((date) => (
                    <Card key={date.id} className="overflow-hidden border-none shadow-md">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          <div className="bg-[#8B0000] text-white p-6 md:w-1/4 flex flex-col justify-center items-center text-center">
                            <div className="text-lg font-bold">{date.date}</div>
                            <Badge className="mt-2 bg-white text-[#8B0000]">{date.category}</Badge>
                          </div>
                          <div className="p-6 md:w-3/4 flex items-center">
                            <h3 className="text-xl font-bold">{date.title}</h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <Button className="bg-[#8B0000] hover:bg-[#6B0000] text-white">
                    <Download className="mr-2 h-4 w-4" /> Download Full Academic Calendar
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Calendar View Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B0000]">Monthly Calendar View</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                View all events and important dates in a monthly calendar format.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-[#8B0000] text-white p-4">
                <div className="grid grid-cols-7 text-center">
                  <div className="font-medium">Sun</div>
                  <div className="font-medium">Mon</div>
                  <div className="font-medium">Tue</div>
                  <div className="font-medium">Wed</div>
                  <div className="font-medium">Thu</div>
                  <div className="font-medium">Fri</div>
                  <div className="font-medium">Sat</div>
                </div>
              </div>

              {/* Calendar Grid - This would be dynamically generated in a real app */}
              <div className="grid grid-cols-7 border-b border-l">
                {/* Week 1 */}
                <div className="min-h-[100px] border-r border-t p-1 text-gray-400">26</div>
                <div className="min-h-[100px] border-r border-t p-1 text-gray-400">27</div>
                <div className="min-h-[100px] border-r border-t p-1 text-gray-400">28</div>
                <div className="min-h-[100px] border-r border-t p-1">1</div>
                <div className="min-h-[100px] border-r border-t p-1">2</div>
                <div className="min-h-[100px] border-r border-t p-1">3</div>
                <div className="min-h-[100px] border-r border-t p-1">4</div>

                {/* Week 2 */}
                <div className="min-h-[100px] border-r border-t p-1">5</div>
                <div className="min-h-[100px] border-r border-t p-1">6</div>
                <div className="min-h-[100px] border-r border-t p-1">7</div>
                <div className="min-h-[100px] border-r border-t p-1">8</div>
                <div className="min-h-[100px] border-r border-t p-1">9</div>
                <div className="min-h-[100px] border-r border-t p-1">10</div>
                <div className="min-h-[100px] border-r border-t p-1">11</div>

                {/* Week 3 */}
                <div className="min-h-[100px] border-r border-t p-1">12</div>
                <div className="min-h-[100px] border-r border-t p-1">13</div>
                <div className="min-h-[100px] border-r border-t p-1">14</div>
                <div className="min-h-[100px] border-r border-t p-1 relative">
                  15
                  <div className="absolute top-6 left-0 right-0 px-1">
                    <div className="bg-[#8B0000] text-white text-xs p-1 rounded mb-1 truncate">
                      Spring Semester Begins
                    </div>
                  </div>
                </div>
                <div className="min-h-[100px] border-r border-t p-1">16</div>
                <div className="min-h-[100px] border-r border-t p-1">17</div>
                <div className="min-h-[100px] border-r border-t p-1 relative">
                  18
                  <div className="absolute top-6 left-0 right-0 px-1">
                    <div className="bg-blue-500 text-white text-xs p-1 rounded mb-1 truncate">Web Dev Workshop</div>
                  </div>
                </div>

                {/* Week 4 */}
                <div className="min-h-[100px] border-r border-t p-1">19</div>
                <div className="min-h-[100px] border-r border-t p-1 relative">
                  20
                  <div className="absolute top-6 left-0 right-0 px-1">
                    <div className="bg-green-500 text-white text-xs p-1 rounded mb-1 truncate">Guest Lecture</div>
                  </div>
                </div>
                <div className="min-h-[100px] border-r border-t p-1">21</div>
                <div className="min-h-[100px] border-r border-t p-1 relative">
                  22
                  <div className="absolute top-6 left-0 right-0 px-1">
                    <div className="bg-orange-500 text-white text-xs p-1 rounded mb-1 truncate">Add/Drop Deadline</div>
                  </div>
                </div>
                <div className="min-h-[100px] border-r border-t p-1">23</div>
                <div className="min-h-[100px] border-r border-t p-1">24</div>
                <div className="min-h-[100px] border-r border-t p-1 relative">
                  25
                  <div className="absolute top-6 left-0 right-0 px-1">
                    <div className="bg-purple-500 text-white text-xs p-1 rounded mb-1 truncate">Career Fair</div>
                  </div>
                </div>

                {/* Week 5 */}
                <div className="min-h-[100px] border-r border-t p-1">26</div>
                <div className="min-h-[100px] border-r border-t p-1 relative">
                  27
                  <div className="absolute top-6 left-0 right-0 px-1">
                    <div className="bg-blue-500 text-white text-xs p-1 rounded mb-1 truncate">
                      Marketing Masterclass
                    </div>
                  </div>
                </div>
                <div className="min-h-[100px] border-r border-t p-1">28</div>
                <div className="min-h-[100px] border-r border-t p-1 relative">
                  29
                  <div className="absolute top-6 left-0 right-0 px-1">
                    <div className="bg-[#8B0000] text-white text-xs p-1 rounded mb-1 truncate">Spring Break Begins</div>
                  </div>
                </div>
                <div className="min-h-[100px] border-r border-t p-1">30</div>
                <div className="min-h-[100px] border-r border-t p-1">31</div>
                <div className="min-h-[100px] border-r border-t p-1 text-gray-400">1</div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="mr-4">
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous Month
              </Button>
              <Button variant="outline">
                Next Month <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B0000]">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                Find answers to common questions about our academic calendar and schedules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#8B0000] mb-2">How do I register for classes?</h3>
                  <p className="text-gray-700">
                    Registration is available through the student portal. Log in with your student ID and password, then
                    navigate to "Course Registration" to view available classes and register.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#8B0000] mb-2">What is the attendance policy?</h3>
                  <p className="text-gray-700">
                    Students are expected to attend all scheduled classes. More than three unexcused absences may affect
                    your final grade. Please refer to your course syllabus for specific policies.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#8B0000] mb-2">How do I request an incomplete grade?</h3>
                  <p className="text-gray-700">
                    To request an incomplete grade, you must contact your instructor before the end of the semester and
                    have completed at least 70% of the coursework with a passing grade.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-[#8B0000] mb-2">When are final grades posted?</h3>
                  <p className="text-gray-700">
                    Final grades are typically posted within one week after the end of final exams. You can view your
                    grades in the student portal under "Academic Records."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#8B0000] text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help Planning Your Schedule?</h2>
              <p className="text-white/80 text-lg mb-8">
                Our academic advisors are here to help you plan your course schedule and ensure you're on track to meet
                your educational goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-[#8B0000] hover:bg-gray-100">Schedule Advising Appointment</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Student Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

