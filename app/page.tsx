"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import ValuesSectionCard from "@/components/ValuesSectionCard"
import { ScrollProgress, ScrollSpy } from "@/components/animations/scroll-animations"
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Star,
  MessageSquare,
  Navigation,
  Send,
  ChevronRight,
  Calendar,
  User,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Clock,
  TextIcon as Telegram,
  ChevronLeft, Youtube,
  Headphones,
  Landmark,
} from "lucide-react"
import PromotionalBanner from "@/components/PromotionalBanner"

export default function Home() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
  const [sliderDirection, setSliderDirection] = useState<"next" | "prev" | null>(null)
  const [activeSection, setActiveSection] = useState<string>("hero")
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

  const heroImages = [
    "/assets/slider/Slider-image-1.jpg?height=600&width=1600&text=Students in classroom",
    "/assets/slider/Slider-Image-2.jpg?height=600&width=1600&text=Language Learning",
    "/assets/slider/Slider-image-3.jpg?height=600&width=1600&text=Arts and Creativity",
    "/assets/slider/Slider-image-4.jpg?heitht=600&width=1600&text=School Events",
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setSliderDirection("next")
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, heroImages.length])

  const goToNextSlide = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      setIsAutoPlaying(false)
    }
    setSliderDirection("next")
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
  }

  const goToPrevSlide = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      setIsAutoPlaying(false)
    }
    setSliderDirection("prev")
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      setIsAutoPlaying(false)
    }
    setSliderDirection(index > currentImageIndex ? "next" : "prev")
    setCurrentImageIndex(index)
  }

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
          { title: "ДЕТИ 7-9 ЛЕТ", href: "/courses/english-adults" },
          { title: "ДЕТИ 10-12 ЛЕТ", href: "/courses/english-kids" },
          { title: "ПОДРОСТКИ", href: "/courses/english-adults" },
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
          { title: "ПОДРОСТКИ", href: "/courses/english-kids" },
          { title: "ВЗРОСЛЫЕ", href: "/courses/english-adults" },
        ],
        news: "НОВОСТИ",
        contacts: "КОНТАКТЫ",
      },
      hero: {
        title: "ШКОЛА ИНОСТРАННЫХ ЯЗЫКОВ И ИСКУССТВ",
        subtitle: "Мы помогаем детям и взрослым освоить английский и китайский языки в дружеской атмосфере",
        cta: "Записаться на пробный урок",
      },
      about: {
        title: "О НАС",
        description:
          "Мы языковая студия, английский и китайский языки для детей и взрослых. Нашим клиентам нравится качество преподавания и дружеская атмосфера. У нас вы не только найдете компанию для изучения языков, но и обретете новых друзей.",
        cta: "Подробнее",
      },
      welcome: {
        title: "ДОБРО ПОЖАЛОВАТЬ В TUT SCHOOL",
        description:
          "Наша школа предлагает уникальную возможность изучать языки и искусство в одном месте. Мы создаем вдохновляющую среду, где каждый студент может раскрыть свой потенциал.",
        points: [
          "Индивидуальный подход к каждому ученику",
          "Современные методики преподавания",
          "Комфортные классы и дружелюбная атмосфера",
          "Регулярные культурные мероприятия",
        ],
        cta: "Узнать больше о нашей школе",
      },
      advantages: {
        title: "НАШИ ПРЕИМУЩЕСТВА",
        items: [
          {
            title: "Опытные преподаватели",
            description: "Наши учителя имеют международные сертификаты и многолетний опыт преподавания",
          },
          {
            title: "Английский и китайский",
            description: "Предлагаем курсы по двум востребованным языкам для детей и взрослых",
          },
          {
            title: "Школа искусств",
            description: "Помимо языковых курсов у нас есть творческие занятия и мастер-классы",
          },
        ],
      },
      courses: {
        title: "НАШИ КУРСЫ",
        subtitle: "Выберите программу, которая подходит именно вам",
        items: [
          {
            title: "Английский для детей",
            description: "Возраст: 5-10 лет. Игровой формат обучения с акцентом на разговорную речь.",
            cta: "Подробнее",
          },
          {
            title: "Китайский для детей",
            description: "Возраст: 5-10 лет. Знакомство с иероглифами и основами китайской культуры.",
            cta: "Подробнее",
          },
          {
            title: "Английский для взрослых",
            description: "Общий и деловой английский для всех уровней от начинающего до продвинутого.",
            cta: "Подробнее",
          },
          {
            title: "Китайская каллиграфия",
            description: "Творческие занятия по китайской каллиграфии для детей и взрослых.",
            cta: "Подробнее",
          },
        ],
      },
      news: {
        title: "НОВОСТИ И СОБЫТИЯ",
        viewAll: "Смотреть все",
        items: [
          {
            date: "15 мая 2024",
            title: "Летний интенсив по английскому",
            description: "Запускаем интенсивный курс английского языка для школьников на летних каникулах.",
            cta: "Читать далее",
          },
          {
            date: "10 мая 2024",
            title: "Мастер-класс по китайской каллиграфии",
            description: "Приглашаем на творческий мастер-класс по традиционной китайской каллиграфии.",
            cta: "Читать далее",
          },
          {
            date: "5 мая 2024",
            title: "Новые группы для дошкольников",
            description: "Открываем набор в новые группы английского языка для детей 4-6 лет.",
            cta: "Читать далее",
          },
        ],
      },
      testimonials: {
        title: "ОТЗЫВЫ НАШИХ УЧЕНИКОВ",
        items: [
          {
            name: "Анна К.",
            text: "Мой ребенок с удовольствием ходит на занятия английским. За полгода виден значительный прогресс, особенно в разговорной речи.",
          },
          {
            name: "Дмитрий С.",
            text: "Отличная школа с профессиональными преподавателями. Занимаюсь китайским уже год, и результаты превзошли мои ожидания.",
          },
          {
            name: "Елена В.",
            text: "Очень нравится дружелюбная атмосфера и индивидуальный подход. Преподаватели всегда готовы помочь и ответить на все вопросы.",
          },
        ],
      },
      contact: {
        title: "СВЯЗАТЬСЯ С НАМИ",
        phone: "Позвонить",
        directions: "Как доехать",
        write: "Написать",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
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
          { title: "CHILDREN AGED 7-9", href: "/courses/english-adults" },
            { title: "CHILDREN AGED 10-12", href: "/courses/english-kids" },
          { title: "TEENAGERS", href: "/courses/english-adults" },
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
          { title: "TEENAGERS", href: "/courses/english-kids" },
          { title: "ADULTS", href: "/courses/english-adults" },
        ],
        news: "NEWS",
        contacts: "CONTACTS",
      },
      hero: {
        title: "SCHOOL OF FOREIGN LANGUAGES AND ARTS",
        subtitle: "We help children and adults learn English and Chinese in a friendly atmosphere",
        cta: "Book a lesson",
      },
      about: {
        title: "ABOUT US",
        description:
          "We are a language studio offering English and Chinese languages for children and adults. Our clients appreciate the quality of teaching and friendly atmosphere. With us, you will not only find a company to learn languages but also make new friends.",
        cta: "Learn More",
      },
      welcome: {
        title: "WELCOME TO TUT SCHOOL",
        description:
          "Our school offers a unique opportunity to study languages and art in one place. We create an inspiring environment where every student can reach their potential.",
        points: [
          "Individual approach to each student",
          "Modern teaching methods",
          "Comfortable classrooms and friendly atmosphere",
          "Regular cultural events",
        ],
        cta: "Learn more about our school",
      },
      advantages: {
        title: "OUR ADVANTAGES",
        items: [
          {
            title: "Experienced Teachers",
            description: "Our teachers have international certificates and many years of teaching experience",
          },
          {
            title: "English and Chinese",
            description: "We offer courses in two in-demand languages for children and adults",
          },
          {
            title: "School of Arts",
            description: "In addition to language courses, we have creative classes and master classes",
          },
        ],
      },
      courses: {
        title: "OUR COURSES",
        subtitle: "Choose the program that suits you best",
        items: [
          {
            title: "English for Children",
            description: "Ages: 5-10 years. Game-based learning format with an emphasis on speaking skills.",
            cta: "Learn More",
          },
          {
            title: "Chinese for Children",
            description: "Ages: 5-10 years. Introduction to characters and basics of Chinese culture.",
            cta: "Learn More",
          },
          {
            title: "English for Adults",
            description: "General and business English for all levels from beginner to advanced.",
            cta: "Learn More",
          },
          {
            title: "Chinese Calligraphy",
            description: "Creative classes in Chinese calligraphy for children and adults.",
            cta: "Learn More",
          },
        ],
      },
      news: {
        title: "NEWS AND EVENTS",
        viewAll: "View all",
        items: [
          {
            date: "May 15, 2024",
            title: "Summer English Intensive Course",
            description: "We are launching an intensive English course for school students during summer holidays.",
            cta: "Read more",
          },
          {
            date: "May 10, 2024",
            title: "Chinese Calligraphy Workshop",
            description: "Join us for a creative workshop on traditional Chinese calligraphy.",
            cta: "Read more",
          },
          {
            date: "May 5, 2024",
            title: "New Groups for Preschoolers",
            description: "We are opening enrollment for new English language groups for children aged 4-6.",
            cta: "Read more",
          },
        ],
      },
      testimonials: {
        title: "TESTIMONIALS FROM OUR STUDENTS",
        items: [
          {
            name: "Anna K.",
            text: "My child enjoys attending English classes. There has been significant progress over six months, especially in speaking skills.",
          },
          {
            name: "Dmitry S.",
            text: "Excellent school with professional teachers. I've been studying Chinese for a year, and the results have exceeded my expectations.",
          },
          {
            name: "Elena V.",
            text: "I really like the friendly atmosphere and individual approach. The teachers are always ready to help and answer all questions.",
          },
        ],
      },
      contact: {
        title: "CONTACT US",
        phone: "Call",
        directions: "Directions",
        write: "Write",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
      },
      trial: {
        title: "SIGN UP FOR A FREE TRIAL LESSON",
        description: "Leave a request and we will contact you to schedule a free trial lesson",
        cta: "Sign up",
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

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

   // Section IDs for scroll spy
   const sectionIds = [
    "hero",
    "welcome",
    "featured-courses",
    "values",
    "methodology",
    "success-stories",
    "language-levels",
    "events",
    "faq",
    "cta",
  ]

  return (
    <div className="flex min-h-screen flex-col">
{/* Top Bar */}
      <ScrollProgress />

      {/* Scroll Spy for section tracking */}
      <ScrollSpy sectionIds={sectionIds} onChange={(id) => setActiveSection(id)} threshold={0.3} />
      
       {/* Promotional Banner */}
       <PromotionalBanner />
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

      <main>
         {/* Hero Section */}
         <section className="relative">
          <div className="relative h-[600px] w-full overflow-hidden">
            {heroImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                } ${
                  sliderDirection === "next" && index === currentImageIndex
                    ? "animate-slide-in-right"
                    : sliderDirection === "prev" && index === currentImageIndex
                      ? "animate-slide-in-left"
                      : ""
                }`}
              >
                <Image
                  src={src || "/assets/happy-student.jpg"}
                  alt={language === "ru" ? `Слайд ${index + 1}` : `Slide ${index + 1}`}
                  fill
                  className="object-cover transform transition-transform duration-10000 hover:scale-105"
                  priority={index === 0}
                />
              </div>
            ))}
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className="absolute inset-0 z-30 flex flex-col items-start justify-center px-4 text-white md:px-12 lg:px-20">
              <div className="max-w-2xl">
                <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-fade-in-up">
                  {t.hero.title}
                </h2>
                <p className="mb-8 text-lg md:text-xl animate-fade-in-up animation-delay-300">{t.hero.subtitle}</p>
                <Link
                  href="/bookings"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary/90 hover:gap-3 animate-fade-in-up animation-delay-600"
                >
                  {t.hero.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Carousel Navigation Arrows */}
            <button
              onClick={goToPrevSlide}
              className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNextSlide}
              className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Carousel Navigation Dots */}
            <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-primary">{t.welcome.title}</h2>
                <p className="mb-6 text-lg text-gray-700">{t.welcome.description}</p>
                <ul className="mb-8 space-y-3">
                  {t.welcome.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/about" className="inline-flex items-center text-primary hover:underline">
                  {t.welcome.cta}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/assets/slider/Painting.jpg?height=400&width=600"
                  alt="Tut School classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}

        <ValuesSectionCard language={language} />
  

        {/* Advantages Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-3">
              {t.advantages.items.map((item, index) => (
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

        {/* Courses Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.courses.items.map((course, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={`/assets/coursesOne.svg?height=200&width=300&text=${index + 1}`}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold">{course.title}</h3>
                    <p className="mb-4 text-sm text-gray-600">{course.description}</p>
                    <Link href="#" className="inline-flex items-center text-primary hover:underline">
                      {course.cta}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <Link href="#" className="flex items-center text-sm font-medium text-primary hover:underline">
                {t.news.viewAll}
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {t.news.items.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={`/assets/coursesTwo.svg?height=200&width=400&text=News ${index + 1}`}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                    <p className="mb-4 text-sm text-gray-600">{item.description}</p>
                    <Link href="#" className="inline-flex items-center text-primary hover:underline">
                      {item.cta}
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.testimonials.title}</h2>
            <div className="mx-auto mb-12 h-1 w-20 bg-primary"></div>
            <div className="grid gap-6 md:grid-cols-3">
              {t.testimonials.items.map((item, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="mb-4 text-yellow-400">
                    <Star className="inline-block h-5 w-5 fill-current" />
                    <Star className="inline-block h-5 w-5 fill-current" />
                    <Star className="inline-block h-5 w-5 fill-current" />
                    <Star className="inline-block h-5 w-5 fill-current" />
                    <Star className="inline-block h-5 w-5 fill-current" />
                  </div>
                  <p className="mb-4 italic text-gray-600">"{item.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <User className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-primary">{t.contact.title}</h2>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
              <Link
                href={`tel:${t.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white transition-all hover:bg-primary/90"
              >
                <Phone className="h-5 w-5" />
                {t.contact.phone}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600"
              >
                <Navigation className="h-5 w-5" />
                {t.contact.directions}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md bg-gray-700 px-4 py-2 text-white transition-all hover:bg-gray-800"
              >
                <MessageSquare className="h-5 w-5" />
                {t.contact.write}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md bg-blue-400 px-4 py-2 text-white transition-all hover:bg-blue-500"
              >
                <Send className="h-5 w-5" />
                {t.contact.telegram}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-white transition-all hover:bg-green-600"
              >
                <MessageSquare className="h-5 w-5" />
                {t.contact.whatsapp}
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                <MapPin className="mr-1 inline-block h-4 w-4" />
                {t.address}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-xl bg-primary shadow-xl">
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
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.trial.title}</h2>
                  <p className="mx-auto mb-8 max-w-2xl text-lg">{t.trial.description}</p>
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
        </section>
      </main>
    </div>
  )
}
