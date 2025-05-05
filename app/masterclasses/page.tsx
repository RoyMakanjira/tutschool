"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
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
  Calendar,
  User,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Clock,
  Landmark,
  BookOpen,
  Palette,
  Music,
  Languages,
  Camera,
  Mic,
} from "lucide-react"
import PromotionalBanner from "@/components/PromotionalBanner"

export default function Masterclasses() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState<string>("all")
  const [selectedMasterclass, setSelectedMasterclass] = useState<number | null>(null)

  useEffect(() => {
    // Set loaded state after a small delay to trigger initial animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Handle scroll events for scroll-triggered animations
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsScrolled(window.scrollY > 100)
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
          { title: "ПОДРОСТКИ", href: "/conversation-club/adults" },
          { title: "ВЗРОСЛЫЕ", href: "/conversation-club/teenagers" },
        ],
        news: "НОВОСТИ",
        contacts: "КОНТАКТЫ",
      },
      masterclasses: {
        title: "МАСТЕР-КЛАССЫ",
        subtitle: "Творческие и образовательные мастер-классы для детей и взрослых",
        cta: "Записатьс�� на мастер-класс",
        intro: {
          title: "НАШИ МАСТЕР-КЛАССЫ",
          description:
            "Мы предлагаем разнообразные мастер-классы, которые помогут вам и вашим детям развить творческие способности, улучшить языковые навыки и расширить кругозор. Наши опытные преподаватели создают увлекательную и дружескую атмосферу для обучения.",
        },
        categories: {
          all: "Все",
          art: "Искусство",
          language: "Языки",
          music: "Музыка",
          photography: "Фотография",
          cooking: "Кулинария",
        },
        upcoming: {
          title: "БЛИЖАЙШИЕ МАСТЕР-КЛАССЫ",
          viewAll: "Смотреть все",
          items: [
            {
              id: 1,
              date: "15 июня 2024",
              time: "15:00 - 17:00",
              title: "Китайская каллиграфия",
              category: "art",
              description:
                "Познакомьтесь с искусством китайской каллиграфии под руководством опытного мастера. Вы научитесь основным техникам и создадите свою первую работу.",
              price: "1500 ₽",
              instructor: "Ли Вэй",
              spots: "Осталось 5 мест",
              image: "https://images.pexels.com/photos/19032592/pexels-photo-19032592/free-photo-of-hanging-wooden-boards-with-chinese-calligraphy.jpeg",
              cta: "Записаться",
            },
            {
              id: 2,
              date: "18 июня 2024",
              time: "18:30 - 20:00",
              title: "Английский через песни",
              category: "language",
              description:
                "Интерактивный мастер-класс, где вы улучшите свой английский через популярные песни. Идеально для среднего уровня владения языком.",
              price: "1200 ₽",
              instructor: "Анна Смирнова",
              spots: "Осталось 8 мест",
              image: "https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg",
              cta: "Записаться",
            },
            {
              id: 3,
              date: "20 июня 2024",
              time: "16:00 - 18:00",
              title: "Основы фотографии",
              category: "photography",
              description:
                "Научитесь основам фотографии и композиции. Мастер-класс подходит для начинающих фотографов с любым типом камеры, включая смартфоны.",
              price: "1800 ₽",
              instructor: "Михаил Петров",
              spots: "Осталось 4 места",
              image: "https://images.pexels.com/photos/5238226/pexels-photo-5238226.jpeg",
              cta: "Записаться",
            },
            {
              id: 4,
              date: "22 июня 2024",
              time: "12:00 - 14:00",
              title: "Детский мастер-класс по рисованию",
              category: "art",
              description:
                "Творческий мастер-класс для детей 7-12 лет. Ребята познакомятся с различными техниками рисования и создадут свою картину.",
              price: "1000 ₽",
              instructor: "Елена Иванова",
              spots: "Осталось 6 мест",
              image: "https://images.pexels.com/photos/6975152/pexels-photo-6975152.jpeg",
              cta: "Записаться",
            },
          ],
        },
        benefits: {
          title: "ПРЕИМУЩЕСТВА НАШИХ МАСТЕР-КЛАССОВ",
          items: [
            {
              title: "Опытные преподаватели",
              description: "Все мастер-классы проводятся профессионалами своего дела с многолетним опытом",
              icon: "User",
            },
            {
              title: "Небольшие группы",
              description: "Мы ограничиваем количество участников, чтобы обеспечить индивидуальный подход",
              icon: "Users",
            },
            {
              title: "Все материалы включены",
              description: "Вам не нужно ничего приносить с собой - все необходимые материалы уже включены в стоимость",
              icon: "Package",
            },
            {
              title: "Дружеская атмосфера",
              description: "Мы создаем комфортную и поддерживающую среду для обучения и творчества",
              icon: "Heart",
            },
          ],
        },
        testimonials: {
          title: "ОТЗЫВЫ УЧАСТНИКОВ",
          items: [
            {
              name: "Ольга К.",
              text: "Мастер-класс по каллиграфии превзошел все мои ожидания. Преподаватель очень внимательный и терпеливый, объяснял все очень понятно. Обязательно приду еще!",
            },
            {
              name: "Сергей М.",
              text: "Отличный мастер-класс по фотографии. За два часа я узнал больше, чем за месяц самостоятельного изучения. Теперь мои фотографии выглядят гораздо профессиональнее.",
            },
            {
              name: "Мария Д.",
              text: "Водила дочь на мастер-класс по рисованию. Ребенок в восторге! Преподаватель нашел подход к каждому ребенку, и все ушли с красивыми работами и хорошим настроением.",
            },
          ],
        },
        faq: {
          title: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
          items: [
            {
              question: "Нужно ли иметь предварительные навыки для участия в мастер-классах?",
              answer:
                "Большинство наших мастер-классов рассчитаны на начинающих и не требуют предварительной подготовки. Если для участия нужны какие-то базовые навыки, это будет указано в описании мастер-класса.",
            },
            {
              question: "Можно ли отменить запись на мастер-класс?",
              answer:
                "Да, вы можете отменить запись не позднее чем за 24 часа до начала мастер-класса и получить полный возврат средств. При отмене менее чем за 24 часа возврат не предусмотрен.",
            },
            {
              question: "Есть ли возрастные ограничения для участия?",
              answer:
                "Для каждого мастер-класса указаны рекомендуемые возрастные ограничения. Детские мастер-классы обычно проводятся для определенных возрастных групп, а на взрослые мастер-классы допускаются участники от 16 лет.",
            },
            {
              question: "Что включено в стоимость мастер-класса?",
              answer:
                "В стоимость включены все необходимые материалы, оборудование и инструменты для участия в мастер-классе. Также предоставляются чай, кофе и легкие закуски.",
            },
          ],
        },
        action: {
          title: "ГОТОВЫ ПОПРОБОВАТЬ ЧТО-ТО НОВОЕ?",
          description: "Запишитесь на один из наших мастер-классов и откройте для себя новые навыки и увлечения",
          button: "Посмотреть расписание",
        },
      },
      contact: {
        title: "СВЯЗАТЬСЯ С НАМИ",
        phone: "Позвонить",
        directions: "Как доехать",
        write: "Написать",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
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
          { title: "TEENAGERS", href: "/conversation-club/adults" },
          { title: "ADULTS", href: "/conversation-club/teenagers" },
        ],
        news: "NEWS",
        contacts: "CONTACTS",
      },
      masterclasses: {
        title: "MASTERCLASSES",
        subtitle: "Creative and educational masterclasses for children and adults",
        cta: "Sign up for a masterclass",
        intro: {
          title: "OUR MASTERCLASSES",
          description:
            "We offer a variety of masterclasses that will help you and your children develop creative abilities, improve language skills, and broaden your horizons. Our experienced teachers create an exciting and friendly atmosphere for learning.",
        },
        categories: {
          all: "All",
          art: "Art",
          language: "Languages",
          music: "Music",
          photography: "Photography",
          cooking: "Cooking",
        },
        upcoming: {
          title: "UPCOMING MASTERCLASSES",
          viewAll: "View all",
          items: [
            {
              id: 1,
              date: "June 15, 2024",
              time: "3:00 PM - 5:00 PM",
              title: "Chinese Calligraphy",
              category: "art",
              description:
                "Discover the art of Chinese calligraphy under the guidance of an experienced master. You will learn basic techniques and create your first work.",
              price: "1500 ₽",
              instructor: "Li Wei",
              spots: "5 spots left",
              image: "https://images.pexels.com/photos/19032592/pexels-photo-19032592/free-photo-of-hanging-wooden-boards-with-chinese-calligraphy.jpeg",
              cta: "Sign up",
            },
            {
              id: 2,
              date: "June 18, 2024",
              time: "6:30 PM - 8:00 PM",
              title: "English Through Songs",
              category: "language",
              description:
                "An interactive masterclass where you'll improve your English through popular songs. Ideal for intermediate level speakers.",
              price: "1200 ₽",
              instructor: "Anna Smirnova",
              spots: "8 spots left",
              image: "https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg",
              cta: "Sign up",
            },
            {
              id: 3,
              date: "June 20, 2024",
              time: "4:00 PM - 6:00 PM",
              title: "Photography Basics",
              category: "photography",
              description:
                "Learn the basics of photography and composition. This masterclass is suitable for beginner photographers with any type of camera, including smartphones.",
              price: "1800 ₽",
              instructor: "Mikhail Petrov",
              spots: "4 spots left",
              image: "https://images.pexels.com/photos/5238226/pexels-photo-5238226.jpeg",
              cta: "Sign up",
            },
            {
              id: 4,
              date: "June 22, 2024",
              time: "12:00 PM - 2:00 PM",
              title: "Children's Drawing Workshop",
              category: "art",
              description:
                "A creative masterclass for children aged 7-12. Kids will learn various drawing techniques and create their own artwork.",
              price: "1000 ₽",
              instructor: "Elena Ivanova",
              spots: "6 spots left",
              image: "https://images.pexels.com/photos/6975152/pexels-photo-6975152.jpeg",
              cta: "Sign up",
            },
          ],
        },
        benefits: {
          title: "BENEFITS OF OUR MASTERCLASSES",
          items: [
            {
              title: "Experienced Teachers",
              description: "All masterclasses are conducted by professionals with many years of experience",
              icon: "User",
            },
            {
              title: "Small Groups",
              description: "We limit the number of participants to ensure an individual approach",
              icon: "Users",
            },
            {
              title: "All Materials Included",
              description:
                "You don't need to bring anything with you - all necessary materials are already included in the price",
              icon: "Package",
            },
            {
              title: "Friendly Atmosphere",
              description: "We create a comfortable and supportive environment for learning and creativity",
              icon: "Heart",
            },
          ],
        },
        testimonials: {
          title: "PARTICIPANT TESTIMONIALS",
          items: [
            {
              name: "Olga K.",
              text: "The calligraphy masterclass exceeded all my expectations. The teacher was very attentive and patient, explaining everything very clearly. I will definitely come again!",
            },
            {
              name: "Sergey M.",
              text: "Excellent photography masterclass. In two hours I learned more than in a month of self-study. Now my photos look much more professional.",
            },
            {
              name: "Maria D.",
              text: "I took my daughter to a drawing masterclass. The child is delighted! The teacher found an approach to each child, and everyone left with beautiful works and a good mood.",
            },
          ],
        },
        faq: {
          title: "FREQUENTLY ASKED QUESTIONS",
          items: [
            {
              question: "Do I need to have preliminary skills to participate in masterclasses?",
              answer:
                "Most of our masterclasses are designed for beginners and do not require prior preparation. If any basic skills are needed for participation, it will be indicated in the masterclass description.",
            },
            {
              question: "Can I cancel my registration for a masterclass?",
              answer:
                "Yes, you can cancel your registration no later than 24 hours before the start of the masterclass and receive a full refund. For cancellations less than 24 hours in advance, no refund is provided.",
            },
            {
              question: "Are there age restrictions for participation?",
              answer:
                "Recommended age restrictions are indicated for each masterclass. Children's masterclasses are usually held for specific age groups, and adult masterclasses admit participants from 16 years old.",
            },
            {
              question: "What is included in the price of the masterclass?",
              answer:
                "The price includes all necessary materials, equipment, and tools for participating in the masterclass. Tea, coffee, and light snacks are also provided.",
            },
          ],
        },
        action: {
          title: "READY TO TRY SOMETHING NEW?",
          description: "Sign up for one of our masterclasses and discover new skills and hobbies",
          button: "View schedule",
        },
      },
      contact: {
        title: "CONTACT US",
        phone: "Call",
        directions: "Directions",
        write: "Write",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
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
  const sectionIds = ["hero", "intro", "upcoming", "benefits", "testimonials", "faq", "cta"]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "art":
        return <Palette className="h-5 w-5" />
      case "language":
        return <Languages className="h-5 w-5" />
      case "music":
        return <Music className="h-5 w-5" />
      case "photography":
        return <Camera className="h-5 w-5" />
      case "cooking":
        return <Mic className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  const filteredMasterclasses =
    activeTab === "all"
      ? t.masterclasses.upcoming.items
      : t.masterclasses.upcoming.items.filter((item) => item.category === activeTab)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <ScrollProgress />

      {/* Scroll Spy for section tracking */}
      <ScrollSpy sectionIds={sectionIds} onChange={(id) => {}} threshold={0.3} />

      {/* Promotional Banner */}
      <PromotionalBanner />
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#5C162E]" />
              <span className="text-gray-600">{t.workingHours}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#5C162E]" />
              <a href={`tel:${t.phone.replace(/\s+/g, "")}`} className="text-gray-600 hover:text-[#5C162E]">
                {t.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="h-4 w-4 text-[#5C162E]" />
              <span className="text-gray-600">{t.address}</span>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <Mail className="h-4 w-4 text-[#5C162E]" />
              <a href={`mailto:${t.email}`} className="text-gray-600 hover:text-[#5C162E]">
                {t.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="text-red-600 hover:text-[#5C162E]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.052-1.713-1.033-1.033-1.49-1.172-1.744-1.172-.356 0-.458.102-.458.593v1.573c0 .424-.136.593-1.252.593-1.844 0-3.896-1.118-5.336-3.202-2.168-3.4-2.762-5.944-2.762-6.47 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.864 2.5 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.316c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.204.508.66v3.54c0 .373.17.508.271.508.22 0 .407-.135.814-.542 1.27-1.422 2.168-3.624 2.168-3.624.118-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.66-.22 1.015-2.32 3.979-2.32 3.979-.186.305-.254.44 0 .78.186.254.796.779 1.2 1.252.745.847 1.32 1.558 1.473 2.052.17.491-.085.745-.576.745z" />
              </svg>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B79167349246&text&type=phone_number&app_absent=0"
              className="text-green-600 hover:text-[#5C162E]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.472 3.5C18.188 1.24 15.073 0 11.786 0 5.354 0 .13 5.214.13 11.636c0 2.05.546 4.05 1.585 5.812L.13 24l6.726-1.763c1.698.925 3.607 1.41 5.55 1.41h.005c6.43 0 11.65-5.215 11.65-11.637 0-3.109-1.21-6.026-3.413-8.225l-.175-.285zM11.786 21.273h-.004c-1.743 0-3.45-.468-4.942-1.35l-.355-.21-3.676.964.985-3.595-.232-.368c-.975-1.55-1.49-3.335-1.49-5.17 0-5.356 4.364-9.713 9.728-9.713 2.6 0 5.034 1.012 6.868 2.85 1.832 1.837 2.842 4.276 2.84 6.873-.004 5.356-4.367 9.719-9.722 9.719zm5.333-7.278c-.294-.147-1.734-.856-2.002-.951-.268-.097-.463-.146-.658.146-.195.293-.757.951-.928 1.147-.17.195-.342.22-.635.073-.294-.147-1.24-.456-2.363-1.456-.873-.778-1.463-1.738-1.634-2.032-.171-.293-.018-.451.128-.597.132-.132.294-.342.44-.513.148-.17.197-.293.296-.488.098-.195.05-.366-.025-.513-.073-.147-.657-1.583-.9-2.168-.244-.585-.487-.487-.658-.487-.17 0-.367-.025-.562-.025-.195 0-.513.073-.781.366-.269.293-1.025.999-1.025 2.435 0 1.436 1.05 2.824 1.196 3.02.146.195 2.057 3.142 4.988 4.407.697.268 1.24.428 1.664.55.7.222 1.337.19 1.839.115.56-.085 1.734-.71 1.977-1.395.244-.684.244-1.27.17-1.393-.073-.122-.268-.196-.562-.342z" />
              </svg>
            </a>
            <a href="https://t.me/TUTschoolNovogorsk" className="text-blue-500 hover:text-[#5C162E]">
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
        className={`border-b bg-white py-4 shadow-sm transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-md" : "relative z-50"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14">
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
              <h1 className="text-2xl font-bold text-[#5C162E]">{t.schoolName}</h1>
              <p className="text-sm text-muted-foreground">{t.schoolSubtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" ref={dropdownRef}>
            <ul className="flex gap-6">
              <li className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className={`flex items-center text-sm font-medium ${activeDropdown === "about" ? "text-[#5C162E]" : "text-gray-700 hover:text-[#5C162E]"}`}
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
                  className={`flex items-center text-sm font-medium ${activeDropdown === "courses" ? "text-[#5C162E]" : "text-gray-700 hover:text-[#5C162E]"}`}
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
                  className={`flex items-center text-sm font-medium ${activeDropdown === "chinese" ? "text-[#5C162E]" : "text-gray-700 hover:text-[#5C162E]"}`}
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
                  className={`flex items-center text-sm font-medium ${activeDropdown === "club" ? "text-[#5C162E]" : "text-gray-700 hover:text-[#5C162E]"}`}
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
                <Link href="/news" className="text-sm font-medium text-gray-700 hover:text-[#5C162E]">
                  {t.nav.news}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-[#5C162E]">
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
                    className="block py-3 px-4 text-sm text-gray-600 hover:text-[#5C162E] hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
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
                    className="block py-3 px-4 text-sm text-gray-600 hover:text-[#5C162E] hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
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
                    className="block py-3 px-4 text-sm text-gray-600 hover:text-[#5C162E] hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
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
                    className="block py-3 px-4 text-sm text-gray-600 hover:text-[#5C162E] hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-sm font-medium text-gray-700 hover:text-[#5C162E] hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
            >
              {t.nav.news}
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 px-4 text-sm font-medium text-gray-700 hover:text-[#5C162E] hover:bg-gray-50 active:bg-gray-100 rounded-md touch-manipulation"
            >
              {t.nav.contacts}
            </Link>
          </nav>
        </div>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative" id="hero">
          <div className="relative h-[500px] w-full overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/31932779/pexels-photo-31932779/free-photo-of-vibrant-abstract-paint-swirl-in-pink-tones.jpeg?height=500&width=1600&text=Masterclasses"
              alt={language === "ru" ? "Мастер-классы" : "Masterclasses"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#5C162E]/80 to-[#5C162E]/40"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center px-4 text-white md:px-12 lg:px-20">
              <div className="max-w-2xl">
                <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl animate-fade-in-up">
                  {t.masterclasses.title}
                </h1>
                <p className="mb-8 text-lg md:text-xl animate-fade-in-up animation-delay-300">
                  {t.masterclasses.subtitle}
                </p>
                <Link
                  href="#upcoming"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#5C162E] transition-all hover:bg-gray-100 hover:gap-3 animate-fade-in-up animation-delay-600"
                >
                  {t.masterclasses.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16" id="intro">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-[#5C162E]">{t.masterclasses.intro.title}</h2>
                <p className="mb-6 text-lg text-gray-700">{t.masterclasses.intro.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-[#5C162E]/10 p-4 text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#5C162E]/20 text-[#5C162E]">
                      <Palette className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{t.masterclasses.categories.art}</h3>
                  </div>
                  <div className="rounded-lg bg-[#5C162E]/10 p-4 text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#5C162E]/20 text-[#5C162E]">
                      <Languages className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{t.masterclasses.categories.language}</h3>
                  </div>
                  <div className="rounded-lg bg-[#5C162E]/10 p-4 text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#5C162E]/20 text-[#5C162E]">
                      <Music className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{t.masterclasses.categories.music}</h3>
                  </div>
                  <div className="rounded-lg bg-[#5C162E]/10 p-4 text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#5C162E]/20 text-[#5C162E]">
                      <Camera className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold">{t.masterclasses.categories.photography}</h3>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/7256207/pexels-photo-7256207.jpeg?text=Creative Masterclasses"
                  alt="Tut School masterclasses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Masterclasses Section */}
        <section className="bg-gray-50 py-16" id="upcoming">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#5C162E]">{t.masterclasses.upcoming.title}</h2>

            {/* Category Tabs */}
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "all" ? "bg-[#5C162E] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {t.masterclasses.categories.all}
              </button>
              <button
                onClick={() => setActiveTab("art")}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "art" ? "bg-[#5C162E] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Palette className="h-4 w-4" />
                {t.masterclasses.categories.art}
              </button>
              <button
                onClick={() => setActiveTab("language")}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "language" ? "bg-[#5C162E] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Languages className="h-4 w-4" />
                {t.masterclasses.categories.language}
              </button>
              <button
                onClick={() => setActiveTab("music")}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "music" ? "bg-[#5C162E] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Music className="h-4 w-4" />
                {t.masterclasses.categories.music}
              </button>
              <button
                onClick={() => setActiveTab("photography")}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "photography" ? "bg-[#5C162E] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Camera className="h-4 w-4" />
                {t.masterclasses.categories.photography}
              </button>
              <button
                onClick={() => setActiveTab("cooking")}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === "cooking" ? "bg-[#5C162E] text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Mic className="h-4 w-4" />
                {t.masterclasses.categories.cooking}
              </button>
            </div>

            {/* Masterclass Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredMasterclasses.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
                >
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <div className="absolute top-0 right-0 m-2 rounded-full bg-[#5C162E] px-3 py-1 text-xs font-medium text-white">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{item.time}</span>
                    </div>
                    <div className="mb-2 flex items-center gap-1">
                      <div className="rounded-full bg-[#5C162E]/10 p-1">{getCategoryIcon(item.category)}</div>
                      <span className="text-xs font-medium text-[#5C162E]">
                        {t.masterclasses.categories[item.category as keyof typeof t.masterclasses.categories]}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                    <p className="mb-4 text-sm text-gray-600">{item.description}</p>
                    <div className="mb-4 flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-[#5C162E]" />
                      <span className="font-medium">{item.instructor}</span>
                    </div>
                    <div className="mb-4 text-sm text-[#5C162E]">{item.spots}</div>
                    <Link
                      href={`/masterclasses/register?id=${item.id}`}
                      className="inline-flex items-center gap-2 rounded-md bg-[#5C162E] px-4 py-2 text-white transition-all hover:bg-[#5C162E]/90"
                    >
                      {item.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16" id="benefits">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#5C162E]">{t.masterclasses.benefits.title}</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.masterclasses.benefits.items.map((item, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#5C162E]/10 text-[#5C162E]">
                    <User className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16" id="testimonials">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-[#5C162E]">{t.masterclasses.testimonials.title}</h2>
            <div className="mx-auto mb-12 h-1 w-20 bg-[#5C162E]"></div>
            <div className="grid gap-6 md:grid-cols-3">
              {t.masterclasses.testimonials.items.map((item, index) => (
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5C162E]/10 text-[#5C162E]">
                      <User className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16" id="faq">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#5C162E]">{t.masterclasses.faq.title}</h2>
            <div className="mx-auto max-w-3xl space-y-4">
              {t.masterclasses.faq.items.map((item, index) => (
                <div key={index} className="rounded-lg border border-gray-200 bg-white">
                  <button
                    className="flex w-full items-center justify-between p-4 text-left font-medium"
                    onClick={() => setSelectedMasterclass(selectedMasterclass === index ? null : index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${selectedMasterclass === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all ${
                      selectedMasterclass === index ? "max-h-96 p-4 pt-0" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16" id="cta">
          <div className="container mx-auto px-4">
            <div className="overflow-hidden rounded-xl bg-[#5C162E] shadow-xl">
              <div className="relative">
                <div className="absolute inset-0">
                  <Image
                    src="/placeholder.svg?height=400&width=1200&text=Join Our Masterclasses"
                    alt="Background"
                    fill
                    className="object-cover opacity-20"
                  />
                </div>
                <div className="relative px-8 py-16 text-center text-white md:px-12 lg:px-16">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.masterclasses.action.title}</h2>
                  <p className="mx-auto mb-8 max-w-2xl text-lg">{t.masterclasses.action.description}</p>
                  <Link
                    href="#upcoming"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-[#5C162E] transition-all hover:bg-gray-100 hover:gap-3"
                  >
                    {t.masterclasses.action.button}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-center text-3xl font-bold text-[#5C162E]">{t.contact.title}</h2>
            <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
              <Link
                href={`tel:${t.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 rounded-md bg-[#5C162E] px-4 py-2 text-white transition-all hover:bg-[#5C162E]/90"
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
      </main>
    </div>
  )
}
