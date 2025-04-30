"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  BookOpen,
  Clock,
  Users,
  Phone,
  Star,
  CheckCircle,
  ArrowRight,
  Landmark,Globe,
  Mail,
  MessageCircle,
  Briefcase,
  ChevronDown, X, Menu
} from "lucide-react"
import { ScrollProgress, ScrollSpy } from "@/components/animations/scroll-animations"



export default function AdultsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
    const [language, setLanguage] = useState<"ru" | "en">("ru")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
    const [sliderDirection, setSliderDirection] = useState<"next" | "prev" | null>(null)
    const [activeSection, setActiveSection] = useState<string>("hero")
    const [isScrolled, setIsScrolled] = useState(false)

    const dropdownRef = useRef<HTMLDivElement>(null)
    
    const [scrollY, setScrollY] = useState(0)

    
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
    
      useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY)
          setIsScrolled(window.scrollY > 100)
        }
    
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
      }, [])
    
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
      workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
      promo: "Запишитесь на пробный урок до 30 мая и получите скидку 20% на первый месяц обучения!",
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
          { title: "ПОДРОСТКИ", href: "/teenagers" },
          { title: "ВЗРОСЛЫЕ", href: "/adults" },
        ],
        chinese: "КУРСЫ КИТАЙСКОГО",
        chineseDropdown: [
          { title: "ДОШКОЛЬНИКИ", href: "/courses/english-kids" },
          { title: "ДЕТИ 7-9 ЛЕТ", href: "/courses/english-adults" },
          { title: "ДЕТИ 10-12 ЛЕТ", href: "/courses/english-kids" },
          { title: "ПОДРОСТКИ", href: "/courses/english-adults" },
          { title: "ВЗРОСЛЫЕ", href: "/courses/english-kids" },
        ],
        club: "РАЗГОВОРНЫЙ КЛУБ",
        clubDropdown: [
          { title: "ПОДРОСТКИ", href: "/conversation-club/teenagers" },
          { title: "ВЗРОСЛЫЕ", href: "/conversation-club/adults" },
        ],
        news: "НОВОСТИ",
        contacts: "КОНТАКТЫ",
      },
      hero: {
        title: "ШКОЛА ИНОСТРАННЫХ ЯЗЫКОВ И ИСКУССТВ",
        subtitle: "Мы помогаем детям и взрослым освоить английский и китайский языки в дружеской атмосфере",
        cta: "Записаться на пробный урок",
      },
      title: "АНГЛИЙСКИЙ ЯЗЫК ДЛЯ ВЗРОСЛЫХ",
      subtitle: "Эффективные курсы для работы и жизни",
      description: "Наши курсы английского языка для взрослых разработаны с учетом современных требований и потребностей. Мы поможем вам достичь ваших языковых целей, будь то продвижение по карьере, путешествия или саморазвитие.",
      levels: {
        title: "УРОВНИ ОБУЧЕНИЯ",
        items: [
          {
            name: "Beginner (A1)",
            description: "Базовая коммуникация, простые фразы и выражения"
          },
          {
            name: "Elementary (A2)",
            description: "Повседневное общение, простые тексты"
          },
          {
            name: "Intermediate (B1)",
            description: "Свободное общение на знакомые темы"
          },
          {
            name: "Upper-Intermediate (B2)",
            description: "Уверенное владение языком в работе и учебе"
          },
          {
            name: "Advanced (C1)",
            description: "Профессиональное владение языком"
          }
        ]
      },
      features: {
        title: "ОСОБЕННОСТИ КУРСА",
        items: [
          {
            title: "Индивидуальный подход",
            description: "Программа обучения адаптируется под ваши цели и темп"
          },
          {
            title: "Современные методики",
            description: "Коммуникативный подход и интерактивные материалы"
          },
          {
            title: "Практика общения",
            description: "Регулярные разговорные клубы и дискуссии"
          },
          {
            title: "Бизнес-английский",
            description: "Специальные модули для профессионального развития"
          }
        ]
      },
      schedule: {
        title: "РАСПИСАНИЕ И ФОРМАТ",
        items: [
          {
            title: "Утренние группы",
            time: "9:00 - 10:30"
          },
          {
            title: "Дневные группы",
            time: "14:00 - 15:30"
          },
          {
            title: "Вечерние группы",
            time: "19:00 - 20:30"
          }
        ],
        formats: [
          "Индивидуальные занятия",
          "Мини-группы (4-6 человек)",
          "Стандартные группы (8-10 человек)",
          "Онлайн обучение"
        ]
      },
      benefits: {
        title: "ПРЕИМУЩЕСТВА ОБУЧЕНИЯ У НАС",
        items: [
          "Сертифицированные преподаватели с опытом работы",
          "Современные учебные материалы",
          "Регулярное тестирование прогресса",
          "Подготовка к международным экзаменам",
          "Разговорные клубы с носителями языка",
          "Гибкий график занятий"
        ]
      },
      pricing: {
        title: "СТОИМОСТЬ ОБУЧЕНИЯ",
        items: [
          {
            type: "Индивидуальные занятия",
            price: "от 2000₽/час"
          },
          {
            type: "Мини-группы",
            price: "от 4500₽/месяц"
          },
          {
            type: "Стандартные группы",
            price: "от 3500₽/месяц"
          }
        ]
      },
      cta: "Записаться на пробный урок",
      trial: {
        title: "НАЧНИТЕ ОБУЧЕНИЕ СЕГОДНЯ",
        description: "Запишитесь на бесплатный пробный урок и определите свой уровень английского"
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
      workingHours: "Mon-Fri: 9:00-21:00, Sat: 10:00-18:00",
      promo: "Sign up for a trial lesson before May 30 and get a 20% discount on your first month of study!",
      nav: {
        about: "ABOUT THE SCHOOL",
        aboutDropdown: [
          { title: "OUR VALUES", href: "/our-values" },
          { title: "SCHEDULE AND PRICES", href: "/schedule" },
          { title: "TEACHERS", href: "/teachers" },
        ],
        courses: "COURSES",
        coursesDropdown: [
          { title: "PRESCHOOLERS", href: "/preschoolers" },
          { title: "CHILDREN AGED 7-9", href: "/aged-7-9" },
            { title: "CHILDREN AGED 10-12", href: "/aged-10-12" },
          { title: "TEENAGERS", href: "/teenagers" },
            { title: "ADULTS", href: "/adults" },
        ],
        chinese: "CHINESE LANGUAGE COURSES",
        chineseDropdown: [
          { title: "PRESCHOOLERS", href: "/courses/english-kids" },
          { title: "CHILDREN AGED 7-9", href: "/courses/english-adults" },
          { title: "CHILDREN AGED 10-12", href: "/courses/english-kids" },
          { title: "TEENAGERS", href: "/courses/english-adults" },
          { title: "ADULTS", href: "/courses/english-kids" },
        ],
        club: "CONVERSATION CLUB",
        clubDropdown: [
          { title: "TEENAGERS", href: "/conversation-club/teenagers" },
          { title: "ADULTS", href: "/conversation-club/adults" },
        ],
        news: "NEWS",
        contacts: "CONTACTS",
      },
      hero: {
        title: "SCHOOL OF FOREIGN LANGUAGES AND ARTS",
        subtitle: "We help children and adults learn English and Chinese in a friendly atmosphere",
        cta: "Book a lesson",
      },
      title: "ENGLISH FOR ADULTS",
      subtitle: "Effective courses for work and life",
      description: "Our English courses for adults are designed with modern requirements and needs in mind. We will help you achieve your language goals, whether it's career advancement, travel, or self-development.",
      levels: {
        title: "LEARNING LEVELS",
        items: [
          {
            name: "Beginner (A1)",
            description: "Basic communication, simple phrases and expressions"
          },
          {
            name: "Elementary (A2)",
            description: "Everyday communication, simple texts"
          },
          {
            name: "Intermediate (B1)",
            description: "Fluent communication on familiar topics"
          },
          {
            name: "Upper-Intermediate (B2)",
            description: "Confident language use in work and study"
          },
          {
            name: "Advanced (C1)",
            description: "Professional language proficiency"
          }
        ]
      },
      features: {
        title: "COURSE FEATURES",
        items: [
          {
            title: "Individual Approach",
            description: "Training program adapted to your goals and pace"
          },
          {
            title: "Modern Methods",
            description: "Communicative approach and interactive materials"
          },
          {
            title: "Speaking Practice",
            description: "Regular conversation clubs and discussions"
          },
          {
            title: "Business English",
            description: "Special modules for professional development"
          }
        ]
      },
      schedule: {
        title: "SCHEDULE AND FORMAT",
        items: [
          {
            title: "Morning groups",
            time: "9:00 - 10:30"
          },
          {
            title: "Afternoon groups",
            time: "14:00 - 15:30"
          },
          {
            title: "Evening groups",
            time: "19:00 - 20:30"
          }
        ],
        formats: [
          "Individual lessons",
          "Mini-groups (4-6 people)",
          "Standard groups (8-10 people)",
          "Online learning"
        ]
      },
      benefits: {
        title: "WHY CHOOSE US",
        items: [
          "Certified teachers with experience",
          "Modern learning materials",
          "Regular progress testing",
          "Preparation for international exams",
          "Conversation clubs with native speakers",
          "Flexible class schedule"
        ]
      },
      pricing: {
        title: "COURSE PRICING",
        items: [
          {
            type: "Individual lessons",
            price: "from 2000₽/hour"
          },
          {
            type: "Mini-groups",
            price: "from 4500₽/month"
          },
          {
            type: "Standard groups",
            price: "from 3500₽/month"
          }
        ]
      },
      cta: "Book a trial lesson",
      trial: {
        title: "START LEARNING TODAY",
        description: "Sign up for a free trial lesson and determine your English level"
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

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
            <ScrollProgress />
      
  
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
                  <div className="flex items-center gap-2">
                    <Landmark className="h-4 w-4 text-primary" />
                    <span className="text-gray-600">{t.address}</span>
                  </div>
                  <div className="hidden items-center gap-2 md:flex">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href={`mailto:${t.email}`} className="text-gray-600 hover:text-primary">
                      {t.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  
                <a href="#" className="text-red-600 hover:text-burgundy-900">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.052-1.713-1.033-1.033-1.49-1.172-1.744-1.172-.356 0-.458.102-.458.593v1.573c0 .424-.136.593-1.252.593-1.844 0-3.896-1.118-5.336-3.202-2.168-3.4-2.762-5.944-2.762-6.47 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.864 2.5 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.316c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.204.508.66v3.54c0 .373.17.508.271.508.22 0 .407-.135.814-.542 1.27-1.422 2.168-3.624 2.168-3.624.118-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.66-.22 1.015-2.32 3.979-2.32 3.979-.186.305-.254.44 0 .78.186.254.796.779 1.2 1.252.745.847 1.32 1.558 1.473 2.052.17.491-.085.745-.576.745z" />
                    </svg>
                  </a>
                  <a href="https://api.whatsapp.com/send/?phone=%2B79167349246&text&type=phone_number&app_absent=0" className="text-green-600 hover:text-burgundy-900">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.472 3.5C18.188 1.24 15.073 0 11.786 0 5.354 0 .13 5.214.13 11.636c0 2.05.546 4.05 1.585 5.812L.13 24l6.726-1.763c1.698.925 3.607 1.41 5.55 1.41h.005c6.43 0 11.65-5.215 11.65-11.637 0-3.109-1.21-6.026-3.413-8.225l-.175-.285zM11.786 21.273h-.004c-1.743 0-3.45-.468-4.942-1.35l-.355-.21-3.676.964.985-3.595-.232-.368c-.975-1.55-1.49-3.335-1.49-5.17 0-5.356 4.364-9.713 9.728-9.713 2.6 0 5.034 1.012 6.868 2.85 1.832 1.837 2.842 4.276 2.84 6.873-.004 5.356-4.367 9.719-9.722 9.719zm5.333-7.278c-.294-.147-1.734-.856-2.002-.951-.268-.097-.463-.146-.658.146-.195.293-.757.951-.928 1.147-.17.195-.342.22-.635.073-.294-.147-1.24-.456-2.363-1.456-.873-.778-1.463-1.738-1.634-2.032-.171-.293-.018-.451.128-.597.132-.132.294-.342.44-.513.148-.17.197-.293.296-.488.098-.195.05-.366-.025-.513-.073-.147-.657-1.583-.9-2.168-.244-.585-.487-.487-.658-.487-.17 0-.367-.025-.562-.025-.195 0-.513.073-.781.366-.269.293-1.025.999-1.025 2.435 0 1.436 1.05 2.824 1.196 3.02.146.195 2.057 3.142 4.988 4.407.697.268 1.24.428 1.664.55.7.222 1.337.19 1.839.115.56-.085 1.734-.71 1.977-1.395.244-.684.244-1.27.17-1.393-.073-.122-.268-.196-.562-.342z" />
                    </svg>
                  </a>
                  <a href="https://t.me/TUTschoolNovogorsk" className="text-blue-500 hover:text-burgundy-900">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.193-2.98 5.518-4.99c.22-.196-.048-.307-.338-.11l-6.81 4.29-2.96-.92c-.64-.203-.658-.64.135-.954l11.57-4.46c.538-.196 1.006.128.832.941z"/>
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
      
            {/* Header */}
            <header    className={`border-b bg-white py-4 shadow-sm transition-all duration-300 ${
                isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""
              }`}>
              <div className="container mx-auto flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-14">
                    <Link href='/'>
                    <Image
                      src="/logo.png?height=56&width=56"
                      alt={language === "ru" ? "Логотип Tut School" : "Tut School logo"}
                      fill
                      className="object-contain"
                    />
                    </Link>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-primary">{t.schoolName}</h1>
                    <p className="text-sm text-muted-foreground">{t.schoolSubtitle}</p>
                  </div>
                </div>
      
                {/* Desktop Navigation */}
                
      
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
      
                <div className="flex items-center gap-4">
                <Link
        href="/bookings"
        className="px-2.5 py-1 text-xs ml-1.5 rounded bg-gradient-to-r from-[#5C162E] to-[#7A1F3D] text-white font-medium hover:from-[#451225] hover:to-[#5C162E] transition-all shadow-sm hover:shadow"
      >
        {t.hero.cta}
      </Link>
                  <button className="rounded-md p-1 text-gray-700 hover:bg-gray-100 md:hidden" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </header>
      
                  {/* Mobile Menu */}
                  <div
              className={`fixed inset-x-0 top-[${isScrolled ? "60px" : "auto"}] z-40 border-b bg-white shadow-sm md:hidden overflow-auto transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
              }`}
              style={{ top: isScrolled ? "60px" : "auto" }}
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="space-y-4">
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleDropdown("about-mobile")}
                      className="flex w-full items-center justify-between py-3 px-4 text-sm font-medium text-gray-700 touch-manipulation rounded-md hover:bg-gray-50 active:bg-gray-100"
                      aria-expanded={activeDropdown === "about-mobile"}
                    >
                      <span>{t.nav.about}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${activeDropdown === "about-mobile" ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`ml-4 border-l border-gray-200 pl-4 space-y-1 overflow-hidden transition-all duration-200 ${
                        activeDropdown === "about-mobile" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {t.nav.aboutDropdown.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveDropdown(null)
                          }}
                          className="block py-3 px-4 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
      
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleDropdown("courses-mobile")}
                      className="flex w-full items-center justify-between py-3 px-4 text-sm font-medium text-gray-700 touch-manipulation rounded-md hover:bg-gray-50 active:bg-gray-100"
                      aria-expanded={activeDropdown === "courses-mobile"}
                    >
                      <span>{t.nav.courses}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${activeDropdown === "courses-mobile" ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`ml-4 border-l border-gray-200 pl-4 space-y-1 overflow-hidden transition-all duration-200 ${
                        activeDropdown === "courses-mobile" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {t.nav.coursesDropdown.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveDropdown(null)
                          }}
                          className="block py-3 px-4 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
      
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleDropdown("chinese-mobile")}
                      className="flex w-full items-center justify-between py-3 px-4 text-sm font-medium text-gray-700 touch-manipulation rounded-md hover:bg-gray-50 active:bg-gray-100"
                      aria-expanded={activeDropdown === "chinese-mobile"}
                    >
                      <span>{t.nav.chinese}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${activeDropdown === "chinese-mobile" ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`ml-4 border-l border-gray-200 pl-4 space-y-1 overflow-hidden transition-all duration-200 ${
                        activeDropdown === "chinese-mobile" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {t.nav.chineseDropdown.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveDropdown(null)
                          }}
                          className="block py-3 px-4 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
      
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleDropdown("club-mobile")}
                      className="flex w-full items-center justify-between py-3 px-4 text-sm font-medium text-gray-700 touch-manipulation rounded-md hover:bg-gray-50 active:bg-gray-100"
                      aria-expanded={activeDropdown === "club-mobile"}
                    >
                      <span>{t.nav.club}</span>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${activeDropdown === "club-mobile" ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`ml-4 border-l border-gray-200 pl-4 space-y-1 overflow-hidden transition-all duration-200 ${
                        activeDropdown === "club-mobile" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {t.nav.clubDropdown.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setActiveDropdown(null)
                          }}
                          className="block py-3 px-4 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
      
                  <Link
                    href="/news"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-4 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
                  >
                    {t.nav.news}
                  </Link>
      
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-4 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
                  >
                    {t.nav.contacts}
                  </Link>
      
                  <Link
                    href="/bookings"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-3 mt-4 text-sm rounded-md bg-gradient-to-r from-[#5C162E] to-[#7A1F3D] text-white font-medium hover:from-[#451225] hover:to-[#5C162E] active:scale-98 transition-all shadow-sm touch-manipulation"
                  >
                    {t.hero.cta}
                  </Link>
                </nav>
              </div>
            </div>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 text-white">
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
          <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>
        </section>

        {/* Course Description */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2"
            >
              <motion.div variants={fadeIn} className="flex flex-col justify-center">
                <p className="text-lg text-gray-700">{t.description}</p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <div className="relative h-64 overflow-hidden rounded-lg md:h-full">
                  <Image
                    src="https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg"
                    alt="Adult students learning English"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Levels */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center text-3xl font-bold"
            >
              {t.levels.title}
            </motion.h2>
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-3"
            >
              {t.levels.items.map((level, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="rounded-lg bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="mb-3 text-xl font-bold text-primary">{level.name}</h3>
                  <p className="text-gray-600">{level.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center text-3xl font-bold"
            >
              {t.features.title}
            </motion.h2>
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            >
              {t.features.items.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="rounded-lg bg-white p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  {index === 0 && <Users className="mx-auto mb-4 h-12 w-12 text-primary" />}
                  {index === 1 && <BookOpen className="mx-auto mb-4 h-12 w-12 text-primary" />}
                  {index === 2 && <MessageCircle className="mx-auto mb-4 h-12 w-12 text-primary" />}
                  {index === 3 && <Briefcase className="mx-auto mb-4 h-12 w-12 text-primary" />}
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Schedule */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center text-3xl font-bold"
            >
              {t.schedule.title}
            </motion.h2>
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2"
            >
              <motion.div variants={fadeIn}>
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <h3 className="mb-6 text-xl font-bold">Расписание занятий</h3>
                  <div className="space-y-4">
                    {t.schedule.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn}>
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <h3 className="mb-6 text-xl font-bold">Форматы обучения</h3>
                  <div className="space-y-4">
                    {t.schedule.formats.map((format, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <p>{format}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center text-3xl font-bold"
            >
              {t.benefits.title}
            </motion.h2>
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {t.benefits.items.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-lg"
                >
                  <Star className="h-6 w-6 flex-shrink-0 text-primary" />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center text-3xl font-bold"
            >
              {t.pricing.title}
            </motion.h2>
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-3"
            >
              {t.pricing.items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="rounded-lg bg-white p-6 text-center shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="mb-4 text-xl font-bold">{item.type}</h3>
                  <p className="text-3xl font-bold text-primary">{item.price}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">{t.trial.title}</h2>
              <p className="mb-8 text-lg text-white/80">{t.trial.description}</p>
              <Link
                href="/bookings"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-primary transition-all hover:bg-gray-100"
              >
                {t.cta}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}