"use client"

import { useState, useEffect } from "react"
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
  Search,
  Menu,
  X,
  Clock,
  Filter,
  CheckCircle,
} from "lucide-react"

export default function Schedule() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDay, setActiveDay] = useState<number>(1) // Monday = 1, Sunday = 7
  const [activeFilter, setActiveFilter] = useState<string>("all")
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
        schedule: "РАСПИСАНИЕ",
        admissions: "ПОСТУПЛЕНИЕ",
        testimonials: "ОТЗЫВЫ",
        blog: "БЛОГ",
        contacts: "КОНТАКТЫ",
      },
      hero: {
        title: "РАСПИСАНИЕ ЗАНЯТИЙ",
        subtitle: "Ознакомьтесь с расписанием наших курсов и выберите удобное для вас время",
      },
      breadcrumbs: {
        home: "Главная",
        schedule: "Расписание",
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
      filters: {
        all: "Все курсы",
        english: "Английский язык",
        chinese: "Китайский язык",
        arts: "Искусство",
        children: "Для детей",
        adults: "Для взрослых",
      },
      schedule: {
        title: "РАСПИСАНИЕ ЗАНЯТИЙ",
        noClasses: "В этот день занятия не проводятся",
        classInfo: {
          level: "Уровень",
          age: "Возраст",
          teacher: "Преподаватель",
          room: "Кабинет",
          duration: "Продолжительность",
          spots: "Свободных мест",
        },
        enrollButton: "Записаться",
        fullClass: "Группа укомплектована",
      },
      legend: {
        title: "ОБОЗНАЧЕНИЯ",
        items: [
          {
            color: "bg-blue-100 border-blue-300",
            label: "Английский язык",
          },
          {
            color: "bg-red-100 border-red-300",
            label: "Китайский язык",
          },
          {
            color: "bg-purple-100 border-purple-300",
            label: "Искусство и творчество",
          },
          {
            color: "bg-green-100 border-green-300",
            label: "Для детей",
          },
          {
            color: "bg-amber-100 border-amber-300",
            label: "Для взрослых",
          },
        ],
      },
      info: {
        title: "ИНФОРМАЦИЯ О РАСПИСАНИИ",
        items: [
          "Расписание действительно с 1 сентября 2024 года",
          "Возможны изменения в расписании, следите за обновлениями",
          "Продолжительность занятий зависит от возраста и уровня группы",
          "Для записи на курс необходимо пройти предварительное тестирование",
          "При отсутствии свободных мест вы можете записаться в лист ожидания",
        ],
      },
      contact: {
        title: "ОСТАЛИСЬ ВОПРОСЫ?",
        description: "Если у вас остались вопросы по расписанию или вы хотите записаться на курс, свяжитесь с нами",
        phone: "Позвонить",
        email: "Написать",
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
        schedule: "SCHEDULE",
        admissions: "ADMISSIONS",
        testimonials: "TESTIMONIALS",
        blog: "BLOG",
        contacts: "CONTACTS",
      },
      hero: {
        title: "CLASS SCHEDULE",
        subtitle: "Check our course schedule and choose a time that works for you",
      },
      breadcrumbs: {
        home: "Home",
        schedule: "Schedule",
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
      filters: {
        all: "All Courses",
        english: "English Language",
        chinese: "Chinese Language",
        arts: "Arts",
        children: "For Children",
        adults: "For Adults",
      },
      schedule: {
        title: "CLASS SCHEDULE",
        noClasses: "No classes on this day",
        classInfo: {
          level: "Level",
          age: "Age",
          teacher: "Teacher",
          room: "Room",
          duration: "Duration",
          spots: "Available spots",
        },
        enrollButton: "Enroll",
        fullClass: "Class is full",
      },
      legend: {
        title: "LEGEND",
        items: [
          {
            color: "bg-blue-100 border-blue-300",
            label: "English Language",
          },
          {
            color: "bg-red-100 border-red-300",
            label: "Chinese Language",
          },
          {
            color: "bg-purple-100 border-purple-300",
            label: "Arts & Creativity",
          },
          {
            color: "bg-green-100 border-green-300",
            label: "For Children",
          },
          {
            color: "bg-amber-100 border-amber-300",
            label: "For Adults",
          },
        ],
      },
      info: {
        title: "SCHEDULE INFORMATION",
        items: [
          "Schedule is valid from September 1, 2024",
          "Schedule may change, please check for updates",
          "Class duration depends on age and group level",
          "Preliminary assessment is required to enroll in a course",
          "If there are no available spots, you can join the waiting list",
        ],
      },
      contact: {
        title: "HAVE QUESTIONS?",
        description: "If you have questions about the schedule or want to enroll in a course, contact us",
        phone: "Call",
        email: "Email",
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

  // Schedule data
  const scheduleData = {
    ru: [
      // Monday
      [
        {
          id: 1,
          time: "10:00 - 11:00",
          title: "Английский для дошкольников",
          type: "english",
          audience: "children",
          level: "Начальный",
          age: "4-6 лет",
          teacher: "Анна Петрова",
          room: "101",
          duration: "60 минут",
          spots: 2,
        },
        {
          id: 2,
          time: "12:00 - 13:30",
          title: "Китайский для школьников",
          type: "chinese",
          audience: "children",
          level: "Начальный",
          age: "7-10 лет",
          teacher: "Михаил Ли",
          room: "102",
          duration: "90 минут",
          spots: 0,
        },
        {
          id: 3,
          time: "16:00 - 17:30",
          title: "Английский для подростков",
          type: "english",
          audience: "children",
          level: "Средний",
          age: "11-14 лет",
          teacher: "Елена Соколова",
          room: "103",
          duration: "90 минут",
          spots: 3,
        },
        {
          id: 4,
          time: "18:00 - 19:30",
          title: "Деловой английский",
          type: "english",
          audience: "adults",
          level: "Продвинутый",
          age: "16+ лет",
          teacher: "Дмитрий Волков",
          room: "104",
          duration: "90 минут",
          spots: 5,
        },
        {
          id: 5,
          time: "19:45 - 21:15",
          title: "Китайская каллиграфия",
          type: "arts",
          audience: "adults",
          level: "Начальный",
          age: "16+ лет",
          teacher: "Михаил Ли",
          room: "105",
          duration: "90 минут",
          spots: 4,
        },
      ],
      // Tuesday
      [
        {
          id: 6,
          time: "10:00 - 11:00",
          title: "Китайский для дошкольников",
          type: "chinese",
          audience: "children",
          level: "Начальный",
          age: "5-6 лет",
          teacher: "Михаил Ли",
          room: "102",
          duration: "60 минут",
          spots: 3,
        },
        {
          id: 7,
          time: "15:00 - 16:30",
          title: "Английский для школьников",
          type: "english",
          audience: "children",
          level: "Начальный",
          age: "7-10 лет",
          teacher: "Анна Петрова",
          room: "101",
          duration: "90 минут",
          spots: 1,
        },
        {
          id: 8,
          time: "17:00 - 18:30",
          title: "Китайский для подростков",
          type: "chinese",
          audience: "children",
          level: "Начальный",
          age: "11-14 лет",
          teacher: "Михаил Ли",
          room: "102",
          duration: "90 минут",
          spots: 4,
        },
        {
          id: 9,
          time: "19:00 - 20:30",
          title: "Английский для взрослых",
          type: "english",
          audience: "adults",
          level: "Средний",
          age: "16+ лет",
          teacher: "Елена Соколова",
          room: "103",
          duration: "90 минут",
          spots: 2,
        },
      ],
      // Wednesday
      [
        {
          id: 10,
          time: "10:00 - 11:00",
          title: "Английский для дошкольников",
          type: "english",
          audience: "children",
          level: "Начальный",
          age: "4-6 лет",
          teacher: "Анна Петрова",
          room: "101",
          duration: "60 минут",
          spots: 2,
        },
        {
          id: 11,
          time: "12:00 - 13:30",
          title: "Китайский для школьников",
          type: "chinese",
          audience: "children",
          level: "Начальный",
          age: "7-10 лет",
          teacher: "Михаил Ли",
          room: "102",
          duration: "90 минут",
          spots: 0,
        },
        {
          id: 12,
          time: "16:00 - 17:30",
          title: "Английский для подростков",
          type: "english",
          audience: "children",
          level: "Средний",
          age: "11-14 лет",
          teacher: "Елена Соколова",
          room: "103",
          duration: "90 минут",
          spots: 3,
        },
        {
          id: 13,
          time: "18:00 - 19:30",
          title: "Оригами",
          type: "arts",
          audience: "children",
          level: "Начальный",
          age: "6-12 лет",
          teacher: "Наталья Петрова",
          room: "105",
          duration: "90 минут",
          spots: 6,
        },
        {
          id: 14,
          time: "19:45 - 21:15",
          title: "Китайский для взрослых",
          type: "chinese",
          audience: "adults",
          level: "Начальный",
          age: "16+ лет",
          teacher: "Михаил Ли",
          room: "102",
          duration: "90 минут",
          spots: 5,
        },
      ],
      // Thursday
      [
        {
          id: 15,
          time: "10:00 - 11:00",
          title: "Китайский для дошкольников",
          type: "chinese",
          audience: "children",
          level: "Начальный",
          age: "5-6 лет",
          teacher: "Михаил Ли",
          room: "102",
          duration: "60 минут",
          spots: 3,
        },
        {
          id: 16,
          time: "15:00 - 16:30",
          title: "Английский для школьников",
          type: "english",
          audience: "children",
          level: "Начальный",
          age: "7-10 лет",
          teacher: "Анна Петрова",
          room: "101",
          duration: "90 минут",
          spots: 1,
        },
        {
          id: 17,
          time: "17:00 - 18:30",
          title: "Китайский для подростков",
          type: "chinese",
          audience: "children",
          level: "Начальный",
          age: "11-14 лет",
          teacher: "Михаил Ли",
          room: "102",
          duration: "90 минут",
          spots: 4,
        },
        {
          id: 18,
          time: "19:00 - 20:30",
          title: "Театральная студия на английском",
          type: "arts",
          audience: "children",
          level: "Средний",
          age: "8-15 лет",
          teacher: "Дмитрий Волков",
          room: "104",
          duration: "90 минут",
          spots: 2,
        },
      ],
      // Friday
      [
        {
          id: 19,
          time: "10:00 - 11:00",
          title: "Английский для дошкольников",
          type: "english",
          audience: "children",
          level: "Начальный",
          age: "4-6 лет",
          teacher: "Анна Петрова",
          room: "101",
          duration: "60 минут",
          spots: 2,
        },
        {
          id: 20,
          time: "12:00 - 13:30",
          title: "Китайский для школьников",
          type: "chinese",
          audience: "children",
          level: "Начальный",
          age: "7-10 лет",
          teacher: "Михаил Ли",
          room: "102",
          duration: "90 минут",
          spots: 0,
        },
        {
          id: 21,
          time: "16:00 - 17:30",
          title: "Английский для подростков",
          type: "english",
          audience: "children",
          level: "Средний",
          age: "11-14 лет",
          teacher: "Елена Соколова",
          room: "103",
          duration: "90 минут",
          spots: 3,
        },
        {
          id: 22,
          time: "18:00 - 19:30",
          title: "Деловой английский",
          type: "english",
          audience: "adults",
          level: "Продвинутый",
          age: "16+ лет",
          teacher: "Дмитрий Волков",
          room: "104",
          duration: "90 минут",
          spots: 5,
        },
        {
          id: 23,
          time: "19:45 - 21:15",
          title: "Китайская каллиграфия",
          type: "arts",
          audience: "adults",
          level: "Начальный",
          age: "16+ лет",
          teacher: "Михаил Ли",
          room: "105",
          duration: "90 минут",
          spots: 4,
        },
      ],
      // Saturday
      [
        {
          id: 24,
          time: "10:00 - 11:30",
          title: "Английский для школьников",
          type: "english",
          audience: "children",
          level: "Начальный",
          age: "7-10 лет",
          teacher: "Анна Петрова",
          room: "101",
          duration: "90 минут",
          spots: 3,
        },
        {
          id: 25,
          time: "12:00 - 13:30",
          title: "Китайский для школьников",
          type: "chinese",
          audience: "children",
          level: "Начальный",
          age: "7-10 лет",
          teacher: "Михаил Ли",
          room: "102",
          duration: "90 минут",
          spots: 2,
        },
        {
          id: 26,
          time: "14:00 - 15:30",
          title: "Музыкальные занятия на английском",
          type: "arts",
          audience: "children",
          level: "Начальный",
          age: "4-8 лет",
          teacher: "Елена Соколова",
          room: "103",
          duration: "90 минут",
          spots: 4,
        },
        {
          id: 27,
          time: "16:00 - 17:30",
          title: "Английский для взрослых",
          type: "english",
          audience: "adults",
          level: "Начальный",
          age: "16+ лет",
          teacher: "Дмитрий Волков",
          room: "104",
          duration: "90 минут",
          spots: 6,
        },
      ],
      // Sunday
      [],
    ],
    en: [
      // Monday
      [
        {
          id: 1,
          time: "10:00 - 11:00",
          title: "English for Preschoolers",
          type: "english",
          audience: "children",
          level: "Beginner",
          age: "4-6 years",
          teacher: "Anna Petrova",
          room: "101",
          duration: "60 minutes",
          spots: 2,
        },
        {
          id: 2,
          time: "12:00 - 13:30",
          title: "Chinese for School Children",
          type: "chinese",
          audience: "children",
          level: "Beginner",
          age: "7-10 years",
          teacher: "Michael Li",
          room: "102",
          duration: "90 minutes",
          spots: 0,
        },
        {
          id: 3,
          time: "16:00 - 17:30",
          title: "English for Teenagers",
          type: "english",
          audience: "children",
          level: "Intermediate",
          age: "11-14 years",
          teacher: "Elena Sokolova",
          room: "103",
          duration: "90 minutes",
          spots: 3,
        },
        {
          id: 4,
          time: "18:00 - 19:30",
          title: "Business English",
          type: "english",
          audience: "adults",
          level: "Advanced",
          age: "16+ years",
          teacher: "Dmitry Volkov",
          room: "104",
          duration: "90 minutes",
          spots: 5,
        },
        {
          id: 5,
          time: "19:45 - 21:15",
          title: "Chinese Calligraphy",
          type: "arts",
          audience: "adults",
          level: "Beginner",
          age: "16+ years",
          teacher: "Michael Li",
          room: "105",
          duration: "90 minutes",
          spots: 4,
        },
      ],
      // Tuesday
      [
        {
          id: 6,
          time: "10:00 - 11:00",
          title: "Chinese for Preschoolers",
          type: "chinese",
          audience: "children",
          level: "Beginner",
          age: "5-6 years",
          teacher: "Michael Li",
          room: "102",
          duration: "60 minutes",
          spots: 3,
        },
        {
          id: 7,
          time: "15:00 - 16:30",
          title: "English for School Children",
          type: "english",
          audience: "children",
          level: "Beginner",
          age: "7-10 years",
          teacher: "Anna Petrova",
          room: "101",
          duration: "90 minutes",
          spots: 1,
        },
        {
          id: 8,
          time: "17:00 - 18:30",
          title: "Chinese for Teenagers",
          type: "chinese",
          audience: "children",
          level: "Beginner",
          age: "11-14 years",
          teacher: "Michael Li",
          room: "102",
          duration: "90 minutes",
          spots: 4,
        },
        {
          id: 9,
          time: "19:00 - 20:30",
          title: "English for Adults",
          type: "english",
          audience: "adults",
          level: "Intermediate",
          age: "16+ years",
          teacher: "Elena Sokolova",
          room: "103",
          duration: "90 minutes",
          spots: 2,
        },
      ],
      // Wednesday
      [
        {
          id: 10,
          time: "10:00 - 11:00",
          title: "English for Preschoolers",
          type: "english",
          audience: "children",
          level: "Beginner",
          age: "4-6 years",
          teacher: "Anna Petrova",
          room: "101",
          duration: "60 minutes",
          spots: 2,
        },
        {
          id: 11,
          time: "12:00 - 13:30",
          title: "Chinese for School Children",
          type: "chinese",
          audience: "children",
          level: "Beginner",
          age: "7-10 years",
          teacher: "Michael Li",
          room: "102",
          duration: "90 minutes",
          spots: 0,
        },
        {
          id: 12,
          time: "16:00 - 17:30",
          title: "English for Teenagers",
          type: "english",
          audience: "children",
          level: "Intermediate",
          age: "11-14 years",
          teacher: "Elena Sokolova",
          room: "103",
          duration: "90 minutes",
          spots: 3,
        },
        {
          id: 13,
          time: "18:00 - 19:30",
          title: "Origami Art",
          type: "arts",
          audience: "children",
          level: "Beginner",
          age: "6-12 years",
          teacher: "Natalia Petrova",
          room: "105",
          duration: "90 minutes",
          spots: 6,
        },
        {
          id: 14,
          time: "19:45 - 21:15",
          title: "Chinese for Adults",
          type: "chinese",
          audience: "adults",
          level: "Beginner",
          age: "16+ years",
          teacher: "Michael Li",
          room: "102",
          duration: "90 minutes",
          spots: 5,
        },
      ],
      // Thursday
      [
        {
          id: 15,
          time: "10:00 - 11:00",
          title: "Chinese for Preschoolers",
          type: "chinese",
          audience: "children",
          level: "Beginner",
          age: "5-6 years",
          teacher: "Michael Li",
          room: "102",
          duration: "60 minutes",
          spots: 3,
        },
        {
          id: 16,
          time: "15:00 - 16:30",
          title: "English for School Children",
          type: "english",
          audience: "children",
          level: "Beginner",
          age: "7-10 years",
          teacher: "Anna Petrova",
          room: "101",
          duration: "90 minutes",
          spots: 1,
        },
        {
          id: 17,
          time: "17:00 - 18:30",
          title: "Chinese for Teenagers",
          type: "chinese",
          audience: "children",
          level: "Beginner",
          age: "11-14 years",
          teacher: "Michael Li",
          room: "102",
          duration: "90 minutes",
          spots: 4,
        },
        {
          id: 18,
          time: "19:00 - 20:30",
          title: "English Drama Studio",
          type: "arts",
          audience: "children",
          level: "Intermediate",
          age: "8-15 years",
          teacher: "Dmitry Volkov",
          room: "104",
          duration: "90 minutes",
          spots: 2,
        },
      ],
      // Friday
      [
        {
          id: 19,
          time: "10:00 - 11:00",
          title: "English for Preschoolers",
          type: "english",
          audience: "children",
          level: "Beginner",
          age: "4-6 years",
          teacher: "Anna Petrova",
          room: "101",
          duration: "60 minutes",
          spots: 2,
        },
        {
          id: 20,
          time: "12:00 - 13:30",
          title: "Chinese for School Children",
          type: "chinese",
          audience: "children",
          level: "Beginner",
          age: "7-10 years",
          teacher: "Michael Li",
          room: "102",
          duration: "90 minutes",
          spots: 0,
        },
        {
          id: 21,
          time: "16:00 - 17:30",
          title: "English for Teenagers",
          type: "english",
          audience: "children",
          level: "Intermediate",
          age: "11-14 years",
          teacher: "Elena Sokolova",
          room: "103",
          duration: "90 minutes",
          spots: 3,
        },
        {
          id: 22,
          time: "18:00 - 19:30",
          title: "Business English",
          type: "english",
          audience: "adults",
          level: "Advanced",
          age: "16+ years",
          teacher: "Dmitry Volkov",
          room: "104",
          duration: "90 minutes",
          spots: 5,
        },
        {
          id: 23,
          time: "19:45 - 21:15",
          title: "Chinese Calligraphy",
          type: "arts",
          audience: "adults",
          level: "Beginner",
          age: "16+ years",
          teacher: "Michael Li",
          room: "105",
          duration: "90 minutes",
          spots: 4,
        },
      ],
      // Saturday
      [
        {
          id: 24,
          time: "10:00 - 11:30",
          title: "English for School Children",
          type: "english",
          audience: "children",
          level: "Beginner",
          age: "7-10 years",
          teacher: "Anna Petrova",
          room: "101",
          duration: "90 minutes",
          spots: 3,
        },
        {
          id: 25,
          time: "12:00 - 13:30",
          title: "Chinese for School Children",
          type: "chinese",
          audience: "children",
          level: "Beginner",
          age: "7-10 years",
          teacher: "Michael Li",
          room: "102",
          duration: "90 minutes",
          spots: 2,
        },
        {
          id: 26,
          time: "14:00 - 15:30",
          title: "Music Classes in English",
          type: "arts",
          audience: "children",
          level: "Beginner",
          age: "4-8 years",
          teacher: "Elena Sokolova",
          room: "103",
          duration: "90 minutes",
          spots: 4,
        },
        {
          id: 27,
          time: "16:00 - 17:30",
          title: "English for Adults",
          type: "english",
          audience: "adults",
          level: "Beginner",
          age: "16+ years",
          teacher: "Dmitry Volkov",
          room: "104",
          duration: "90 minutes",
          spots: 6,
        },
      ],
      // Sunday
      [],
    ],
  }

  const t = translations[language]
  const schedule = scheduleData[language][activeDay - 1]

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const getClassCardStyle = (type: string) => {
    switch (type) {
      case "english":
        return "bg-blue-100 border-blue-300"
      case "chinese":
        return "bg-red-100 border-red-300"
      case "arts":
        return "bg-purple-100 border-purple-300"
      default:
        return "bg-gray-100 border-gray-300"
    }
  }

  const getAudienceStyle = (audience: string) => {
    switch (audience) {
      case "children":
        return "bg-green-100 text-green-800"
      case "adults":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredSchedule = schedule.filter((item) => {
    if (activeFilter === "all") return true
    if (activeFilter === "english" && item.type === "english") return true
    if (activeFilter === "chinese" && item.type === "chinese") return true
    if (activeFilter === "arts" && item.type === "arts") return true
    if (activeFilter === "children" && item.audience === "children") return true
    if (activeFilter === "adults" && item.audience === "adults") return true
    return false
  })

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <div
        className={`bg-primary/90 py-2 text-white transition-all duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
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
              <a href="https://yandex.com/maps/10758/himki/?ll=37.374147%2C55.894611&mode=routes&rtext=~55.894611%2C37.374147&rtt=auto&ruri=~&z=17">
              <span className="text-sm">{t.rating}</span>
              </a>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 rounded-md border border-white/30 px-2 py-1 text-sm hover:bg-white/10 transition-colors duration-300"
            >
              <Globe className="h-4 w-4" />
              {t.languageToggle}
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`border-b bg-white py-4 shadow-sm sticky top-0 z-50 transition-all duration-500 ${isLoaded ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 animate-pulse-slow">
              <Link href="/">
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

        {/* Schedule Content */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary">{t.schedule.title}</h2>

          {/* Days Navigation */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex min-w-max border-b">
              {Object.entries(t.days).map(([key, value], index) => (
                <button
                  key={key}
                  onClick={() => setActiveDay(index + 1)}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    activeDay === index + 1
                      ? "border-b-2 border-primary text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-primary" />
              <span className="font-medium">{language === "ru" ? "Фильтры" : "Filters"}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(t.filters).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeFilter === key ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="mb-12">
            {filteredSchedule.length > 0 ? (
              <div className="grid gap-6">
                {filteredSchedule.map((item) => (
                  <div
                    key={item.id}
                    className={`rounded-lg border p-6 shadow-sm transition-all hover:shadow-md ${getClassCardStyle(
                      item.type,
                    )}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="mb-2 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-gray-600" />
                          <span className="font-medium">{item.time}</span>
                          <span
                            className={`ml-2 rounded-full px-3 py-1 text-xs font-medium ${getAudienceStyle(item.audience)}`}
                          >
                            {item.audience === "children"
                              ? language === "ru"
                                ? "Для детей"
                                : "For Children"
                              : language === "ru"
                                ? "Для взрослых"
                                : "For Adults"}
                          </span>
                        </div>
                        <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                        <div className="grid gap-2 text-sm md:grid-cols-2">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{t.schedule.classInfo.level}:</span>
                            <span>{item.level}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{t.schedule.classInfo.age}:</span>
                            <span>{item.age}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{t.schedule.classInfo.teacher}:</span>
                            <span>{item.teacher}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{t.schedule.classInfo.room}:</span>
                            <span>{item.room}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{t.schedule.classInfo.duration}:</span>
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{t.schedule.classInfo.spots}:</span>
                            <span>{item.spots}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        {item.spots > 0 ? (
                          <button className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors">
                            {t.schedule.enrollButton}
                          </button>
                        ) : (
                          <div className="rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-600">
                            {t.schedule.fullClass}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
                <p className="text-lg text-gray-600">{t.schedule.noClasses}</p>
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="mb-12 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-primary">{t.legend.title}</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {t.legend.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`h-6 w-6 rounded border ${item.color}`}></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Info */}
          <div className="mb-12 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-xl font-bold text-primary">{t.info.title}</h3>
            <ul className="space-y-2">
              {t.info.items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="rounded-lg bg-primary p-8 text-white">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold">{t.contact.title}</h3>
                <p className="mb-6">{t.contact.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={`tel:${t.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-primary hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    {t.contact.phone}
                  </Link>
                  <Link
                    href={`mailto:${t.email}`}
                    className="flex items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-primary hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    {t.contact.email}
                  </Link>
                </div>
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
      </main>
    </div>
  )
}

