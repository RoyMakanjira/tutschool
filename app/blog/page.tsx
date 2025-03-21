"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Calendar, Clock, ChevronRight, BookOpen, Users, Lightbulb, Briefcase, Award, Tag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NavBar from "@/components/NavBar"

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "10 Effective Study Techniques for Better Learning Outcomes",
    excerpt:
      "Discover research-backed study methods that can help you retain information longer and improve your academic performance.",
    image: "/assets/verified.png",
    category: "Study Tips",
    author: {
      name: "Dr. Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Learning Specialist",
    },
    date: "March 15, 2025",
    readTime: "8 min read",
    featured: true,
    tags: ["Learning", "Study Methods", "Academic Success"],
  },
  {
    id: 2,
    title: "The Future of Education: How AI is Transforming Learning",
    excerpt:
      "Explore how artificial intelligence is revolutionizing education and creating new opportunities for personalized learning experiences.",
    image: "/assets/coursesOne.svg",
    category: "Educational Technology",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Tech Education Director",
    },
    date: "March 10, 2025",
    readTime: "6 min read",
    featured: true,
    tags: [ "EdTech", "Future of Education"],
  },
  {
    id: 3,
    title: "From Classroom to Career: Building Your Professional Network",
    excerpt:
      "Learn how to leverage your educational connections to build a strong professional network that will support your career growth.",
      image: "/assets/coursesTwo.svg",
    category: "Career Development",
    author: {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Career Counselor",
    },
    date: "March 5, 2025",
    readTime: "5 min read",
    featured: false,
    tags: ["Networking", "Career Growth", "Professional Development"],
  },
  {
    id: 4,
    title: "Student Success Story: From Beginner to Pro",
    excerpt:
      "Read about how one of our students transformed their career through dedication and the support of our comprehensive web development program.",
      image: "/assets/coursesThree.svg",
    category: "Success Stories",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Program Director",
    },
    date: "February 28, 2025",
    readTime: "7 min read",
    featured: false,
    tags: ["Success Story", "Career Change"],
  },
  {
    id: 5,
    title: "The Importance of Soft Skills in Technical Education",
    excerpt:
      "Discover why communication, teamwork, and problem-solving skills are just as important as technical knowledge in today's job market.",
      image: "/assets/coursesFour.svg",
    category: "Skills Development",
    author: {
      name: "Jennifer Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Soft Skills Instructor",
    },
    date: "February 20, 2025",
    readTime: "6 min read",
    featured: false,
    tags: ["Soft Skills", "Communication", "Professional Growth"],
  },
  {
    id: 6,
    title: "How to Balance Work, Life, and Education as an Adult Learner",
    excerpt:
      "Practical strategies for managing your time and responsibilities while pursuing further education as a working professional.",
    image: "/assets/boy1.svg",
    category: "Adult Learning",
    author: {
      name: "Robert Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Student Success Coach",
    },
    date: "February 15, 2025",
    readTime: "9 min read",
    featured: false,
    tags: ["Work-Life Balance", "Adult Education", "Time Management"],
  },
]

