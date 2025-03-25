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
} from "lucide-react"
import NavBar from "@/components/NavBar"

export default function Home() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")

  const translations = {
    ru: {
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков, Школа искусств",
      phone: "+7 (983) 600-00-00",
      email: "info@tut-school.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      rating: "4.8 на Яндексе",
      nav: {
        about: "О НАС",
        catalog: "КАТАЛОГ",
        reviews: "ОТЗЫВЫ",
        photo: "ФОТО",
        contacts: "КОНТАКТЫ",
      },
      hero: {
        title: "ШКОЛА ИНОСТРАННЫХ ЯЗЫКОВ И ИСКУССТВ",
        subtitle: "ОТКРЫТ НАБОР В ГРУППЫ НА УЧЕБНЫЙ ГОД 24-25",
        cta: "Записаться",
      },
      about: {
        title: "О НАС",
        description:
          "Мы языковая студия, английский и китайский языки для детей и взрослых. Нашим клиентам нравится качество преподавания и дружеская атмосфера. У нас вы не только найдете компанию для изучения языков, но и обретете новых друзей.",
        cta: "Подробнее",
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
        cta: "Записаться на пробный урок",
      },
      footer: {
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
      nav: {
        about: "ABOUT US",
        catalog: "CATALOG",
        reviews: "REVIEWS",
        photo: "PHOTOS",
        contacts: "CONTACTS",
      },
      hero: {
        title: "SCHOOL OF FOREIGN LANGUAGES AND ARTS",
        subtitle: "ENROLLMENT OPEN FOR GROUPS FOR ACADEMIC YEAR 24-25",
        cta: "Sign Up",
      },
      about: {
        title: "ABOUT US",
        description:
          "We are a language studio offering English and Chinese languages for children and adults. Our clients appreciate the quality of teaching and friendly atmosphere. With us, you will not only find a company to learn languages but also make new friends.",
        cta: "Learn More",
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
        cta: "Sign up for a trial lesson",
      },
      footer: {
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

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src="/assets/landing.jpeg"
                alt={language === "ru" ? "Логотип Tut School" : "Tut School logo"}
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold">{t.schoolName}</h1>
              <p className="text-sm text-muted-foreground">{t.schoolSubtitle}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 md:flex-row md:gap-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 rounded-md border border-primary px-2 py-1 text-sm text-primary hover:bg-primary/5"
            >
              <Globe className="h-4 w-4" />
              {t.languageToggle}
            </button>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm">{t.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm">{t.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current stroke-yellow-400" />
              </div>
              <span className="text-sm">{t.rating}</span>
            </div>
          </div>
        </div>
      </header>
      <NavBar />
      <main>
        <section className="relative">
          <div className="relative h-[500px] w-full">
            <Image
              src="/assets/happy-student.jpg"
              alt={language === "ru" ? "Студенты в классе" : "Students in classroom"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
              <h2 className="mb-4 text-4xl font-bold md:text-6xl">{t.hero.title}</h2>
              <p className="mb-8 text-xl md:text-3xl">{t.hero.subtitle}</p>
              <Link href="#" className="rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90">
                {t.hero.cta}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">{t.about.title}</h2>
              <p className="mb-6 text-lg text-muted-foreground">{t.about.description}</p>
              <Link href="#" className="inline-flex items-center text-primary hover:underline">
                {t.about.cta}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">{t.advantages.title}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {t.advantages.items.map((item, index) => (
                <div key={index} className="rounded-lg border p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary/5 py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">{t.courses.title}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.courses.items.map((course, index) => (
                <div key={index} className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="relative h-48">
                    <Image
                      src={`/assets/lounge.jpg?height=200&width=300&text=${index + 1}`}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-bold">{course.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{course.description}</p>
                    <Link
                      href="#"
                      className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                    >
                      {course.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold">{t.contact.title}</h2>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
              <Link
                href={`tel:${t.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
              >
                <Phone className="h-5 w-5" />
                {t.contact.phone}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                <Navigation className="h-5 w-5" />
                {t.contact.directions}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
              >
                <MessageSquare className="h-5 w-5" />
                {t.contact.write}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md bg-blue-400 px-4 py-2 text-white hover:bg-blue-500"
              >
                <Send className="h-5 w-5" />
                {t.contact.telegram}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              >
                <MessageSquare className="h-5 w-5" />
                {t.contact.whatsapp}
              </Link>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                <MapPin className="mr-1 inline-block h-4 w-4" />
                {t.address}
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="rounded-lg bg-primary p-8 text-center text-white md:p-12">
              <h2 className="mb-4 text-3xl font-bold">{t.trial.title}</h2>
              <p className="mb-6 text-lg">{t.trial.description}</p>
              <Link
                href="#"
                className="inline-block rounded-md bg-white px-6 py-3 font-medium text-primary hover:bg-gray-100"
              >
                {t.trial.cta}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-lg font-bold">{t.footer.contacts}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>{t.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>{t.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{t.address}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">{t.footer.workingHours.title}</h3>
              <p>{t.footer.workingHours.weekdays}</p>
              <p>{t.footer.workingHours.saturday}</p>
              <p>{t.footer.workingHours.sunday}</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">{t.footer.socialMedia}</h3>
              <div className="flex gap-2">
                <Link href="#" className="rounded-full bg-primary p-2 text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="rounded-full bg-primary p-2 text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="rounded-full bg-primary p-2 text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

