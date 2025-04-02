"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Globe,
  Star,
  ChevronRight,
  ArrowRight,
  Search,
  Menu,
  X,
  Clock,
  HelpCircle,
  ChevronDown,
} from "lucide-react"
import { testimonials } from "@/constants"

export default function Contact() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
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
      nav: {
        home: "ГЛАВНАЯ",
        about: "О НАС",
        programs: "ПРОГРАММЫ",
        admissions: "ПОСТУПЛЕНИЕ",
        blog: "БЛОГ",
        contacts: "КОНТАКТЫ",
        schedule: "ПОСТУПЛЕНИЕ",
        testimonials: "ПОСТУПЛЕНИЕ",
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
      nav: {
        home: "HOME",
        about: "ABOUT US",
        programs: "PROGRAMS",
        admissions: "ADMISSIONS",
        blog: "BLOG",
        contacts: "CONTACTS",
        schedule: "SCHEDULE",
        testimonials: "TESTIMONIALS",
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
      {/* Top Bar */}
      <div className="bg-primary/90 py-2 text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">{t.phone}</span>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <Mail className="h-4 w-4" />
              <span className="text-sm">{t.email}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-300">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current stroke-yellow-300" />
              </div>
              <span className="text-sm">{t.rating}</span>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 rounded-md border border-white/30 px-2 py-1 text-sm hover:bg-white/10"
            >
              <Globe className="h-4 w-4" />
              {t.languageToggle}
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b bg-white py-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14">
              <Image
                src="/logo.png"
                alt={language === "ru" ? "Логотип Tut School" : "Tut School logo"}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">{t.schoolName}</h1>
              <p className="text-sm text-muted-foreground">{t.schoolSubtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.programs}
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.admissions}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.schedule}
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.testimonials}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-medium text-primary hover:text-primary/80">
                  {t.nav.contacts}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden items-center rounded-full border border-gray-200 px-3 py-1 md:flex">
              <input
                type="text"
                placeholder={t.search}
                className="w-32 border-none bg-transparent text-sm outline-none"
              />
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <button className="rounded-md p-1 text-gray-700 hover:bg-gray-100 md:hidden" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b bg-white py-4 shadow-sm md:hidden">
          <div className="container mx-auto px-4">
            <nav className="space-y-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.programs}
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.admissions}
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.blog}
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.schedule}
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.testimonials}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-2 text-sm font-medium text-primary hover:text-primary/80">
                    {t.nav.contacts}
                  </Link>
                </li>
              </ul>
              <div className="flex items-center rounded-full border border-gray-200 px-3 py-2">
                <input
                  type="text"
                  placeholder={t.search}
                  className="w-full border-none bg-transparent text-sm outline-none"
                />
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </nav>
          </div>
        </div>
      )}

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
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Map"
                      alt="Map"
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
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
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-primary transition-all hover:bg-gray-100 hover:gap-3"
                  >
                    {t.visit.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative h-[200px] overflow-hidden rounded-lg md:h-auto">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Tut School classroom"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

