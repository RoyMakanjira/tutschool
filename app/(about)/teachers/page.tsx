"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import {
  Phone,
  Mail,
  Globe,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Clock,
  Landmark,
  Info,
  BookOpen,
  MessageCircle,
  Award,
  FileText,
} from "lucide-react"

export default function Teachers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

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

  const t = {
    schoolName: "Tut School",
    schoolSubtitle: "Курсы иностранных языков",
    phone: "+7 (983) 662-97-30",
    email: "info@tutschool.ru",
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
        { title: "КИТАЙСКАЯ КАЛЛИГРАФИЯ", href: "/chinese-calligraphy" },
        { title: "ТВОРЧЕСКИЕ МАСТЕР-КЛАССЫ", href: "/creative-workshops" },
      ],
      news: "НОВОСТИ",
      contacts: "КОНТАКТЫ",
    },
    teachers: {
      title: "НАШИ ПРЕПОДАВАТЕЛИ",
      subtitle: "Познакомьтесь с нашей командой профессиональных педагогов",
      cta: "Записаться на пробный урок",
      breadcrumbs: {
        home: "Главная",
        teachers: "Преподаватели",
      },
    },
    teachersList: [
        {
        name: "Юлия",
        position: "Преподаватель английского языка",
        education: "Trinity College London",
        alma: "Забайкальский государственный педагогический университет",
        experience: "Опыт преподавания: 15 лет",
        description:
          "Анна специализируется на обучении детей младшего и среднего школьного возраста. Использует коммуникативную методику и игровые подходы для эффективного усвоения материала.",
        certifications: ["CertTESOL", ],
        languages: [" Английский (C2)"],
        media: [
          {
            type: "image",
            src: "/assets/teachers/Yulia.jpg",
            alt: "Анна Петрова на уроке с детьми",
          },
          {
            type: "certificate",
            src: "/teachers/anna-petrova-celta.jpg",
            alt: "Language Instructor",
          },
        ],
      },
      {
        name: " Анастасия",
        position: "Преподаватель китайского языка ",
        education: "Пекинский университет языка и культуры (2024 год)",
        experience: "МГУ им. Ломоносова, Институт стран Азии и Африки (2021-2025)",
        description:
          "Дмитрий работает со взрослыми студентами и подростками, готовит к международным экзаменам IELTS и TOEFL. Имеет опыт работы в языковых школах Великобритании.",
        certifications: ["HSK5" ],
        languages: ["Китайский (C2)"],
        media: [
          {
            type: "image",
            src: "/assets/teachers/Воробьева-Анастасия.jpg",
            alt: "Воробьева-Анастасия",
          },
          {
            type: "certificate",
            src: "/teachers/dmitry-ivanov-delta.jpg",
            alt: "Language Instructor",
          },
        ],
      },
      {
        name: "Лаки",
        position: "Преподаватель английского языка",
        education: "Московский Авиационный Институт",
        experience: "Опыт преподавания: 5 лет",
        description:
          "Анна специализируется на обучении детей младшего и среднего школьного возраста. Использует коммуникативную методику и игровые подходы для эффективного усвоения материала.",
        certifications: ["TESOL/TEFL", ""],
        languages: ["Английский (C2)", ],
        media: [
          {
            type: "image",
            src: "/assets/teachers/lackson.jpg",
            alt: "Language Instructor",
          },
          {
            type: "certificate",
            src: "/teachers/anna-petrova-celta.jpg",
            alt: "Сертификат CELTA Анны Петровой",
          },
        ],
      },
    ],
    qualifications: {
      title: "КВАЛИФИКАЦИИ И СЕРТИФИКАТЫ",
      description: "Наши преподаватели имеют международные сертификаты и постоянно повышают свою квалификацию",
      items: [
        "Сертификаты CELTA и DELTA от Кембриджского университета",
        "Сертификаты TKT (Teaching Knowledge Test)",
        "Сертификаты HSK и HSKK для преподавателей китайского языка",
        "Сертификаты IELTS Examiner и TOEFL Instructor",
        "Регулярное участие в методических семинарах и конференциях",
      ],
    },
    methodology: {
      title: "НАША МЕТОДОЛОГИЯ",
      description: "Мы используем коммуникативный подход и современные методики преподавания",
      items: [
        {
          title: "Коммуникативный подход",
          description: "Фокус на развитии разговорных навыков и практическом использовании языка",
        },
        {
          title: "Индивидуальный подход",
          description: "Учет особенностей и потребностей каждого студента",
        },
        {
          title: "Интерактивное обучение",
          description: "Использование игр, ролевых ситуаций и мультимедийных материалов",
        },
      ],
    },
    joinTeam: {
      title: "ПРИСОЕДИНЯЙТЕСЬ К НАШЕЙ КОМАНДЕ",
      description: "Мы всегда рады талантливым и увлеченным преподавателям",
      requirements: [
        "Высшее лингвистическое или педагогическое образование",
        "Опыт преподавания от 2 лет",
        "Владение современными методиками преподавания",
        "Любовь к своему делу и желание развиваться",
      ],
      cta: "Связаться с нами",
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
      {/* Top Bar */}
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
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`border-b bg-white shadow-sm transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""}`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Логотип Tut School"
                  width={120}
                  height={120}
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

        {/* Mobile Menu Content */}
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

      <main>
        {/* Hero Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
                <Link href="/" className="hover:text-primary">
                  {t.teachers.breadcrumbs.home}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>{t.teachers.breadcrumbs.teachers}</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold text-primary">{t.teachers.title}</h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">{t.teachers.subtitle}</p>
            </div>
          </div>
        </section>

        {/* Teachers List Section */}
              <section id="teachers-list" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.teachersList.map((teacher, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
              >
                {/* Teacher Image - Updated with larger height */}
                 <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-lg">
        {teacher.media[0].type === "image" && (
          <Image
            src={teacher.media[0].src}
            alt={`${teacher.name}, Professional Teacher`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 30vw"
            priority={index < 3}
          />
        )}
      </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{teacher.name}</h3>
                  <p className="mb-4 text-sm font-medium text-primary">{teacher.position}</p>
                  <p className="mb-4 text-sm font-medium text-primary">{teacher.experience}</p>
                  <div className="mb-4 space-y-2 text-sm text-gray-600">
                    <p>{teacher.education}</p>
                    <p>{teacher.alma}</p>
                  </div>
                  <div className="mb-3">
                    <p className="mb-1 text-xs font-semibold uppercase text-gray-500">
                      Сертификаты:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {teacher.certifications.map((cert, i) => (
                        <span
                          key={i}
                          className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase text-gray-500">
                      Языки:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {teacher.languages.map((lang, i) => (
                        <span key={i} className="text-xs text-gray-600">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Qualifications Section */}
        <section id="qualifications" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-primary">{t.qualifications.title}</h2>
              <p className="mb-8 text-lg text-gray-600">{t.qualifications.description}</p>
              <ul className="space-y-4 text-left">
                {t.qualifications.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section id="methodology" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-center text-3xl font-bold text-primary">{t.methodology.title}</h2>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">{t.methodology.description}</p>
            <div className="grid gap-8 md:grid-cols-3">
              {t.methodology.items.map((item, index) => (
                <div key={index} className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="mb-4 text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section id="join-team" className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-center text-3xl font-bold text-primary">{t.joinTeam.title}</h2>
              <p className="mb-8 text-center text-lg text-gray-600">{t.joinTeam.description}</p>
              <div className="mb-8">
                <h3 className="mb-4 text-xl font-semibold">Требования к кандидатам:</h3>
                <ul className="space-y-3">
                  {t.joinTeam.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary/90"
                >
                  {t.joinTeam.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-16">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-xl bg-primary shadow-xl">
              <div className="relative">
                <div className="relative px-8 py-16 text-center text-white md:px-12 lg:px-16">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.trial.title}</h2>
                  <Link
                    href="/bookings"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-primary transition-all hover:bg-gray-100 hover:gap-3"
                  >
                    {t.trial.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
                <noscript>
        <div>
          <img 
            src="https://mc.yandex.ru/watch/103804746" 
            style={{position: "absolute", left: "-9999px"}} 
            alt="" 
          />
        </div>
      </noscript>
        </section>
      </main>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Наши преподаватели - Tut School",
      "description": "Познакомьтесь с нашей командой профессиональных педагогов",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Главная",
            "item": "https://tutschool.ru/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Преподаватели",
            "item": "https://tutschool.ru/teachers"
          }
        ]
      },
      "mainEntity": t.teachersList.map(teacher => ({
        "@type": "Person",
        "name": teacher.name,
        "jobTitle": teacher.position,
        "alumniOf": teacher.alma,
        "hasOccupation": {
          "@type": "Occupation",
          "name": teacher.position,
          "experienceRequirements": teacher.experience
        },
        "description": teacher.description,
        "knowsLanguage": teacher.languages,
        "hasCredential": teacher.certifications.map(cert => ({
          "@type": "EducationalOccupationalCredential",
          "name": cert
        }))
      }))
    })
  }}
/>
    </div>
  )
}