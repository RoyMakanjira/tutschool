"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mail,

  Globe,
  Star,
  ChevronRight,
  Calendar,
  ArrowRight,
  Search,
  Menu,
  Users,Award, BookOpen, CheckCircle, Building, GraduationCap,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const leadershipTeam = [
    {
      name: "Dr. Sarah Johnson",
      role: "President & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dr. Johnson founded TutSchool in 2010 with a vision to make quality education accessible to all. With over 20 years of experience in education and technology, she has led the school to become a leader in innovative learning approaches.",
    },
    {
      name: "Michael Chen",
      role: "Chief Academic Officer",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael oversees all academic programs and curriculum development. His background in both education and industry ensures our programs remain cutting-edge and aligned with market demands.",
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Student Success",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Emily leads our student support initiatives, ensuring every student has the resources they need to succeed. Her innovative approach to student services has significantly improved retention and satisfaction rates.",
    },
  ]
  
  // Sample milestones data
  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description:
        "TutSchool was founded with a mission to provide accessible, quality education in technology and business fields.",
    },
    {
      year: "2013",
      title: "First Graduating Class",
      description: "Our first cohort of students graduated with a remarkable 95% job placement rate within six months.",
    },
    {
      year: "2015",
      title: "Online Learning Platform",
      description: "Launched our proprietary online learning platform, expanding our reach to students worldwide.",
    },
    {
      year: "2018",
      title: "Industry Partnerships",
      description:
        "Established key partnerships with leading technology companies to provide internship and employment opportunities.",
    },
    {
      year: "2020",
      title: "Curriculum Expansion",
      description:
        "Expanded our curriculum to include data science, artificial intelligence, and digital marketing programs.",
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Recognized as one of the top educational institutions for technology and business education.",
    },
  ]
  
  // Sample stats data
  const stats = [
    { value: "10,000+", label: "Students Enrolled" },
    { value: "95%", label: "Job Placement Rate" },
    { value: "50+", label: "Industry Partners" },
    { value: "25+", label: "Countries Represented" },
  ]
  
  // Sample values data
  const values = [
    {
      icon: Users,
      title: "Student-Centered",
      description:
        "We put students at the center of everything we do, designing programs and services that meet their unique needs and aspirations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in teaching, learning, and innovation, setting high standards for ourselves and our students.",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description:
        "We foster an inclusive environment where diverse perspectives are valued and everyone has the opportunity to succeed.",
    },
    {
      icon: BookOpen,
      title: "Lifelong Learning",
      description:
        "We believe in the power of continuous learning and growth, both for our students and our institution.",
    },
  ]
  
  // Sample accreditations data
  const accreditations = [
    "Higher Education Accreditation Commission",
    "International Association of Technology Educators",
    "National Business Education Council",
    "Global Online Learning Standards Organization",
  ]

