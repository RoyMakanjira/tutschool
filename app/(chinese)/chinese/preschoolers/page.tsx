"use client";

import { useState, useRef, useEffect } from "react"
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check, ArrowRight, Clock, Phone, Landmark, Mail, Globe, ChevronDown, X, Menu } from "lucide-react";
import { FadeIn } from "@/components/animations/scroll-animations";

export default function ChinesePreschoolers() {
    const [language, setLanguage] = useState<"ru" | "en">("ru")
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [isScrolled, setIsScrolled] = useState(false)
  
   
    const dropdownRef = useRef<HTMLDivElement>(null)
  


  
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
      title: "Китайский язык для дошкольников",
      subtitle: "Увлекательное погружение в китайский язык и культуру для детей 3-6 лет",
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков, Школа искусств",
      phone: "+7 (983) 600-00-00",
      email: "info@tut-school.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      rating: "4.8 на Яндексе",
      search: "Поиск",
      workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
      description: "Наша программа разработана специально для самых маленьких учеников, сочетая игровой подход с эффективными методиками обучения китайскому языку.",
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
          { title: "ПОДРОСТКИ", href: "/conversation-club/adults" },
          { title: "ВЗРОСЛЫЕ", href: "/conversation-club/teenagers" },
        ],
        news: "НОВОСТИ",
        masterclasses: "МАСТЕР-КЛАССЫ",
        contacts: "КОНТАКТЫ",
      },
      benefits: {
        title: "Почему выбирают нашу программу",
        items: [
          "Игровой формат обучения с использованием песен и стихов",
          "Знакомство с китайской культурой через творческие занятия",
          "Развитие навыков произношения с носителями языка",
          "Маленькие группы до 6 человек",
          "Регулярные открытые уроки для родителей",
          "Подготовка к международным детским экзаменам",
        ]
      },
      curriculum: {
        title: "Программа обучения",
        items: [
          {
            title: "Базовые иероглифы",
            description: "Изучение простых иероглифов через рисование и игры"
          },
          {
            title: "Произношение и тоны",
            description: "Освоение правильного произношения и тонов китайского языка"
          },
          {
            title: "Разговорная практика",
            description: "Базовые диалоги и ситуативное общение"
          },
          {
            title: "Культурное погружение",
            description: "Знакомство с китайскими традициями и праздниками"
          }
        ]
      },
      schedule: {
        title: "Расписание занятий",
        description: "Занятия проводятся 2 раза в неделю по 45 минут",
        times: [
          "Понедельник и Среда: 10:00 - 10:45",
          "Вторник и Четверг: 17:00 - 17:45",
          "Суббота: 11:00 - 12:30 (сдвоенное занятие)"
        ]
      },
      cta: {
        title: "Запишитесь на бесплатный пробный урок",
        description: "Познакомьтесь с нашими преподавателями и методикой обучения",
        button: "Записаться на пробный урок"
      },
      languageToggle: "English",
    },
    en: {
      title: "Chinese for Preschoolers",
      subtitle: "An engaging immersion into Chinese language and culture for children aged 3-6",
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language Courses, School of Arts",
      phone: "+7 (983) 600-00-00",
      email: "info@tut-school.ru",
      address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
      rating: "4.8 on Yandex",
      search: "Search",
      workingHours: "Mon-Fri: 9:00-21:00, Sat: 10:00-18:00",
      description: "Our program is specially designed for the youngest learners, combining a playful approach with effective Chinese language teaching methods.",
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
          { title: "TEENAGERS", href: "/conversation-club/adults" },
          { title: "ADULTS", href: "//conversation-club/adults" },
        ],
        news: "NEWS",
        masterclasses: "MASTERCLASS",
        contacts: "CONTACTS",
      },
      benefits: {
        title: "Why Choose Our Program",
        items: [
          "Playful learning format using songs and rhymes",
          "Introduction to Chinese culture through creative activities",
          "Pronunciation skills development with native speakers",
          "Small groups up to 6 students",
          "Regular open lessons for parents",
          "Preparation for international children's exams",
        ]
      },
      curriculum: {
        title: "Curriculum",
        items: [
          {
            title: "Basic Characters",
            description: "Learning simple characters through drawing and games"
          },
          {
            title: "Pronunciation and Tones",
            description: "Mastering correct pronunciation and Chinese tones"
          },
          {
            title: "Speaking Practice",
            description: "Basic dialogues and situational communication"
          },
          {
            title: "Cultural Immersion",
            description: "Introduction to Chinese traditions and festivals"
          }
        ]
      },
      schedule: {
        title: "Class Schedule",
        description: "Classes are held twice a week for 45 minutes",
        times: [
          "Monday and Wednesday: 10:00 - 10:45",
          "Tuesday and Thursday: 17:00 - 17:45",
          "Saturday: 11:00 - 12:30 (double session)"
        ]
      },
      cta: {
        title: "Sign up for a free trial lesson",
        description: "Meet our teachers and experience our teaching methodology",
        button: "Book a trial lesson"
      },
      languageToggle: "Русский",
    },
    
  };

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

  return (
    <div className="min-h-screen bg-white">

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
          isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-md" : "relative z-50"
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
                <Link href="/masterclasses" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.masterclasses}
                </Link>
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
              href="/masterclasses"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
            >
              {t.nav.masterclasses}
            </Link>
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
          </nav>
        </div>
      </div>


      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/8500690/pexels-photo-8500690.jpeg"
          alt="Chinese class for kids"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#5C162E]/80"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h1 className="mb-4 max-w-2xl text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                {t.title}
              </h1>
              <p className="mb-8 max-w-xl text-lg text-white/90 md:text-xl">
                {t.subtitle}
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-[#5C162E] transition-all hover:bg-white/90"
              >
                {t.cta.button}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="mb-6 text-3xl font-bold text-[#5C162E]">{t.benefits.title}</h2>
                <ul className="space-y-4">
                  {t.benefits.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[#5C162E]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/9016474/pexels-photo-9016474.jpeg"
                  alt="Chinese cultural activities"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-[#5C162E]">
              {t.curriculum.title}
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.curriculum.items.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                  <h3 className="mb-4 text-xl font-bold text-[#5C162E]">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-[#5C162E] p-8 text-white md:p-12">
            <FadeIn>
              <h2 className="mb-6 text-3xl font-bold">{t.schedule.title}</h2>
              <p className="mb-8 text-lg text-white/90">{t.schedule.description}</p>
              <ul className="space-y-4">
                {t.schedule.times.map((time, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="h-5 w-5" />
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <FadeIn>
              <h2 className="mb-4 text-3xl font-bold text-[#5C162E]">{t.cta.title}</h2>
              <p className="mb-8 text-lg text-gray-600">{t.cta.description}</p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#5C162E] px-8 py-3 font-medium text-white transition-all hover:bg-[#5C162E]/90"
              >
                {t.cta.button}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}