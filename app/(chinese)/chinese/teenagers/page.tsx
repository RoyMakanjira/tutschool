"use client"

import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  Clock, 
  Calendar, 
  Users, 
  BookOpen, 
  Mail,
  Globe,
  ChevronDown,
  Menu,
  Phone,
  Landmark,
  X,
  CheckCircle,
  ArrowRight,
  Award,
  Brain,
  Target,
  Info,
  FileText,
  MessageCircle
} from "lucide-react"


export default function ChineseTeenagersPage() {
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
      schoolName: "Tut School",
      languageToggle: "English",
      schoolSubtitle: "Курсы иностранных языков",
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
      h1: "Китайский язык для подростков",
      heroSubtitle: "Профессиональная подготовка к HSK и развитие навыков для будущей карьеры",
      programOverview: "О программе",
      programDescription: "Интенсивный курс китайского языка для подростков с фокусом на подготовку к международным экзаменам HSK и развитие практических навыков коммуникации.",
      schedule: "3-4 занятия в неделю",
      duration: "90 минут каждое занятие",
      groupSize: "Мини-группы до 8 человек",
      hskPrep: "Подготовка к HSK",
      keyBenefits: "Ключевые преимущества",
      hskCertification: "Сертификация HSK",
      hskDescription: "Подготовка к международному экзамену HSK всех уровней",
      advancedLearning: "Углубленное изучение",
      learningDescription: "Комплексное развитие всех языковых навыков",
      careerProspects: "Карьерные перспективы",
      careerDescription: "Подготовка к будущей академической и профессиональной деятельности",
      courseFeatures: "Особенности курса",
      allLevels: "Подготовка к HSK всех уровней",
      conversationClubs: "Разговорные клубы с носителями языка",
      businessChinese: "Бизнес-китайский для старших групп",
      culturalEvents: "Культурные мероприятия и практика",
      ctaTitle: "Готовы начать свой путь к успеху?",
      ctaSubtitle: "Запишитесь на бесплатный пробный урок и начните свое путешествие в мир китайского языка",
      startLearning: "Начать обучение",
    },
    en: {
      schoolName: "Tut School",
      languageToggle: "Русский",
      schoolSubtitle: "Foreign Language Courses",
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
      h1: "Chinese Language for Teenagers",
      heroSubtitle: "Professional HSK preparation and skill development for future careers",
      programOverview: "Program Overview",
      programDescription: "Intensive Chinese language course for teenagers focusing on HSK international exam preparation and development of practical communication skills.",
      schedule: "3-4 lessons per week",
      duration: "90 minutes each lesson",
      groupSize: "Mini-groups up to 8 people",
      hskPrep: "HSK exam preparation",
      keyBenefits: "Key Benefits",
      hskCertification: "HSK Certification",
      hskDescription: "Preparation for all levels of HSK international exam",
      advancedLearning: "Advanced Learning",
      learningDescription: "Comprehensive development of all language skills",
      careerProspects: "Career Prospects",
      careerDescription: "Preparation for future academic and professional activities",
      courseFeatures: "Course Features",
      allLevels: "All-level HSK preparation",
      conversationClubs: "Conversation clubs with native speakers",
      businessChinese: "Business Chinese for advanced groups",
      culturalEvents: "Cultural events and practice",
      ctaTitle: "Ready to Start Your Path to Success?",
      ctaSubtitle: "Sign up for a free trial lesson and begin your journey into the world of Chinese language",
      startLearning: "Start Learning"
    }
  };

  const t = translations[language];

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
  
  // ... rest of your component code remains the same ...
  
  return (
    <div className="min-h-screen bg-white">
<Head>
  <title>Китайский для подростков | Подготовка к HSK в Tut School, Химки</title>
  <meta 
    name="description" 
    content="Профессиональные курсы китайского языка для подростков в Новогорске. Подготовка к HSK, разговорные клубы с носителями, бизнес-китайский. Запишитесь на пробный урок!" 
  />
  <meta
    name="keywords"
    content="китайский для подростков, HSK подготовка Химки, курсы китайского Новогорск, китайский язык для школьников, обучение китайскому языку, Tut School китайский, международные экзамены по китайскому, разговорный клуб китайского, бизнес китайский"
  />
  
  {/* Open Graph / Social Media Meta Tags */}
  <meta property="og:title" content="Курсы китайского для подростков | Подготовка к HSK | Tut School" />
  <meta 
    property="og:description" 
    content="Эффективные курсы китайского языка с подготовкой к международным экзаменам HSK для подростков в Химках. Мини-группы, носители языка, культурные мероприятия." 
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tut-school.ru/chinese/teenagers" />
  <meta property="og:image" content="https://tut-school.ru/images/chinese-teenagers-og.jpg" />
  <meta property="og:site_name" content="Tut School" />
  <meta property="og:locale" content="ru_RU" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Китайский для подростков | Tut School Новогорск" />
  <meta 
    name="twitter:description" 
    content="Профессиональная подготовка к HSK и развитие языковых навыков для подростков. 3-4 занятия в неделю с опытными преподавателями." 
  />
  <meta name="twitter:image" content="https://tutschool.ru/images/chinese-teenagers-twitter.jpg" />
  
  {/* Canonical URL */}
  <link rel="canonical" href="https://tutschool.ru/chinese/teenagers" />
  
  {/* Alternate Languages */}
  <link rel="alternate" hrefLang="ru" href="https://tutschool.ru/ru/chinese/teenagers" />
  <link rel="alternate" hrefLang="en" href="https://tutschool.ru/en/chinese/teenagers" />
  
  {/* Course Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Китайский язык для подростков с подготовкой к HSK",
        "description": "Интенсивный курс китайского языка для подростков 13-17 лет с подготовкой к международным экзаменам HSK всех уровней",
        "provider": {
          "@type": "LanguageSchool",
          "name": "Tut School",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Заречная улица, 5, корп. 2",
            "addressLocality": "Химки",
            "addressRegion": "Московская область",
            "postalCode": "141400",
            "addressCountry": "RU"
          },
          "telephone": "+79836000000"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "in-person",
          "courseWorkload": "P3H30M",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "RUB",
            "availability": "https://schema.org/InStock"
          }
        },
        "educationalLevel": "secondary",
        "teaches": "Chinese language",
        "competencyRequired": "Beginner to Advanced",
        "timeRequired": "P6M"
      }
    `}
  </script>
  
  {/* Local Business Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LanguageSchool",
        "name": "Tut School",
        "description": "Школа иностранных языков в Новогорске. Курсы китайского и английского для детей и взрослых.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Заречная улица, 5, корп. 2",
          "addressLocality": "Химки",
          "addressRegion": "Московская область",
          "postalCode": "141400",
          "addressCountry": "RU"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "55.894611",
          "longitude": "37.374147"
        },
        "telephone": "+79836000000",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "21:00"
        },
        "sameAs": [
          "https://t.me/TUTschoolNovogorsk",
          "https://api.whatsapp.com/send/?phone=%2B79167349246"
        ]
      }
    `}
  </script>
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
          <section className="relative bg-primary py-20 text-white">
                <div className="container mx-auto px-4">
                  <motion.div
                    variants={fadeIn}
                    className="text-center"
                  >
                    <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.h1}</h1>
                    <p className="mx-auto max-w-2xl text-lg text-white/80">{t.heroSubtitle}</p>
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-[url('/assets/pattern.svg')] opacity-10"></div>
              </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#5C162E]">
                {t.programOverview}
              </h2>
              <p className="text-gray-600">
                {t.programDescription}
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Clock, text: t.schedule },
                  { icon: Calendar, text: t.duration },
                  { icon: Users, text: t.groupSize },
                  { icon: BookOpen, text: t.hskPrep },
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <item.icon className="h-5 w-5 text-[#5C162E]" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-lg max-h-[1280px]">
              <Image
                src="/assets/gallery/Chinese-Practice.jpg"
                alt="Teenage students in class"
                height={1280}
                width={960}
                className="object-cover"
                
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#5C162E]">
            {t.keyBenefits}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Award,
                title: t.hskCertification,
                description: t.hskDescription
              },
              {
                icon: Brain,
                title: t.advancedLearning,
                description: t.learningDescription
              },
              {
                icon: Target,
                title: t.careerProspects,
                description: t.careerDescription
              }
            ].map((item, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-[1.02]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#5C162E]/10">
                  <item.icon className="h-6 w-6 text-[#5C162E]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#5C162E]">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative  overflow-hidden rounded-lg md:h-[400px] order-2 md:order-1">
              <Image
                src="/assets/gallery/Art-Piece.jpeg"
                alt="Students practicing Chinese"
                height={960}
                width={540}
                className="object-cover"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#5C162E]">
                {t.courseFeatures}
              </h2>
              <ul className="space-y-4">
                {[
                  t.allLevels,
                  t.conversationClubs,
                  t.businessChinese,
                  t.culturalEvents
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#5C162E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#5C162E] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">
            {t.ctaTitle}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            {t.ctaSubtitle}
          </p>
          <Link
            href="/bookings"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-[#5C162E] transition-all hover:bg-gray-100 hover:shadow-lg"
          >
            {t.startLearning}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}