export default function Home() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const translations = {
    ru: {
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков, Школа искусств",
      phone: "+7 (983) 600-00-00",
      email: "info@tut-school.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      rating: "4.8 на Яндексе",
      search: "Поиск",
      nav: {
        about: "О НАС",
        programs: "ПРОГРАММЫ",
        admissions: "ПОСТУПЛЕНИЕ",
        blog: "БЛОГ",
        contacts: "КОНТАКТЫ",
        schedule: "ПОСТУПЛЕНИЕ",
        testimonials: "ПОСТУПЛЕНИЕ",
      },
      hero: {
        title: "ШКОЛА ИНОСТРАННЫХ ЯЗЫКОВ И ИСКУССТВ",
        subtitle: "Мы помогаем детям и взрослым освоить английский и китайский языки в дружеской атмосфере",
        cta: "Записаться на пробный урок",
      },
      about: {
        title: "О НАС",
        description:
          "Мы языковая студия, английский и китайский языки для детей и взрослых. Нашим клиентам нравится качество преподавания и дружеская атмосфера. У нас вы не только найдете компанию для изучения языков, но и обретете новых друзей.",
        cta: "Подробнее",
      },
      welcome: {
        title: "ДОБРО ПОЖАЛОВАТЬ В TUT SCHOOL",
        description:
          "Наша школа предлагает уникальную возможность изучать языки и искусство в одном месте. Мы создаем вдохновляющую среду, где каждый студент может раскрыть свой потенциал.",
        points: [
          "Индивидуальный подход к каждому ученику",
          "Современные методики преподавания",
          "Комфортные классы и дружелюбная атмосфера",
          "Регулярные культурные мероприятия",
        ],
        cta: "Узнать больше о нашей школе",
      },
      advantages: {
        title: "НАШИ ПРЕИМУЩЕСТВА",
        items: [
          {
            title: "Опытные преподаватели",
            description: "Наши учителя имеют международные сертификаты и многолетний опыт преподавания",
          },
          {
            title: "Английский и китайский",
            description: "Предлагаем курсы по двум востребованным языкам для детей и взрослых",
          },
          {
            title: "Школа искусств",
            description: "Помимо языковых курсов у нас есть творческие занятия и мастер-классы",
          },
        ],
      },
      courses: {
        title: "НАШИ КУРСЫ",
        subtitle: "Выберите программу, которая подходит именно вам",
        items: [
          {
            title: "Английский для детей",
            description: "Возраст: 5-10 лет. Игровой формат обучения с акцентом на разговорную речь.",
            cta: "Подробнее",
          },
          {
            title: "Китайский для детей",
            description: "Возраст: 5-10 лет. Знакомство с иероглифами и основами китайской культуры.",
            cta: "Подробнее",
          },
          {
            title: "Английский для взрослых",
            description: "Общий и деловой английский для всех уровней от начинающего до продвинутого.",
            cta: "Подробнее",
          },
          {
            title: "Китайская каллиграфия",
            description: "Творческие занятия по китайской каллиграфии для детей и взрослых.",
            cta: "Подробнее",
          },
        ],
      },
      news: {
        title: "НОВОСТИ И СОБЫТИЯ",
        viewAll: "Смотреть все",
        items: [
          {
            date: "15 мая 2024",
            title: "Летний интенсив по английскому",
            description: "Запускаем интенсивный курс английского языка для школьников на летних каникулах.",
            cta: "Читать далее",
          },
          {
            date: "10 мая 2024",
            title: "Мастер-класс по китайской каллиграфии",
            description: "Приглашаем на творческий мастер-класс по традиционной китайской каллиграфии.",
            cta: "Читать далее",
          },
          {
            date: "5 мая 2024",
            title: "Новые группы для дошкольников",
            description: "Открываем набор в новые группы английского языка для детей 4-6 лет.",
            cta: "Читать далее",
          },
        ],
      },
      testimonials: {
        title: "ОТЗЫВЫ НАШИХ УЧЕНИКОВ",
        items: [
          {
            name: "Анна К.",
            text: "Мой ребенок с удовольствием ходит на занятия английским. За полгода виден значительный прогресс, особенно в разговорной речи.",
          },
          {
            name: "Дмитрий С.",
            text: "Отличная школа с профессиональными преподавателями. Занимаюсь китайским уже год, и результаты превзошли мои ожидания.",
          },
          {
            name: "Елена В.",
            text: "Очень нравится дружелюбная атмосфера и индивидуальный подход. Преподаватели всегда готовы помочь и ответить на все вопросы.",
          },
        ],
      },
      contact: {
        title: "СВЯЗАТЬСЯ С НАМИ",
        phone: "Позвонить",
        directions: "Как доехать",
        write: "Написать",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
      },
      trial: {
        title: "ЗАПИШИТЕСЬ НА БЕСПЛАТНЫЙ ПРОБНЫЙ УРОК",
        description: "Оставьте заявку, и мы свяжемся с вами для записи на бесплатное пробное занятие",
        cta: "Записаться",
      },
      footer: {
        quickLinks: "Быстрые ссылки",
        links: ["О школе", "Наши курсы", "Расписание", "Преподаватели", "Цены", "Блог", "Контакты"],
        contacts: "Контакты",
        workingHours: {
          title: "Режим работы",
          weekdays: "Понедельник - Пятница: 9:00 - 21:00",
          saturday: "Суббота: 10:00 - 18:00",
          sunday: "Воскресенье, выходной",
        },
        socialMedia: "Социальные сети",
        copyright: "© 2024 Tut School. Все права защищены.",
      },
      languageToggle: "English",
    },
    en: {
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language Courses, School of Arts",
      phone: "+7 (983) 600-00-00",
      email: "info@tut-school.ru",
      address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
      rating: "4.8 on Yandex",
      search: "Search",
      nav: {
        about: "ABOUT US",
        programs: "PROGRAMS",
        admissions: "ADMISSIONS",
        blog: "BLOG",
        contacts: "CONTACTS",
        schedule: "SCHEDULE",
        testimonials: "TESTIMONIALS",
      },
      hero: {
        title: "SCHOOL OF FOREIGN LANGUAGES AND ARTS",
        subtitle: "We help children and adults learn English and Chinese in a friendly atmosphere",
        cta: "Book a trial lesson",
      },
      about: {
        title: "ABOUT US",
        description:
          "We are a language studio offering English and Chinese languages for children and adults. Our clients appreciate the quality of teaching and friendly atmosphere. With us, you will not only find a company to learn languages but also make new friends.",
        cta: "Learn More",
      },
      welcome: {
        title: "WELCOME TO TUT SCHOOL",
        description:
          "Our school offers a unique opportunity to study languages and art in one place. We create an inspiring environment where every student can reach their potential.",
        points: [
          "Individual approach to each student",
          "Modern teaching methods",
          "Comfortable classrooms and friendly atmosphere",
          "Regular cultural events",
        ],
        cta: "Learn more about our school",
      },
      advantages: {
        title: "OUR ADVANTAGES",
        items: [
          {
            title: "Experienced Teachers",
            description: "Our teachers have international certificates and many years of teaching experience",
          },
          {
            title: "English and Chinese",
            description: "We offer courses in two in-demand languages for children and adults",
          },
          {
            title: "School of Arts",
            description: "In addition to language courses, we have creative classes and master classes",
          },
        ],
      },
      courses: {
        title: "OUR COURSES",
        subtitle: "Choose the program that suits you best",
        items: [
          {
            title: "English for Children",
            description: "Ages: 5-10 years. Game-based learning format with an emphasis on speaking skills.",
            cta: "Learn More",
          },
          {
            title: "Chinese for Children",
            description: "Ages: 5-10 years. Introduction to characters and basics of Chinese culture.",
            cta: "Learn More",
          },
          {
            title: "English for Adults",
            description: "General and business English for all levels from beginner to advanced.",
            cta: "Learn More",
          },
          {
            title: "Chinese Calligraphy",
            description: "Creative classes in Chinese calligraphy for children and adults.",
            cta: "Learn More",
          },
        ],
      },
      news: {
        title: "NEWS AND EVENTS",
        viewAll: "View all",
        items: [
          {
            date: "May 15, 2024",
            title: "Summer English Intensive Course",
            description: "We are launching an intensive English course for school students during summer holidays.",
            cta: "Read more",
          },
          {
            date: "May 10, 2024",
            title: "Chinese Calligraphy Workshop",
            description: "Join us for a creative workshop on traditional Chinese calligraphy.",
            cta: "Read more",
          },
          {
            date: "May 5, 2024",
            title: "New Groups for Preschoolers",
            description: "We are opening enrollment for new English language groups for children aged 4-6.",
            cta: "Read more",
          },
        ],
      },
      testimonials: {
        title: "TESTIMONIALS FROM OUR STUDENTS",
        items: [
          {
            name: "Anna K.",
            text: "My child enjoys attending English classes. There has been significant progress over six months, especially in speaking skills.",
          },
          {
            name: "Dmitry S.",
            text: "Excellent school with professional teachers. I've been studying Chinese for a year, and the results have exceeded my expectations.",
          },
          {
            name: "Elena V.",
            text: "I really like the friendly atmosphere and individual approach. The teachers are always ready to help and answer all questions.",
          },
        ],
      },
      contact: {
        title: "CONTACT US",
        phone: "Call",
        directions: "Directions",
        write: "Write",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
      },
      trial: {
        title: "SIGN UP FOR A FREE TRIAL LESSON",
        description: "Leave a request and we will contact you to schedule a free trial lesson",
        cta: "Sign up",
      },
      footer: {
        quickLinks: "Quick Links",
        links: ["About the school", "Our courses", "Schedule", "Teachers", "Prices", "Blog", "Contacts"],
        contacts: "Contacts",
        workingHours: {
          title: "Working Hours",
          weekdays: "Monday - Friday: 9:00 AM - 9:00 PM",
          saturday: "Saturday: 10:00 AM - 6:00 PM",
          sunday: "Sunday: closed",
        },
        socialMedia: "Social Media",
        copyright: "© 2024 Tut School. All rights reserved.",
      },
      languageToggle: "Русский",
    },
  }

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div className="bg-primary/90 py-2 text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">{t.phone}</span>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <Mail className="h-4 w-4" />
              <span className="text-sm">{t.email}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-300">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current stroke-yellow-300" />
              </div>
              <span className="text-sm">{t.rating}</span>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 rounded-md border border-white/30 px-2 py-1 text-sm hover:bg-white/10"
            >
              <Globe className="h-4 w-4" />
              {t.languageToggle}
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b bg-white py-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14">
              <Image
                src="/placeholder.svg?height=56&width=56"
                alt={language === "ru" ? "Логотип Tut School" : "Tut School logo"}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">{t.schoolName}</h1>
              <p className="text-sm text-muted-foreground">{t.schoolSubtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.programs}
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.admissions}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.schedule}
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.testimonials}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-medium text-primary hover:text-primary/80">
                  {t.nav.contacts}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center rounded-full border border-gray-200 px-3 py-1 md:flex">
              <input
                type="text"
                placeholder={t.search}
                className="w-32 border-none bg-transparent text-sm outline-none"
              />
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <button className="rounded-md p-1 text-gray-700 hover:bg-gray-100 md:hidden" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b bg-white py-4 shadow-sm md:hidden">
          <div className="container mx-auto px-4">
            <nav className="space-y-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.programs}
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.admissions}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.blog}
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.schedule}
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.testimonials}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-2 text-sm font-medium text-primary hover:text-primary/80">
                    {t.nav.contacts}
                  </Link>
                </li>
              </ul>
              <div className="flex items-center rounded-full border border-gray-200 px-3 py-2">
                <input
                  type="text"
                  placeholder={t.search}
                  className="w-full border-none bg-transparent text-sm outline-none"
                />
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </nav>
          </div>
        </div>
      )}

      <main>
                {/* Hero Section */}
                <section className="relative bg-[#8B0000] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/assets/painting.jpg?height=600&width=1600" alt="Campus background" fill className="object-cover" />
          </div>
          <div className="container relative px-4 py-16 md:py-24 mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About TutSchool</h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                Empowering students to achieve their potential through innovative education and personalized learning
                experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-white text-[#8B0000] hover:bg-gray-100">
                  Our Programs <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-[#8B0000]/10 text-[#8B0000] mb-4">Our Purpose</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#8B0000]">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                      To provide accessible, high-quality education that empowers individuals to pursue their passions,
                      develop in-demand skills, and become lifelong learners in a rapidly evolving global landscape.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#8B0000]">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-700">
                      To be a leading educational institution that transforms lives through innovative learning
                      experiences, fostering a community of creative problem-solvers and ethical leaders who make
                      meaningful contributions to society.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#8B0000]/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#8B0000]/10 rounded-full"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/assets/landing.jpeg"
                    alt="Students Learning Chinese"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[#8B0000]">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-[#8B0000]/10 text-[#8B0000] mb-4">Our Journey</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-700">
                From humble beginnings to becoming a leading educational institution, our journey has been defined by a
                commitment to excellence and innovation.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                  >
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#8B0000] text-white flex items-center justify-center z-10">
                      {milestone.year.slice(2)}
                    </div>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-16 text-right" : "pl-16"}`}>
                      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <div className="text-[#8B0000] font-bold mb-1">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-700">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-[#8B0000]/10 text-[#8B0000] mb-4">What We Stand For</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-700">
                These core principles guide our decisions, shape our culture, and define how we serve our students and
                community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-[#8B0000]/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-[#8B0000]" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-[#8B0000]/10 text-[#8B0000] mb-4">Meet Our Team</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-gray-700">
                Our experienced leadership team is dedicated to advancing our mission and ensuring the success of our
                students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipTeam.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-white/80">{member.role}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-[#8B0000] mb-2">{member.role}</p>
                  <p className="text-gray-700 text-sm line-clamp-3">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus & Facilities Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-[#8B0000]/10 text-[#8B0000] mb-4">Our Campus</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Campus & Facilities</h2>
                <p className="text-gray-700 mb-6">
                  Our state-of-the-art campus provides an inspiring environment for learning and collaboration. From
                  modern classrooms to specialized labs, our facilities are designed to enhance the educational
                  experience.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#8B0000] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">Modern Learning Spaces</h3>
                      <p className="text-gray-700">
                        Flexible classrooms equipped with the latest technology to support diverse teaching methods.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#8B0000] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">Technology Labs</h3>
                      <p className="text-gray-700">
                        Specialized labs for web development, data science, design, and other technical disciplines.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#8B0000] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">Student Commons</h3>
                      <p className="text-gray-700">
                        Collaborative spaces where students can study, socialize, and work on group projects.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#8B0000] mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900">Resource Center</h3>
                      <p className="text-gray-700">
                        Comprehensive library and digital resources to support research and learning.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="bg-[#8B0000] hover:bg-[#6B0000] text-white">
                    Schedule a Campus Tour <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Modern classroom"
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Student commons"
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Technology lab"
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Resource center"
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation & Recognition Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-[#8B0000]/10 text-[#8B0000] mb-4">Our Standards</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Accreditation & Recognition</h2>
              <p className="text-gray-700">
                TutSchool is proud to be recognized by leading educational and industry organizations, ensuring our
                programs meet the highest standards of quality.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Accreditations</h3>
                  <ul className="space-y-3">
                    {accreditations.map((accreditation, index) => (
                      <li key={index} className="flex items-center">
                        <Star className="h-5 w-5 text-[#8B0000] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{accreditation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What This Means For You</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-[#8B0000] text-white flex items-center justify-center mr-3 flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="text-gray-700">
                          Your degree is recognized by employers and other educational institutions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-[#8B0000] text-white flex items-center justify-center mr-3 flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="text-gray-700">
                          You're eligible for financial aid and scholarship opportunities.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-[#8B0000] text-white flex items-center justify-center mr-3 flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="text-gray-700">
                          Your education meets established quality standards in curriculum, faculty, and resources.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-[#8B0000] text-white flex items-center justify-center mr-3 flex-shrink-0">
                        4
                      </div>
                      <div>
                        <p className="text-gray-700">
                          You benefit from our continuous improvement processes and industry alignment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#8B0000]/10 rounded-full"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#8B0000]/10 rounded-full"></div>
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/islhistoryandart-3-scaled.jpg-UIKSiunLSlb2pr4lKLnIqc6SUCfRqO.jpeg"
                      alt="Community impact"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="bg-[#8B0000]/10 text-[#8B0000] mb-4">Making A Difference</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Community Impact</h2>
                <p className="text-gray-700 mb-6">
                  At TutSchool, we believe in giving back to the communities we serve. Through various initiatives and
                  partnerships, we strive to make a positive impact and create opportunities for underrepresented groups
                  in education and technology.
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Scholarship Programs</h3>
                    <p className="text-gray-700">
                      We've awarded over $2 million in scholarships to deserving students from diverse backgrounds,
                      helping them access quality education regardless of financial circumstances.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Community Workshops</h3>
                    <p className="text-gray-700">
                      Our free workshops and training sessions have reached over 5,000 community members, providing
                      valuable skills and knowledge to help advance their careers.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability Initiatives</h3>
                    <p className="text-gray-700">
                      We're committed to reducing our environmental footprint through sustainable campus practices and
                      incorporating sustainability principles into our curriculum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-[#8B0000]">
          <div className="container px-4 mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="bg-white/20 text-white mb-4">Success Stories</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Community Says</h2>
              <p className="text-white/80">
                Hear from our students, alumni, and partners about their experiences with TutSchool.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    "TutSchool completely transformed my career trajectory. The practical skills I gained and the
                    connections I made through the program helped me land my dream job at a leading tech company."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Student portrait" width={48} height={48} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Alex Thompson</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    "As an employer, I've hired multiple TutSchool graduates and have been consistently impressed with
                    their skills, work ethic, and ability to adapt to our fast-paced environment. TutSchool graduates
                    come prepared with both technical knowledge and essential soft skills."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Employer portrait" width={48} height={48} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Samantha Lee</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">
                    "The support I received from faculty and staff at TutSchool was exceptional. They went above and
                    beyond to ensure I had the resources and guidance needed to succeed in my data science program."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Student portrait" width={48} height={48} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Marcus Johnson</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Join Our Community?</h2>
                  <p className="text-gray-700 mb-6">
                    Take the first step toward your future by exploring our programs or scheduling a campus visit. Our
                    admissions team is ready to answer your questions and guide you through the application process.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-[#8B0000] hover:bg-[#6B0000] text-white">Explore Programs</Button>
                    <Button variant="outline">Schedule a Visit</Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                      <Calendar className="h-8 w-8 text-[#8B0000] mr-3" />
                      <div>
                        <h3 className="font-bold text-gray-900">Upcoming Events</h3>
                        <p className="text-sm text-gray-600">Join us for open houses and info sessions</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                      <Building className="h-8 w-8 text-[#8B0000] mr-3" />
                      <div>
                        <h3 className="font-bold text-gray-900">Campus Tours</h3>
                        <p className="text-sm text-gray-600">Experience our facilities firsthand</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                      <GraduationCap className="h-8 w-8 text-[#8B0000] mr-3" />
                      <div>
                        <h3 className="font-bold text-gray-900">Admissions</h3>
                        <p className="text-sm text-gray-600">Learn about our application process</p>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                      <Users className="h-8 w-8 text-[#8B0000] mr-3" />
                      <div>
                        <h3 className="font-bold text-gray-900">Student Life</h3>
                        <p className="text-sm text-gray-600">Discover the TutSchool experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

