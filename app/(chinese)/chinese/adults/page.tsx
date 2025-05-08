"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import { Phone, Check, ArrowRight, Landmark, BookOpen, Users, Clock, Trophy, ChevronDown, Mail, X, Menu, Globe } from "lucide-react";
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
          schoolSubtitle: "Курсы иностранных языков, Школа искусств",
          phone: "+7 (983) 600-00-00",
          email: "info@tut-school.ru",
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
              { title: "ПОДРОСТКИ", href: "/conversation-club/adults" },
              { title: "ВЗРОСЛЫЕ", href: "/conversation-club/teenagers" },
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
            title: "Расписание занятий",
            description: "Выберите удобный формат обучения",
            formats: [
              {
                title: "Утренние группы",
                time: "Пн, Ср, Пт: 7:30 - 9:00"
              },
              {
                title: "Вечерние группы",
                time: "Вт, Чт: 19:00 - 20:30"
              },
              {
                title: "Группы выходного дня",
                time: "Сб: 10:00 - 13:00"
              }
            ]
          },
          pricing: {
            title: "Стоимость обучения",
            options: [
              {
                title: "Стандарт",
                price: "8 000 ₽/месяц",
                features: [
                  "2 занятия в неделю",
                  "Группа до 8 человек",
                  "Онлайн-материалы",
                  "Домашние задания"
                ]
              },
              {
                title: "Интенсив",
                price: "12 000 ₽/месяц",
                features: [
                  "3 занятия в неделю",
                  "Группа до 6 человек",
                  "Разговорный клуб",
                  "Подготовка к HSK"
                ]
              },
              {
                title: "Премиум",
                price: "20 000 ₽/месяц",
                features: [
                  "Индивидуальные занятия",
                  "Гибкий график",
                  "Бизнес-китайский",
                  "VIP-поддержка"
                ]
              }
            ]
          },
          cta: {
            title: "Начните изучать китайский язык уже сегодня",
            description: "Запишитесь на бесплатный пробный урок и определите свой уровень",
            button: "Записаться на пробный урок"
          },
          languageToggle: "English",
        },
        en: {
          title: "Chinese for Adults",
          subtitle: "Effective Chinese language learning for work, travel, and personal development",
          schoolName: "Tut School",
          schoolSubtitle: "Foreign Language Courses, School of Arts",
          phone: "+7 (983) 600-00-00",
          email: "info@tut-school.ru",
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
              { title: "TEENAGERS", href: "/conversation-club/adults" },
              { title: "ADULTS", href: "//conversation-club/adults" },
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
            description: "Choose your preferred learning format",
            formats: [
              {
                title: "Morning Groups",
                time: "Mon, Wed, Fri: 7:30 - 9:00"
              },
              {
                title: "Evening Groups",
                time: "Tue, Thu: 19:00 - 20:30"
              },
              {
                title: "Weekend Groups",
                time: "Sat: 10:00 - 13:00"
              }
            ]
          },
          pricing: {
            title: "Pricing",
            options: [
              {
                title: "Standard",
                price: "8,000 ₽/month",
                features: [
                  "2 lessons per week",
                  "Up to 8 students",
                  "Online materials",
                  "Homework assignments"
                ]
              },
              {
                title: "Intensive",
                price: "12,000 ₽/month",
                features: [
                  "3 lessons per week",
                  "Up to 6 students",
                  "Conversation club",
                  "HSK preparation"
                ]
              },
              {
                title: "Premium",
                price: "20,000 ₽/month",
                features: [
                  "Individual lessons",
                  "Flexible schedule",
                  "Business Chinese",
                  "VIP support"
                ]
              }
            ]
          },
          cta: {
            title: "Start Learning Chinese Today",
            description: "Book a free trial lesson and determine your level",
            button: "Book a Trial Lesson"
          },
          languageToggle: "Русский",
        }
      };
      const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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

 {/* Combined Header and Mobile Menu */}
      <header className={`border-b bg-white shadow-sm transition-all duration-300 sticky top-0 z-50 ${isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""}`}>
        {/* Main Header Content */}
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
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
            <button 
              className="rounded-md p-1 text-gray-700 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
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
                <span>{t.nav.about}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeDropdown === "about-mobile" ? "rotate-180" : ""}`}
                />
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
                <span>{t.nav.courses}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeDropdown === "courses-mobile" ? "rotate-180" : ""}`}
                />
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
                <span>{t.nav.chinese}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeDropdown === "chinese-mobile" ? "rotate-180" : ""}`}
                />
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
                <span>{t.nav.club}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeDropdown === "club-mobile" ? "rotate-180" : ""}`}
                />
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
                <span>{t.nav.masterclass}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    activeDropdown === "masterclass-mobile" ? "rotate-180" : ""
                  }`}
                />
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
              className="block rounded-lg border border-gray-200 p-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              {t.nav.news}
            </Link>

            {/* Contacts Link */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg border border-gray-200 p-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              {t.nav.contacts}
            </Link>
          </div>
        </div>
      </header>


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
                  <h3 className="mb-4 text-xl font-bold text-[#5C162E]">{level.title}</h3>
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

      {/* Benefits Section */}
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
                  src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg"
                  alt="Chinese class"
                  fill
                  className="object-cover"
                />
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
            <p className="mb-12 text-center text-lg text-white/90">{t.schedule.description}</p>
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

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="mb-12 text-center text-3xl font-bold text-[#5C162E]">
              {t.pricing.title}
            </h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {t.pricing.options.map((option, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl">
                  <h3 className="mb-2 text-xl font-bold text-[#5C162E]">{option.title}</h3>
                  <p className="mb-6 text-2xl font-bold text-[#5C162E]">{option.price}</p>
                  <ul className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#5C162E]" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
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