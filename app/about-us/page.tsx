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
  User,
  Search,
  Menu,
  X,
  Award,
  BookOpen,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

export default function AboutUs() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"mission" | "team" | "facilities" | "achievements">("mission")
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
        title: "О НАШЕЙ ШКОЛЕ",
        subtitle: "Узнайте больше о нашей миссии, команде и достижениях",
      },
      breadcrumbs: {
        home: "Главная",
        about: "О нас",
      },
      tabs: {
        mission: "Миссия и ценности",
        team: "Наша команда",
        facilities: "Наши классы",
        achievements: "Достижения",
      },
      welcome: {
        title: "ДОБРО ПОЖАЛОВАТЬ В TUT SCHOOL",
        description:
          "Tut School — это современная школа иностранных языков и искусств, где каждый студент может раскрыть свой потенциал в дружественной и вдохновляющей атмосфере. Мы предлагаем широкий спектр курсов для детей и взрослых, разработанных с учетом индивидуальных потребностей и целей каждого ученика.",
      },
      mission: {
        title: "НАША МИССИЯ И ЦЕННОСТИ",
        description:
          "Наша миссия — создать вдохновляющую образовательную среду, где каждый студент может раскрыть свой потенциал в изучении языков и искусства. Мы стремимся не только обучать языкам, но и знакомить наших студентов с культурой и традициями разных стран.",
        values: [
          {
            title: "Индивидуальный подход",
            description:
              "Мы учитываем особенности каждого студента и адаптируем методику обучения под его потребности и стиль обучения.",
          },
          {
            title: "Качество преподавания",
            description:
              "Наши преподаватели — опытные профессионалы с международными сертификатами и богатым опытом работы.",
          },
          {
            title: "Современные методики",
            description:
              "Мы используем современные методики преподавания, которые делают процесс обучения эффективным и увлекательным.",
          },
          {
            title: "Дружественная атмосфера",
            description:
              "Мы создаем комфортную и дружественную атмосферу, где каждый студент чувствует себя уверенно и может свободно выражать свои мысли.",
          },
        ],
        history: {
          title: "ИСТОРИЯ ШКОЛЫ",
          paragraphs: [
            "Tut School была основана в 2015 году группой энтузиастов, объединенных общей идеей — создать современную школу иностранных языков, где обучение будет не только эффективным, но и увлекательным.",
            "Начав с небольшого помещения и нескольких групп английского языка, мы постепенно расширяли спектр предлагаемых курсов и улучшали инфраструктуру. В 2018 году мы добавили курсы китайского языка, а в 2020 году открыли направление творческих занятий.",
            "Сегодня Tut School — это современный образовательный центр с просторными классами, профессиональными преподавателями и разнообразными программами для всех возрастов. Мы гордимся тем, что многие наши студенты успешно сдают международные экзамены и продолжают обучение за рубежом.",
          ],
        },
      },
      team: {
        title: "НАША КОМАНДА",
        description:
          "Наши преподаватели — опытные профессионалы с международными сертификатами и богатым опытом работы. Они не только обладают глубокими знаниями в своей области, но и умеют вдохновлять студентов, создавая увлекательную и продуктивную атмосферу на занятиях.",
        members: [
          {
            name: "Анна Петрова",
            position: "Директор школы, преподаватель английского языка",
            credentials: "CELTA, DELTA, 10 лет опыта",
            description:
              "Анна основала Tut School в 2015 году и с тех пор руководит ее развитием. Она имеет богатый опыт преподавания английского языка и разработки учебных программ. Анна специализируется на работе с детьми младшего и среднего школьного возраста.",
          },
          {
            name: "Михаил Ли",
            position: "Преподаватель китайского языка и каллиграфии",
            credentials: "Магистр лингвистики, носитель языка",
            description:
              "Михаил — носитель китайского языка с глубоким пониманием китайской культуры и традиций. Он мастерски сочетает обучение языку с элементами культурного контекста, что помогает студентам лучше понять и усвоить материал.",
          },
          {
            name: "Елена Соколова",
            position: "Преподаватель английского языка",
            credentials: "CELTA, BEC Higher, 8 лет опыта",
            description:
              "Елена имеет богатый опыт работы с разными возрастными группами и уровнями подготовки. Она специализируется на подготовке к международным экзаменам и деловом английском. Ее уроки всегда наполнены интерактивными заданиями и практическими упражнениями.",
          },
          {
            name: "Дмитрий Волков",
            position: "Преподаватель английского языка, руководитель театральной студии",
            credentials: "TEFL, актерское образование",
            description:
              "Дмитрий успешно сочетает свой опыт в театральном искусстве с преподаванием английского языка. Он руководит театральной студией на английском языке, где студенты не только улучшают свои языковые навыки, но и развивают уверенность в себе и творческие способности.",
          },
          {
            name: "Наталья Петрова",
            position: "Преподаватель творческих занятий",
            credentials: "Художественное образование, 6 лет опыта",
            description:
              "Наталья ведет курсы оригами и других творческих занятий. Она умеет находить индивидуальный подход к каждому ученику и раскрывать его творческий потенциал. Ее занятия всегда проходят в атмосфере творчества и вдохновения.",
          },
          {
            name: "Ольга Смирнова",
            position: "Методист, преподаватель английского языка",
            credentials: "CELTA, TKT, 7 лет опыта",
            description:
              "Ольга отвечает за разработку и адаптацию учебных программ. Она следит за новыми тенденциями в методике преподавания и внедряет инновационные подходы в образовательный процесс. Ольга также ведет занятия по английскому языку для дошкольников.",
          },
        ],
      },
      facilities: {
        title: "НАШИ КЛАССЫ И ОБОРУДОВАНИЕ",
        description:
          "Мы создали комфортную и современную образовательную среду, где каждый студент может полностью погрузиться в процесс обучения. Наши классы оборудованы всем необходимым для эффективного изучения языков и творческого развития.",
        features: [
          {
            title: "Современные классы",
            description: "Просторные и светлые классы с удобной мебелью и современным оборудованием.",
          },
          {
            title: "Интерактивные доски",
            description:
              "Все классы оснащены интерактивными досками, которые делают процесс обучения более наглядным и увлекательным.",
          },
          {
            title: "Аудио и видео оборудование",
            description:
              "Качественное аудио и видео оборудование для прослушивания и просмотра аутентичных материалов.",
          },
          {
            title: "Библиотека",
            description:
              "Богатая библиотека с учебниками, художественной литературой и периодическими изданиями на изучаемых языках.",
          },
          {
            title: "Зона отдыха",
            description: "Комфортная зона отдыха, где студенты могут пообщаться, выпить чай или кофе между занятиями.",
          },
          {
            title: "Творческая мастерская",
            description:
              "Специально оборудованное помещение для творческих занятий с необходимыми материалами и инструментами.",
          },
        ],
        gallery: {
          title: "ГАЛЕРЕЯ",
          images: [
            {
              src: "/placeholder.svg?height=300&width=400&text=Classroom 1",
              alt: "Класс английского языка",
            },
            {
              src: "/placeholder.svg?height=300&width=400&text=Classroom 2",
              alt: "Класс китайского языка",
            },
            {
              src: "/placeholder.svg?height=300&width=400&text=Art Studio",
              alt: "Творческая мастерская",
            },
            {
              src: "/placeholder.svg?height=300&width=400&text=Library",
              alt: "Библиотека",
            },
            {
              src: "/assets/lounge.jpg?height=300&width=400&text=Lounge",
              alt: "Зона отдыха",
            },
            {
              src: "/assets/gallery/reception.webp?height=300&width=400&text=Reception",
              alt: "Ресепшн",
            },
          ],
        },
      },
      achievements: {
        title: "НАШИ ДОСТИЖЕНИЯ",
        description:
          "За годы работы наша школа достигла значительных успехов в области языкового образования и творческого развития. Мы гордимся достижениями наших студентов и преподавателей.",
        stats: [
          {
            number: "2000+",
            label: "Выпускников",
          },
          {
            number: "15",
            label: "Опытных преподавателей",
          },
          {
            number: "10+",
            label: "Программ обучения",
          },
          {
            number: "98%",
            label: "Довольных студентов",
          },
        ],
        items: [
          {
            title: "Международные сертификаты",
            description:
              "90% наших студентов успешно сдают международные экзамены по английскому языку (Cambridge YLE, KET, PET, FCE).",
          },
          {
            title: "Олимпиады и конкурсы",
            description:
              "Ежегодно наши ученики становятся призерами городских и региональных олимпиад по иностранным языкам.",
          },
          {
            title: "Театральные постановки",
            description:
              "Театральная студия регулярно выступает на городских мероприятиях с постановками на английском языке.",
          },
          {
            title: "Выставки работ",
            description:
              "Работы студентов курса китайской каллиграфии были представлены на выставке в культурном центре.",
          },
          {
            title: "Поступление в зарубежные вузы",
            description:
              "Многие выпускники продолжают обучение в зарубежных вузах благодаря языковой подготовке в нашей школе.",
          },
          {
            title: "Партнерство с международными организациями",
            description:
              "Мы сотрудничаем с международными образовательными организациями и являемся официальным центром подготовки к экзаменам Cambridge.",
          },
        ],
        certificates: {
          title: "СЕРТИФИКАТЫ И АККРЕДИТАЦИИ",
          items: [
            "Официальный центр подготовки к экзаменам Cambridge",
            "Сертификат качества образовательных услуг",
            "Членство в Ассоциации преподавателей иностранных языков",
            "Аккредитация Министерства образования",
          ],
        },
      },
      partners: {
        title: "НАШИ ПАРТНЕРЫ",
        description:
          "Мы сотрудничаем с ведущими образовательными организациями и издательствами, что позволяет нам предлагать нашим студентам качественные учебные материалы и дополнительные возможности для развития.",
        logos: [
          {
            src: "/placeholder.svg?height=100&width=200&text=Partner 1",
            alt: "Логотип партнера 1",
          },
          {
            src: "/placeholder.svg?height=100&width=200&text=Partner 2",
            alt: "Логотип партнера 2",
          },
          {
            src: "/placeholder.svg?height=100&width=200&text=Partner 3",
            alt: "Логотип партнера 3",
          },
          {
            src: "/placeholder.svg?height=100&width=200&text=Partner 4",
            alt: "Логотип партнера 4",
          },
        ],
      },
      cta: {
        title: "ПРИСОЕДИНЯЙТЕСЬ К НАМ",
        description:
          "Станьте частью нашего дружного сообщества и начните свой путь к новым знаниям и навыкам. Мы поможем вам достичь ваших целей в изучении языков и творческом развитии.",
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
        subtitle: "Learn more about our mission, team, and achievements",
      },
      breadcrumbs: {
        home: "Home",
        about: "About Us",
      },
      tabs: {
        mission: "Mission & Values",
        team: "Our Team",
        facilities: "Our Facilities",
        achievements: "Achievements",
      },
      welcome: {
        title: "WELCOME TO TUT SCHOOL",
        description:
          "Tut School is a modern school of foreign languages and arts where every student can reach their potential in a friendly and inspiring atmosphere. We offer a wide range of courses for children and adults, designed to meet the individual needs and goals of each student.",
      },
      mission: {
        title: "OUR MISSION & VALUES",
        description:
          "Our mission is to create an inspiring educational environment where every student can reach their potential in learning languages and arts. We strive not only to teach languages but also to introduce our students to the culture and traditions of different countries.",
        values: [
          {
            title: "Individual Approach",
            description:
              "We take into account the characteristics of each student and adapt our teaching methodology to their needs and learning style.",
          },
          {
            title: "Quality Teaching",
            description:
              "Our teachers are experienced professionals with international certificates and extensive work experience.",
          },
          {
            title: "Modern Methods",
            description: "We use modern teaching methods that make the learning process effective and engaging.",
          },
          {
            title: "Friendly Atmosphere",
            description:
              "We create a comfortable and friendly atmosphere where every student feels confident and can freely express their thoughts.",
          },
        ],
        history: {
          title: "SCHOOL HISTORY",
          paragraphs: [
            "Tut School was founded in 2015 by a group of enthusiasts united by a common idea — to create a modern language school where learning would be not only effective but also engaging.",
            "Starting with a small space and a few English language groups, we gradually expanded our range of courses and improved our infrastructure. In 2018, we added Chinese language courses, and in 2020, we opened a creative arts department.",
            "Today, Tut School is a modern educational center with spacious classrooms, professional teachers, and diverse programs for all ages. We are proud that many of our students successfully pass international exams and continue their education abroad.",
          ],
        },
      },
      team: {
        title: "OUR TEAM",
        description:
          "Our teachers are experienced professionals with international certificates and extensive work experience. They not only possess deep knowledge in their field but also know how to inspire students, creating an engaging and productive atmosphere in the classroom.",
        members: [
          {
            name: "Anna Petrova",
            position: "School Director, English Language Teacher",
            credentials: "CELTA, DELTA, 10 years of experience",
            description:
              "Anna founded Tut School in 2015 and has been leading its development ever since. She has extensive experience in teaching English and developing educational programs. Anna specializes in working with primary and middle school children.",
          },
          {
            name: "Michael Li",
            position: "Chinese Language and Calligraphy Teacher",
            credentials: "Master's in Linguistics, Native Speaker",
            description:
              "Michael is a native Chinese speaker with a deep understanding of Chinese culture and traditions. He masterfully combines language teaching with elements of cultural context, helping students better understand and absorb the material.",
          },
          {
            name: "Elena Sokolova",
            position: "English Language Teacher",
            credentials: "CELTA, BEC Higher, 8 years of experience",
            description:
              "Elena has extensive experience working with different age groups and proficiency levels. She specializes in preparation for international exams and business English. Her lessons are always filled with interactive tasks and practical exercises.",
          },
          {
            name: "Dmitry Volkov",
            position: "English Language Teacher, Drama Studio Director",
            credentials: "TEFL, Acting Education",
            description:
              "Dmitry successfully combines his experience in theatrical arts with teaching English. He directs the English-language drama studio, where students not only improve their language skills but also develop confidence and creative abilities.",
          },
          {
            name: "Natalia Petrova",
            position: "Creative Arts Teacher",
            credentials: "Art Education, 6 years of experience",
            description:
              "Natalia teaches origami and other creative classes. She knows how to find an individual approach to each student and unlock their creative potential. Her classes always take place in an atmosphere of creativity and inspiration.",
          },
          {
            name: "Olga Smirnova",
            position: "Methodologist, English Language Teacher",
            credentials: "CELTA, TKT, 7 years of experience",
            description:
              "Olga is responsible for developing and adapting educational programs. She keeps track of new trends in teaching methodology and implements innovative approaches in the educational process. Olga also teaches English to preschoolers.",
          },
        ],
      },
      facilities: {
        title: "OUR FACILITIES AND EQUIPMENT",
        description:
          "We have created a comfortable and modern educational environment where every student can fully immerse themselves in the learning process. Our classrooms are equipped with everything necessary for effective language learning and creative development.",
        features: [
          {
            title: "Modern Classrooms",
            description: "Spacious and bright classrooms with comfortable furniture and modern equipment.",
          },
          {
            title: "Interactive Whiteboards",
            description:
              "All classrooms are equipped with interactive whiteboards that make the learning process more visual and engaging.",
          },
          {
            title: "Audio and Video Equipment",
            description: "Quality audio and video equipment for listening to and viewing authentic materials.",
          },
          {
            title: "Library",
            description: "A rich library with textbooks, fiction, and periodicals in the languages being studied.",
          },
          {
            title: "Lounge Area",
            description:
              "A comfortable lounge area where students can socialize and have tea or coffee between classes.",
          },
          {
            title: "Creative Workshop",
            description: "A specially equipped space for creative activities with necessary materials and tools.",
          },
        ],
        gallery: {
          title: "GALLERY",
          images: [
            {
              src: "/placeholder.svg?height=300&width=400&text=Classroom 1",
              alt: "English Language Classroom",
            },
            {
              src: "/placeholder.svg?height=300&width=400&text=Classroom 2",
              alt: "Chinese Language Classroom",
            },
            {
              src: "/placeholder.svg?height=300&width=400&text=Art Studio",
              alt: "Creative Workshop",
            },
            {
              src: "/placeholder.svg?height=300&width=400&text=Library",
              alt: "Library",
            },
            {
              src: "/placeholder.svg?height=300&width=400&text=Lounge",
              alt: "Lounge Area",
            },
            {
              src: "/placeholder.svg?height=300&width=400&text=Reception",
              alt: "Reception",
            },
          ],
        },
      },
      achievements: {
        title: "OUR ACHIEVEMENTS",
        description:
          "Over the years, our school has achieved significant success in language education and creative development. We are proud of the achievements of our students and teachers.",
        stats: [
          {
            number: "2000+",
            label: "Graduates",
          },
          {
            number: "15",
            label: "Experienced Teachers",
          },
          {
            number: "10+",
            label: "Educational Programs",
          },
          {
            number: "98%",
            label: "Satisfied Students",
          },
        ],
        items: [
          {
            title: "International Certificates",
            description:
              "90% of our students successfully pass international English exams (Cambridge YLE, KET, PET, FCE).",
          },
          {
            title: "Olympiads and Competitions",
            description: "Every year our students become winners of city and regional foreign language olympiads.",
          },
          {
            title: "Theatrical Performances",
            description: "The drama studio regularly performs at city events with plays in English.",
          },
          {
            title: "Art Exhibitions",
            description:
              "Works by students of the Chinese calligraphy course were presented at an exhibition in the cultural center.",
          },
          {
            title: "Admission to Foreign Universities",
            description:
              "Many graduates continue their education at foreign universities thanks to language training at our school.",
          },
          {
            title: "Partnership with International Organizations",
            description:
              "We cooperate with international educational organizations and are an official Cambridge exam preparation center.",
          },
        ],
        certificates: {
          title: "CERTIFICATES AND ACCREDITATIONS",
          items: [
            "Official Cambridge Exam Preparation Center",
            "Educational Services Quality Certificate",
            "Membership in the Association of Foreign Language Teachers",
            "Ministry of Education Accreditation",
          ],
        },
      },
      partners: {
        title: "OUR PARTNERS",
        description:
          "We cooperate with leading educational organizations and publishers, which allows us to offer our students quality educational materials and additional opportunities for development.",
        logos: [
          {
            src: "/placeholder.svg?height=100&width=200&text=Partner 1",
            alt: "Partner 1 Logo",
          },
          {
            src: "/placeholder.svg?height=100&width=200&text=Partner 2",
            alt: "Partner 2 Logo",
          },
          {
            src: "/placeholder.svg?height=100&width=200&text=Partner 3",
            alt: "Partner 3 Logo",
          },
          {
            src: "/placeholder.svg?height=100&width=200&text=Partner 4",
            alt: "Partner 4 Logo",
          },
        ],
      },
      cta: {
        title: "JOIN US",
        description:
          "Become part of our friendly community and start your journey to new knowledge and skills. We will help you achieve your goals in language learning and creative development.",
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

  // Function to check if element should be animated based on scroll position
  const shouldAnimate = (elementId: string): boolean => {
    const element = document.getElementById(elementId)
    if (!element) return false

    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight || document.documentElement.clientHeight

    // Element is considered in view when its top is below 20% of the window height
    // and its bottom is above 80% of the window height
    return rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2
  }

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
              <span className="text-sm">{t.rating}</span>
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
        {/* Welcome Section */}
        <section className="py-12" id="welcome-section">
          <div className="container mx-auto px-4">
            <div
              className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
                shouldAnimate("welcome-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="mb-6 text-3xl font-bold text-primary">{t.welcome.title}</h2>
              <p className="text-lg text-gray-700">{t.welcome.description}</p>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="border-b border-t bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === "mission"
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {t.tabs.mission}
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === "team" ? "border-b-2 border-primary text-primary" : "text-gray-600 hover:text-primary"
                }`}
              >
                {t.tabs.team}
              </button>
              <button
                onClick={() => setActiveTab("facilities")}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === "facilities"
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {t.tabs.facilities}
              </button>
              <button
                onClick={() => setActiveTab("achievements")}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === "achievements"
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {t.tabs.achievements}
              </button>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <div className="py-12">
          {/* Mission & Values Tab */}
          {activeTab === "mission" && (
            <div className="container mx-auto px-4" id="mission-tab">
              <div className="mx-auto max-w-4xl">
                <h2
                  className={`mb-6 text-center text-3xl font-bold text-primary transition-all duration-1000 ${
                    shouldAnimate("mission-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {t.mission.title}
                </h2>
                <p
                  className={`mb-12 text-center text-lg text-gray-700 transition-all duration-1000 delay-300 ${
                    shouldAnimate("mission-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {t.mission.description}
                </p>

                {/* Values */}
                <div className="mb-16 grid gap-6 md:grid-cols-2">
                  {t.mission.values.map((value, index) => (
                    <div
                      key={index}
                      className={`rounded-lg bg-white p-6 shadow-md transition-all duration-1000 hover:shadow-lg hover:translate-y-[-5px] ${
                        shouldAnimate("mission-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 200 + 500}ms` }}
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary animate-float">
                        {index === 0 && <User className="h-6 w-6" />}
                        {index === 1 && <Award className="h-6 w-6" />}
                        {index === 2 && <BookOpen className="h-6 w-6" />}
                        {index === 3 && <Users className="h-6 w-6" />}
                      </div>
                      <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>

                {/* History */}
                <div
                  className={`rounded-lg bg-gray-50 p-8 transition-all duration-1000 delay-700 ${
                    shouldAnimate("mission-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  <h3 className="mb-6 text-center text-2xl font-bold text-primary">{t.mission.history.title}</h3>
                  <div className="space-y-4">
                    {t.mission.history.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === "team" && (
            <div className="container mx-auto px-4" id="team-tab">
              <div className="mx-auto max-w-4xl">
                <h2
                  className={`mb-6 text-center text-3xl font-bold text-primary transition-all duration-1000 ${
                    shouldAnimate("team-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {t.team.title}
                </h2>
                <p
                  className={`mb-12 text-center text-lg text-gray-700 transition-all duration-1000 delay-300 ${
                    shouldAnimate("team-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {t.team.description}
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {t.team.members.map((member, index) => (
                    <div
                      key={index}
                      className={`rounded-lg bg-white p-6 shadow-md transition-all duration-1000 hover:shadow-lg hover:translate-y-[-5px] ${
                        shouldAnimate("team-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 200 + 500}ms` }}
                    >
                      <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-primary/10 mx-auto animate-pulse-slow">
                        <User className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="mb-1 text-center text-xl font-bold">{member.name}</h3>
                      <p className="mb-2 text-center text-sm text-primary">{member.position}</p>
                      <p className="mb-4 text-center text-xs text-gray-500">{member.credentials}</p>
                      <p className="text-gray-600">{member.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Facilities Tab */}
          {activeTab === "facilities" && (
            <div className="container mx-auto px-4" id="facilities-tab">
              <div className="mx-auto max-w-4xl">
                <h2
                  className={`mb-6 text-center text-3xl font-bold text-primary transition-all duration-1000 ${
                    shouldAnimate("facilities-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {t.facilities.title}
                </h2>
                <p
                  className={`mb-12 text-center text-lg text-gray-700 transition-all duration-1000 delay-300 ${
                    shouldAnimate("facilities-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {t.facilities.description}
                </p>

                {/* Features */}
                <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {t.facilities.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`rounded-lg bg-white p-6 shadow-md transition-all duration-1000 hover:shadow-lg hover:translate-y-[-5px] ${
                        shouldAnimate("facilities-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 200 + 500}ms` }}
                    >
                      <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Gallery */}
                <div
                  className={`transition-all duration-1000 delay-700 ${
                    shouldAnimate("facilities-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  <h3 className="mb-6 text-center text-2xl font-bold text-primary">{t.facilities.gallery.title}</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {t.facilities.gallery.images.map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg shadow-md group">
                        <div className="relative h-48">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Achievements Tab */}
          {activeTab === "achievements" && (
            <div className="container mx-auto px-4" id="achievements-tab">
              <div className="mx-auto max-w-4xl">
                <h2
                  className={`mb-6 text-center text-3xl font-bold text-primary transition-all duration-1000 ${
                    shouldAnimate("achievements-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {t.achievements.title}
                </h2>
                <p
                  className={`mb-12 text-center text-lg text-gray-700 transition-all duration-1000 delay-300 ${
                    shouldAnimate("achievements-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  {t.achievements.description}
                </p>

                {/* Stats */}
                <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {t.achievements.stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`rounded-lg bg-primary p-6 text-center text-white shadow-md transition-all duration-1000 hover:shadow-lg ${
                        shouldAnimate("achievements-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 200 + 500}ms` }}
                    >
                      <div className="mb-2 text-4xl font-bold animate-pulse-slow">{stat.number}</div>
                      <div className="text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Achievements List */}
                <div className="mb-16 grid gap-6 md:grid-cols-2">
                  {t.achievements.items.map((item, index) => (
                    <div
                      key={index}
                      className={`rounded-lg bg-white p-6 shadow-md transition-all duration-1000 hover:shadow-lg hover:translate-y-[-5px] ${
                        shouldAnimate("achievements-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 200 + 900}ms` }}
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary animate-float">
                        <Award className="h-6 w-6" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* Certificates */}
                <div
                  className={`rounded-lg bg-gray-50 p-8 transition-all duration-1000 delay-1200 ${
                    shouldAnimate("achievements-tab") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                >
                  <h3 className="mb-6 text-center text-2xl font-bold text-primary">
                    {t.achievements.certificates.title}
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {t.achievements.certificates.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Partners Section */}
        <section className="bg-gray-50 py-16" id="partners-section">
          <div className="container mx-auto px-4">
            <h2
              className={`mb-2 text-center text-3xl font-bold text-primary transition-all duration-1000 ${
                shouldAnimate("partners-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {t.partners.title}
            </h2>
            <div
              className={`mx-auto mb-8 h-1 w-20 bg-primary transition-all duration-1000 delay-300 ${
                shouldAnimate("partners-section") ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            ></div>
            <p
              className={`mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700 transition-all duration-1000 delay-500 ${
                shouldAnimate("partners-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {t.partners.description}
            </p>
            <div
              className={`flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-700 ${
                shouldAnimate("partners-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {t.partners.logos.map((logo, index) => (
                <div key={index} className="relative h-24 w-48 transition-transform duration-300 hover:scale-105">
                  <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16" id="cta-section">
          <div className="container mx-auto px-4">
            <div
              className={`overflow-hidden rounded-xl bg-primary shadow-xl transition-all duration-1000 hover:scale-[1.01] ${
                shouldAnimate("cta-section") ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
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
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl animate-fade-in">{t.cta.title}</h2>
                  <p className="mx-auto mb-8 max-w-2xl text-lg animate-fade-in animation-delay-300">
                    {t.cta.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-primary transition-all duration-300 hover:bg-gray-100 hover:gap-3 hover:shadow-lg animate-fade-in animation-delay-600"
                  >
                    {t.cta.button}
                    <ArrowRight className="h-4 w-4 animate-bounce-horizontal" />
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

