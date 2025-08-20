"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion"
import { Phone, Check, ArrowRight, Landmark, BookOpen, Users, Clock, Trophy, ChevronDown, Mail, X, Menu, Globe, Info, MessageCircle, Award, FileText } from "lucide-react";
import { FadeIn } from "@/components/animations/scroll-animations";


export default function ChineseAdults() {
      const [language, setLanguage] = useState<"ru" | "en">("ru")
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
      const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
      const [isScrolled, setIsScrolled] = useState(false)
      const [isLoaded, setIsLoaded] = useState(false)
    
     
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
          
          title: "Китайский язык для взрослых",
          subtitle: "Эффективное обучение китайскому языку для работы, путешествий и саморазвития",
          schoolName: "Tut School",
          schoolSubtitle: "Курсы иностранных языков",
          phone: "+7 (983) 662-97-30",
          email: "info@tutschool.ru",
          address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
          rating: "4.8 на Яндексе",
          search: "Поиск",
         workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
          description: "Наша программа сочетает современные методики с индивидуальным подходом, помогая достичь ваших языковых целей.",
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
          levels: {
            title: "Уровни обучения",
            items: [
              {
                title: "Начальный (HSK 1-2)",
                description: "Базовая коммуникация, основы иероглифики и грамматики"
              },
              {
                title: "Средний (HSK 3-4)",
                description: "Уверенное общение, деловой китайский, углубленная грамматика"
              },
              {
                title: "Продвинутый (HSK 5-6)",
                description: "Свободное владение, культурные нюансы, профессиональная коммуникация"
              }
            ]
          },
          features: {
            title: "Особенности программы",
            items: [
              {
                icon: "BookOpen",
                title: "Комплексный подход",
                description: "Развитие всех языковых навыков: говорение, письмо, чтение, аудирование"
              },
              {
                icon: "Users",
                title: "Практика с носителями",
                description: "Регулярные разговорные клубы с носителями языка"
              },
              {
                icon: "Clock",
                title: "Гибкий график",
                description: "Утренние, вечерние занятия и группы выходного дня"
              },
              {
                icon: "Trophy",
                title: "Подготовка к HSK",
                description: "Целенаправленная подготовка к международным экзаменам"
              }
            ]
          },
          benefits: {
            title: "Преимущества обучения у нас",
            items: [
              "Индивидуальный план обучения",
              "Современные учебные материалы",
              "Онлайн-поддержка между занятиями",
              "Регулярная практика с носителями языка",
              "Подготовка к международным экзаменам",
              "Бизнес-китайский по запросу"
            ]
          },
          schedule: {
            title: "",
            formats: [
              {
                title: "Расписание занятий",
                time: "Пн-Пт:: 9:00 - 21:00",
                
              },
            ]
          },
          pricing: {
            title: "Тарифы",
            options: [
              {
                title: "Мини-группы",
                price: "1500 ₽/занятия",
              },
              {
                title: "Индивидуальные занятия",
                price: "3000 ₽/занятия",
              }
            ]
          },
          cta: {
            title: "Начните изучать китайский язык уже сегодня",
            description: "Запишитесь на бесплатный пробный урок и определите свой уровень",
            button: "Записаться на бесплатный урок-диагностику"
          },
          languageToggle: "English",
        },
        en: {
          title: "Chinese for Adults",
          subtitle: "Effective Chinese language learning for work, travel, and personal development",
          schoolName: "Tut School",
          schoolSubtitle: "Foreign Language Courses",
          phone: "+7 (983) 662-97-30",
          email: "info@tutschool.ru",
          address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
          rating: "4.8 on Yandex",
          search: "Search",
          workingHours: "Mon-Fri: 9:00-21:00, Sat: 10:00-18:00",
          description: "Our program combines modern methodologies with a personalized approach to help you achieve your language goals.",
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
          levels: {
            title: "Learning Levels",
            items: [
              {
                title: "Beginner (HSK 1-2)",
                description: "Basic communication, fundamentals of characters and grammar"
              },
              {
                title: "Intermediate (HSK 3-4)",
                description: "Confident communication, business Chinese, advanced grammar"
              },
              {
                title: "Advanced (HSK 5-6)",
                description: "Fluent proficiency, cultural nuances, professional communication"
              }
            ]
          },
          features: {
            title: "Program Features",
            items: [
              {
                icon: "BookOpen",
                title: "Comprehensive Approach",
                description: "Development of all language skills: speaking, writing, reading, listening"
              },
              {
                icon: "Users",
                title: "Native Speaker Practice",
                description: "Regular conversation clubs with native speakers"
              },
              {
                icon: "Clock",
                title: "Flexible Schedule",
                description: "Morning, evening, and weekend group options"
              },
              {
                icon: "Trophy",
                title: "HSK Preparation",
                description: "Targeted preparation for international exams"
              }
            ]
          },
          benefits: {
            title: "Why Choose Us",
            items: [
              "Personalized learning plan",
              "Modern learning materials",
              "Online support between classes",
              "Regular practice with native speakers",
              "International exam preparation",
              "Business Chinese upon request"
            ]
          },
          schedule: {
            title: "Class Schedule",
            formats: [
             
              {
                title: "",
                time: "Tue, Thu: 9:00 - 10:00"
              },
              
            ]
          },
          pricing: {
            title: "Pricing Plans",
            options: [
              {
                title: "Mini-groups",
                price: "1500 ₽/lesson",
              
              },
              {
                title: "Individual lessons",
                price: "3 000 ₽/lesson",
              }
            ]
          },
          cta: {
            title: "Start Learning Chinese Today",
            description: "Book a free trial lesson and determine your level",
            button: "Sign up for a free diagnostic lesson"
          },
          languageToggle: "Русский",
        }
      };
      const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  // Study images data
  const studyImages = [
    {
      src: "/assets/courses/TutSchool-Learning.jpg",
      alt: "Adults learning Chinese in a classroom",
      description: language === "ru" 
        ? "Групповое занятие китайским языком с преподавателем" 
        : "Group Chinese lesson with a teacher"
    },
    {
      src: "/C-Adults.jpg",
      alt: "Woman studying Chinese characters",
      description: language === "ru"
        ? "Индивидуальное изучение китайских иероглифов"
        : "Individual study of Chinese characters"
    },
    {
      src: "/assets/gallery/Worshop.jpg",
      alt: "Online Chinese lesson",
      description: language === "ru"
        ? "Онлайн-урок китайского языка"
        : "Online Chinese language lesson"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

      {/* Combined Header and Mobile Menu */}
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
                <span className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  {t.nav.about}
                </span>
                {activeDropdown === "about-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
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
                <span className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  {t.nav.courses}
                </span>
                {activeDropdown === "courses-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
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
                <span className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  {t.nav.chinese}
                </span>
                {activeDropdown === "chinese-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
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
                <span className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  {t.nav.club}
                </span>
                {activeDropdown === "club-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
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
                <span className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {t.nav.masterclass}
                </span>
                {activeDropdown === "masterclass-mobile" ? (
                  <X className="h-5 w-5 transition-transform" />
                ) : (
                  <ChevronDown className="h-5 w-5 transition-transform" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
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
              className="flex items-center gap-2 rounded-lg border border-gray-200 p-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              <FileText className="h-5 w-5 text-primary" />
              {t.nav.news}
            </Link>

            {/* Contacts Link */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 p-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              <Phone className="h-5 w-5 text-primary" />
              {t.nav.contacts}
            </Link>
          </div>
        </div>
      </header>

     <main className="flex-1 bg-gray-50">
        {/* Hero Section with first study image */}
        <section className="relative bg-primary py-20 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeIn}
              className="text-center"
            >
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.title}</h1>
              <p className="mx-auto max-w-2xl text-lg text-white/80">{t.subtitle}</p>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>

        </section>

        {/* Levels Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="mb-12 text-center text-3xl font-bold text-[#5C162E]">
                {t.levels.title}
              </h2>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-3">
              {t.levels.items.map((level, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                    <div className="relative mb-4 h-96 overflow-hidden rounded-md">
                      <Image
                        src={studyImages[index % studyImages.length].src}
                        alt={studyImages[index % studyImages.length].alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[#5C162E]">{level.title}</h3>
                    <p className="text-gray-600">{level.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="mb-12 text-center text-3xl font-bold text-[#5C162E]">
                {t.features.title}
              </h2>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {t.features.items.map((feature, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="rounded-lg bg-white p-6 text-center shadow-lg transition-all hover:shadow-xl">
                    {feature.icon === "BookOpen" && <BookOpen className="mx-auto mb-4 h-8 w-8 text-[#5C162E]" />}
                    {feature.icon === "Users" && <Users className="mx-auto mb-4 h-8 w-8 text-[#5C162E]" />}
                    {feature.icon === "Clock" && <Clock className="mx-auto mb-4 h-8 w-8 text-[#5C162E]" />}
                    {feature.icon === "Trophy" && <Trophy className="mx-auto mb-4 h-8 w-8 text-[#5C162E]" />}
                    <h3 className="mb-2 text-lg font-bold text-[#5C162E]">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section with second study image */}
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
                <div className="relative w-full h-auto aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={studyImages[1].src}
                    alt={studyImages[1].alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                    {studyImages[1].description}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="bg-[#5C162E] py-16 text-white">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="mb-8 text-center text-3xl font-bold">{t.schedule.title}</h2>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-3">
              {t.schedule.formats.map((format, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                    <h3 className="mb-4 text-xl font-bold">{format.title}</h3>
                    <p className="text-white/90">{format.time}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section with third study image */}
        <section className="py-16">
          <div className="mb-16">
                      <h2 className="mb-8 text-3xl font-bold text-[#5C162E] text-center">{t.pricing.title}</h2>
                      <div className="grid gap-6 md:grid-cols-2">
                        {t.pricing.options.map((option, index) => (
                          <div
                            key={index}
                            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                          >
                            <h3 className="mb-2 text-xl font-semibold ">{option.title}</h3>
                            <p className="mb-4 text-2xl font-bold text-[#5C162E]">{option.price}</p>
                            <div className="mb-6 flex items-center text-gray-600">
                              
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <FadeIn>
                <h2 className="mb-4 text-3xl font-bold text-[#5C162E]">{t.cta.title}</h2>
                <Link
                  href="/bookings"
                  className="inline-flex items-center gap-2 rounded-full bg-[#5C162E] px-8 py-3 font-medium text-white transition-all hover:bg-[#5C162E]/90"
                >
                  {t.cta.button}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </FadeIn>
            </div>
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
  );
}