"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
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
          schoolSubtitle: "Курсы иностранных языков, Школа искусств",
          phone: "+7 (983) 600-00-00",
          email: "info@tut-school.ru",
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
          schoolSubtitle: "Foreign Language Courses, School of Arts",
          phone: "+7 (983) 600-00-00",
          email: "info@tut-school.ru",
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
              { title: "CREATIVE WORKSHOP", href: "/creative-workshop" },
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
          { time: "14.00", monday: "Preschoolers", tuesday: "", wednesday: "Preschoolers", thursday: "", friday: "" },
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
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    
    // Add slight delay for better touch response
    setTimeout(() => {
      if (activeDropdown !== dropdown) {
        setActiveDropdown(dropdown);
      }
    }, 50);
  };


  

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
                                     <div className="space-y-1">
                                       <button
                                         onClick={() => toggleDropdown("masterclass-mobile")}
                                         className="flex w-full items-center justify-between py-3 px-4 text-sm font-medium text-gray-700 touch-manipulation rounded-md hover:bg-gray-50 active:bg-gray-100"
                                         aria-expanded={activeDropdown === "masterclass-mobile"}
                                       >
                                         <span>{t.nav.masterclass}</span>
                                         <ChevronDown
                                           className={`h-5 w-5 transition-transform ${activeDropdown === "masterclass-mobile" ? "rotate-180" : ""}`}
                                         />
                                       </button>
                                       <div
                                         className={`ml-4 border-l border-gray-200 pl-4 space-y-1 overflow-hidden transition-all duration-200 ${
                                           activeDropdown === "masterclass-mobile" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                         }`}
                                       >
                                         {t.nav.masterclassDropdown.map((item, index) => (
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
                                   </nav>
                                 </div>
                               </div>

      <main className="min-h-screen bg-gray-50 pb-16">
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
              <div className="mx-auto h-1 w-20 bg-primary"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={staggerContainer}
              className="mb-16"
            >
              <div className="mb-6 flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-gray-800">{t.englishLanguage}</h3>
              </div>

              {/* Weekday Schedule - Desktop */}
              <div className="mb-8 hidden overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm lg:block">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border-b border-r border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                        {t.time}
                      </th>
                      <th className="border-b border-r border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                        {t.days.monday}
                      </th>
                      <th className="border-b border-r border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                        {t.days.tuesday}
                      </th>
                      <th className="border-b border-r border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                        {t.days.wednesday}
                      </th>
                      <th className="border-b border-r border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                        {t.days.thursday}
                      </th>
                      <th className="border-b border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                        {t.days.friday}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData.english.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-r border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">
                          {row.time}
                        </td>
                        <td className="border-r border-gray-200 px-4 py-3 text-sm text-gray-700">
                          {row.monday ? (language === "ru" ? t.preschoolers : row.monday) : "—"}
                        </td>
                        <td className="border-r border-gray-200 px-4 py-3 text-sm text-gray-700">
                          {row.tuesday || "—"}
                        </td>
                        <td className="border-r border-gray-200 px-4 py-3 text-sm text-gray-700">
                          {row.wednesday ? (language === "ru" ? t.preschoolers : row.wednesday) : "—"}
                        </td>
                        <td className="border-r border-gray-200 px-4 py-3 text-sm text-gray-700">
                          {row.thursday || "—"}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">{row.friday || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Weekend Schedule - Desktop */}
              <div className="mb-8 hidden overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm lg:block">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border-b border-r border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                        {t.time}
                      </th>
                      <th className="border-b border-r border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                        {t.days.saturday}
                      </th>
                      <th className="border-b border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-600">
                        {t.days.sunday}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData.weekend.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border-r border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">
                          {row.time}
                        </td>
                        <td className="border-r border-gray-200 px-4 py-3 text-sm text-gray-700">
                          {row.saturday || "—"}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">{row.sunday || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Schedule */}
              <div className="space-y-6 lg:hidden">
                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                    <h4 className="font-medium text-gray-700">{t.days.monday}</h4>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {scheduleData.english.map((row, index) => (
                      <div key={index} className="flex items-center justify-between px-4 py-3">
                        <span className="text-sm font-medium text-gray-900">{row.time}</span>
                        <span className="text-sm text-gray-700">
                          {row.monday ? (language === "ru" ? t.preschoolers : row.monday) : "—"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                    <h4 className="font-medium text-gray-700">{t.days.tuesday}</h4>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {scheduleData.english.map((row, index) => (
                      <div key={index} className="flex items-center justify-between px-4 py-3">
                        <span className="text-sm font-medium text-gray-900">{row.time}</span>
                        <span className="text-sm text-gray-700">{row.tuesday || "—"}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                    <h4 className="font-medium text-gray-700">{t.days.wednesday}</h4>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {scheduleData.english.map((row, index) => (
                      <div key={index} className="flex items-center justify-between px-4 py-3">
                        <span className="text-sm font-medium text-gray-900">{row.time}</span>
                        <span className="text-sm text-gray-700">
                          {row.wednesday ? (language === "ru" ? t.preschoolers : row.wednesday) : "—"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                    <h4 className="font-medium text-gray-700">{t.days.thursday}</h4>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {scheduleData.english.map((row, index) => (
                      <div key={index} className="flex items-center justify-between px-4 py-3">
                        <span className="text-sm font-medium text-gray-900">{row.time}</span>
                        <span className="text-sm text-gray-700">{row.thursday || "—"}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                    <h4 className="font-medium text-gray-700">{t.days.friday}</h4>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {scheduleData.english.map((row, index) => (
                      <div key={index} className="flex items-center justify-between px-4 py-3">
                        <span className="text-sm font-medium text-gray-900">{row.time}</span>
                        <span className="text-sm text-gray-700">{row.friday || "—"}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                    <h4 className="font-medium text-gray-700">{t.days.saturday}</h4>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {scheduleData.weekend.map((row, index) => (
                      <div key={index} className="flex items-center justify-between px-4 py-3">
                        <span className="text-sm font-medium text-gray-900">{row.time}</span>
                        <span className="text-sm text-gray-700">{row.saturday || "—"}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                    <h4 className="font-medium text-gray-700">{t.days.sunday}</h4>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {scheduleData.weekend.map((row, index) => (
                      <div key={index} className="flex items-center justify-between px-4 py-3">
                        <span className="text-sm font-medium text-gray-900">{row.time}</span>
                        <span className="text-sm text-gray-700">{row.sunday || "—"}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center text-sm text-gray-600">
                <Info className="mr-2 h-4 w-4 text-primary" />
                <p>{t.note}</p>
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
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {t.priceCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className={`relative overflow-hidden rounded-lg border ${
                    card.featured
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-gray-200 bg-white shadow-sm hover:shadow-md"
                  } transition-all duration-300`}
                >
                  {card.featured && (
                    <div className="absolute right-0 top-0 bg-primary px-3 py-1 text-xs font-medium text-white">
                      {language === "ru" ? "Популярный" : "Popular"}
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-bold text-gray-900">{card.title}</h3>
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-primary">{card.price}</span>
                      <span className="text-gray-600"> / {card.period}</span>
                    </div>
                    <ul className="mb-6 space-y-3">
                      {card.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg
                            className="mr-2 h-5 w-5 flex-shrink-0 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/bookings"
                      className={`block w-full rounded-lg ${
                        card.featured
                          ? "bg-primary text-white hover:bg-primary/90"
                          : "bg-gray-100 text-primary hover:bg-gray-200"
                      } px-4 py-3 text-center font-medium transition-colors`}
                    >
                      {card.cta}
                    </Link>
                  </div>
                </motion.div>
              ))}
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
    </div>
  )
}

