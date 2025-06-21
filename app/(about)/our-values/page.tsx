"use client"

import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Globe,
  Menu,
  X,
  ChevronDown,
  Clock,
  Phone,
  Mail,
  Heart,
  Users,
  BookOpen,
  Lightbulb,
  Sparkles,
  Landmark,
  Info,
  MessageCircle,
  Award,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function ValuesPage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const dropdownRef = useRef<HTMLDivElement>(null)

  // Image data for each value section
  const valueImages = {
    community: [
      { src: "/assets/gallery/Community.jpg", alt: "Community 1" },
      { src: "/Community-2.jpg", alt: "Community 2" },
    ],
    quality: [
      { src: "/assets/gallery/Community-2.jpg", alt: "Quality 1" },
    ],
    geography: [
      { src: "/assets/gallery/Cultural-Studies-2.jpg", alt: "Cultural Studies 1" },
      { src: "/assets/gallery/Cultural-Studies-1.jpg", alt: "Cultural Studies 2" },
    ],
    result: [
      { src: "/assets/gallery/assesment.jpg", alt: "Assessment 1" },
      { src: "/assets/gallery/assesment-1.jpg", alt: "Assessment 2" },
    ],
    creative: [
      { src: "/assets/gallery/Arts-3.jpg", alt: "Arts 1" },
      { src: "/assets/gallery/Arts.jpg", alt: "Arts 2" },
      { src: "/assets/gallery/Arts-2.jpg", alt: "Arts 3" },
    ],
  }

  useEffect(() => {
    // Set loaded state after a small delay to trigger initial animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Handle scroll events for scroll-triggered animations
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const translations = {
    ru: {
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков",
      phone: "+7 (983) 600-00-00",
      email: "info@tutschool.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      rating: "4.8 на Яндексе",
      search: "Поиск",
      workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
      title: "НАШИ ЦЕННОСТИ",
      subtitle: "Принципы, которыми мы руководствуемся",
      nav: {
        about: "О ШКОЛЕ",
        aboutDropdown: [
          { title: "НАШИ ЦЕННОСТИ", href: "/our-values" },
          { title: "РАСПИСАНИЕ И ЦЕНЫ", href: "/schedule" },
          { title: "ПРЕПОДАВАТЕЛИ", href: "/teachers" },
        ],
        courses: "КУРСЫ АНГЛИЙСКОГО",
        coursesDropdown: [
          { title: "ДОШКОЛЬНИКИ", href: "/preschoolers" },
          { title: "ДЕТИ 7-9 ЛЕТ", href: "/aged-7-9" },
          { title: "ДЕТИ 10-12 ЛЕТ", href: "/aged-10-12" },
          { title: "ПОДРОСТКИ", href: "teenagers" },
          { title: "ВЗРОСЛЫЕ", href: "/adults" },
        ],
        chinese: "КУРСЫ КИТАЙСКОГО",
        chineseDropdown: [
          { title: "ДОШКОЛЬНИКИ", href: "/chinese/preschoolers" },
          { title: "ДЕТИ 7-9 ЛЕТ", href: "/chinese/aged-7-9" },
          { title: "ДЕТИ 10-12 ЛЕТ", href: "/chinese/aged-10-12" },
          { title: "ПОДРОСТКИ", href: "/chinese/teenagers" },
          { title: "ВЗРОСЛЫЕ", href: "/chinese/adults" },
        ],
        club: "РАЗГОВОРНЫЙ КЛУБ",
        clubDropdown: [
          { title: "ПОДРОСТКИ", href: "/conversation-club/teenagers" },
          { title: "ВЗРОСЛЫЕ", href: "/conversation-club/adults" },
        ],
        masterclass: "МАСТЕР-КЛАССЫ",
        masterclassDropdown: [
          { title: "КИТАЙСКАЯ КАЛЛИГРАФИЯ ", href: "/chinese-calligraphy" },
          { title: "ТВОРЧЕСКИЕ МАСТЕР-КЛАССЫ", href: "/creative-workshops" },
        ],
        news: "НОВОСТИ",
        contacts: "КОНТАКТЫ",
      },
      values: {
        community: {
          title: "Комьюнити",
          description:
            "Группы по изучению языков в нашей школе – это сообщество друзей. Основа изучения языков –коммуникация, и мы уделяем особое внимание развитию навыков общения. Мы развиваем не только умение коммуницировать в определенных речевых ситуациях, но и прививаем культурные ценности, умение сопереживать и радоваться за друзей",
          points: [],
        },
        quality: {
          title: "Качество",
          description:
            "Грамотная методика – это база любого успешного языкового курса. В группах по изучению общего английского мы применяем коммуникативный подход. В группах по подготовке к экзаменам знакомим с форматом экзамена и учим применять экзаменационные стратегии. Наши педагоги – дипломированные специалисты, прошедшие стажировку и обучение в странах преподаваемого языка, а также носители языка..",
          points: [],
        },
        geography: {
          title: "Страноведение",
          description:
            "Язык – неотъемлемая часть культуры, поэтому мы знакомим наших учеников с культурой страны изучаемых языков. Наши ученики узнают о праздниках, традициях и обычаях других стран на наших занятиях и, конечно же, мероприятиях и мастер-классах.",
          points: [],
        },
        result: {
          title: "Измерение результата",
          description:
            "Мы помогаем достигать цели и поэтому всегда измеряем прогресс. Мы проводим промежуточное тестирование после каждого пройденного раздела курса и помогаем отслеживать успехи, выявлять и устранять проблемные",
          points: [],
        },
        creative: {
          title: "Творчество",
          description:
            "Творчество и языки тесно связаны, потому что и то и другое помогает общаться с миром и выражать свои эмоции. На наших занятиях по творчеству и рисованию учим основам изобразительного искусства и дарим отличное настроение!",
          points: [],
        },
      },
      cta: "Записаться на пробное занятие",
      languageToggle: "English",
      swiperNavigation: {
        prev: "Предыдущий",
        next: "Следующий",
      },
    },
    en: {
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language Courses",
      phone: "+7 (983) 600-00-00",
      email: "info@tutschool.ru",
      address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
      rating: "4.8 on Yandex",
      search: "Search",
      workingHours: "Mon-Fri: 9:00-21:00, Sat: 10:00-18:00",
      title: "OUR VALUES",
      subtitle: "The principles that guide us",
      nav: {
        about: "ABOUT THE SCHOOL",
        aboutDropdown: [
          { title: "OUR VALUES", href: "/our-values" },
          { title: "SCHEDULE AND PRICES", href: "/schedule" },
          { title: "TEACHERS", href: "/teachers" },
        ],
        courses: "ENGLISH COURSES",
        coursesDropdown: [
          { title: "PRESCHOOLERS", href: "/preschoolers" },
          { title: "CHILDREN AGED 7-9", href: "/aged-7-9" },
          { title: "CHILDREN AGED 10-12", href: "/aged-10-12" },
          { title: "TEENAGERS", href: "/teenagers" },
          { title: "ADULTS", href: "/adults" },
        ],
        chinese: "CHINESE LANGUAGE COURSES",
        chineseDropdown: [
          { title: "PRESCHOOLERS", href: "/chinese/preschoolers" },
          { title: "CHILDREN AGED 7-9", href: "/chinese/aged-7-9" },
          { title: "CHILDREN AGED 10-12", href: "/chinese/aged-10-12" },
          { title: "TEENAGERS", href: "/chinese/teenagers" },
          { title: "ADULTS", href: "/chinese/adults" },
        ],
        club: "CONVERSATION CLUB",
        clubDropdown: [
          { title: "TEENAGERS", href: "/conversation-club/teenagers" },
          { title: "ADULTS", href: "/conversation-club/adults" },
        ],
        masterclass: "MASTERCLASS",
        masterclassDropdown: [
          { title: "CHINESE CALLIGRAPHY", href: "/chinese-calligraphy" },
          { title: "CREATIVE WORKSHOP", href: "/creative-workshops" },
        ],
        news: "NEWS",
        masterclasses: "MASTERCLASS",
        contacts: "CONTACTS",
      },
      values: {
        community: {
          title: "Community",
          description:
            "Language study groups in our school are a community of friends. The foundation of language learning is communication, and we pay special attention to developing communication skills. We not only work on the ability to communicate in specific speech situations, but also instill cultural values, empathy, and the ability to rejoice for our friends",
          points: [],
        },
        quality: {
          title: "Quality",
          description:
            "A well-structured methodology is the foundation of any successful language course. In our general English study groups, we use a communicative approach. In our exam preparation groups, we familiarize students with the exam format and teach them how to apply test-taking strategies. Our teachers are qualified professionals who have completed internships and training in the countries of the language they teach, as well as native speakers.",
          points: [],
        },
        geography: {
          title: "Regional Geography",
          description:
            "Language is an integral part of culture, which is why we introduce our students to the culture of the countries whose languages they are learning. Our students learn about holidays, traditions, and customs of other countries during our lessons and, of course, through events and workshops.",
          points: [],
        },
        result: {
          title: "Measuring the result",
          description:
            "We help our students achieve their goals, and that's why we always measure progress. We conduct interim assessments after each completed section of the course and help track achievements, identify, and address problem areas",
          points: [],
        },
        creative: {
          title: "Creativity",
          description:
            "Creativity and languages are closely connected because both help us communicate with the world and express our emotions. In our creativity and art classes, we teach the basics of visual arts and bring lots of joy!",
          points: [],
        },
      },
      cta: "Book a trial lesson",
      languageToggle: "Русский",
      swiperNavigation: {
        prev: "Previous",
        next: "Next",
      },
    },
  }

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Custom swiper navigation component
  const SwiperNavigation = ({ id }: { id: string }) => (
    <div className="flex justify-end gap-2 mt-4">
      <button
        className={`swiper-button-prev-${id} flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-primary hover:bg-gray-100 transition-colors`}
        aria-label={t.swiperNavigation.prev}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        className={`swiper-button-next-${id} flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-primary hover:bg-gray-100 transition-colors`}
        aria-label={t.swiperNavigation.next}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )

  return (
    <div className="flex min-h-screen flex-col">
<Head>
  <title>Tut School - Основные ценности | Курсы английского и китайского языка в Москве</title>
  <meta 
    name="description" 
    content="Ключевые ценности Tut School: качественное обучение, культурное погружение и творческое развитие. Профессиональные курсы английского и китайского языка для всех возрастов в Москве." 
  />
  <meta
    name="keywords"
    content="курсы английского Москва, школа китайского языка, обучение языкам, ценности образования, Tut School, английский для детей, подготовка к HSK, разговорный клуб"
  />
  
  {/* Open Graph / Social Media Meta Tags */}
  <meta property="og:title" content="Tut School - Наши ценности в обучении языкам" />
  <meta 
    property="og:description" 
    content="Откройте для себя подход Tut School к преподаванию языков через качество, творчество и культурное погружение." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tutschool.ru/our-values" />
  <meta property="og:image" content="https://tutschool.ru/images/values-og-image.jpg" />
  <meta property="og:site_name" content="Tut School" />
  <meta property="og:locale" content="ru_RU" />
  
 
  {/* Canonical URL */}
  <link rel="canonical" href="https://tutschool.ru/our-values" />
  
  {/* Favicon */}
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/icon.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
</Head>
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-gray-600">{t.workingHours}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href={`tel:${t.phone.replace(/\s+/g, "")}`} className="text-gray-600 hover:text-primary">
                {t.phone}
              </a>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <Mail className="h-4 w-4 text-primary" />
              <a href={`mailto:${t.email}`} className="text-gray-600 hover:text-primary">
                {t.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="h-4 w-4 text-primary" />
              <span className="text-gray-600">{t.address}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-red-600 hover:text-burgundy-900">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.052-1.713-1.033-1.033-1.49-1.172-1.744-1.172-.356 0-.458.102-.458.593v1.573c0 .424-.136.593-1.252.593-1.844 0-3.896-1.118-5.336-3.202-2.168-3.4-2.762-5.944-2.762-6.47 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.864 2.5 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.316c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.204.508.66v3.54c0 .373.17.508.271.508.22 0 .407-.135.814-.542 1.27-1.422 2.168-3.624 2.168-3.624.118-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.66-.22 1.015-2.32 3.979-2.32 3.979-.186.305-.254.44 0 .78.186.254.796.779 1.2 1.252.745.847 1.32 1.558 1.473 2.052.17.491-.085.745-.576.745z" />
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B79167349246&text&type=phone_number&app_absent=0"
              className="text-green-600 hover:text-burgundy-900"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.472 3.5C18.188 1.24 15.073 0 11.786 0 5.354 0 .13 5.214.13 11.636c0 2.05.546 4.05 1.585 5.812L.13 24l6.726-1.763c1.698.925 3.607 1.41 5.55 1.41h.005c6.43 0 11.65-5.215 11.65-11.637 0-3.109-1.21-6.026-3.413-8.225l-.175-.285zM11.786 21.273h-.004c-1.743 0-3.45-.468-4.942-1.35l-.355-.21-3.676.964.985-3.595-.232-.368c-.975-1.55-1.49-3.335-1.49-5.17 0-5.356 4.364-9.713 9.728-9.713 2.6 0 5.034 1.012 6.868 2.85 1.832 1.837 2.842 4.276 2.84 6.873-.004 5.356-4.367 9.719-9.722 9.719zm5.333-7.278c-.294-.147-1.734-.856-2.002-.951-.268-.097-.463-.146-.658.146-.195.293-.757.951-.928 1.147-.17.195-.342.22-.635.073-.294-.147-1.24-.456-2.363-1.456-.873-.778-1.463-1.738-1.634-2.032-.171-.293-.018-.451.128-.597.132-.132.294-.342.44-.513.148-.17.197-.293.296-.488.098-.195.05-.366-.025-.513-.073-.147-.657-1.583-.9-2.168-.244-.585-.487-.487-.658-.487-.17 0-.367-.025-.562-.025-.195 0-.513.073-.781.366-.269.293-1.025.999-1.025 2.435 0 1.436 1.05 2.824 1.196 3.02.146.195 2.057 3.142 4.988 4.407.697.268 1.24.428 1.664.55.7.222 1.337.19 1.839.115.56-.085 1.734-.71 1.977-1.395.244-.684.244-1.27.17-1.393-.073-.122-.268-.196-.562-.342z" />
              </svg>
            </a>
            <a href="https://t.me/TUTschoolNovogorsk" className="text-blue-500 hover:text-burgundy-900">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.193-2.98 5.518-4.99c.22-.196-.048-.307-.338-.11l-6.81 4.29-2.96-.92c-.64-.203-.658-.64.135-.954l11.57-4.46c.538-.196 1.006.128.832.941z" />
              </svg>
            </a>
            <button
              onClick={toggleLanguage}
              className="ml-2 flex items-center gap-1 rounded-md border border-gray-300 px-2 py-1 text-xs hover:bg-gray-200"
            >
              <Globe className="h-3 w-3" />
              {t.languageToggle}
            </button>
          </div>
        </div>
      </div>

      <header
        className={`border-b bg-white shadow-sm transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""}`}
      >
        {/* Main Header Content */}
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt={language === "ru" ? "Логотип Tut School" : "Tut School logo"}
                  width={120}
                  height={120}
                  className="object-contain "
                />
              </Link>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">{t.schoolName}</h1>
              <p className="text-sm text-muted-foreground">{t.schoolSubtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation - keep exactly the same */}
          <nav className="hidden md:block" ref={dropdownRef}>
            <ul className="flex gap-6">
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className={`flex items-center text-sm font-medium ${activeDropdown === "about" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                >
                  {t.nav.about}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "about" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                    {t.nav.aboutDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("courses")}
                  className={`flex items-center text-sm font-medium ${activeDropdown === "courses" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                >
                  {t.nav.courses}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "courses" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "courses" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                    {t.nav.coursesDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("chinese")}
                  className={`flex items-center text-sm font-medium ${activeDropdown === "chinese" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                >
                  {t.nav.chinese}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "chinese" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "chinese" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                    {t.nav.chineseDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("club")}
                  className={`flex items-center text-sm font-medium ${activeDropdown === "club" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                >
                  {t.nav.club}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "club" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "club" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                    {t.nav.clubDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("masterclass")}
                  className={`flex items-center text-sm font-medium ${activeDropdown === "masterclass" ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                >
                  {t.nav.masterclass}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "masterclass" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "masterclass" && (
                  <div className="absolute left-0 top-full z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                    {t.nav.masterclassDropdown.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <Link href="/news" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.news}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.contacts}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button className="rounded-md p-1 text-gray-700 hover:bg-gray-100" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? "max-h-[calc(100vh-60px)]" : "max-h-0"
          }`}
        >
          <div className="container mx-auto space-y-2 px-4 pb-4">
            {/* About Dropdown */}
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("about-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <div className="flex items-center">
                  <Info className="mr-2 h-5 w-5 text-primary" />
                  <span>{t.nav.about}</span>
                </div>
                {activeDropdown === "about-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  activeDropdown === "about-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-2 px-4 pb-4">
                  {t.nav.aboutDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md p-3 text-gray-600 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Courses Dropdown */}
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("courses-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <div className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5 text-primary" />
                  <span>{t.nav.courses}</span>
                </div>
                {activeDropdown === "courses-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  activeDropdown === "courses-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-2 px-4 pb-4">
                  {t.nav.coursesDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md p-3 text-gray-600 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Chinese Dropdown */}
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("chinese-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <div className="flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-primary" />
                  <span>{t.nav.chinese}</span>
                </div>
                {activeDropdown === "chinese-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  activeDropdown === "chinese-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-2 px-4 pb-4">
                  {t.nav.chineseDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md p-3 text-gray-600 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Club Dropdown */}
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("club-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <div className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>{t.nav.club}</span>
                </div>
                {activeDropdown === "club-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  activeDropdown === "club-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-2 px-4 pb-4">
                  {t.nav.clubDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md p-3 text-gray-600 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Masterclass Dropdown */}
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("masterclass-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <div className="flex items-center">
                  <Award className="mr-2 h-5 w-5 text-primary" />
                  <span>{t.nav.masterclass}</span>
                </div>
                {activeDropdown === "masterclass-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  activeDropdown === "masterclass-mobile" ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="space-y-2 px-4 pb-4">
                  {t.nav.masterclassDropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-md p-3 text-gray-600 hover:bg-gray-50"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* News Link */}
            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center rounded-lg border border-gray-200 p-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              <FileText className="mr-2 h-5 w-5 text-primary" />
              {t.nav.news}
            </Link>

            {/* Contacts Link */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center rounded-lg border border-gray-200 p-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              <Phone className="mr-2 h-5 w-5 text-primary" />
              {t.nav.contacts}
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="text-center"
            >
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.title}</h1>
              <p className="mx-auto max-w-2xl text-lg text-white/80">{t.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Community Value */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".swiper-button-prev-community",
                      nextEl: ".swiper-button-next-community",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="h-[300px] md:h-[400px]"
                  >
                    {valueImages.community.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${image.alt} - ${language === "ru" ? "Наше сообщество" : "Our community"}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <SwiperNavigation id="community" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4 flex items-center">
                    <Users className="mr-3 h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">{t.values.community.title}</h2>
                  </div>
                  <p className="mb-6 text-gray-700">{t.values.community.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Quality Value */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-2 overflow-hidden rounded-lg shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".swiper-button-prev-quality",
                      nextEl: ".swiper-button-next-quality",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="h-[300px] md:h-[400px]"
                  >
                    {valueImages.quality.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${image.alt} - ${language === "ru" ? "Качество" : "Quality"}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <SwiperNavigation id="quality" />
                </div>
                <div className="order-2 md:order-1 flex flex-col justify-center">
                  <div className="mb-4 flex items-center">
                    <BookOpen className="mr-3 h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">{t.values.quality.title}</h2>
                  </div>
                  <p className="mb-6 text-gray-700">{t.values.quality.description}</p>
                  <ul className="space-y-2">
                    {t.values.quality.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="mr-2 h-5 w-5 flex-shrink-0 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Regional Geography Value */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".swiper-button-prev-geography",
                      nextEl: ".swiper-button-next-geography",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="h-[300px] md:h-[400px]"
                  >
                    {valueImages.geography.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${image.alt} - ${language === "ru" ? "Страноведение" : "Regional Geography"}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <SwiperNavigation id="geography" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4 flex items-center">
                    <Heart className="mr-3 h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">{t.values.geography.title}</h2>
                  </div>
                  <p className="mb-6 text-gray-700">{t.values.geography.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Assessment Value */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-2 overflow-hidden rounded-lg shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".swiper-button-prev-result",
                      nextEl: ".swiper-button-next-result",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="h-[300px] md:h-[400px]"
                  >
                    {valueImages.result.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${image.alt} - ${language === "ru" ? "Измерение результата" : "Measuring results"}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <SwiperNavigation id="result" />
                </div>
                <div className="order-2 md:order-1 flex flex-col justify-center">
                  <div className="mb-4 flex items-center">
                    <Lightbulb className="mr-3 h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">{t.values.result.title}</h2>
                  </div>
                  <p className="mb-6 text-gray-700">{t.values.result.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Arts Value */}
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                      prevEl: ".swiper-button-prev-creative",
                      nextEl: ".swiper-button-next-creative",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="h-[300px] md:h-[400px]"
                  >
                    {valueImages.creative.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={`${image.alt} - ${language === "ru" ? "Творчество" : "Creativity"}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <SwiperNavigation id="creative" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-4 flex items-center">
                    <Sparkles className="mr-3 h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold text-gray-900">{t.values.creative.title}</h2>
                  </div>
                  <p className="mb-6 text-gray-700">{t.values.creative.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeIn}>
              <h2 className="mb-6 text-3xl font-bold">{t.cta}</h2>
              <Link
                href="/bookings"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-gray-100"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                {language === "ru" ? "Записаться" : "Book Now"}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}