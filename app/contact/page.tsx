"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Menu,
  X,
  Clock,
  HelpCircle,
  ChevronDown,
  User,
  MessageSquare,
  Send,
  Info,
  BookOpen,
  FileText,
  Award,
  MessageCircle,
  Check,
  AlertCircle,
  Loader2,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface BookingFormData {
  name: string
  phone: string
  serviceType: string
}

interface FormErrors {
  name?: string
  phone?: string
  serviceType?: string
  submit?: string
}

interface ServiceGroup {
  group: string
  services: string[]
}

const YandexMap = dynamic(() => import("@/components/YandexMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] rounded-lg bg-gray-200 flex items-center justify-center">
      <div className="text-gray-500">Загрузка карты...</div>
    </div>
  ),
})

export default function ContactPage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [showTermsModal, setShowTermsModal] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [pendingFormData, setPendingFormData] = useState<BookingFormData | null>(null)

  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    phone: "",
    serviceType: "",
  })

  const serviceGroups: ServiceGroup[] = [
    {
      group: "Английский язык",
      services: [
        "Английский для дошкольников",
        "Английский для детей 7-9 лет",
        "Английский для детей 10-12 лет",
        "Английский для подростков",
        "Английский для взрослых",
        "Мастер-класс по английскому",
        "Разговорный клуб английского",
      ],
    },
    {
      group: "Китайский язык",
      services: [
        "Китайский для дошкольников",
        "Китайский для детей 7-9 лет",
        "Китайский для детей 10-12 лет",
        "Китайский для подростков",
        "Китайский для взрослых",
        "Мастер-класс по китайскому",
        "Разговорный клуб китайского",
      ],
    },
    {
      group: "Общие программы",
      services: ["Мастер-класс", "Разговорный клуб"],
    },
  ]

    const translations = {
    ru: {
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      workingHours: "Пн-Пт: 9:00-21:00, Сб: 10:00-18:00",
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
      hero: {
        title: "ЗАБРОНИРОВАТЬ ЗАНЯТИЕ",
        subtitle: "Запишитесь на занятия, консультации или мероприятия с помощью нашей удобной системы онлайн-бронирования",
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
        title: "ОТПРАВЬТЕ НАМ ЗАЯВКУ",
        description: "Заполните форму ниже, и мы свяжемся с вами в ближайшее время",
        name: "Ваше имя",
        phone: "Телефон",
        service: "Услуга",
        submit: "Отправить заявку",
        success: "Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
        error: "Произошла ошибка при отправке заявки. Попробуйте еще раз.",
      },
      faq: {
        title: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
        questions: [
          {
            question: "Как записаться на пробное занятие?",
            answer:
              "Вы можете записаться на пробное занятие, заполнив форму на нашем сайте, позвонив по телефону или отправив заявку по электронной почте.",
          },
          {
            question: "Какой возраст подходит для начала изучения иностранного языка?",
            answer:
              "Мы принимаем детей с 4 лет на курсы английского и с 5 лет на курсы китайского языка. Для взрослых ограничений по возрасту нет.",
          },
          {
            question: "Сколько человек в группе?",
            answer:
              "В наших группах обучается от 6 до 8 человек. Такой размер группы позволяет преподавателю уделить внимание каждому студенту.",
          },
        ],
      },
      visit: {
        title: "ЗАПИШИТЕСЬ НА ВИЗИТ В ШКОЛУ",
        description: "Лучший способ узнать о нашей школе — посетить ее лично. Мы приглашаем вас на экскурсию по школе.",
        cta: "Записаться на визит",
      },
      languageToggle: "English",
      terms: {
        title: "Согласие на обработку данных",
        content: "Нажимая 'Принимаю', вы соглашаетесь на передачу ваших персональных данных (имя, телефон и выбранная услуга) через WhatsApp для обработки вашего запроса на бронирование.",
        accept: "Принимаю",
        decline: "Отклонить"
      }
    },
    en: {
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language Courses",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
      workingHours: "Mon-Fri: 9:00-21:00, Sat: 10:00-18:00",
      nav: {
        about: "ABOUT THE SCHOOL",
        aboutDropdown: [
          { title: "OUR VALUES", href: "/our-values" },
          { title: "SCHEDULE AND PRICES", href: "/schedule" },
          { title: "TEACHERS", href: "/teachers" },
        ],
        courses: "ENGLISH COURSES",
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
      hero: {
        title: "BOOK A LESSON",
        subtitle: "Book classes, consultations or events using our convenient online booking system",
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
        title: "SEND US A REQUEST",
        description: "Fill out the form below and we will contact you shortly",
        name: "Your Name",
        phone: "Phone",
        service: "Service",
        submit: "Send Request",
        success: "Your request has been successfully sent! We will contact you shortly.",
        error: "An error occurred while sending the request. Please try again.",
      },
      faq: {
        title: "FREQUENTLY ASKED QUESTIONS",
        questions: [
          {
            question: "How do I sign up for a trial lesson?",
            answer:
              "You can sign up for a trial lesson by filling out the form on our website, calling us, or sending a request by email.",
          },
          {
            question: "What age is suitable for starting to learn a foreign language?",
            answer:
              "We accept children from the age of 4 for English courses and from the age of 5 for Chinese courses. There are no age restrictions for adults.",
          },
          {
            question: "How many students are in a group?",
            answer:
              "Our groups have 6 to 8 students. This group size allows the teacher to pay attention to each student.",
          },
        ],
      },
      visit: {
        title: "SCHEDULE A VISIT TO OUR SCHOOL",
        description:
          "The best way to learn about our school is to visit it in person. We invite you for a tour of the school.",
        cta: "Schedule a Visit",
      },
      languageToggle: "Русский",
      terms: {
        title: "Data Processing Consent",
        content: "By clicking 'Accept', you agree to the transfer of your personal data (name, phone and selected service) via WhatsApp to process your booking request.",
        accept: "Accept",
        decline: "Decline"
      }
    },
  }

  const t = translations[language]

  useEffect(() => {
    setIsMounted(true)
  }, [])

 useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
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
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])


  const validateForm = (data: BookingFormData): FormErrors => {
    const errors: FormErrors = {}

    if (!data.name.trim()) errors.name = language === "ru" ? "Пожалуйста, введите ваше имя" : "Please enter your name"
    if (!data.phone.trim()) errors.phone = language === "ru" ? "Пожалуйста, введите ваш телефон" : "Please enter your phone number"
    if (!data.serviceType) errors.serviceType = language === "ru" ? "Пожалуйста, выберите услугу" : "Please select a service"

    return errors
  }

  const submitToEmail = async (data: BookingFormData) => {
    const emailData = {
      name: data.name,
      phone: data.phone,
      service: data.serviceType,
      _subject: language === "ru" 
        ? `Новая заявка от ${data.name}` 
        : `New booking request from ${data.name}`,
      _template: "box",
      _captcha: "false"
    };

    const response = await fetch("https://formsubmit.co/ajax/info@tutschool.ru", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    if (!response.ok) {
      throw new Error(language === "ru" 
        ? "Ошибка при отправке на email" 
        : "Error sending to email");
    }

    return response.json();
  };

  const handleSubmitToWhatsApp = async (data: BookingFormData) => {
    const message = language === "ru" 
      ? `🎓 *Новая заявка на бронирование*\n\n👤 *Имя:* ${data.name}\n📞 *Телефон:* ${data.phone}\n📚 *Услуга:* ${data.serviceType}\n\nПожалуйста, свяжитесь со мной для подтверждения бронирования.`
      : `🎓 *New Booking Request*\n\n👤 *Name:* ${data.name}\n📞 *Phone:* ${data.phone}\n📚 *Service:* ${data.serviceType}\n\nPlease contact me to confirm the booking.`;

    const whatsappNumber = "79167349246";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Return a resolved promise since we're just opening a new window
    return Promise.resolve();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validateForm(formData)

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setFormErrors({})
    // Store the form data temporarily and show terms modal
    setPendingFormData(formData)
    setShowTermsModal(true)
  }

  const handleAcceptTerms = async () => {
    if (!pendingFormData) return
    
    setShowTermsModal(false)
    setIsSubmitting(true)

    try {
      // Submit to both email and WhatsApp simultaneously
      await Promise.all([
        submitToEmail(pendingFormData),
        handleSubmitToWhatsApp(pendingFormData)
      ])
      
      setFormSuccess(true)
      toast.success(t.contactForm.success)

      // Reset form
      setFormData({
        name: "",
        phone: "",
        serviceType: "",
      })
      setPendingFormData(null)

      setTimeout(() => setFormSuccess(false), 5000)
    } catch (error: any) {
      console.error("Submission error:", error)
      const errorMessage = error.message || t.contactForm.error
      setFormErrors({ submit: errorMessage })
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeclineTerms = () => {
    setShowTermsModal(false)
    setPendingFormData(null)
    toast.info(language === "ru" ? "Отправка отменена" : "Submission canceled")
  }

  const toggleLanguage = () => setLanguage(language === "ru" ? "en" : "ru")
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen)
  const toggleAccordion = (index: number) => setActiveAccordion(activeAccordion === index ? null : index)
  const toggleDropdown = (dropdown: string) => setActiveDropdown(activeDropdown === dropdown ? null : dropdown)

  if (!isMounted) {
    return null
  }

  // Rest of your component remains the same until the contact form section...

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar, Header, Hero sections remain the same... */}
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
            <a
              href="https://api.whatsapp.com/send/?phone=%2B79167349246&text&type=phone_number&app_absent=0"
              className="text-green-600 hover:text-green-800"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.472 3.5C18.188 1.24 15.073 0 11.786 0 5.354 0 .13 5.214.13 11.636c0 2.05.546 4.05 1.585 5.812L.13 24l6.726-1.763c1.698.925 3.607 1.41 5.55 1.41h.005c6.43 0 11.65-5.215 11.65-11.637 0-3.109-1.21-6.026-3.413-8.225l-.175-.285zM11.786 21.273h-.004c-1.743 0-3.45-.468-4.942-1.35l-.355-.21-3.676.964.985-3.595-.232-.368c-.975-1.55-1.49-3.335-1.49-5.17 0-5.356 4.364-9.713 9.728-9.713 2.6 0 5.034 1.012 6.868 2.85 1.832 1.837 2.842 4.276 2.84 6.873-.004 5.356-4.367 9.719-9.722 9.719zm5.333-7.278c-.294-.147-1.734-.856-2.002-.951-.268-.097-.463-.146-.658.146-.195.293-.757.951-.928 1.147-.17.195-.342.22-.635.073-.294-.147-1.24-.456-2.363-1.456-.873-.778-1.463-1.738-1.634-2.032-.171-.293-.018-.451.128-.597.132-.132.294-.342.44-.513.148-.17.197-.293.296-.488.098-.195.05-.366-.025-.513-.073-.147-.657-1.583-.9-2.168-.244-.585-.487-.487-.658-.487-.17 0-.367-.025-.562-.025-.195 0-.513.073-.781.366-.269.293-1.025.999-1.025 2.435 0 1.436 1.05 2.824 1.196 3.02.146.195 2.057 3.142 4.988 4.407.697.268 1.24.428 1.664.55.7.222 1.337.19 1.839.115.56-.085 1.734-.71 1.977-1.395.244-.684.244-1.27.17-1.393-.073-.122-.268-.196-.562-.342z" />
              </svg>
            </a>
            <a href="https://t.me/TUTschoolNovogorsk" className="text-blue-500 hover:text-blue-700">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.193-2.98 5.518-4.99c.22-.196-.048-.307-.338-.11l-6.81 4.29-2.96-.92c-.64-.203-.658-.64.135-.954l11.57-4.46c.538-.196 1.006.128.832.941z" />
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
      <header
        className={`border-b bg-white shadow-sm transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""}`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/logo.png"
                alt={language === "ru" ? "Логотип Tut School" : "Tut School logo"}
                width={120}
                height={120}
                className="object-contain"
              />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-primary">{t.schoolName}</h1>
              <p className="text-sm text-muted-foreground">{t.schoolSubtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
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

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "max-h-[calc(100vh-60px)]" : "max-h-0"}`}
        >
          <div className="container mx-auto space-y-2 px-4 pb-4">
            {/* Mobile navigation items */}
            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("about-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  {t.nav.about}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeDropdown === "about-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === "about-mobile" ? "max-h-96" : "max-h-0"}`}
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

            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("courses-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  {t.nav.courses}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeDropdown === "courses-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === "courses-mobile" ? "max-h-96" : "max-h-0"}`}
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

            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("chinese-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  {t.nav.chinese}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeDropdown === "chinese-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === "chinese-mobile" ? "max-h-96" : "max-h-0"}`}
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

            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("club-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  {t.nav.club}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeDropdown === "club-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === "club-mobile" ? "max-h-96" : "max-h-0"}`}
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

            <div className="rounded-lg border border-gray-200">
              <button
                onClick={() => toggleDropdown("masterclass-mobile")}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  {t.nav.masterclass}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${activeDropdown === "masterclass-mobile" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === "masterclass-mobile" ? "max-h-96" : "max-h-0"}`}
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

            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 p-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              <FileText className="h-5 w-5 text-primary" />
              {t.nav.news}
            </Link>

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

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-burgundy-900 to-burgundy-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t.hero.title}</h1>
            <p className="mx-auto max-w-2xl text-lg opacity-90">{t.hero.subtitle}</p>
          </div>
        </section>


      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information - Retained with Yandex Map */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-burgundy-900">
              {language === "ru" ? "Наши контакты" : "Our Contacts"}
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-bold text-burgundy-900">
                  {language === "ru" ? "Адрес" : "Address"}
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-burgundy-900" />
                  <p>{translations[language].address}</p>
                </div>
                {/* Yandex Map retained in original position */}
                <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg">
                  <YandexMap />
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-bold text-burgundy-900">
                  {language === "ru" ? "Телефон" : "Phone"}
                </h3>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-burgundy-900" />
                  <a 
                    href={`tel:${translations[language].phone.replace(/\s+/g, "")}`} 
                    className="hover:text-burgundy-900 hover:underline"
                  >
                    {translations[language].phone}
                  </a>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-bold text-burgundy-900">
                  {language === "ru" ? "Режим работы" : "Working Hours"}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-burgundy-900" />
                    <div>
                      <p>{translations[language].contactInfo.weekdays}</p>
                      <p>{translations[language].contactInfo.saturday}</p>
                      <p>{translations[language].contactInfo.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
             {/* Social Media Section - Retained from original */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-lg font-bold text-burgundy-900">
                  {language === "ru" ? "Социальные сети" : "Social Media"}
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=%2B79167349246&text&type=phone_number&app_absent=0"
                    className="text-green-600 hover:text-green-800"
                    aria-label="WhatsApp"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.472 3.5C18.188 1.24 15.073 0 11.786 0 5.354 0 .13 5.214.13 11.636c0 2.05.546 4.05 1.585 5.812L.13 24l6.726-1.763c1.698.925 3.607 1.41 5.55 1.41h.005c6.43 0 11.65-5.215 11.65-11.637 0-3.109-1.21-6.026-3.413-8.225l-.175-.285zM11.786 21.273h-.004c-1.743 0-3.45-.468-4.942-1.35l-.355-.21-3.676.964.985-3.595-.232-.368c-.975-1.55-1.49-3.335-1.49-5.17 0-5.356 4.364-9.713 9.728-9.713 2.6 0 5.034 1.012 6.868 2.85 1.832 1.837 2.842 4.276 2.84 6.873-.004 5.356-4.367 9.719-9.722 9.719zm5.333-7.278c-.294-.147-1.734-.856-2.002-.951-.268-.097-.463-.146-.658.146-.195.293-.757.951-.928 1.147-.17.195-.342.22-.635.073-.294-.147-1.24-.456-2.363-1.456-.873-.778-1.463-1.738-1.634-2.032-.171-.293-.018-.451.128-.597.132-.132.294-.342.44-.513.148-.17.197-.293.296-.488.098-.195.05-.366-.025-.513-.073-.147-.657-1.583-.9-2.168-.244-.585-.487-.487-.658-.487-.17 0-.367-.025-.562-.025-.195 0-.513.073-.781.366-.269.293-1.025.999-1.025 2.435 0 1.436 1.05 2.824 1.196 3.02.146.195 2.057 3.142 4.988 4.407.697.268 1.24.428 1.664.55.7.222 1.337.19 1.839.115.56-.085 1.734-.71 1.977-1.395.244-.684.244-1.27.17-1.393-.073-.122-.268-.196-.562-.342z" />
                    </svg>
                  </a>
                  <a 
                    href="https://t.me/TUTschoolNovogorsk" 
                    className="text-blue-500 hover:text-blue-700"
                    aria-label="Telegram"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.193-2.98 5.518-4.99c.22-.196-.048-.307-.338-.11l-6.81 4.29-2.96-.92c-.64-.203-.658-.64.135-.954l11.57-4.46c.538-.196 1.006.128.832.941z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          

          {/* Updated Booking Form */}
          <div>
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-2 text-2xl font-bold text-burgundy-900">{t.contactForm.title}</h2>
              <p className="mb-6 text-gray-600">{t.contactForm.description}</p>

              {formSuccess && (
                <div className="mb-6 flex items-start rounded-lg bg-green-50 p-4 text-green-800">
                  <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <div>
                    <h3 className="font-semibold">{language === "ru" ? "Перенаправление в WhatsApp!" : "Redirecting to WhatsApp!"}</h3>
                    <p>{language === "ru" ? "Отправьте сообщение в WhatsApp, и мы свяжемся с вами в ближайшее время." : "Send the message on WhatsApp and we'll contact you shortly."}</p>
                  </div>
                </div>
              )}

              {formErrors.submit && (
                <div className="mb-6 flex items-start rounded-lg bg-red-50 p-4 text-red-800">
                  <AlertCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                  <div>
                    <h3 className="font-semibold">{language === "ru" ? "Ошибка" : "Error"}</h3>
                    <p>{formErrors.submit}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-burgundy-900">
                    <User className="inline h-4 w-4 mr-1" />
                    {t.contactForm.name} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full border-burgundy-300 focus:border-burgundy-900 focus:ring-burgundy-900 ${
                      formErrors.name ? "border-red-500" : ""
                    }`}
                    placeholder={language === "ru" ? "Ваше полное имя" : "Your full name"}
                  />
                  {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-burgundy-900">
                    <Phone className="inline h-4 w-4 mr-1" />
                    {t.contactForm.phone} <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full border-burgundy-300 focus:border-burgundy-900 focus:ring-burgundy-900 ${
                      formErrors.phone ? "border-red-500" : ""
                    }`}
                    placeholder={language === "ru" ? "Ваш номер телефона" : "Your phone number"}
                  />
                  {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="serviceType" className="mb-1 block text-sm font-medium text-burgundy-900">
                    <BookOpen className="inline h-4 w-4 mr-1" />
                    {t.contactForm.service} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-md border bg-gray-50 py-3 px-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-burgundy-900 ${
                      formErrors.serviceType ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">{language === "ru" ? "Выберите услугу" : "Select a service"}</option>
                    {serviceGroups.map((group) => (
                      <optgroup key={group.group} label={group.group}>
                        {group.services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  {formErrors.serviceType && <p className="mt-1 text-sm text-red-600">{formErrors.serviceType}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-burgundy-900 text-white hover:bg-burgundy-800 focus:ring-2 focus:ring-burgundy-900 focus:ring-offset-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                      {language === "ru" ? "Отправка..." : "Sending..."}
                    </>
                  ) : (
                    t.contactForm.submit
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <div className="mb-4 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-burgundy-100">
                <AlertCircle className="h-6 w-6 text-burgundy-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t.terms.title}</h3>
            </div>

            <div className="mb-6 text-sm text-gray-600">
              <p className="mb-3">{t.terms.content}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleDeclineTerms}
                className="flex-1 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-burgundy-900 focus:ring-offset-2"
              >
                {t.terms.decline}
              </button>
              <button
                onClick={handleAcceptTerms}
                disabled={isSubmitting}
                className="flex-1 rounded-md bg-burgundy-900 py-2 px-4 text-sm font-medium text-white hover:bg-burgundy-800 focus:outline-none focus:ring-2 focus:ring-burgundy-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-1 h-4 w-4 animate-spin inline" />
                    {language === "ru" ? "Обработка..." : "Processing..."}
                  </>
                ) : (
                  t.terms.accept
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQ and Visit sections remain the same... */}
         {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-burgundy-900">{t.faq.title}</h2>
            <div className="mx-auto mb-12 h-1 w-20 bg-burgundy-900"></div>
            <div className="mx-auto max-w-3xl space-y-4">
              {t.faq.questions.map((faq, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-gray-50"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-burgundy-900" />
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition-transform ${activeAccordion === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${activeAccordion === index ? "max-h-96 px-4 pb-4" : "max-h-0"}`}
                  >
                    <p className="pl-8 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visit CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-lg bg-burgundy-900 p-8 text-white md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-2xl font-bold">{t.visit.title}</h2>
                  <p className="mb-6">{t.visit.description}</p>
                  <Link
                    href="/bookings"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-burgundy-900 transition-all hover:bg-gray-100 hover:gap-3"
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