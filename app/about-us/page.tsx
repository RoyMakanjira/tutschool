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
  ChevronRight,
  User,
  Search,
  Menu,
  X,
  ArrowRight,
  Award,
  BookOpen,
  Users,
  School,
  CheckCircle,
} from "lucide-react"

export default function AboutUs() {
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
        title: "О НАШЕЙ ШКОЛЕ",
        subtitle: "Узнайте больше о нашей истории, миссии и ценностях",
      },
      breadcrumbs: {
        home: "Главная",
        about: "О нас",
      },
      welcome: {
        title: "ДОБРО ПОЖАЛОВАТЬ В TUT SCHOOL",
        description:
          "Tut School — это современная школа иностранных языков и искусств, где каждый студент получает индивидуальный подход и возможность раскрыть свой потенциал. Мы сочетаем традиционные методики обучения с инновационными подходами, чтобы сделать процесс обучения максимально эффективным и увлекательным.",
        image: "/assets/gallery/reception.webp?height=400&width=600&text=School Building",
      },
      history: {
        title: "НАША ИСТОРИЯ",
        description:
          "Школа Tut School была основана в 2010 году группой энтузиастов, объединенных общей идеей — создать образовательное пространство, где изучение языков и искусств будет доступно каждому. За 14 лет работы мы выросли из небольшого учебного центра в полноценную школу с широким спектром программ для детей и взрослых.",
        milestones: [
          {
            year: "2010",
            title: "Основание школы",
            description: "Открытие первого учебного центра с курсами английского и китайского языков",
          },
          {
            year: "2013",
            title: "Расширение программ",
            description: "Добавление курсов для детей и подростков, открытие театральной студии на английском языке",
          },
          {
            year: "2016",
            title: "Новый кампус",
            description: "Переезд в новое просторное здание с современным оборудованием и учебными материалами",
          },
          {
            year: "2019",
            title: "Международная аккредитация",
            description:
              "Получение международной аккредитации и статуса официального центра подготовки к международным экзаменам",
          },
          {
            year: "2022",
            title: "Онлайн-обучение",
            description: "Запуск полноценной платформы для онлайн-обучения и гибридных форматов занятий",
          },
        ],
      },
      mission: {
        title: "НАША МИССИЯ И ЦЕННОСТИ",
        mission:
          "Наша миссия — помогать людям преодолевать языковые барьеры и раскрывать творческий потенциал через качественное образование и индивидуальный подход к каждому студенту.",
        values: [
          {
            title: "Качество",
            description:
              "Мы стремимся к высочайшему качеству образования, постоянно совершенствуя методики и учебные материалы",
            icon: "Award",
          },
          {
            title: "Индивидуальный подход",
            description:
              "Мы учитываем особенности, интересы и цели каждого студента при построении образовательного процесса",
            icon: "User",
          },
          {
            title: "Инновации",
            description:
              "Мы внедряем современные технологии и методики, чтобы сделать обучение эффективным и увлекательным",
            icon: "BookOpen",
          },
          {
            title: "Сообщество",
            description:
              "Мы создаем дружественную среду, где студенты могут общаться, обмениваться опытом и поддерживать друг друга",
            icon: "Users",
          },
        ],
      },
      team: {
        title: "НАША КОМАНДА",
        description:
          "В Tut School работают опытные преподаватели с международными сертификатами и богатым опытом работы. Многие из них являются носителями языка или имеют опыт длительного проживания в странах изучаемого языка.",
        members: [
          {
            name: "Анна Петрова",
            role: "Директор школы",
            bio: "Основатель и идейный вдохновитель Tut School. Имеет 20-летний опыт преподавания английского языка и степень магистра в области образования.",
            image: "/placeholder.svg?height=300&width=300&text=Anna",
          },
          {
            name: "Джон Смит",
            role: "Преподаватель английского языка",
            bio: "Носитель языка из Великобритании с сертификатами CELTA и DELTA. Специализируется на подготовке к международным экзаменам.",
            image: "/placeholder.svg?height=300&width=300&text=John",
          },
          {
            name: "Ли Вэй",
            role: "Преподаватель китайского языка",
            bio: "Носитель языка из Пекина с 10-летним опытом преподавания китайского как иностранного. Автор учебных пособий по китайскому языку.",
            image: "/placeholder.svg?height=300&width=300&text=Li Wei",
          },
          {
            name: "Мария Иванова",
            role: "Руководитель детских программ",
            bio: "Педагог с 15-летним стажем работы с детьми. Разработчик авторских методик обучения иностранным языкам для детей разного возраста.",
            image: "/placeholder.svg?height=300&width=300&text=Maria",
          },
        ],
      },
      facilities: {
        title: "НАШИ ПОМЕЩЕНИЯ И ОБОРУДОВАНИЕ",
        description:
          "Tut School располагается в современном здании с просторными и комфортными учебными классами. Все помещения оборудованы по последнему слову техники для обеспечения эффективного образовательного процесса.",
        items: [
          {
            title: "Современные классы",
            description: "10 просторных классов с интерактивными досками и комфортной мебелью",
            icon: "School",
          },
          {
            title: "Мультимедийная лаборатория",
            description: "Специально оборудованное помещение для аудирования и отработки произношения",
            icon: "Headphones",
          },
          {
            title: "Театральная студия",
            description: "Пространство для творческих занятий и языковой практики через искусство",
            icon: "Theater",
          },
          {
            title: "Библиотека",
            description: "Богатая коллекция учебных материалов, книг и мультимедийных ресурсов",
            icon: "BookOpen",
          },
          {
            title: "Зона отдыха",
            description: "Комфортное пространство для общения и отдыха между занятиями",
            icon: "Coffee",
          },
        ],
      },
      methodology: {
        title: "НАША МЕТОДОЛОГИЯ",
        description:
          "В Tut School мы используем коммуникативный подход к обучению языкам, который фокусируется на развитии практических навыков общения. Наши методики сочетают лучшие традиционные практики с инновационными технологиями.",
        features: [
          {
            title: "Коммуникативный подход",
            description: "Фокус на развитии разговорных навыков и практическом применении языка",
          },
          {
            title: "Погружение в языковую среду",
            description: "Создание аутентичной языковой среды на занятиях для максимальной эффективности",
          },
          {
            title: "Индивидуальные траектории",
            description:
              "Разработка персонализированных программ обучения с учетом целей и особенностей каждого студента",
          },
          {
            title: "Регулярная обратная связь",
            description: "Постоянный мониторинг прогресса и корректировка учебного плана",
          },
          {
            title: "Интеграция технологий",
            description: "Использование современных технологий и онлайн-ресурсов для повышения эффективности обучения",
          },
        ],
      },
      accreditations: {
        title: "АККРЕДИТАЦИИ И СЕРТИФИКАТЫ",
        description:
          "Tut School имеет все необходимые лицензии и аккредитации, подтверждающие высокое качество нашего образования. Мы являемся официальным центром подготовки к международным экзаменам и сотрудничаем с ведущими образовательными организациями.",
        items: [
          {
            title: "Лицензия на образовательную деятельность",
            issuer: "Министерство образования РФ",
          },
          {
            title: "Аккредитованный центр Cambridge Assessment English",
            issuer: "Cambridge University",
          },
          {
            title: "Официальный центр подготовки к HSK",
            issuer: "Hanban/Confucius Institute Headquarters",
          },
          {
            title: "Сертификат качества образовательных услуг",
            issuer: "Международная ассоциация языковых школ",
          },
        ],
      },
      stats: {
        title: "TUT SCHOOL В ЦИФРАХ",
        items: [
          {
            number: "14",
            label: "Лет опыта",
          },
          {
            number: "30+",
            label: "Профессиональных преподавателей",
          },
          {
            number: "1500+",
            label: "Студентов ежегодно",
          },
          {
            number: "15+",
            label: "Языковых программ",
          },
        ],
      },
      cta: {
        title: "СТАНЬТЕ ЧАСТЬЮ НАШЕГО СООБЩЕСТВА",
        description: "Запишитесь на пробное занятие и убедитесь в качестве нашего обучения",
        button: "Записаться на пробный урок",
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
        title: "ABOUT OUR SCHOOL",
        subtitle: "Learn more about our history, mission, and values",
      },
      breadcrumbs: {
        home: "Home",
        about: "About Us",
      },
      welcome: {
        title: "WELCOME TO TUT SCHOOL",
        description:
          "Tut School is a modern school of foreign languages and arts where each student receives an individual approach and the opportunity to unlock their potential. We combine traditional teaching methods with innovative approaches to make the learning process as effective and engaging as possible.",
        image: "/placeholder.svg?height=400&width=600&text=School Building",
      },
      history: {
        title: "OUR HISTORY",
        description:
          "Tut School was founded in 2010 by a group of enthusiasts united by a common idea — to create an educational space where the study of languages and arts would be accessible to everyone. Over 14 years of operation, we have grown from a small learning center into a full-fledged school with a wide range of programs for children and adults.",
        milestones: [
          {
            year: "2010",
            title: "School Foundation",
            description: "Opening of the first learning center with English and Chinese language courses",
          },
          {
            year: "2013",
            title: "Program Expansion",
            description: "Addition of courses for children and teenagers, opening of an English-language drama studio",
          },
          {
            year: "2016",
            title: "New Campus",
            description: "Moving to a new spacious building with modern equipment and educational materials",
          },
          {
            year: "2019",
            title: "International Accreditation",
            description:
              "Receiving international accreditation and status as an official center for preparation for international exams",
          },
          {
            year: "2022",
            title: "Online Learning",
            description: "Launch of a full-fledged platform for online learning and hybrid class formats",
          },
        ],
      },
      mission: {
        title: "OUR MISSION AND VALUES",
        mission:
          "Our mission is to help people overcome language barriers and unlock their creative potential through quality education and an individual approach to each student.",
        values: [
          {
            title: "Quality",
            description:
              "We strive for the highest quality of education, constantly improving our methods and educational materials",
            icon: "Award",
          },
          {
            title: "Individual Approach",
            description:
              "We take into account the characteristics, interests, and goals of each student when building the educational process",
            icon: "User",
          },
          {
            title: "Innovation",
            description: "We implement modern technologies and methodologies to make learning effective and engaging",
            icon: "BookOpen",
          },
          {
            title: "Community",
            description:
              "We create a friendly environment where students can communicate, exchange experiences, and support each other",
            icon: "Users",
          },
        ],
      },
      team: {
        title: "OUR TEAM",
        description:
          "Tut School employs experienced teachers with international certificates and extensive work experience. Many of them are native speakers or have experience of long-term residence in the countries of the studied language.",
        members: [
          {
            name: "Anna Petrova",
            role: "School Director",
            bio: "Founder and visionary of Tut School. Has 20 years of experience teaching English and a Master's degree in Education.",
            image: "/placeholder.svg?height=300&width=300&text=Anna",
          },
          {
            name: "John Smith",
            role: "English Teacher",
            bio: "Native speaker from the UK with CELTA and DELTA certificates. Specializes in preparation for international exams.",
            image: "/placeholder.svg?height=300&width=300&text=John",
          },
          {
            name: "Li Wei",
            role: "Chinese Teacher",
            bio: "Native speaker from Beijing with 10 years of experience teaching Chinese as a foreign language. Author of textbooks on the Chinese language.",
            image: "/placeholder.svg?height=300&width=300&text=Li Wei",
          },
          {
            name: "Maria Ivanova",
            role: "Head of Children's Programs",
            bio: "Educator with 15 years of experience working with children. Developer of original methods for teaching foreign languages to children of different ages.",
            image: "/placeholder.svg?height=300&width=300&text=Maria",
          },
        ],
      },
      facilities: {
        title: "OUR FACILITIES AND EQUIPMENT",
        description:
          "Tut School is located in a modern building with spacious and comfortable classrooms. All premises are equipped with state-of-the-art technology to ensure an effective educational process.",
        items: [
          {
            title: "Modern Classrooms",
            description: "10 spacious classrooms with interactive whiteboards and comfortable furniture",
            icon: "School",
          },
          {
            title: "Multimedia Laboratory",
            description: "Specially equipped room for listening and pronunciation practice",
            icon: "Headphones",
          },
          {
            title: "Drama Studio",
            description: "Space for creative activities and language practice through art",
            icon: "Theater",
          },
          {
            title: "Library",
            description: "Rich collection of educational materials, books, and multimedia resources",
            icon: "BookOpen",
          },
          {
            title: "Relaxation Area",
            description: "Comfortable space for communication and relaxation between classes",
            icon: "Coffee",
          },
        ],
      },
      methodology: {
        title: "OUR METHODOLOGY",
        description:
          "At Tut School, we use a communicative approach to language learning that focuses on developing practical communication skills. Our methods combine the best traditional practices with innovative technologies.",
        features: [
          {
            title: "Communicative Approach",
            description: "Focus on developing conversational skills and practical application of the language",
          },
          {
            title: "Language Immersion",
            description: "Creating an authentic language environment in classes for maximum effectiveness",
          },
          {
            title: "Individual Trajectories",
            description:
              "Development of personalized learning programs taking into account the goals and characteristics of each student",
          },
          {
            title: "Regular Feedback",
            description: "Constant monitoring of progress and adjustment of the curriculum",
          },
          {
            title: "Technology Integration",
            description: "Use of modern technologies and online resources to increase learning efficiency",
          },
        ],
      },
      accreditations: {
        title: "ACCREDITATIONS AND CERTIFICATES",
        description:
          "Tut School has all the necessary licenses and accreditations confirming the high quality of our education. We are an official center for preparation for international exams and cooperate with leading educational organizations.",
        items: [
          {
            title: "License for Educational Activities",
            issuer: "Ministry of Education of the Russian Federation",
          },
          {
            title: "Accredited Cambridge Assessment English Center",
            issuer: "Cambridge University",
          },
          {
            title: "Official HSK Preparation Center",
            issuer: "Hanban/Confucius Institute Headquarters",
          },
          {
            title: "Certificate of Quality of Educational Services",
            issuer: "International Association of Language Schools",
          },
        ],
      },
      stats: {
        title: "TUT SCHOOL IN NUMBERS",
        items: [
          {
            number: "14",
            label: "Years of Experience",
          },
          {
            number: "30+",
            label: "Professional Teachers",
          },
          {
            number: "1500+",
            label: "Students Annually",
          },
          {
            number: "15+",
            label: "Language Programs",
          },
        ],
      },
      cta: {
        title: "BECOME PART OF OUR COMMUNITY",
        description: "Sign up for a trial lesson and see the quality of our teaching for yourself",
        button: "Book a Trial Lesson",
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
              <a href="https://yandex.com/maps/10758/himki/?ll=37.374147%2C55.894611&mode=routes&rtext=~55.894611%2C37.374147&rtt=auto&ruri=~&z=17">
              <span className="text-sm">{t.rating}</span>
              </a>
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
      <header className="border-b bg-white py-4 shadow-sm sticky top-0 z-50">
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
              <h1 className="text-2xl font-bold text-primary">{t.schoolName}</h1>
              <p className="text-sm text-muted-foreground">{t.schoolSubtitle}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
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

        {/* Welcome Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-primary">{t.welcome.title}</h2>
                <div className="mb-6 h-1 w-20 bg-primary"></div>
                <p className="mb-6 text-lg text-gray-700">{t.welcome.description}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">
                      {language === "ru" ? "Профессиональные преподаватели" : "Professional teachers"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">
                      {language === "ru" ? "Современные методики" : "Modern methodologies"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">
                      {language === "ru" ? "Индивидуальный подход" : "Individual approach"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">
                      {language === "ru" ? "Комфортная атмосфера" : "Comfortable atmosphere"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={t.welcome.image || "/placeholder.svg"}
                  alt={language === "ru" ? "Здание школы Tut School" : "Tut School Building"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.history.title}</h2>
            <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">{t.history.description}</p>

            <div className="space-y-8">
              {t.history.milestones.map((milestone, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                      {milestone.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-gray-800">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission and Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.mission.title}</h2>
            <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
            <div className="mx-auto mb-12 max-w-3xl rounded-lg bg-primary/5 p-6 text-center">
              <p className="text-xl font-medium text-gray-800">{t.mission.mission}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.mission.values.map((value, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {value.icon === "Award" && <Award className="h-8 w-8" />}
                    {value.icon === "User" && <User className="h-8 w-8" />}
                    {value.icon === "BookOpen" && <BookOpen className="h-8 w-8" />}
                    {value.icon === "Users" && <Users className="h-8 w-8" />}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.team.title}</h2>
            <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">{t.team.description}</p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {t.team.members.map((member, index) => (
                <div key={index} className="rounded-lg bg-white overflow-hidden shadow-md hover:shadow-lg">
                  <div className="relative h-64 w-full">
                    <User className="h-100 w-100 justify-center"/>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="mb-4 text-sm font-medium text-primary">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.facilities.title}</h2>
            <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">{t.facilities.description}</p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.facilities.items.map((facility, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {facility.icon === "School" && <School className="h-6 w-6" />}
                    {facility.icon === "Headphones" && <div className="h-6 w-6">🎧</div>}
                    {facility.icon === "Theater" && <div className="h-6 w-6">🎭</div>}
                    {facility.icon === "BookOpen" && <BookOpen className="h-6 w-6" />}
                    {facility.icon === "Coffee" && <div className="h-6 w-6">☕</div>}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-800">{facility.title}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.methodology.title}</h2>
            <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">{t.methodology.description}</p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.methodology.features.map((feature, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg">
                  <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accreditations Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.accreditations.title}</h2>
            <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">{t.accreditations.description}</p>

            <div className="grid gap-6 md:grid-cols-2">
              {t.accreditations.items.map((item, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg">
                  <div className="mb-4 flex items-center gap-4">
                    <Award className="h-10 w-10 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.issuer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary">{t.stats.title}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.stats.items.map((stat, index) => (
                <div key={index} className="rounded-lg bg-white p-6 text-center shadow-md hover:shadow-lg">
                  <div className="mb-2 text-4xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
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
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.cta.title}</h2>
                  <p className="mx-auto mb-8 max-w-2xl text-lg">{t.cta.description}</p>
                  <Link
                    href="/bookings"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-primary hover:bg-gray-100"
                  >
                    {t.cta.button}
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

