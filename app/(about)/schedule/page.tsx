"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import {
  Calendar,
  Phone,
  Mail,
  Globe,
  Menu,
  X,
  Clock,
  Info,
  ChevronDown,
  BookOpen,
  MessageCircle,
  Award,
  FileText,
} from "lucide-react"

export default function SchedulePage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const [isScrolled, setIsScrolled] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

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
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      rating: "4.8 на Яндексе",
      search: "Поиск",
      workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
      title: "РАСПИСАНИЕ И ЦЕНЫ",
      subtitle: "Выберите удобное время для занятий",
      scheduleTitle: "Расписание занятий",
      englishLanguage: "Английский язык",
      chineseLanguage: "Китайский язык",
      pricesTitle: "Стоимость обучения",
      pricesSubtitle: "Выберите подходящий тариф",
      cta: "Записаться на пробный урок",
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
      days: {
        monday: "Понедельник",
        tuesday: "Вторник",
        wednesday: "Среда",
        thursday: "Четверг",
        friday: "Пятница",
        saturday: "Суббота",
        sunday: "Воскресенье",
      },
      time: "Время",
      preschoolers: "Дошкольники",
      noClasses: "Нет занятий",
      priceCards: [
        {
          title: "Стандарт",
          price: "5 000 ₽",
          period: "в месяц",
          features: [
            "8 занятий в месяц",
            "Длительность занятия 60 минут",
            "Группа до 8 человек",
            "Учебные материалы включены",
          ],
          cta: "Записаться",
        },
        {
          title: "Интенсив",
          price: "8 000 ₽",
          period: "в месяц",
          features: [
            "12 занятий в месяц",
            "Длительность занятия 90 минут",
            "Группа до 6 человек",
            "Учебные материалы включены",
            "Разговорный клуб 1 раз в неделю",
          ],
          cta: "Записаться",
          featured: true,
        },
        {
          title: "Индивидуальный",
          price: "12 000 ₽",
          period: "в месяц",
          features: [
            "8 индивидуальных занятий",
            "Длительность занятия 60 минут",
            "Персональная программа обучения",
            "Учебные материалы включены",
            "Гибкий график занятий",
          ],
          cta: "Записаться",
        },
      ],
      note: "Примечание: Расписание может меняться. Пожалуйста, уточняйте актуальную информацию у администратора.",
      bookTrial: "Записаться на пробное занятие",
      languageToggle: "English",
    },
    en: {
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language Courses",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
      rating: "4.8 on Yandex",
      search: "Search",
      workingHours: "Mon-Fri: 9:00-21:00, Sat: 10:00-18:00",
      title: "SCHEDULE AND PRICES",
      subtitle: "Choose a convenient time for classes",
      scheduleTitle: "Class Schedule",
      englishLanguage: "English Language",
      chineseLanguage: "Chinese Language",
      pricesTitle: "Tuition Fees",
      pricesSubtitle: "Choose the right plan for you",
      cta: "Book a lesson",
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
        contacts: "CONTACTS",
      },
      days: {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
      },
      time: "Time",
      preschoolers: "Preschoolers",
      noClasses: "No classes",
      priceCards: [
        {
          title: "Standard",
          price: "5,000 ₽",
          period: "per month",
          features: [
            "8 lessons per month",
            "60-minute lessons",
            "Groups up to 8 people",
            "Learning materials included",
          ],
          cta: "Sign Up",
        },
        {
          title: "Intensive",
          price: "8,000 ₽",
          period: "per month",
          features: [
            "12 lessons per month",
            "90-minute lessons",
            "Groups up to 6 people",
            "Learning materials included",
            "Conversation club once a week",
          ],
          cta: "Sign Up",
          featured: true,
        },
        {
          title: "Individual",
          price: "12,000 ₽",
          period: "per month",
          features: [
            "8 individual lessons",
            "60-minute lessons",
            "Personalized learning program",
            "Learning materials included",
            "Flexible schedule",
          ],
          cta: "Sign Up",
        },
      ],
      note: "Note: Schedule is subject to change. Please check with the administrator for the most up-to-date information.",
      bookTrial: "Book a trial lesson",
      languageToggle: "Русский",
    },
  }
  const scheduleData = {
    english: [
      { time: "14.00", monday: "дошкольники", tuesday: "", wednesday: "дошкольники", thursday: "", friday: "" },
      { time: "15.00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "" },
      { time: "16.00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "" },
      { time: "17.00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "" },
      { time: "18.00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "" },
      { time: "19.00", monday: "", tuesday: "", wednesday: "", thursday: "", friday: "" },
    ],
    weekend: [
      { time: "10.00", saturday: "", sunday: "" },
      { time: "11.00", saturday: "", sunday: "" },
      { time: "12.00", saturday: "", sunday: "" },
      { time: "13.00", saturday: "", sunday: "" },
    ],
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

  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const toggleDropdown = (dropdown: string) => {
    // Close all other dropdowns immediately
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)

    // Add slight delay for better touch response
    setTimeout(() => {
      if (activeDropdown !== dropdown) {
        setActiveDropdown(dropdown)
      }
    }, 50)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
                <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
              
              ym(103804746, 'init', {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                accurateTrackBounce:true,
                trackLinks:true
              });
            `
          }}
        />
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
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-green-600 hover:text-burgundy-900">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.472 3.5C18.188 1.24 15.073 0 11.786 0 5.354 0 .13 5.214.13 11.636c0 2.05.546 4.05 1.585 5.812L.13 24l6.726-1.763c1.698.925 3.607 1.41 5.55 1.41h.005c6.43 0 11.65-5.215 11.65-11.637 0-3.109-1.21-6.026-3.413-8.225l-.175-.285zM11.786 21.273h-.004c-1.743 0-3.45-.468-4.942-1.35l-.355-.21-3.676.964.985-3.595-.232-.368c-.975-1.55-1.49-3.335-1.49-5.17 0-5.356 4.364-9.713 9.728-9.713 2.6 0 5.034 1.012 6.868 2.85 1.832 1.837 2.842 4.276 2.84 6.873-.004 5.356-4.367 9.719-9.722 9.719zm5.333-7.278c-.294-.147-1.734-.856-2.002-.951-.268-.097-.463-.146-.658.146-.195.293-.757.951-.928 1.147-.17.195-.342.22-.635.073-.294-.147-1.24-.456-2.363-1.456-.873-.778-1.463-1.738-1.634-2.032-.171-.293-.018-.451.128-.597.132-.132.294-.342.44-.513.148-.17.197-.293.296-.488.098-.195.05-.366-.025-.513-.073-.147-.657-1.583-.9-2.168-.244-.585-.487-.487-.658-.487-.17 0-.367-.025-.562-.025-.195 0-.513.073-.781.366-.269.293-1.025.999-1.025 2.435 0 1.436 1.05 2.824 1.196 3.02.146.195 2.057 3.142 4.988 4.407.697.268 1.24.428 1.664.55.7.222 1.337.19 1.839.115.56-.085 1.734-.71 1.977-1.395.244-.684.244-1.27.17-1.393-.073-.122-.268-.196-.562-.342z" />
              </svg>
            </a>
            <a href="#" className="text-blue-500 hover:text-burgundy-900">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zm-12 7.5c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5 7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5zm-2.5-10.5h5v1h-5v-1zm0 2h5v1h-5v-1zm0 2h5v1h-5v-1zm0 2h3v1h-3v-1z" />
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

      {/* Combined Header and Mobile Menu */}
      <header
        className={`border-b bg-white shadow-sm transition-all duration-300 sticky top-0 z-50 ${isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""}`}
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
          <nav className="hidden md:block relative z-50" ref={dropdownRef}>
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

          {/* Mobile Menu */}
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

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 pb-16">
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

        {/* Schedule Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center"
            >
              <h2 className="mb-2 text-3xl font-bold text-primary">{t.scheduleTitle}</h2>
              <div className="mx-auto h-1 w-20 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-16"
            >
              <div className="mb-8 flex items-center justify-center">
                <div className="flex items-center bg-white/60 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 shadow-lg">
                  <Calendar className="mr-3 h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    {t.englishLanguage}
                  </h3>
                </div>
              </div>

              {/* Weekday Schedule - Desktop */}
              <div className="mb-8 hidden lg:block">
                <div className="relative overflow-hidden rounded-3xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl">
                  {/* Glass overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-500/10 pointer-events-none"></div>

                  <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-sm">
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-primary" />
                                {t.time}
                              </div>
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              {t.days.monday}
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              {t.days.tuesday}
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              {t.days.wednesday}
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              {t.days.thursday}
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t.days.friday}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {scheduleData.english.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className={`transition-all duration-200 hover:bg-white/30 ${
                                rowIndex % 2 === 0 ? "bg-white/20" : "bg-white/10"
                              }`}
                            >
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 border-r border-white/20">
                                <div className="flex items-center">
                                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-blue-500 rounded-full mr-3"></div>
                                  {row.time}
                                </div>
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 border-r border-white/20">
                                {row.monday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/20">
                                    {row.monday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 border-r border-white/20">
                                {row.tuesday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/20">
                                    {row.tuesday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 border-r border-white/20">
                                {row.wednesday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/20">
                                    {row.wednesday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 border-r border-white/20">
                                {row.thursday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/20">
                                    {row.thursday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700">
                                {row.friday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/20">
                                    {row.friday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekend Schedule - Desktop */}
              <div className="mb-8 hidden lg:block">
                <div className="relative overflow-hidden rounded-3xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl">
                  {/* Glass overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-purple-500/10 pointer-events-none"></div>

                  <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-primary/10 backdrop-blur-sm">
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-primary" />
                                {t.time}
                              </div>
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-r border-white/20">
                              {t.days.saturday}
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">{t.days.sunday}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {scheduleData.weekend.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className={`transition-all duration-200 hover:bg-white/30 ${
                                rowIndex % 2 === 0 ? "bg-white/20" : "bg-white/10"
                              }`}
                            >
                              <td className="px-6 py-4 text-sm font-medium text-gray-800 border-r border-white/20">
                                <div className="flex items-center">
                                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                                  {row.time}
                                </div>
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700 border-r border-white/20">
                                {row.saturday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 border border-purple-500/20">
                                    {row.saturday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-700">
                                {row.sunday ? (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 border border-purple-500/20">
                                    {row.sunday}
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Schedule */}
              <div className="space-y-4 lg:hidden">
                {[
                  {
                    day: t.days.monday,
                    data: scheduleData.english.map((row) => ({ time: row.time, class: row.monday })),
                  },
                  {
                    day: t.days.tuesday,
                    data: scheduleData.english.map((row) => ({ time: row.time, class: row.tuesday })),
                  },
                  {
                    day: t.days.wednesday,
                    data: scheduleData.english.map((row) => ({ time: row.time, class: row.wednesday })),
                  },
                  {
                    day: t.days.thursday,
                    data: scheduleData.english.map((row) => ({ time: row.time, class: row.thursday })),
                  },
                  {
                    day: t.days.friday,
                    data: scheduleData.english.map((row) => ({ time: row.time, class: row.friday })),
                  },
                  {
                    day: t.days.saturday,
                    data: scheduleData.weekend.map((row) => ({ time: row.time, class: row.saturday })),
                  },
                  {
                    day: t.days.sunday,
                    data: scheduleData.weekend.map((row) => ({ time: row.time, class: row.sunday })),
                  },
                ].map((dayData, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl"
                  >
                    {/* Glass overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-blue-500/10 pointer-events-none"></div>

                    <div className="relative">
                      <div className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-indigo-500/10 backdrop-blur-sm px-6 py-4 border-b border-white/20">
                        <h4 className="font-semibold text-gray-800 flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-primary to-blue-500 rounded-full mr-3"></div>
                          {dayData.day}
                        </h4>
                      </div>
                      <div className="divide-y divide-white/20">
                        {dayData.data.map((slot, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between px-6 py-4 hover:bg-white/20 transition-all duration-200"
                          >
                            <span className="text-sm font-medium text-gray-800 flex items-center">
                              <Clock className="mr-2 h-3 w-3 text-primary" />
                              {slot.time}
                            </span>
                            <span className="text-sm text-gray-700">
                              {slot.class ? (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary border border-primary/20">
                                  {slot.class}
                                </span>
                              ) : (
                                <span className="text-gray-400">—</span>
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center">
                <div className="flex items-center bg-white/60 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 shadow-lg max-w-2xl">
                  <Info className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-sm text-gray-700 text-center">{t.note}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              className="mb-12 text-center"
            >
              <h2 className="mb-2 text-3xl font-bold text-primary">{t.pricesTitle}</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">{t.pricesSubtitle}</p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2"
            >
              {/* Mini Groups Card */}
              <motion.div
                variants={fadeIn}
                className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="absolute right-0 top-0 bg-primary px-3 py-1 text-xs font-medium text-white">
                  {language === "ru" ? "Рекомендуем" : "Recommended"}
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {language === "ru" ? "Мини-группы" : "Mini Groups"}
                  </h3>
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-600">{t.englishLanguage}</h4>
                      <div>
                        <span className="text-2xl font-bold text-primary">1,400 ₽</span>
                        <span className="text-gray-600"> / {language === "ru" ? "занятия" : "lesson"}</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-600">{t.chineseLanguage}</h4>
                      <div>
                        <span className="text-2xl font-bold text-primary">1,500 ₽</span>
                        <span className="text-gray-600"> / {language === "ru" ? "занятия" : "lesson"}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/bookings"
                    className="block w-full rounded-lg bg-primary px-4 py-3 text-center font-medium text-white hover:bg-primary/90 transition-colors"
                  >
                    {language === "ru" ? "Записаться" : "Sign Up"}
                  </Link>
                </div>
              </motion.div>

              {/* Individual Lessons Card */}
              <motion.div
                variants={fadeIn}
                className="relative overflow-hidden rounded-lg border border-primary bg-primary/5 shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {language === "ru" ? "Индивидуальные занятия" : "Individual Lessons"}
                  </h3>
                  <div className="mb-6 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-white p-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-600">{t.englishLanguage}</h4>
                      <div>
                        <span className="text-2xl font-bold text-primary">3,000 ₽</span>
                        <span className="text-gray-600"> / {language === "ru" ? "занятия" : "lesson"}</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white p-4">
                      <h4 className="mb-2 text-sm font-medium text-gray-600">{t.chineseLanguage}</h4>
                      <div>
                        <span className="text-2xl font-bold text-primary">3,000 ₽</span>
                        <span className="text-gray-600"> / {language === "ru" ? "занятия" : "lesson"}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/bookings"
                    className="block w-full rounded-lg bg-primary px-4 py-3 text-center font-medium text-white hover:bg-primary/90 transition-colors"
                  >
                    {language === "ru" ? "Записаться" : "Sign Up"}
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeIn}>
              <h2 className="mb-6 text-3xl font-bold">{t.bookTrial}</h2>
              <Link
                href="/bookings"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 font-medium text-primary transition-colors hover:bg-gray-100"
              >
                <Clock className="mr-2 h-5 w-5" />
                {language === "ru" ? "Записаться" : "Book Now"}
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
       <noscript>
        <div>
          <img 
            src="https://mc.yandex.ru/watch/103804746" 
            style={{position: "absolute", left: "-9999px"}} 
            alt="" 
          />
        </div>
      </noscript>
    </div>
  )
}
