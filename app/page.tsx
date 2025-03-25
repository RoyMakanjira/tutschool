"use client"

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
  MessageSquare,
  Navigation,
  Send,
  ChevronRight,
  Calendar,
  User,
  ArrowRight,
  Search,
  Menu,
  X,
} from "lucide-react"
import NavBar from "@/components/NavBar"

export default function Home() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
        about: "О НАС",
        catalog: "КАТАЛОГ",
        reviews: "ОТЗЫВЫ",
        photo: "ФОТО",
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
      nav: {
        about: "ABOUT US",
        catalog: "CATALOG",
        reviews: "REVIEWS",
        photo: "PHOTOS",
        contacts: "CONTACTS",
      },
      hero: {
        title: "SCHOOL OF FOREIGN LANGUAGES AND ARTS",
        subtitle: "We help children and adults learn English and Chinese in a friendly atmosphere",
        cta: "Book a trial lesson",
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
                src="/"
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
          <NavBar />

          <div className="flex items-center gap-4">
            <div className="hidden items-center rounded-full border border-gray-200 px-3 py-1 md:flex">
              <input
                type="text"
                placeholder={t.search}
                className="w-32 border-none bg-transparent text-sm outline-none"
              />
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Link
              href="#"
              className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 md:block"
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
      {mobileMenuOpen && (
        <div className="border-b bg-white py-4 shadow-sm md:hidden">
          <div className="container mx-auto px-4">
            <nav className="space-y-4">
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.catalog}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.reviews}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.photo}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
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
              <Link
                href="#"
                className="block w-full rounded-full bg-primary py-2 text-center text-sm font-medium text-white hover:bg-primary/90"
              >
                {t.hero.cta}
              </Link>
            </nav>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[600px] w-full">
            <Image
              src="/assets/landing.jpeg"
              alt={language === "ru" ? "Студенты в классе" : "Students in classroom"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center px-4 text-white md:px-12 lg:px-20">
              <div className="max-w-2xl">
                <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{t.hero.title}</h2>
                <p className="mb-8 text-lg md:text-xl">{t.hero.subtitle}</p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary/90 hover:gap-3"
                >
                  {t.hero.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
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
                <Link href="#" className="inline-flex items-center text-primary hover:underline">
                  {t.welcome.cta}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/assets/happy-student.jpg"
                  alt="Tut School classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.advantages.title}</h2>
            <div className="mx-auto mb-12 h-1 w-20 bg-primary"></div>
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
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.courses.title}</h2>
            <p className="mb-12 text-center text-lg text-gray-600">{t.courses.subtitle}</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.courses.items.map((course, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={`/assets/student.jpg?height=200&width=300&text=${index + 1}`}
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
              <h2 className="text-3xl font-bold text-primary">{t.news.title}</h2>
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
                      src={`/assets/coursesOne.svg?height=200&width=400&text=News ${index + 1}`}
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
                {t.contact.whatsapp}\
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
                    src="/assets/painting.jpg?height=400&width=1200"
                    alt="Background"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <div className="relative px-8 py-16 text-center text-white md:px-12 lg:px-16">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.trial.title}</h2>
                  <p className="mx-auto mb-8 max-w-2xl text-lg">{t.trial.description}</p>
                  <Link
                    href="#"
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

