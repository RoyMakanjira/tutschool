"use client"

import { useState } from "react"
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
  Calendar,
  User,
  Search,
  Menu,
  X,
  Tag,
  Clock,
  ChevronDown,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react"

export default function Blog() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

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
        admissions: "ПОСТУПЛЕНИЕ",
        blog: "БЛОГ",
        contacts: "КОНТАКТЫ",
      },
      hero: {
        title: "НАШ БЛОГ",
        subtitle: "Полезные статьи, новости и советы по изучению языков и творческому развитию",
      },
      breadcrumbs: {
        home: "Главная",
        blog: "Блог",
      },
      categories: {
        all: "Все статьи",
        languages: "Изучение языков",
        teaching: "Методика преподавания",
        events: "События школы",
        arts: "Искусство и творчество",
        tips: "Советы родителям",
      },
      featured: {
        title: "ИЗБРАННЫЕ СТАТЬИ",
      },
      latest: {
        title: "ПОСЛЕДНИЕ ПУБЛИКАЦИИ",
        viewAll: "Смотреть все",
      },
      searchPlaceholder: "Поиск по блогу...",
      searchButton: "Искать",
      readMore: "Читать далее",
      minutesToRead: "мин. чтения",
      loadMore: "Загрузить еще",
      subscribe: {
        title: "ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ",
        description: "Получайте новые статьи, полезные материалы и новости школы на свою электронную почту",
        placeholder: "Ваш email",
        button: "Подписаться",
        privacy: "Мы уважаем вашу конфиденциальность и никогда не передаем ваши данные третьим лицам",
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
        admissions: "ADMISSIONS",
        blog: "BLOG",
        contacts: "CONTACTS",
      },
      hero: {
        title: "OUR BLOG",
        subtitle: "Useful articles, news, and tips on language learning and creative development",
      },
      breadcrumbs: {
        home: "Home",
        blog: "Blog",
      },
      categories: {
        all: "All Articles",
        languages: "Language Learning",
        teaching: "Teaching Methods",
        events: "School Events",
        arts: "Arts & Creativity",
        tips: "Tips for Parents",
      },
      featured: {
        title: "FEATURED ARTICLES",
      },
      latest: {
        title: "LATEST PUBLICATIONS",
        viewAll: "View all",
      },
      searchPlaceholder: "Search the blog...",
      searchButton: "Search",
      readMore: "Read more",
      minutesToRead: "min read",
      loadMore: "Load more",
      subscribe: {
        title: "SUBSCRIBE TO OUR NEWSLETTER",
        description: "Receive new articles, useful materials, and school news directly to your email",
        placeholder: "Your email",
        button: "Subscribe",
        privacy: "We respect your privacy and never share your data with third parties",
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

  const blogPosts = {
    ru: [
      {
        id: 1,
        title: "Как эффективно изучать иностранный язык: 7 проверенных методов",
        excerpt:
          "Изучение иностранного языка может быть сложной задачей, но с правильным подходом процесс становится более эффективным и увлекательным. В этой статье мы рассмотрим семь проверенных методов, которые помогут вам быстрее освоить новый язык.",
        category: "languages",
        date: "15 мая 2024",
        author: "Анна Петрова",
        readTime: 8,
        featured: true,
        image: "/placeholder.svg?height=600&width=1200&text=Language Learning",
        tags: ["изучение языков", "методика", "советы"],
        comments: 12,
      },
      {
        id: 2,
        title: "Летний интенсив по английскому языку для школьников",
        excerpt:
          "Приглашаем школьников на летний интенсивный курс английского языка. Программа разработана специально для учеников 5-9 классов и направлена на развитие разговорных навыков, расширение словарного запаса и преодоление языкового барьера.",
        category: "events",
        date: "10 мая 2024",
        author: "Михаил Соколов",
        readTime: 5,
        featured: true,
        image: "/placeholder.svg?height=600&width=1200&text=Summer Intensive",
        tags: ["курсы", "английский язык", "летний интенсив"],
        comments: 8,
      },
      {
        id: 3,
        title: "Китайская каллиграфия: искусство, философия, медитация",
        excerpt:
          "Китайская каллиграфия — это не просто искусство красивого письма, но и глубокая философская практика, способствующая концентрации и медитации. В этой статье мы рассказываем об истории каллиграфии, основных стилях и ее влиянии на культуру Китая.",
        category: "arts",
        date: "5 мая 2024",
        author: "Ли Мин",
        readTime: 10,
        featured: false,
        image: "/placeholder.svg?height=600&width=1200&text=Chinese Calligraphy",
        tags: ["каллиграфия", "китайская культура", "искусство"],
        comments: 15,
      },
      {
        id: 4,
        title: "Как помочь ребенку преодолеть языковой барьер",
        excerpt:
          "Языковой барьер — распространенная проблема при изучении иностранных языков. В этой статье мы делимся практическими советами для родителей, как помочь ребенку преодолеть страх говорения и развить уверенность в использовании иностранного языка.",
        category: "tips",
        date: "1 мая 2024",
        author: "Елена Иванова",
        readTime: 7,
        featured: false,
        image: "/placeholder.svg?height=600&width=1200&text=Language Barrier",
        tags: ["советы родителям", "языковой барьер", "детская психология"],
        comments: 20,
      },
      {
        id: 5,
        title: "Игровые методики в обучении дошкольников английскому языку",
        excerpt:
          "Игра — естественная среда обучения для детей дошкольного возраста. В этой статье мы рассматриваем эффективные игровые методики, которые помогают дошкольникам легко и с удовольствием осваивать английский язык.",
        category: "teaching",
        date: "25 апреля 2024",
        author: "Ольга Смирнова",
        readTime: 6,
        featured: false,
        image: "/placeholder.svg?height=600&width=1200&text=Game Methods",
        tags: ["дошкольники", "игровые методики", "английский язык"],
        comments: 9,
      },
      {
        id: 6,
        title: "Отчет о весеннем концерте театральной студии",
        excerpt:
          "В конце апреля состоялся весенний концерт нашей театральной студии на английском языке. Ученики представили постановку по мотивам произведений Шекспира, продемонстрировав не только актерское мастерство, но и отличное владение английским языком.",
        category: "events",
        date: "20 апреля 2024",
        author: "Дмитрий Волков",
        readTime: 4,
        featured: false,
        image: "/placeholder.svg?height=600&width=1200&text=Theater Performance",
        tags: ["театральная студия", "концерт", "английский язык"],
        comments: 14,
      },
      {
        id: 7,
        title: "Как выбрать языковой курс для ребенка: на что обратить внимание",
        excerpt:
          "Выбор языкового курса для ребенка — ответственная задача для родителей. В этой статье мы рассказываем, на какие критерии стоит обратить внимание при выборе курса, чтобы обучение было эффективным и приносило удовольствие.",
        category: "tips",
        date: "15 апреля 2024",
        author: "Мария Козлова",
        readTime: 9,
        featured: false,
        image: "/placeholder.svg?height=600&width=1200&text=Choosing a Course",
        tags: ["выбор курса", "советы родителям", "языковое обучение"],
        comments: 18,
      },
      {
        id: 8,
        title: "Мастер-класс по оригами: развиваем мелкую моторику и творческое мышление",
        excerpt:
          "Оригами — японское искусство складывания бумаги, которое не только увлекательно, но и полезно для развития детей. В этой статье мы рассказываем о пользе оригами и делимся инструкциями по созданию простых фигурок.",
        category: "arts",
        date: "10 апреля 2024",
        author: "Наталья Петрова",
        readTime: 7,
        featured: false,
        image: "/placeholder.svg?height=600&width=1200&text=Origami Workshop",
        tags: ["оригами", "мастер-класс", "творчество"],
        comments: 11,
      },
    ],
    en: [
      {
        id: 1,
        title: "How to Effectively Learn a Foreign Language: 7 Proven Methods",
        excerpt:
          "Learning a foreign language can be a challenging task, but with the right approach, the process becomes more effective and engaging. In this article, we'll look at seven proven methods that will help you master a new language faster.",
        category: "languages",
        date: "May 15, 2024",
        author: "Anna Petrova",
        readTime: 8,
        featured: true,
        image: "/placeholder.svg?height=600&width=1200&text=Language Learning",
        tags: ["language learning", "methodology", "tips"],
        comments: 12,
      },
      {
        id: 2,
        title: "Summer Intensive English Course for School Students",
        excerpt:
          "We invite school students to a summer intensive English course. The program is specifically designed for students in grades 5-9 and aims to develop conversational skills, expand vocabulary, and overcome the language barrier.",
        category: "events",
        date: "May 10, 2024",
        author: "Mikhail Sokolov",
        readTime: 5,
        featured: true,
        image: "/placeholder.svg?height=600&width=1200&text=Summer Intensive",
        tags: ["courses", "English language", "summer intensive"],
        comments: 8,
      },
      {
        id: 3,
        title: "Chinese Calligraphy: Art, Philosophy, Meditation",
        excerpt:
          "Chinese calligraphy is not just the art of beautiful writing, but also a deep philosophical practice that promotes concentration and meditation. In this article, we talk about the history of calligraphy, its main styles, and its influence on Chinese culture.",
        category: "arts",
        date: "May 5, 2024",
        author: "Li Min",
        readTime: 10,
        featured: false,
        image: "/placeholder.svg?height=600&width=1200&text=Chinese Calligraphy",
        tags: ["calligraphy", "Chinese culture", "art"],
        comments: 15,
      },
      {
        id: 4,
        title: "How to Help Your Child Overcome the Language Barrier",
        excerpt:
          "The language barrier is a common problem when learning foreign languages. In this article, we share practical advice for parents on how to help their child overcome the fear of speaking and develop confidence in using a foreign language.",
        category: "tips",
        date: "May 1, 2024",
        author: "Elena Ivanova",
        readTime: 7,
        featured: false,
        image: "/placeholder.svg?height=600&width=1200&text=Language Barrier",
        tags: ["tips for parents", "language barrier", "child psychology"],
        comments: 20,
      },
      {
        id: 5,
        title: "Game-Based Methods in Teaching English to Preschoolers",
        excerpt:
          "Play is a natural learning environment for preschool children. In this article, we look at effective game-based methods that help preschoolers learn English easily and with pleasure.",
        category: "teaching",
        date: "April 25, 2024",
        author: "Olga Smirnova",
        readTime: 6,
        featured: false,
        image: "/placeholder.svg?height=600&width=1200&text=Game Methods",
        tags: ["preschoolers", "game methods", "English language"],
        comments: 9,
      },
      {
        id: 6,
        title: "Report on the Spring Concert of the Drama Studio",
        excerpt:
          "At the end of April, our English-language drama studio held its spring concert. The students presented a performance based on Shakespeare's works, demonstrating not only acting skills but also excellent English language proficiency.",
        category: "events",
        date: "April 20, 2024",
        author: "Dmitry Volkov",
        readTime: 4,
        featured: false,
        image: "/placeholder.svg?height=600&width=1200&text=Theater Performance",
        tags: ["drama studio", "concert", "English language"],
        comments: 14,
      },
      {
        id: 7,
        title: "How to Choose a Language Course for Your Child: What to Look For",
        excerpt:
          "Choosing a language course for a child is a responsible task for parents. In this article, we discuss what criteria you should pay attention to when choosing a course to ensure that learning is effective and enjoyable.",
        category: "tips",
        date: "April 15, 2024",
        author: "Maria Kozlova",
        readTime: 9,
        featured: false,
        image: "/placeholder.svg?height=600&width=1200&text=Choosing a Course",
        tags: ["course selection", "tips for parents", "language learning"],
        comments: 18,
      },
      {
        id: 8,
        title: "Origami Workshop: Developing Fine Motor Skills and Creative Thinking",
        excerpt:
          "Origami is the Japanese art of paper folding, which is not only fascinating but also beneficial for children's development. In this article, we discuss the benefits of origami and share instructions for creating simple figures.",
        category: "arts",
        date: "April 10, 2024",
        author: "Natalia Petrova",
        readTime: 7,
        featured: false,
        image: "/placeholder.svg?height=600&width=1200&text=Origami Workshop",
        tags: ["origami", "workshop", "creativity"],
        comments: 11,
      },
    ],
  }

  const t = translations[language]
  const posts = blogPosts[language]

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const featuredPosts = posts.filter((post) => post.featured)

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch && !post.featured
  })

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
                <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary">
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
                <Link href="/blog" className="text-sm font-medium text-primary hover:text-primary/80">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary">
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
                  <Link href="#" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
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
                  <Link href="/blog" className="block py-2 text-sm font-medium text-primary hover:text-primary/80">
                    {t.nav.blog}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
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
        <section className="relative">
          <div className="relative h-[300px] w-full">
            <Image
              src="/placeholder.svg?height=300&width=1600"
              alt={language === "ru" ? "Блог Tut School" : "Tut School Blog"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center px-4 text-white md:px-12 lg:px-20">
              <div className="max-w-2xl">
                <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">{t.hero.title}</h2>
                <p className="text-lg md:text-xl">{t.hero.subtitle}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="border-b bg-gray-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-primary hover:underline">
                {t.breadcrumbs.home}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-700">{t.breadcrumbs.blog}</span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Posts */}
              {featuredPosts.length > 0 && (
                <section className="mb-12">
                  <h2 className="mb-6 text-2xl font-bold text-primary">{t.featured.title}</h2>
                  <div className="grid gap-8 md:grid-cols-2">
                    {featuredPosts.map((post) => (
                      <div
                        key={post.id}
                        className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg"
                      >
                        <div className="relative h-48">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                        </div>
                        <div className="p-6">
                          <div className="mb-2 flex items-center gap-2">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                              {t.categories[post.category as keyof typeof t.categories]}
                            </span>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Clock className="h-3 w-3" />
                              <span>
                                {post.readTime} {t.minutesToRead}
                              </span>
                            </div>
                          </div>
                          <h3 className="mb-3 text-xl font-bold">{post.title}</h3>
                          <p className="mb-4 text-gray-600 line-clamp-3">{post.excerpt}</p>
                          <div className="mb-4 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <User className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-medium">{post.author}</span>
                            <span className="text-gray-400">•</span>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Calendar className="h-4 w-4" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            {t.readMore}
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Category Filters */}
              <div className="mb-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === "all" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {t.categories.all}
                </button>
                {Object.keys(t.categories)
                  .filter((key) => key !== "all")
                  .map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        activeCategory === category
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {t.categories[category as keyof typeof t.categories]}
                    </button>
                  ))}
              </div>

              {/* Search Bar */}
              <div className="mb-8">
                <div className="flex overflow-hidden rounded-lg border border-gray-200">
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full border-none px-4 py-3 outline-none"
                  />
                  <button className="bg-primary px-4 text-white hover:bg-primary/90">{t.searchButton}</button>
                </div>
              </div>

              {/* Blog Posts */}
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
                  >
                    <div className="grid md:grid-cols-3">
                      <div className="relative h-48 md:h-auto">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div className="p-6 md:col-span-2">
                        <div className="mb-2 flex items-center gap-2">
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            {t.categories[post.category as keyof typeof t.categories]}
                          </span>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="h-3 w-3" />
                            <span>
                              {post.readTime} {t.minutesToRead}
                            </span>
                          </div>
                        </div>
                        <h3 className="mb-3 text-xl font-bold">{post.title}</h3>
                        <p className="mb-4 text-gray-600">{post.excerpt}</p>
                        <div className="mb-4 flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <User className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-medium">{post.author}</span>
                          <span className="text-gray-400">•</span>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Link
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center gap-1 text-primary hover:underline"
                          >
                            {t.readMore}
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                          <div className="flex items-center gap-3 text-gray-500">
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              <span className="text-sm">{post.comments}</span>
                            </div>
                            <button className="rounded-full p-1 hover:bg-gray-100">
                              <Share2 className="h-4 w-4" />
                            </button>
                            <button className="rounded-full p-1 hover:bg-gray-100">
                              <Bookmark className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              {filteredPosts.length > 0 && (
                <div className="mt-8 text-center">
                  <button className="inline-flex items-center gap-2 rounded-full border border-primary bg-white px-6 py-2 font-medium text-primary transition-colors hover:bg-primary/5">
                    {t.loadMore}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
                  <p className="text-lg text-gray-600">
                    {language === "ru" ? "По вашему запросу ничего не найдено." : "No results found for your query."}
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Newsletter Subscription */}
              <div className="mb-8 rounded-lg bg-primary p-6 text-white">
                <h3 className="mb-4 text-xl font-bold">{t.subscribe.title}</h3>
                <p className="mb-4 text-sm">{t.subscribe.description}</p>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder={t.subscribe.placeholder}
                    className="w-full rounded-md border-0 bg-white/10 p-3 text-white placeholder:text-white/70 focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button className="w-full rounded-md bg-white py-2 font-medium text-primary hover:bg-white/90">
                  {t.subscribe.button}
                </button>
                <p className="mt-3 text-xs text-white/70">{t.subscribe.privacy}</p>
              </div>

              {/* Popular Tags */}
              <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-bold">{language === "ru" ? "Популярные теги" : "Popular Tags"}</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(posts.flatMap((post) => post.tags)))
                    .slice(0, 10)
                    .map((tag, index) => (
                      <button
                        key={index}
                        className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        <span className="flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      </button>
                    ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-bold">{language === "ru" ? "Недавние публикации" : "Recent Posts"}</h3>
                <div className="space-y-4">
                  {posts.slice(0, 5).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-medium line-clamp-2">
                          <Link href={`/blog/${post.id}`} className="hover:text-primary">
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

