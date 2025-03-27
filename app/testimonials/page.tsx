"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mail,
  Globe,
  Star,
  Search,
  Menu,
  X,
} from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { testimonials } from "@/constants"

export default function TestimonialsPage() {
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
                src="/placeholder.svg?height=56&width=56"
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
                <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-primary">
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
                  <Link href="/about" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
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
      <section id="testimonials" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Don't just take our word for it. Hear from our students who have transformed their careers with TutSchool.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
      </main>
    </div>
  )
}

