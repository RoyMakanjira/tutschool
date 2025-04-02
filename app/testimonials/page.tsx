"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  Star,
  ChevronRight,
  User,
  Search,
  Menu,
  X,
  Quote,
  MessageSquare,
  ThumbsUp,
  ArrowRight,
  Share2,
} from "lucide-react"

export default function Testimonials() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<"all" | "children" | "adults" | "companies">("all")
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set loaded state after a small delay to trigger initial animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Handle scroll events for scroll-triggered animations
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
        home: "ГЛАВНАЯ",
        about: "О НАС",
        programs: "ПРОГРАММЫ",
        schedule: "РАСПИСАНИЕ",
        admissions: "ПОСТУПЛЕНИЕ",
        testimonials: "ОТЗЫВЫ",
        blog: "БЛОГ",
        contacts: "КОНТАКТЫ",
      },
      hero: {
        title: "ОТЗЫВЫ НАШИХ УЧЕНИКОВ",
        subtitle: "Узнайте, что говорят о нас наши студенты и их родители",
      },
      breadcrumbs: {
        home: "Главная",
        testimonials: "Отзывы",
      },
      categories: {
        all: "Все отзывы",
        children: "Детские курсы",
        adults: "Взрослые курсы",
        companies: "Корпоративное обучение",
      },
      testimonials: {
        title: "ЧТО ГОВОРЯТ О НАС",
        description:
          "Мы гордимся тем, что наши студенты и их родители высоко оценивают качество нашего обучения. Вот некоторые из их отзывов.",
        items: [
          {
            name: "Анна К.",
            role: "Мама Максима, 8 лет",
            course: "Английский для детей",
            text: "Мой ребенок с удовольствием ходит на занятия английским. За полгода виден значительный прогресс, особенно в разговорной речи. Преподаватели находят индивидуальный подход к каждому ребенку, а игровая форма обучения делает процесс увлекательным и эффективным.",
            rating: 5,
            category: "children",
            date: "15 мая 2024",
          },
          {
            name: "Дмитрий С.",
            role: "Студент",
            course: "Китайский язык для начинающих",
            text: "Отличная школа с профессиональными преподавателями. Занимаюсь китайским уже год, и результаты превзошли мои ожидания. Особенно ценно, что преподаватель — носитель языка, который не только учит языку, но и знакомит с культурой Китая.",
            rating: 5,
            category: "adults",
            date: "10 мая 2024",
          },
          {
            name: "Елена В.",
            role: "Мама Артема (6 лет) и Анны (10 лет)",
            course: "Английский для детей",
            text: "Оба ребенка посещают курсы английского языка. Удобно, что в школе есть группы для разных возрастов и уровней подготовки. Дети с радостью идут на занятия, а дома часто используют выученные фразы. Очень нравится дружелюбная атмосфера и индивидуальный подход.",
            rating: 5,
            category: "children",
            date: "5 мая 2024",
          },
          {
            name: "Алексей П.",
            role: "Руководитель отдела продаж",
            course: "Корпоративный английский",
            text: "Наша компания заказала корпоративное обучение английскому языку для сотрудников отдела продаж. Преподаватели Tut School разработали программу, учитывающую специфику нашего бизнеса. Занятия проходят интересно и продуктивно, сотрудники отмечают прогресс в общении с иностранными клиентами.",
            rating: 5,
            category: "companies",
            date: "1 мая 2024",
          },
          {
            name: "Ольга М.",
            role: "Студентка",
            course: "Деловой английский",
            text: "Прохожу курс делового английского уже 3 месяца. Очень довольна результатами — значительно улучшились навыки деловой переписки и телефонных переговоров. Преподаватель использует актуальные материалы и реальные бизнес-кейсы, что делает обучение максимально практичным.",
            rating: 4,
            category: "adults",
            date: "25 апреля 2024",
          },
          {
            name: "Сергей К.",
            role: "Папа Софии, 7 лет",
            course: "Китайский для детей",
            text: "Дочь занимается китайским языком около полугода. Сначала переживали, что будет сложно, но преподаватель смог заинтересовать ребенка. София с удовольствием учит иероглифы и даже пытается говорить простые фразы на китайском. Очень рады, что выбрали именно эту школу.",
            rating: 5,
            category: "children",
            date: "20 апреля 2024",
          },
          {
            name: "Марина Д.",
            role: "HR-директор",
            course: "Корпоративный китайский",
            text: "Заказывали корпоративное обучение китайскому языку для топ-менеджмента компании. Преподаватели Tut School разработали интенсивную программу, которая позволила нашим руководителям освоить базовые навыки общения за короткий срок перед важной командировкой в Китай.",
            rating: 5,
            category: "companies",
            date: "15 апреля 2024",
          },
          {
            name: "Иван Н.",
            role: "Студент",
            course: "Английский для взрослых",
            text: "Решил подтянуть английский для работы и путешествий. За 4 месяца занятий в Tut School мой уровень значительно вырос. Особенно улучшились разговорные навыки и восприятие речи на слух. Преподаватель умеет объяснить сложные грамматические темы простым и понятным языком.",
            rating: 5,
            category: "adults",
            date: "10 апреля 2024",
          },
          {
            name: "Наталья Р.",
            role: "Мама Даниила, 9 лет",
            course: "Театральная студия на английском",
            text: "Сын посещает театральную студию на английском языке. Это отличное сочетание языкового обучения и творческого развития. Даниил не только улучшил свой английский, но и стал более уверенным в себе. Выступление на школьном спектакле стало настоящим достижением для него.",
            rating: 5,
            category: "children",
            date: "5 апреля 2024",
          },
          {
            name: "Андрей В.",
            role: "Генеральный директор",
            course: "Корпоративный английский",
            text: "Наша компания сотрудничает с Tut School уже второй год. Преподаватели регулярно проводят занятия для сотрудников разных отделов. Отмечаем профессиональный подход, гибкость в составлении расписания и, конечно, результаты — наши сотрудники стали увереннее общаться с иностранными партнерами.",
            rating: 5,
            category: "companies",
            date: "1 апреля 2024",
          },
        ],
      },
      stats: {
        title: "НАШИ ПОКАЗАТЕЛИ",
        items: [
          {
            number: "98%",
            label: "Довольных студентов",
          },
          {
            number: "4.8",
            label: "Средний рейтинг",
          },
          {
            number: "2000+",
            label: "Отзывов",
          },
          {
            number: "95%",
            label: "Рекомендуют нас",
          },
        ],
      },
      leaveReview: {
        title: "ОСТАВЬТЕ СВОЙ ОТЗЫВ",
        description:
          "Мы ценим мнение каждого студента и постоянно работаем над улучшением качества обучения. Поделитесь своими впечатлениями о занятиях в Tut School.",
        button: "Написать отзыв",
      },
      videoTestimonials: {
        title: "ВИДЕООТЗЫВЫ",
        description: "Посмотрите видеоотзывы наших студентов и их родителей о обучении в Tut School.",
        videos: [
          {
            title: "Отзыв о курсе английского для детей",
            thumbnail: "/placeholder.svg?height=200&width=350&text=Video 1",
          },
          {
            title: "Отзыв о курсе китайского языка",
            thumbnail: "/placeholder.svg?height=200&width=350&text=Video 2",
          },
          {
            title: "Отзыв о театральной студии",
            thumbnail: "/placeholder.svg?height=200&width=350&text=Video 3",
          },
        ],
      },
      cta: {
        title: "ПРИСОЕДИНЯЙТЕСЬ К НАШИМ ДОВОЛЬНЫМ СТУДЕНТАМ",
        description: "Запишитесь на пробное занятие и убедитесь в качестве нашего обучения",
        button: "Записаться на пробный урок",
      },
      footer: {
        quickLinks: "Быстрые ссылки",
        links: ["О школе", "Наши курсы", "Расписание", "Преподаватели", "Цены", "Блог", "Контакты"],
        contacts: "Контакты",
        workingHours: {
          title: "Режим работы",
          weekdays: "Понедельник - Пятница: 9:00 - 21:00",
          saturday: "Суббота: 10:00 - 18:00",
          sunday: "Воскресенье: выходной",
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
        home: "HOME",
        about: "ABOUT US",
        programs: "PROGRAMS",
        schedule: "SCHEDULE",
        admissions: "ADMISSIONS",
        testimonials: "TESTIMONIALS",
        blog: "BLOG",
        contacts: "CONTACTS",
      },
      hero: {
        title: "TESTIMONIALS FROM OUR STUDENTS",
        subtitle: "Find out what our students and their parents say about us",
      },
      breadcrumbs: {
        home: "Home",
        testimonials: "Testimonials",
      },
      categories: {
        all: "All Testimonials",
        children: "Children's Courses",
        adults: "Adult Courses",
        companies: "Corporate Training",
      },
      testimonials: {
        title: "WHAT PEOPLE SAY ABOUT US",
        description:
          "We are proud that our students and their parents highly appreciate the quality of our teaching. Here are some of their testimonials.",
        items: [
          {
            name: "Anna K.",
            role: "Mother of Maxim, 8 years old",
            course: "English for Children",
            text: "My child enjoys attending English classes. There has been significant progress over six months, especially in speaking skills. The teachers find an individual approach to each child, and the game-based learning makes the process engaging and effective.",
            rating: 5,
            category: "children",
            date: "May 15, 2024",
          },
          {
            name: "Dmitry S.",
            role: "Student",
            course: "Chinese for Beginners",
            text: "Excellent school with professional teachers. I've been studying Chinese for a year, and the results have exceeded my expectations. It's especially valuable that the teacher is a native speaker who not only teaches the language but also introduces Chinese culture.",
            rating: 5,
            category: "adults",
            date: "May 10, 2024",
          },
          {
            name: "Elena V.",
            role: "Mother of Artem (6 years old) and Anna (10 years old)",
            course: "English for Children",
            text: "Both children attend English language courses. It's convenient that the school has groups for different ages and levels of preparation. The children are happy to go to classes, and at home they often use the phrases they've learned. I really like the friendly atmosphere and individual approach.",
            rating: 5,
            category: "children",
            date: "May 5, 2024",
          },
          {
            name: "Alexey P.",
            role: "Sales Department Manager",
            course: "Corporate English",
            text: "Our company ordered corporate English language training for sales department employees. Tut School teachers developed a program that takes into account the specifics of our business. Classes are interesting and productive, employees note progress in communicating with foreign clients.",
            rating: 5,
            category: "companies",
            date: "May 1, 2024",
          },
          {
            name: "Olga M.",
            role: "Student",
            course: "Business English",
            text: "I've been taking a business English course for 3 months. I'm very satisfied with the results — my business correspondence and telephone negotiation skills have significantly improved. The teacher uses relevant materials and real business cases, which makes the training as practical as possible.",
            rating: 4,
            category: "adults",
            date: "April 25, 2024",
          },
          {
            name: "Sergey K.",
            role: "Father of Sofia, 7 years old",
            course: "Chinese for Children",
            text: "My daughter has been studying Chinese for about six months. At first, we were worried that it would be difficult, but the teacher was able to interest the child. Sofia enjoys learning characters and even tries to say simple phrases in Chinese. We are very glad that we chose this school.",
            rating: 5,
            category: "children",
            date: "April 20, 2024",
          },
          {
            name: "Marina D.",
            role: "HR Director",
            course: "Corporate Chinese",
            text: "We ordered corporate Chinese language training for the company's top management. Tut School teachers developed an intensive program that allowed our managers to master basic communication skills in a short time before an important business trip to China.",
            rating: 5,
            category: "companies",
            date: "April 15, 2024",
          },
          {
            name: "Ivan N.",
            role: "Student",
            course: "English for Adults",
            text: "I decided to improve my English for work and travel. After 4 months of classes at Tut School, my level has significantly increased. Especially improved are conversational skills and listening comprehension. The teacher knows how to explain complex grammar topics in a simple and understandable language.",
            rating: 5,
            category: "adults",
            date: "April 10, 2024",
          },
          {
            name: "Natalia R.",
            role: "Mother of Daniel, 9 years old",
            course: "English Drama Studio",
            text: "My son attends the English-language drama studio. It's an excellent combination of language learning and creative development. Daniel not only improved his English but also became more confident. Performing in the school play was a real achievement for him.",
            rating: 5,
            category: "children",
            date: "April 5, 2024",
          },
          {
            name: "Andrey V.",
            role: "CEO",
            course: "Corporate English",
            text: "Our company has been cooperating with Tut School for the second year. Teachers regularly conduct classes for employees of different departments. We note the professional approach, flexibility in scheduling, and, of course, results — our employees have become more confident in communicating with foreign partners.",
            rating: 5,
            category: "companies",
            date: "April 1, 2024",
          },
        ],
      },
      stats: {
        title: "OUR METRICS",
        items: [
          {
            number: "98%",
            label: "Satisfied Students",
          },
          {
            number: "4.8",
            label: "Average Rating",
          },
          {
            number: "2000+",
            label: "Reviews",
          },
          {
            number: "95%",
            label: "Recommend Us",
          },
        ],
      },
      leaveReview: {
        title: "LEAVE YOUR REVIEW",
        description:
          "We value the opinion of every student and constantly work to improve the quality of education. Share your impressions of classes at Tut School.",
        button: "Write a Review",
      },
      videoTestimonials: {
        title: "VIDEO TESTIMONIALS",
        description: "Watch video testimonials from our students and their parents about studying at Tut School.",
        videos: [
          {
            title: "Review of the English for Children course",
            thumbnail: "/placeholder.svg?height=200&width=350&text=Video 1",
          },
          {
            title: "Review of the Chinese language course",
            thumbnail: "/placeholder.svg?height=200&width=350&text=Video 2",
          },
          {
            title: "Review of the Drama Studio",
            thumbnail: "/placeholder.svg?height=200&width=350&text=Video 3",
          },
        ],
      },
      cta: {
        title: "JOIN OUR SATISFIED STUDENTS",
        description: "Sign up for a trial lesson and see the quality of our teaching for yourself",
        button: "Book a Trial Lesson",
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

  // Function to check if element should be animated based on scroll position
  const shouldAnimate = (elementId: string): boolean => {
    const element = document.getElementById(elementId)
    if (!element) return false

    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight

    // Element is considered in view when its top is below 20% of the window height
    // and its bottom is above 80% of the window height
    return rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2
  }

  // Filter testimonials based on active category
  const filteredTestimonials = t.testimonials.items.filter(
    (item) => activeCategory === "all" || item.category === activeCategory,
  )

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div
        className={`bg-primary/90 py-2 text-white transition-all duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
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
              className="flex items-center gap-1 rounded-md border border-white/30 px-2 py-1 text-sm hover:bg-white/10 transition-colors duration-300"
            >
              <Globe className="h-4 w-4" />
              {t.languageToggle}
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`border-b bg-white py-4 shadow-sm sticky top-0 z-50 transition-all duration-500 ${isLoaded ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 animate-pulse-slow">
              <Image
                src="/logo.png"
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
                <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm font-medium text-gray-700 hover:text-primary">
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
                  <Link href="/" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
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
        

        {/* Stats Section */}
        <section className="py-12 bg-gray-50" id="stats-section">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.stats.items.map((stat, index) => (
                <div
                  key={index}
                  className={`rounded-lg bg-white p-6 text-center shadow-md transition-all duration-1000 hover:shadow-lg ${
                    shouldAnimate("stats-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="mb-2 text-4xl font-bold text-primary animate-pulse-slow">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12" id="testimonials-section">
          <div className="container mx-auto px-4">
            <h2
              className={`mb-2 text-center text-3xl font-bold text-primary transition-all duration-1000 ${
                shouldAnimate("testimonials-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {t.testimonials.title}
            </h2>
            <div
              className={`mx-auto mb-8 h-1 w-20 bg-primary transition-all duration-1000 delay-300 ${
                shouldAnimate("testimonials-section") ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            ></div>
            <p
              className={`mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700 transition-all duration-1000 delay-500 ${
                shouldAnimate("testimonials-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {t.testimonials.description}
            </p>

            {/* Category Filters */}
            <div
              className={`mb-8 flex flex-wrap justify-center gap-3 transition-all duration-1000 delay-700 ${
                shouldAnimate("testimonials-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <button
                onClick={() => setActiveCategory("all")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === "all" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t.categories.all}
              </button>
              <button
                onClick={() => setActiveCategory("children")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === "children"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t.categories.children}
              </button>
              <button
                onClick={() => setActiveCategory("adults")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === "adults" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t.categories.adults}
              </button>
              <button
                onClick={() => setActiveCategory("companies")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === "companies"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t.categories.companies}
              </button>
            </div>

            {/* Testimonials Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`rounded-lg bg-white p-6 shadow-md transition-all duration-1000 hover:shadow-xl hover:translate-y-[-5px] ${
                    shouldAnimate("testimonials-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${(index % 6) * 200 + 900}ms` }}
                >
                  <div className="mb-4 flex justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-xs text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="inline-block h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="mb-3 text-sm font-medium text-primary">{testimonial.course}</div>
                  <div className="relative mb-4">
                    <Quote className="absolute -left-1 -top-1 h-6 w-6 text-primary/20" />
                    <p className="pl-5 text-gray-600 italic">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{testimonial.date}</span>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <ThumbsUp className="h-3 w-3" />
                        <span>Полезно</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <Share2 className="h-3 w-3" />
                        <span>Поделиться</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leave Review Section */}
        <section className="bg-gray-50 py-16" id="leave-review-section">
          <div className="container mx-auto px-4">
            <div
              className={`mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg transition-all duration-1000 ${
                shouldAnimate("leave-review-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="mb-4 text-center text-2xl font-bold text-primary">{t.leaveReview.title}</h2>
              <p className="mb-6 text-center text-gray-600">{t.leaveReview.description}</p>
              <div className="flex justify-center">
                <button className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary/90 hover:gap-3 hover:shadow-lg">
                  <MessageSquare className="h-5 w-5" />
                  {t.leaveReview.button}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="py-16" id="video-section">
          <div className="container mx-auto px-4">
            <h2
              className={`mb-2 text-center text-3xl font-bold text-primary transition-all duration-1000 ${
                shouldAnimate("video-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {t.videoTestimonials.title}
            </h2>
            <div
              className={`mx-auto mb-8 h-1 w-20 bg-primary transition-all duration-1000 delay-300 ${
                shouldAnimate("video-section") ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            ></div>
            <p
              className={`mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700 transition-all duration-1000 delay-500 ${
                shouldAnimate("video-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {t.videoTestimonials.description}
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {t.videoTestimonials.videos.map((video, index) => (
                <div
                  key={index}
                  className={`group overflow-hidden rounded-lg shadow-md transition-all duration-1000 hover:shadow-lg ${
                    shouldAnimate("video-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200 + 700}ms` }}
                >
                  <div className="relative">
                    <div className="relative h-48 w-full">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/80 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1"
                          >
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{video.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16" id="cta-section">
          <div className="container mx-auto px-4">
            <div
              className={`overflow-hidden rounded-xl bg-primary shadow-xl transition-all duration-1000 hover:scale-[1.01] ${
                shouldAnimate("cta-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0">
                  <Image
                    src="/placeholder.svg?height=400&width=1200"
                    alt="Background"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <div className="relative px-8 py-16 text-center text-white md:px-12 lg:px-16">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl animate-fade-in">{t.cta.title}</h2>
                  <p className="mx-auto mb-8 max-w-2xl text-lg animate-fade-in animation-delay-300">
                    {t.cta.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-primary transition-all duration-300 hover:bg-gray-100 hover:gap-3 hover:shadow-lg animate-fade-in animation-delay-600"
                  >
                    {t.cta.button}
                    <ArrowRight className="h-4 w-4 animate-bounce-horizontal" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