// Categories with icons
const categories = [
  { name: "Study Tips", icon: BookOpen, count: 12 },
  { name: "Educational Technology", icon: Lightbulb, count: 8 },
  { name: "Career Development", icon: Briefcase, count: 15 },
  { name: "Success Stories", icon: Award, count: 7 },
  { name: "Skills Development", icon: Users, count: 10 },
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured).slice(0, 4)

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#8B0000] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/placeholder.svg?height=600&width=1600" alt="Blog background" fill className="object-cover" />
          </div>
          <div className="container relative px-4 py-16 md:py-24 mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">TutSchool Blog</h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                Insights, tips, and stories from our educational community
              </p>
              <div className="relative max-w-xl">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white focus:ring-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Featured Posts */}
        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#8B0000]">Featured Articles</h2>
              <Link href="#" className="text-[#8B0000] hover:text-[#6B0000] font-medium flex items-center mt-2 md:mt-0">
                View all articles <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                  <div className="aspect-[16/9] relative">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#8B0000] hover:bg-[#6B0000] text-white">{post.category}</Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl hover:text-[#8B0000] transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="text-base text-gray-600">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start space-y-4">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{post.author.name}</p>
                        <p className="text-xs text-gray-500">{post.author.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 w-full">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                      <div className="mx-3">•</div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Blog Posts */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-8">Recent Articles</h2>

                <div className="space-y-8">
                  {recentPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover rounded-l-lg"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="mb-2">
                            <Badge className="bg-[#8B0000] hover:bg-[#6B0000] text-white">{post.category}</Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-2 hover:text-[#8B0000] transition-colors">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium">{post.author.name}</span>
                            </div>
                            <div className="flex items-center text-xs text-gray-500">
                              <Calendar className="h-3 w-3 mr-1" />
                              {post.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <Button className="bg-[#8B0000] hover:bg-[#6B0000] text-white">Load More Articles</Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Categories */}
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#8B0000]">Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          href="#"
                          className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center">
                            <div className="p-2 rounded-full bg-[#8B0000]/10 mr-3">
                              <category.icon className="h-4 w-4 text-[#8B0000]" />
                            </div>
                            <span>{category.name}</span>
                          </div>
                          <Badge variant="outline" className="ml-2">
                            {category.count}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#8B0000]">Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag, index) => (
                        <Link key={index} href="#">
                          <Badge variant="secondary" className="bg-gray-100 hover:bg-gray-200 text-gray-800">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="border-none shadow-md bg-[#8B0000]/5">
                  <CardHeader>
                    <CardTitle className="text-xl text-[#8B0000]">Subscribe to Our Newsletter</CardTitle>
                    <CardDescription>
                      Get the latest articles and educational resources delivered to your inbox.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        className="border-gray-300 focus:border-[#8B0000] focus:ring-[#8B0000]"
                      />
                      <Button className="w-full bg-[#8B0000] hover:bg-[#6B0000] text-white">Subscribe</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Topics Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#8B0000] mb-8 text-center">Explore Topics</h2>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="all" className="data-[state=active]:bg-[#8B0000] data-[state=active]:text-white">
                    All Topics
                  </TabsTrigger>
                  <TabsTrigger
                    value="learning"
                    className="data-[state=active]:bg-[#8B0000] data-[state=active]:text-white"
                  >
                    Learning
                  </TabsTrigger>
                  <TabsTrigger
                    value="career"
                    className="data-[state=active]:bg-[#8B0000] data-[state=active]:text-white"
                  >
                    Career
                  </TabsTrigger>
                  <TabsTrigger
                    value="technology"
                    className="data-[state=active]:bg-[#8B0000] data-[state=active]:text-white"
                  >
                    Technology
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.slice(0, 6).map((post) => (
                    <Card
                      key={post.id}
                      className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-video relative">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-[#8B0000] hover:bg-[#6B0000] text-white">{post.category}</Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg hover:text-[#8B0000] transition-colors line-clamp-2">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <CardDescription className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</CardDescription>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="learning" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter(
                      (post) =>
                        post.category === "Study Tips" ||
                        post.tags.includes("Learning") ||
                        post.tags.includes("Academic Success"),
                    )
                    .map((post) => (
                      <Card
                        key={post.id}
                        className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="aspect-video relative">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-[#8B0000] hover:bg-[#6B0000] text-white">{post.category}</Badge>
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg hover:text-[#8B0000] transition-colors line-clamp-2">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <CardDescription className="text-sm text-gray-600 line-clamp-2">
                            {post.excerpt}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="career" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter(
                      (post) =>
                        post.category === "Career Development" ||
                        post.tags.includes("Career Growth") ||
                        post.tags.includes("Professional Development"),
                    )
                    .map((post) => (
                      <Card
                        key={post.id}
                        className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="aspect-video relative">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-[#8B0000] hover:bg-[#6B0000] text-white">{post.category}</Badge>
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg hover:text-[#8B0000] transition-colors line-clamp-2">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <CardDescription className="text-sm text-gray-600 line-clamp-2">
                            {post.excerpt}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="technology" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts
                    .filter(
                      (post) =>
                        post.category === "Educational Technology" ||
                        post.tags.includes("EdTech") ||
                        post.tags.includes("AI") ||
                        post.tags.includes("Web Development"),
                    )
                    .map((post) => (
                      <Card
                        key={post.id}
                        className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="aspect-video relative">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-[#8B0000] hover:bg-[#6B0000] text-white">{post.category}</Badge>
                          </div>
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg hover:text-[#8B0000] transition-colors line-clamp-2">
                            <Link href={`/blog/${post.id}`}>{post.title}</Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <CardDescription className="text-sm text-gray-600 line-clamp-2">
                            {post.excerpt}
                          </CardDescription>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#8B0000] text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
              <p className="text-white/80 text-lg mb-8">
                Explore our courses and join thousands of students who have transformed their careers with TutSchool.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-[#8B0000] hover:bg-gray-100">Explore Courses</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

