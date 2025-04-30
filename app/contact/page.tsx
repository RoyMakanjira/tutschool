"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Star,
  ArrowRight,
  Search,
  Menu,
  X,
  Clock,
  HelpCircle,
  ChevronDown,
} from "lucide-react"
import { testimonials } from "@/constants"
import YandexMap from "@/components/YandexMap"

export default function Contact() {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

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
          { title: "ПОДРОСТКИ", href: "/courses/english-kids" },
          { title: "ВЗРОСЛЫЕ", href: "/courses/english-adults" },
        ],
        news: "НОВОСТИ",
        contacts: "КОНТАКТЫ",
      },
      hero: {
        title: "СВЯЖИТЕСЬ С НАМИ",
        subtitle: "Мы всегда рады ответить на ваши вопросы и помочь с выбором подходящей программы",
      },
      breadcrumbs: {
        home: "Главная",
        contact: "Контакты",
      },
      contactInfo: {
        title: "НАШИ КОНТАКТЫ",
        address: "Адрес",
        phone: "Телефон",
        email: "Email",
        workingHours: "Режим работы",
        weekdays: "Понедельник - Пятница: 9:00 - 21:00",
        saturday: "Суббота: 10:00 - 18:00",
        sunday: "Воскресенье: выходной",
        socialMedia: "Социальные сети",
      },
      contactForm: {
        title: "ОТПРАВЬТЕ НАМ СООБЩЕНИЕ",
        description: "Заполните форму ниже, и мы свяжемся с вами в ближайшее время",
        name: "Ваше имя",
        email: "Email",
        phone: "Телефон",
        subject: "Тема",
        message: "Сообщение",
        submit: "Отправить сообщение",
        required: "Обязательное поле",
        success: "Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.",
      },
      faq: {
        title: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
        questions: [
          {
            question: "Как записаться на пробное занятие?",
            answer:
              "Вы можете записаться на пробное занятие, заполнив форму на нашем сайте, позвонив по телефону или отправив заявку по электронной почте. Наш администратор свяжется с вами для подтверждения даты и времени пробного урока.",
          },
          {
            question: "Какой возраст подходит для начала изучения иностранного языка?",
            answer:
              "Мы принимаем детей с 4 лет на курсы английского и с 5 лет на курсы китайского языка. Для взрослых ограничений по возрасту нет. Наши программы адаптированы под разные возрастные группы и уровни подготовки.",
          },
          {
            question: "Сколько человек в группе?",
            answer:
              "В наших группах обучается от 6 до 8 человек. Такой размер группы позволяет преподавателю уделить внимание каждому студенту и обеспечить эффективное взаимодействие между участниками.",
          },
          {
            question: "Как определяется уровень знаний?",
            answer:
              "Перед зачислением в группу мы проводим небольшое тестирование, которое помогает определить текущий уровень знаний. Для детей это происходит в игровой форме, для взрослых — в формате письменного теста и устной беседы.",
          },
          {
            question: "Можно ли перейти с групповых занятий на индивидуальные?",
            answer:
              "Да, вы можете перейти с групповых занятий на индивидуальные в любой момент при наличии свободных мест в расписании преподавателей. Для этого необходимо обратиться к администратору школы.",
          },
          {
            question: "Как оплачивать занятия?",
            answer:
              "Оплата производится ежемесячно до начала занятий. Вы можете оплатить курс банковской картой в офисе школы, через личный кабинет на сайте или банковским переводом по реквизитам. Также доступна оплата наличными в офисе школы.",
          },
        ],
      },
      visit: {
        title: "ЗАПИШИТЕСЬ НА ВИЗИТ В ШКОЛУ",
        description:
          "Лучший способ узнать о нашей школе — посетить ее лично. Мы приглашаем вас на экскурсию по школе, где вы сможете познакомиться с преподавателями, увидеть классы и задать все интересующие вопросы.",
        cta: "Записаться на визит",
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
      workingHours: "Mon-Fri: 9:00-21:00, Sat: 10:00-18:00",
      promo: "Sign up for a trial lesson before May 30 and get a 20% discount on your first month of study!",
      nav: {
        about: "ABOUT THE SCHOOL",
        aboutDropdown: [
          { title: "OUR VALUES", href: "/our-values" },
          { title: "SCHEDULE AND PRICES", href: "/schedule" },
          { title: "TEACHERS", href: "/testimonials" },
        ],
        courses: "COURSES",
        coursesDropdown: [
          { title: "PRESCHOOLERS", href: "/preschoolers" },
          { title: "CHILDREN AGED 7-9", href: "aged-7-9" },
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
          { title: "TEENAGERS", href: "/courses/english-kids" },
          { title: "ADULTS", href: "/courses/english-adults" },
        ],
        news: "NEWS",
        contacts: "CONTACTS",
      },
      hero: {
        title: "CONTACT US",
        subtitle: "We are always happy to answer your questions and help you choose the right program",
      },
      breadcrumbs: {
        home: "Home",
        contact: "Contact",
      },
      contactInfo: {
        title: "OUR CONTACTS",
        address: "Address",
        phone: "Phone",
        email: "Email",
        workingHours: "Working Hours",
        weekdays: "Monday - Friday: 9:00 AM - 9:00 PM",
        saturday: "Saturday: 10:00 AM - 6:00 PM",
        sunday: "Sunday: closed",
        socialMedia: "Social Media",
      },
      contactForm: {
        title: "SEND US A MESSAGE",
        description: "Fill out the form below and we will contact you shortly",
        name: "Your Name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
        required: "Required field",
        success: "Your message has been successfully sent. We will contact you shortly.",
      },
      faq: {
        title: "FREQUENTLY ASKED QUESTIONS",
        questions: [
          {
            question: "How do I sign up for a trial lesson?",
            answer:
              "You can sign up for a trial lesson by filling out the form on our website, calling us, or sending a request by email. Our administrator will contact you to confirm the date and time of the trial lesson.",
          },
          {
            question: "What age is suitable for starting to learn a foreign language?",
            answer:
              "We accept children from the age of 4 for English courses and from the age of 5 for Chinese courses. There are no age restrictions for adults. Our programs are adapted for different age groups and proficiency levels.",
          },
          {
            question: "How many students are in a group?",
            answer:
              "Our groups have 6 to 8 students. This group size allows the teacher to pay attention to each student and ensure effective interaction between participants.",
          },
          {
            question: "How is the knowledge level determined?",
            answer:
              "Before enrollment in a group, we conduct a small assessment to determine the current level of knowledge. For children, this happens in a game format, for adults - in the format of a written test and oral conversation.",
          },
          {
            question: "Is it possible to switch from group to individual classes?",
            answer:
              "Yes, you can switch from group to individual classes at any time, subject to availability in the teachers' schedules. To do this, you need to contact the school administrator.",
          },
          {
            question: "How do I pay for classes?",
            answer:
              "Payment is made monthly before the start of classes. You can pay for the course by bank card at the school office, through your personal account on the website, or by bank transfer using the provided details. Cash payment is also available at the school office.",
          },
        ],
      },
      visit: {
        title: "SCHEDULE A VISIT TO OUR SCHOOL",
        description:
          "The best way to learn about our school is to visit it in person. We invite you for a tour of the school, where you can meet the teachers, see the classrooms, and ask any questions you may have.",
        cta: "Schedule a Visit",
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

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert(t.contactForm.success)
  }

  return (
    <div className="flex min-h-screen flex-col">

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
  {t.hero.title}
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
              {t.hero.title}
            </Link>
          </nav>
        </div>
      </div>

      <main>
        
        {/* Contact Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-primary">{t.contactInfo.title}</h2>
              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-lg font-bold">{t.contactInfo.address}</h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <p>{t.address}</p>
                  </div>
                  <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg">
                  <YandexMap />
                  </div>
                  <div className="mt-2 text-center">
                    <a
                      href="https://yandex.com/maps/10758/himki/?ll=37.374147%2C55.894611&mode=routes&rtext=~55.894611%2C37.374147&rtt=auto&ruri=~&z=17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center justify-center gap-1"
                    >
                      <Globe className="h-4 w-4" />
                      {language === "ru" ? "Открыть карту в Яндекс" : "Open in Yandex Maps"}
                    </a>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-lg font-bold">{t.contactInfo.phone}</h3>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href={`tel:${t.phone.replace(/\s+/g, "")}`} className="hover:text-primary hover:underline">
                      {t.phone}
                    </a>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-lg font-bold">{t.contactInfo.email}</h3>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href={`mailto:${t.email}`} className="hover:text-primary hover:underline">
                      {t.email}
                    </a>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-lg font-bold">{t.contactInfo.workingHours}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p>{t.contactInfo.weekdays}</p>
                        <p>{t.contactInfo.saturday}</p>
                        <p>{t.contactInfo.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h3 className="mb-4 text-lg font-bold">{t.contactInfo.socialMedia}</h3>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-white"
                    >
                      <Image src="/assets/icons/telegram-plane.svg" alt="telegram" width={25} height={25} className="object-contain" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-lg bg-white p-8 shadow-md">
                <h2 className="mb-2 text-2xl font-bold text-primary">{t.contactForm.title}</h2>
                <p className="mb-6 text-gray-600">{t.contactForm.description}</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                      {t.contactForm.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                      {t.contactForm.email} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                      {t.contactForm.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                      {t.contactForm.subject} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                      {t.contactForm.message} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary/90"
                  >
                    {t.contactForm.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.faq.title}</h2>
            <div className="mx-auto mb-12 h-1 w-20 bg-primary"></div>
            <div className="mx-auto max-w-3xl space-y-4">
              {t.faq.questions.map((faq, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-gray-50"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform ${
                        activeAccordion === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === index ? "max-h-96 px-4 pb-4" : "max-h-0"
                    }`}
                  >
                    <p className="pl-8 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-lg bg-primary p-8 text-white md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-2xl font-bold">{t.visit.title}</h2>
                  <p className="mb-6">{t.visit.description}</p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-primary transition-all hover:bg-gray-100 hover:gap-3"
                  >
                    {t.visit.cta}
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

