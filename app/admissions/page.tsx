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
  Calendar,
  User,
  ArrowRight,
  Search,
  Menu,
  X,
  HelpCircle,
  CheckCircle,
  Info,
} from "lucide-react"

export default function Admissions() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"process" | "fees" | "faq">("process")

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
        catalog: "КАТАЛОГ",
        admissions: "ПОСТУПЛЕНИЕ",
        contacts: "КОНТАКТЫ",
      },
      hero: {
        title: "ПОСТУПЛЕНИЕ",
        subtitle: "Присоединяйтесь к нашей школе и откройте для себя мир языков и искусства",
        cta: "Подать заявку",
      },
      breadcrumbs: {
        home: "Главная",
        admissions: "Поступление",
      },
      tabs: {
        process: "Процесс поступления",
        fees: "Стоимость обучения",
        faq: "Часто задаваемые вопросы",
      },
      welcome: {
        title: "ДОБРО ПОЖАЛОВАТЬ В TUT SCHOOL",
        description:
          "Мы рады, что вы рассматриваете возможность присоединиться к нашей школе. Наша цель — создать вдохновляющую среду, где каждый студент может раскрыть свой потенциал в изучении языков и искусства.",
      },
      process: {
        title: "ПРОЦЕСС ПОСТУПЛЕНИЯ",
        description:
          "Поступление в Tut School — это простой и понятный процесс. Мы стремимся сделать его максимально комфортным для вас и вашего ребенка.",
        steps: [
          {
            title: "Заполните заявку",
            description: "Заполните онлайн-заявку или свяжитесь с нами по телефону для записи на пробное занятие.",
          },
          {
            title: "Пробное занятие",
            description:
              "Посетите бесплатное пробное занятие, чтобы познакомиться с преподавателями и методикой обучения.",
          },
          {
            title: "Определение уровня",
            description:
              "Мы проведем небольшое тестирование, чтобы определить текущий уровень знаний и подобрать подходящую группу.",
          },
          {
            title: "Заключение договора",
            description:
              "После успешного прохождения пробного занятия и определения уровня, мы заключим договор на обучение.",
          },
          {
            title: "Начало занятий",
            description:
              "Добро пожаловать в Tut School! Вы можете приступить к занятиям согласно расписанию вашей группы.",
          },
        ],
        keyDates: {
          title: "КЛЮЧЕВЫЕ ДАТЫ",
          dates: [
            {
              period: "1 июня - 31 августа 2024",
              event: "Запись на новый учебный год",
            },
            {
              period: "15-30 августа 2024",
              event: "Пробные занятия для новых студентов",
            },
            {
              period: "1 сентября 2024",
              event: "Начало занятий в новом учебном году",
            },
            {
              period: "В течение года",
              event: "Набор в группы при наличии мест",
            },
          ],
        },
        documents: {
          title: "НЕОБХОДИМЫЕ ДОКУМЕНТЫ",
          list: [
            "Паспорт родителя (для детей до 18 лет)",
            "Свидетельство о рождении ребенка (для детей до 14 лет)",
            "Паспорт ребенка (для детей старше 14 лет)",
            "Контактная информация (телефон, email)",
          ],
        },
      },
      fees: {
        title: "СТОИМОСТЬ ОБУЧЕНИЯ",
        description:
          "Мы предлагаем различные варианты обучения, чтобы удовлетворить потребности каждого студента. Стоимость зависит от выбранного курса, интенсивности занятий и формата обучения.",
        courses: [
          {
            title: "Английский для детей",
            ageGroup: "5-10 лет",
            options: [
              {
                type: "Групповые занятия (6-8 человек)",
                price: "5 000 ₽/месяц",
                details: "2 раза в неделю по 60 минут",
              },
              {
                type: "Индивидуальные занятия",
                price: "1 500 ₽/занятие",
                details: "Гибкий график, 60 минут",
              },
            ],
          },
          {
            title: "Китайский для детей",
            ageGroup: "5-10 лет",
            options: [
              {
                type: "Групповые занятия (6-8 человек)",
                price: "5 500 ₽/месяц",
                details: "2 раза в неделю по 60 минут",
              },
              {
                type: "Индивидуальные занятия",
                price: "1 700 ₽/занятие",
                details: "Гибкий график, 60 минут",
              },
            ],
          },
          {
            title: "Английский для взрослых",
            ageGroup: "16+ лет",
            options: [
              {
                type: "Групповые занятия (6-8 человек)",
                price: "6 000 ₽/месяц",
                details: "2 раза в неделю по 90 минут",
              },
              {
                type: "Индивидуальные занятия",
                price: "1 800 ₽/занятие",
                details: "Гибкий график, 60 минут",
              },
            ],
          },
          {
            title: "Китайская каллиграфия",
            ageGroup: "Все возрасты",
            options: [
              {
                type: "Групповые занятия (6-8 человек)",
                price: "4 500 ₽/месяц",
                details: "1 раз в неделю по 90 минут",
              },
              {
                type: "Индивидуальные занятия",
                price: "1 600 ₽/занятие",
                details: "Гибкий график, 60 минут",
              },
            ],
          },
        ],
        discounts: {
          title: "СКИДКИ И СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ",
          list: [
            "5% скидка при оплате за семестр (4 месяца)",
            "10% скидка при оплате за год",
            "5% скидка для второго ребенка из одной семьи",
            "10% скидка для третьего и последующих детей из одной семьи",
            "5% скидка при записи на два и более курса",
          ],
        },
        payment: {
          title: "СПОСОБЫ ОПЛАТЫ",
          methods: [
            "Банковской картой в офисе школы",
            "Банковской картой онлайн через личный кабинет",
            "Банковским переводом по реквизитам",
            "Наличными в офисе школы",
          ],
        },
      },
      faq: {
        title: "ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ",
        questions: [
          {
            question: "С какого возраста можно начинать изучение иностранного языка?",
            answer:
              "Мы принимаем детей с 5 лет на курсы английского и китайского языков. Для детей младшего возраста занятия проводятся в игровой форме с акцентом на разговорную речь и восприятие на слух.",
          },
          {
            question: "Как определяется уровень знаний?",
            answer:
              "Перед зачислением в группу мы проводим небольшое тестирование, которое помогает определить текущий уровень знаний. Для детей это происходит в игровой форме, для взрослых — в формате письменного теста и устной беседы.",
          },
          {
            question: "Сколько человек в группе?",
            answer:
              "В наших группах обучается от 6 до 8 человек. Такой размер группы позволяет преподавателю уделить внимание каждому студенту и обеспечить эффективное взаимодействие между участниками.",
          },
          {
            question: "Можно ли перейти с групповых занятий на индивидуальные?",
            answer:
              "Да, вы можете перейти с групповых занятий на индивидуальные в любой момент при наличии свободных мест в расписании преподавателей. Для этого необходимо обратиться к администратору школы.",
          },
          {
            question: "Выдаются ли сертификаты по окончании курса?",
            answer:
              "Да, по окончании каждого уровня обучения мы выдаем сертификат, подтверждающий достигнутый уровень знаний. Для получения сертификата необходимо успешно пройти итоговое тестирование.",
          },
          {
            question: "Можно ли взять пропущенные занятия?",
            answer:
              "При пропуске занятия по уважительной причине и предварительном уведомлении администрации (не менее чем за 24 часа), вы можете посетить занятие с другой группой вашего уровня или получить материалы для самостоятельного изучения.",
          },
          {
            question: "Проводятся ли занятия летом?",
            answer:
              "Да, в летний период мы предлагаем интенсивные курсы и специальные программы для детей и взрослых. Подробную информацию о летних программах можно получить у администратора школы или на нашем сайте.",
          },
        ],
      },
      testimonials: {
        title: "ОТЗЫВЫ РОДИТЕЛЕЙ И СТУДЕНТОВ",
        items: [
          {
            name: "Мария К., мама Софии (8 лет)",
            text: "Дочь с удовольствием ходит на занятия английским уже второй год. Преподаватели находят подход к каждому ребенку, а игровая форма обучения делает процесс увлекательным. Заметен значительный прогресс в разговорной речи.",
          },
          {
            name: "Алексей П., студент курса китайского языка",
            text: "Изучаю китайский в Tut School уже полгода. Очень доволен методикой преподавания и индивидуальным подходом. Преподаватели — носители языка, что особенно ценно для правильного произношения.",
          },
          {
            name: "Ольга В., мама Артема (6 лет) и Анны (10 лет)",
            text: "Оба ребенка посещают курсы английского языка. Удобно, что в школе есть группы для разных возрастов и уровней подготовки. Дети с радостью идут на занятия, а дома часто используют выученные фразы.",
          },
        ],
      },
      visit: {
        title: "ЗАПИШИТЕСЬ НА ВИЗИТ В ШКОЛУ",
        description:
          "Лучший способ узнать о нашей школе — посетить ее лично. Мы приглашаем вас на экскурсию по школе, где вы сможете познакомиться с преподавателями, увидеть классы и задать все интересующие вопросы.",
        cta: "Записаться на визит",
      },
      apply: {
        title: "ГОТОВЫ ПРИСОЕДИНИТЬСЯ К НАМ?",
        description:
          "За��олните заявку на поступление, и мы свяжемся с вами в ближайшее время для организации пробного занятия и дальнейших шагов.",
        cta: "Подать заявку",
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
        catalog: "CATALOG",
        admissions: "ADMISSIONS",
        contacts: "CONTACTS",
      },
      hero: {
        title: "ADMISSIONS",
        subtitle: "Join our school and discover the world of languages and arts",
        cta: "Apply Now",
      },
      breadcrumbs: {
        home: "Home",
        admissions: "Admissions",
      },
      tabs: {
        process: "Admissions Process",
        fees: "Tuition Fees",
        faq: "FAQ",
      },
      welcome: {
        title: "WELCOME TO TUT SCHOOL",
        description:
          "We are delighted that you are considering joining our school. Our goal is to create an inspiring environment where every student can reach their potential in learning languages and arts.",
      },
      process: {
        title: "ADMISSIONS PROCESS",
        description:
          "Admission to Tut School is a simple and straightforward process. We strive to make it as comfortable as possible for you and your child.",
        steps: [
          {
            title: "Complete an Application",
            description: "Fill out an online application or contact us by phone to schedule a trial lesson.",
          },
          {
            title: "Trial Lesson",
            description: "Attend a free trial lesson to meet the teachers and learn about our teaching methodology.",
          },
          {
            title: "Level Assessment",
            description:
              "We will conduct a small assessment to determine your current level of knowledge and select an appropriate group.",
          },
          {
            title: "Sign a Contract",
            description:
              "After successfully completing the trial lesson and level assessment, we will sign a contract for education.",
          },
          {
            title: "Start Classes",
            description: "Welcome to Tut School! You can start classes according to your group's schedule.",
          },
        ],
        keyDates: {
          title: "KEY DATES",
          dates: [
            {
              period: "June 1 - August 31, 2024",
              event: "Registration for the new academic year",
            },
            {
              period: "August 15-30, 2024",
              event: "Trial lessons for new students",
            },
            {
              period: "September 1, 2024",
              event: "Start of classes in the new academic year",
            },
            {
              period: "Throughout the year",
              event: "Enrollment in groups subject to availability",
            },
          ],
        },
        documents: {
          title: "REQUIRED DOCUMENTS",
          list: [
            "Parent's passport (for children under 18)",
            "Child's birth certificate (for children under 14)",
            "Child's passport (for children over 14)",
            "Contact information (phone, email)",
          ],
        },
      },
      fees: {
        title: "TUITION FEES",
        description:
          "We offer various learning options to meet the needs of each student. The cost depends on the chosen course, class intensity, and learning format.",
        courses: [
          {
            title: "English for Children",
            ageGroup: "Ages 5-10",
            options: [
              {
                type: "Group classes (6-8 students)",
                price: "5,000 ₽/month",
                details: "Twice a week, 60 minutes each",
              },
              {
                type: "Individual classes",
                price: "1,500 ₽/lesson",
                details: "Flexible schedule, 60 minutes",
              },
            ],
          },
          {
            title: "Chinese for Children",
            ageGroup: "Ages 5-10",
            options: [
              {
                type: "Group classes (6-8 students)",
                price: "5,500 ₽/month",
                details: "Twice a week, 60 minutes each",
              },
              {
                type: "Individual classes",
                price: "1,700 ₽/lesson",
                details: "Flexible schedule, 60 minutes",
              },
            ],
          },
          {
            title: "English for Adults",
            ageGroup: "Ages 16+",
            options: [
              {
                type: "Group classes (6-8 students)",
                price: "6,000 ₽/month",
                details: "Twice a week, 90 minutes each",
              },
              {
                type: "Individual classes",
                price: "1,800 ₽/lesson",
                details: "Flexible schedule, 60 minutes",
              },
            ],
          },
          {
            title: "Chinese Calligraphy",
            ageGroup: "All ages",
            options: [
              {
                type: "Group classes (6-8 students)",
                price: "4,500 ₽/month",
                details: "Once a week, 90 minutes",
              },
              {
                type: "Individual classes",
                price: "1,600 ₽/lesson",
                details: "Flexible schedule, 60 minutes",
              },
            ],
          },
        ],
        discounts: {
          title: "DISCOUNTS AND SPECIAL OFFERS",
          list: [
            "5% discount when paying for a semester (4 months)",
            "10% discount when paying for a year",
            "5% discount for the second child from the same family",
            "10% discount for the third and subsequent children from the same family",
            "5% discount when enrolling in two or more courses",
          ],
        },
        payment: {
          title: "PAYMENT METHODS",
          methods: [
            "Bank card at the school office",
            "Bank card online through personal account",
            "Bank transfer using provided details",
            "Cash at the school office",
          ],
        },
      },
      faq: {
        title: "FREQUENTLY ASKED QUESTIONS",
        questions: [
          {
            question: "At what age can a child start learning a foreign language?",
            answer:
              "We accept children from the age of 5 for English and Chinese language courses. For younger children, classes are conducted in a playful manner with an emphasis on speaking skills and listening comprehension.",
          },
          {
            question: "How is the knowledge level determined?",
            answer:
              "Before enrollment in a group, we conduct a small assessment to determine the current level of knowledge. For children, this happens in a game format, for adults - in the format of a written test and oral conversation.",
          },
          {
            question: "How many students are in a group?",
            answer:
              "Our groups have 6 to 8 students. This group size allows the teacher to pay attention to each student and ensure effective interaction between participants.",
          },
          {
            question: "Is it possible to switch from group to individual classes?",
            answer:
              "Yes, you can switch from group to individual classes at any time, subject to availability in the teachers' schedules. To do this, you need to contact the school administrator.",
          },
          {
            question: "Are certificates issued upon completion of the course?",
            answer:
              "Yes, upon completion of each level of education, we issue a certificate confirming the achieved level of knowledge. To receive a certificate, you must successfully pass the final assessment.",
          },
          {
            question: "Can I make up for missed classes?",
            answer:
              "If you miss a class for a valid reason and notify the administration in advance (at least 24 hours), you can attend a class with another group at your level or receive materials for self-study.",
          },
          {
            question: "Are classes held during the summer?",
            answer:
              "Yes, during the summer period we offer intensive courses and special programs for children and adults. Detailed information about summer programs can be obtained from the school administrator or on our website.",
          },
        ],
      },
      testimonials: {
        title: "TESTIMONIALS FROM PARENTS AND STUDENTS",
        items: [
          {
            name: "Maria K., mother of Sofia (8 years old)",
            text: "My daughter has been happily attending English classes for two years now. The teachers find an approach to each child, and the playful form of learning makes the process exciting. There is significant progress in speaking skills.",
          },
          {
            name: "Alexey P., Chinese language course student",
            text: "I've been studying Chinese at Tut School for six months. Very satisfied with the teaching methodology and individual approach. The teachers are native speakers, which is especially valuable for correct pronunciation.",
          },
          {
            name: "Olga V., mother of Artem (6 years old) and Anna (10 years old)",
            text: "Both children attend English language courses. It's convenient that the school has groups for different ages and levels of preparation. The children are happy to go to classes, and at home they often use the phrases they've learned.",
          },
        ],
      },
      visit: {
        title: "SCHEDULE A VISIT TO OUR SCHOOL",
        description:
          "The best way to learn about our school is to visit it in person. We invite you for a tour of the school, where you can meet the teachers, see the classrooms, and ask any questions you may have.",
        cta: "Schedule a Visit",
      },
      apply: {
        title: "READY TO JOIN US?",
        description:
          "Complete an application for admission, and we will contact you shortly to arrange a trial lesson and further steps.",
        cta: "Apply Now",
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
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary">
                  {t.nav.catalog}
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-sm font-medium text-primary hover:text-primary/80">
                  {t.nav.admissions}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary">
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
            <Link
              href="#apply"
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
                  <Link href="/" className="block py-2 text-sm font-medium text-gray-700 hover:text-primary">
                    {t.nav.home}
                  </Link>
                </li>
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
                  <Link
                    href="/admissions"
                    className="block py-2 text-sm font-medium text-primary hover:text-primary/80"
                  >
                    {t.nav.admissions}
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
                href="#apply"
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
          <div className="relative h-[400px] w-full">
            <Image
              src="/placeholder.svg?height=400&width=1600"
              alt={language === "ru" ? "Поступление в Tut School" : "Admissions at Tut School"}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center px-4 text-white md:px-12 lg:px-20">
              <div className="max-w-2xl">
                <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">{t.hero.title}</h2>
                <p className="mb-8 text-lg md:text-xl">{t.hero.subtitle}</p>
                <Link
                  href="#apply"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary/90 hover:gap-3"
                >
                  {t.hero.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="border-b bg-gray-50">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-primary hover:underline">
                {t.breadcrumbs.home}
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-700">{t.breadcrumbs.admissions}</span>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
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
                onClick={() => setActiveTab("process")}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === "process"
                    ? "border-b-2 border-primary text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {t.tabs.process}
              </button>
              <button
                onClick={() => setActiveTab("fees")}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === "fees" ? "border-b-2 border-primary text-primary" : "text-gray-600 hover:text-primary"
                }`}
              >
                {t.tabs.fees}
              </button>
              <button
                onClick={() => setActiveTab("faq")}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === "faq" ? "border-b-2 border-primary text-primary" : "text-gray-600 hover:text-primary"
                }`}
              >
                {t.tabs.faq}
              </button>
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <div className="py-12">
          {/* Process Tab */}
          {activeTab === "process" && (
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.process.title}</h2>
                <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
                <p className="mb-12 text-center text-lg text-gray-700">{t.process.description}</p>

                {/* Steps */}
                <div className="mb-16 space-y-8">
                  {t.process.steps.map((step, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-start md:gap-6">
                      <div className="mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white md:mb-0">
                        <span className="text-xl font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Dates */}
                <div className="mb-16 rounded-lg bg-gray-50 p-8">
                  <h3 className="mb-6 text-center text-2xl font-bold text-primary">{t.process.keyDates.title}</h3>
                  <div className="space-y-4">
                    {t.process.keyDates.dates.map((date, index) => (
                      <div
                        key={index}
                        className="flex flex-col rounded-lg border border-gray-200 bg-white p-4 md:flex-row md:items-center md:justify-between"
                      >
                        <div className="mb-2 flex items-center gap-2 md:mb-0">
                          <Calendar className="h-5 w-5 text-primary" />
                          <span className="font-medium">{date.period}</span>
                        </div>
                        <div className="text-gray-600">{date.event}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Required Documents */}
                <div className="rounded-lg bg-gray-50 p-8">
                  <h3 className="mb-6 text-center text-2xl font-bold text-primary">{t.process.documents.title}</h3>
                  <div className="mx-auto max-w-2xl space-y-3">
                    {t.process.documents.list.map((document, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{document}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Fees Tab */}
          {activeTab === "fees" && (
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.fees.title}</h2>
                <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
                <p className="mb-12 text-center text-lg text-gray-700">{t.fees.description}</p>

                {/* Course Fees */}
                <div className="mb-16 space-y-8">
                  {t.fees.courses.map((course, index) => (
                    <div key={index} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                      <div className="bg-primary px-6 py-4 text-white">
                        <h3 className="text-xl font-bold">{course.title}</h3>
                        <p className="text-sm text-white/80">{course.ageGroup}</p>
                      </div>
                      <div className="divide-y divide-gray-200">
                        {course.options.map((option, optIndex) => (
                          <div key={optIndex} className="p-6">
                            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                              <h4 className="font-medium">{option.type}</h4>
                              <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                                {option.price}
                              </div>
                            </div>
                            <p className="text-sm text-gray-600">{option.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Discounts */}
                <div className="mb-16 rounded-lg bg-gray-50 p-8">
                  <h3 className="mb-6 text-center text-2xl font-bold text-primary">{t.fees.discounts.title}</h3>
                  <div className="mx-auto max-w-2xl space-y-3">
                    {t.fees.discounts.list.map((discount, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{discount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="rounded-lg bg-gray-50 p-8">
                  <h3 className="mb-6 text-center text-2xl font-bold text-primary">{t.fees.payment.title}</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {t.fees.payment.methods.map((method, index) => (
                      <div key={index} className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <span>{method}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl">
                <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.faq.title}</h2>
                <div className="mx-auto mb-12 h-1 w-20 bg-primary"></div>

                <div className="space-y-6">
                  {t.faq.questions.map((faq, index) => (
                    <div key={index} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                      <h3 className="mb-3 flex items-start gap-3 text-lg font-bold">
                        <HelpCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                        {faq.question}
                      </h3>
                      <p className="pl-8 text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16">
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

        {/* Visit Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-lg bg-gray-50 p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-primary">{t.visit.title}</h2>
                  <p className="mb-6 text-gray-700">{t.visit.description}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary/90 hover:gap-3"
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

        {/* Apply Section */}
        <section id="apply" className="py-16">
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
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.apply.title}</h2>
                  <p className="mx-auto mb-8 max-w-2xl text-lg">{t.apply.description}</p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-primary transition-all hover:bg-gray-100 hover:gap-3"
                  >
                    {t.apply.cta}
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

