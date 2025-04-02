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
  ChevronRight,
  Calendar,
  User,
  ArrowRight,
  Search,
  Menu,
  X,
  Clock,
  Award,
  Users,
  Target,
  Layers,
  Bookmark,
  CheckCircle,
} from "lucide-react"

export default function Programs() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<"languages" | "arts" | "all">("all")

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
        title: "АКАДЕМИЧЕСКИЕ ПРОГРАММЫ",
        subtitle: "Откройте для себя разнообразные программы обучения языкам и искусству для всех возрастов",
        cta: "Записаться на программу",
      },
      breadcrumbs: {
        home: "Главная",
        programs: "Программы",
      },
      categories: {
        all: "Все программы",
        languages: "Языковые курсы",
        arts: "Искусство и творчество",
      },
      intro: {
        title: "НАШИ ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ",
        description:
          "В Tut School мы предлагаем широкий спектр образовательных программ, разработанных для развития языковых навыков и творческого потенциала наших студентов. Наши курсы подходят для всех возрастов и уровней подготовки.",
      },
      methodology: {
        title: "НАША МЕТОДОЛОГИЯ",
        description:
          "Мы используем современные методики преподавания, которые делают процесс обучения эффективным и увлекательным. Наш подход сочетает в себе теоретические знания и практические навыки, что позволяет студентам быстро прогрессировать.",
        points: [
          {
            title: "Коммуникативный подход",
            description:
              "Мы фокусируемся на развитии разговорных навыков с первых занятий, создавая языковую среду на уроке.",
          },
          {
            title: "Индивидуальный подход",
            description:
              "Мы учитываем особенности каждого студента, адаптируя методику под его потребности и стиль обучения.",
          },
          {
            title: "Погружение в культуру",
            description:
              "Изучение языка сопровождается знакомством с культурой, традициями и обычаями страны изучаемого языка.",
          },
          {
            title: "Регулярная практика",
            description:
              "Мы обеспечиваем постоянную языковую практику через диалоги, ролевые игры и творческие задания.",
          },
        ],
      },
      programs: {
        languages: {
          title: "ЯЗЫКОВЫЕ КУРСЫ",
          items: [
            {
              title: "Английский для дошкольников",
              ageGroup: "4-6 лет",
              duration: "8 месяцев (сентябрь-май)",
              schedule: "2 раза в неделю по 45 минут",
              description:
                "Программа разработана специально для дошкольников и направлена на формирование базовых языковых навыков через игры, песни и творческие задания. Дети знакомятся с английским языком в увлекательной форме, что способствует естественному усвоению новой лексики и простых грамматических конструкций.",
              features: [
                "Игровой формат занятий",
                "Развитие навыков аудирования и говорения",
                "Знакомство с алфавитом и базовой лексикой",
                "Групповые активности и творческие проекты",
              ],
              outcomes: [
                "Базовый словарный запас (300-400 слов)",
                "Умение представиться и рассказать о себе",
                "Понимание простых инструкций на английском",
                "Знание алфавита и цифр",
              ],
            },
            {
              title: "Английский для младших школьников",
              ageGroup: "7-10 лет",
              duration: "9 месяцев (сентябрь-май)",
              schedule: "2 раза в неделю по 60 минут",
              description:
                "Курс для младших школьников сочетает игровые элементы с более структурированным подходом к изучению языка. Программа направлена на развитие всех языковых навыков: говорения, аудирования, чтения и письма. Особое внимание уделяется формированию правильного произношения и базовых грамматических навыков.",
              features: [
                "Сбалансированное развитие всех языковых навыков",
                "Постепенное введение грамматических структур",
                "Чтение адаптированной литературы",
                "Регулярные проверочные работы",
              ],
              outcomes: [
                "Расширенный словарный запас (600-800 слов)",
                "Умение строить простые предложения",
                "Чтение и понимание адаптированных текстов",
                "Базовые навыки письма",
              ],
            },
            {
              title: "Китайский для начинающих",
              ageGroup: "8-14 лет",
              duration: "9 месяцев (сентябрь-май)",
              schedule: "2 раза в неделю по 60 минут",
              description:
                "Вводный курс китайского языка для детей, который знакомит с основами фонетики, иероглифики и грамматики. Программа включает элементы китайской культуры, что делает процесс обучения более увлекательным и контекстуальным. Занятия проводятся в игровой форме с использованием визуальных материалов и интерактивных упражнений.",
              features: [
                "Изучение пиньинь (фонетической транскрипции)",
                "Освоение базовых иероглифов",
                "Знакомство с китайской культурой и традициями",
                "Разговорная практика с использованием простых диалогов",
              ],
              outcomes: [
                "Знание около 150 иероглифов",
                "Умение представиться и вести простой диалог",
                "Понимание базовых грамматических конструкций",
                "Знакомство с китайской культурой",
              ],
            },
            {
              title: "Английский для подростков",
              ageGroup: "11-15 лет",
              duration: "9 месяцев (сентябрь-май)",
              schedule: "2 раза в неделю по 90 минут",
              description:
                "Программа для подростков направлена на углубленное изучение английского языка с акцентом на развитие коммуникативных навыков и расширение словарного запаса. Курс учитывает интересы и потребности подростков, включая актуальные темы и современные материалы. Особое внимание уделяется развитию уверенности в использовании языка.",
              features: [
                "Коммуникативные задания и дискуссии",
                "Работа с аутентичными материалами",
                "Углубленное изучение грамматики",
                "Проектная работа и презентации",
              ],
              outcomes: [
                "Уверенное общение на повседневные темы",
                "Понимание аутентичных текстов и аудиоматериалов",
                "Умение выражать свое мнение и аргументировать позицию",
                "Подготовка к международным экзаменам",
              ],
            },
            {
              title: "Деловой английский",
              ageGroup: "16+ лет",
              duration: "4 месяца",
              schedule: "2 раза в неделю по 90 минут",
              description:
                "Специализированный курс для взрослых, направленный на развитие навыков делового общения на английском языке. Программа охватывает различные аспекты бизнес-коммуникации: проведение переговоров, деловая переписка, телефонные разговоры, презентации и участие в совещаниях. Курс включает работу с аутентичными материалами и практические задания.",
              features: [
                "Бизнес-лексика и профессиональная терминология",
                "Навыки деловой переписки и составления документов",
                "Техники ведения переговоров и презентаций",
                "Кейс-стади и ролевые игры",
              ],
              outcomes: [
                "Уверенное ведение деловой коммуникации",
                "Навыки составления деловых писем и документов",
                "Умение проводить презентации и участвовать в переговорах",
                "Понимание межкультурных особенностей делового общения",
              ],
            },
          ],
        },
        arts: {
          title: "ИСКУССТВО И ТВОРЧЕСТВО",
          items: [
            {
              title: "Китайская каллиграфия",
              ageGroup: "Все возрасты",
              duration: "3 месяца",
              schedule: "1 раз в неделю по 90 минут",
              description:
                "Курс китайской каллиграфии знакомит с древним искусством написания иероглифов. Студенты изучают основные техники работы с кистью и тушью, принципы композиции и эстетику китайской письменности. Программа включает как теоретические аспекты, так и практические занятия по написанию иероглифов различных стилей.",
              features: [
                "Изучение базовых техник работы с кистью и тушью",
                "Освоение различных стилей каллиграфии",
                "История и философия китайской каллиграфии",
                "Создание собственных каллиграфических работ",
              ],
              outcomes: [
                "Владение основными техниками китайской каллиграфии",
                "Умение писать иероглифы в различных стилях",
                "Понимание эстетических принципов китайской письменности",
                "Создание каллиграфических композиций",
              ],
            },
            {
              title: "Театральная студия на английском",
              ageGroup: "8-15 лет",
              duration: "9 месяцев (сентябрь-май)",
              schedule: "1 раз в неделю по 90 минут",
              description:
                "Уникальная программа, сочетающая изучение английского языка с театральным искусством. Студенты работают над постановкой пьес на английском языке, что способствует развитию языковых навыков, артистических способностей и уверенности в себе. Курс включает работу над произношением, интонацией, языком тела и сценическим движением.",
              features: [
                "Работа с аутентичными сценариями на английском",
                "Развитие произношения и интонации",
                "Актерское мастерство и сценическое движение",
                "Постановка спектаклей на английском языке",
              ],
              outcomes: [
                "Улучшение произношения и беглости речи",
                "Расширение словарного запаса через контекстуальное обучение",
                "Развитие уверенности в публичных выступлениях",
                "Участие в театральных постановках",
              ],
            },
            {
              title: "Искусство оригами",
              ageGroup: "6-12 лет",
              duration: "3 месяца",
              schedule: "1 раз в неделю по 60 минут",
              description:
                "Курс знакомит детей с японским искусством складывания бумаги. Программа развивает мелкую моторику, пространственное мышление, внимание и творческие способности. Дети изучают различные техники оригами, от простых до сложных, и создают разнообразные фигуры: животных, цветы, геометрические формы и декоративные элементы.",
              features: [
                "Изучение базовых и продвинутых техник оригами",
                "История и культурное значение оригами",
                "Создание тематических композиций",
                "Развитие терпения и точности движений",
              ],
              outcomes: [
                "Владение различными техниками складывания бумаги",
                "Умение создавать разнообразные фигуры оригами",
                "Развитие мелкой моторики и пространственного мышления",
                "Создание собственных композиций",
              ],
            },
            {
              title: "Музыкальные занятия на английском",
              ageGroup: "4-8 лет",
              duration: "6 месяцев",
              schedule: "1 раз в неделю по 45 минут",
              description:
                "Интегрированный курс, сочетающий музыкальное развитие с изучением английского языка. Дети разучивают английские песни, музыкальные игры и ритмические упражнения, что способствует естественному усвоению языка. Программа развивает музыкальный слух, чувство ритма, память и языковые навыки.",
              features: [
                "Разучивание английских песен и стихов",
                "Музыкальные игры и ритмические упражнения",
                "Знакомство с музыкальными инструментами",
                "Развитие слуха и голоса",
              ],
              outcomes: [
                "Расширение словарного запаса через песни и стихи",
                "Улучшение произношения и интонации",
                "Развитие музыкальных способностей",
                "Преодоление языкового барьера через творческое самовыражение",
              ],
            },
          ],
        },
      },
      faculty: {
        title: "НАШИ ПРЕПОДАВАТЕЛИ",
        description:
          "Наши преподаватели — опытные профессионалы с международными сертификатами и богатым опытом работы. Они не только обладают глубокими знаниями в своей области, но и умеют вдохновлять студентов, создавая увлекательную и продуктивную атмосферу на занятиях.",
        teachers: [
          {
            name: "Анна Петрова",
            position: "Преподаватель английского языка",
            credentials: "CELTA, DELTA, 10 лет опыта",
            description:
              "Анна специализируется на работе с детьми младшего и среднего школьного возраста. Ее уроки всегда наполнены творческими заданиями и интерактивными играми, что делает процесс обучения увлекательным и эффективным.",
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
            position: "Преподаватель делового английского",
            credentials: "BEC Higher, 8 лет опыта в корпоративном обучении",
            description:
              "Елена имеет богатый опыт работы с бизнес-клиентами и глубокое понимание потребностей деловой коммуникации. Ее практический подход и использование реальных бизнес-кейсов делают обучение релевантным и применимым в профессиональной среде.",
          },
          {
            name: "Дмитрий Волков",
            position: "Руководитель театральной студии",
            credentials: "Актерское образование, сертификат TEFL",
            description:
              "Дмитрий успешно сочетает свой опыт в театральном искусстве с преподаванием английского языка. Его энергия и творческий подход вдохновляют студентов и помогают им преодолеть языковой барьер через актерское мастерство.",
          },
        ],
      },
      achievements: {
        title: "ДОСТИЖЕНИЯ НАШИХ СТУДЕНТОВ",
        items: [
          "90% наших студентов успешно сдают международные экзамены по английскому языку",
          "Ежегодно наши ученики становятся призерами олимпиад по иностранным языкам",
          "Театральная студия регулярно выступает на городских мероприятиях с постановками на английском языке",
          "Работы студентов курса китайской каллиграфии были представлены на выставке в культурном центре",
          "Многие выпускники продолжают обучение в зарубежных вузах благодаря языковой подготовке в нашей школе",
        ],
      },
      testimonials: {
        title: "ОТЗЫВЫ О НАШИХ ПРОГРАММАХ",
        items: [
          {
            name: "Ирина К., мама Максима (9 лет)",
            program: "Английский для младших школьников",
            text: "Сын занимается в Tut School уже второй год, и мы очень довольны результатами. Преподаватели находят подход к каждому ребенку, а игровая форма обучения делает процесс увлекательным. Максим с удовольствием ходит на занятия и уже может общаться на базовом уровне.",
          },
          {
            name: "Алексей В., студент",
            program: "Деловой английский",
            text: "Курс делового английского превзошел мои ожидания. Практические задания, работа с реальными бизнес-ситуациями и индивидуальный подход преподавателя помогли мне значительно улучшить навыки деловой коммуникации. Теперь я уверенно провожу переговоры с зарубежными партнерами.",
          },
          {
            name: "Ольга М., мама Софии (7 лет)",
            program: "Театральная студия на английском",
            text: "Театральная студия — это отличное сочетание языкового обучения и творческого развития. Дочь не только улучшила свой английский, но и стала более уверенной в себе. Выступление на школьном спектакле стало настоящим достижением для нее.",
          },
        ],
      },
      enroll: {
        title: "ЗАПИШИТЕСЬ НА ПРОГРАММУ",
        description:
          "Выберите программу, которая подходит именно вам, и начните свой путь к новым знаниям и навыкам. Мы поможем вам определить уровень и подобрать оптимальный курс.",
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
        title: "ACADEMIC PROGRAMS",
        subtitle: "Discover diverse language and arts programs for all ages",
        cta: "Enroll in a Program",
      },
      breadcrumbs: {
        home: "Home",
        programs: "Programs",
      },
      categories: {
        all: "All Programs",
        languages: "Language Courses",
        arts: "Arts & Creativity",
      },
      intro: {
        title: "OUR EDUCATIONAL PROGRAMS",
        description:
          "At Tut School, we offer a wide range of educational programs designed to develop language skills and creative potential of our students. Our courses are suitable for all ages and proficiency levels.",
      },
      methodology: {
        title: "OUR METHODOLOGY",
        description:
          "We use modern teaching methods that make the learning process effective and engaging. Our approach combines theoretical knowledge and practical skills, allowing students to progress quickly.",
        points: [
          {
            title: "Communicative Approach",
            description:
              "We focus on developing conversational skills from the first lessons, creating a language environment in the classroom.",
          },
          {
            title: "Individual Approach",
            description:
              "We take into account the characteristics of each student, adapting the methodology to their needs and learning style.",
          },
          {
            title: "Cultural Immersion",
            description:
              "Language learning is accompanied by an introduction to the culture, traditions, and customs of the country of the studied language.",
          },
          {
            title: "Regular Practice",
            description:
              "We provide constant language practice through dialogues, role-playing games, and creative tasks.",
          },
        ],
      },
      programs: {
        languages: {
          title: "LANGUAGE COURSES",
          items: [
            {
              title: "English for Preschoolers",
              ageGroup: "Ages 4-6",
              duration: "8 months (September-May)",
              schedule: "Twice a week, 45 minutes each",
              description:
                "The program is specifically designed for preschoolers and aims to develop basic language skills through games, songs, and creative activities. Children are introduced to English in an engaging way, which promotes natural acquisition of new vocabulary and simple grammatical structures.",
              features: [
                "Game-based learning format",
                "Development of listening and speaking skills",
                "Introduction to the alphabet and basic vocabulary",
                "Group activities and creative projects",
              ],
              outcomes: [
                "Basic vocabulary (300-400 words)",
                "Ability to introduce oneself and talk about oneself",
                "Understanding simple instructions in English",
                "Knowledge of the alphabet and numbers",
              ],
            },
            {
              title: "English for Primary School Children",
              ageGroup: "Ages 7-10",
              duration: "9 months (September-May)",
              schedule: "Twice a week, 60 minutes each",
              description:
                "The course for primary school children combines game elements with a more structured approach to language learning. The program aims to develop all language skills: speaking, listening, reading, and writing. Special attention is paid to the formation of correct pronunciation and basic grammar skills.",
              features: [
                "Balanced development of all language skills",
                "Gradual introduction of grammatical structures",
                "Reading adapted literature",
                "Regular assessment",
              ],
              outcomes: [
                "Extended vocabulary (600-800 words)",
                "Ability to construct simple sentences",
                "Reading and understanding adapted texts",
                "Basic writing skills",
              ],
            },
            {
              title: "Chinese for Beginners",
              ageGroup: "Ages 8-14",
              duration: "9 months (September-May)",
              schedule: "Twice a week, 60 minutes each",
              description:
                "An introductory Chinese language course for children that introduces the basics of phonetics, characters, and grammar. The program includes elements of Chinese culture, making the learning process more engaging and contextual. Classes are conducted in a playful manner using visual materials and interactive exercises.",
              features: [
                "Learning pinyin (phonetic transcription)",
                "Mastering basic characters",
                "Introduction to Chinese culture and traditions",
                "Conversational practice using simple dialogues",
              ],
              outcomes: [
                "Knowledge of about 150 characters",
                "Ability to introduce oneself and conduct a simple dialogue",
                "Understanding of basic grammatical structures",
                "Familiarity with Chinese culture",
              ],
            },
            {
              title: "English for Teenagers",
              ageGroup: "Ages 11-15",
              duration: "9 months (September-May)",
              schedule: "Twice a week, 90 minutes each",
              description:
                "The program for teenagers is aimed at in-depth study of English with an emphasis on developing communication skills and expanding vocabulary. The course takes into account the interests and needs of teenagers, including relevant topics and modern materials. Special attention is paid to developing confidence in using the language.",
              features: [
                "Communicative tasks and discussions",
                "Working with authentic materials",
                "In-depth grammar study",
                "Project work and presentations",
              ],
              outcomes: [
                "Confident communication on everyday topics",
                "Understanding authentic texts and audio materials",
                "Ability to express opinions and argue positions",
                "Preparation for international exams",
              ],
            },
            {
              title: "Business English",
              ageGroup: "Ages 16+",
              duration: "4 months",
              schedule: "Twice a week, 90 minutes each",
              description:
                "A specialized course for adults aimed at developing business communication skills in English. The program covers various aspects of business communication: negotiations, business correspondence, telephone conversations, presentations, and participation in meetings. The course includes work with authentic materials and practical tasks.",
              features: [
                "Business vocabulary and professional terminology",
                "Business correspondence and document drafting skills",
                "Negotiation and presentation techniques",
                "Case studies and role-playing games",
              ],
              outcomes: [
                "Confident business communication",
                "Skills in drafting business letters and documents",
                "Ability to conduct presentations and participate in negotiations",
                "Understanding of cross-cultural aspects of business communication",
              ],
            },
          ],
        },
        arts: {
          title: "ARTS & CREATIVITY",
          items: [
            {
              title: "Chinese Calligraphy",
              ageGroup: "All ages",
              duration: "3 months",
              schedule: "Once a week, 90 minutes",
              description:
                "The Chinese calligraphy course introduces the ancient art of writing characters. Students learn basic techniques of working with brush and ink, principles of composition, and aesthetics of Chinese writing. The program includes both theoretical aspects and practical lessons on writing characters in various styles.",
              features: [
                "Learning basic techniques of working with brush and ink",
                "Mastering various calligraphy styles",
                "History and philosophy of Chinese calligraphy",
                "Creating your own calligraphy works",
              ],
              outcomes: [
                "Mastery of basic Chinese calligraphy techniques",
                "Ability to write characters in various styles",
                "Understanding of aesthetic principles of Chinese writing",
                "Creation of calligraphic compositions",
              ],
            },
            {
              title: "English Drama Studio",
              ageGroup: "Ages 8-15",
              duration: "9 months (September-May)",
              schedule: "Once a week, 90 minutes",
              description:
                "A unique program that combines learning English with theatrical arts. Students work on staging plays in English, which promotes the development of language skills, artistic abilities, and self-confidence. The course includes work on pronunciation, intonation, body language, and stage movement.",
              features: [
                "Working with authentic scripts in English",
                "Development of pronunciation and intonation",
                "Acting skills and stage movement",
                "Staging performances in English",
              ],
              outcomes: [
                "Improved pronunciation and speech fluency",
                "Expanded vocabulary through contextual learning",
                "Developed confidence in public speaking",
                "Participation in theatrical performances",
              ],
            },
            {
              title: "Origami Art",
              ageGroup: "Ages 6-12",
              duration: "3 months",
              schedule: "Once a week, 60 minutes",
              description:
                "The course introduces children to the Japanese art of paper folding. The program develops fine motor skills, spatial thinking, attention, and creative abilities. Children learn various origami techniques, from simple to complex, and create a variety of figures: animals, flowers, geometric shapes, and decorative elements.",
              features: [
                "Learning basic and advanced origami techniques",
                "History and cultural significance of origami",
                "Creating thematic compositions",
                "Developing patience and precision of movements",
              ],
              outcomes: [
                "Mastery of various paper folding techniques",
                "Ability to create various origami figures",
                "Development of fine motor skills and spatial thinking",
                "Creation of original compositions",
              ],
            },
            {
              title: "Music Classes in English",
              ageGroup: "Ages 4-8",
              duration: "6 months",
              schedule: "Once a week, 45 minutes",
              description:
                "An integrated course combining musical development with learning English. Children learn English songs, musical games, and rhythmic exercises, which promotes natural language acquisition. The program develops musical ear, sense of rhythm, memory, and language skills.",
              features: [
                "Learning English songs and poems",
                "Musical games and rhythmic exercises",
                "Introduction to musical instruments",
                "Development of hearing and voice",
              ],
              outcomes: [
                "Expanded vocabulary through songs and poems",
                "Improved pronunciation and intonation",
                "Development of musical abilities",
                "Overcoming language barriers through creative expression",
              ],
            },
          ],
        },
      },
      faculty: {
        title: "OUR FACULTY",
        description:
          "Our teachers are experienced professionals with international certificates and extensive work experience. They not only possess deep knowledge in their field but also know how to inspire students, creating an engaging and productive atmosphere in the classroom.",
        teachers: [
          {
            name: "Anna Petrova",
            position: "English Language Teacher",
            credentials: "CELTA, DELTA, 10 years of experience",
            description:
              "Anna specializes in working with primary and middle school children. Her lessons are always filled with creative tasks and interactive games, making the learning process engaging and effective.",
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
            position: "Business English Teacher",
            credentials: "BEC Higher, 8 years in corporate training",
            description:
              "Elena has extensive experience working with business clients and a deep understanding of business communication needs. Her practical approach and use of real business cases make learning relevant and applicable in a professional environment.",
          },
          {
            name: "Dmitry Volkov",
            position: "Drama Studio Director",
            credentials: "Acting education, TEFL certificate",
            description:
              "Dmitry successfully combines his experience in theatrical arts with teaching English. His energy and creative approach inspire students and help them overcome language barriers through acting.",
          },
        ],
      },
      achievements: {
        title: "STUDENT ACHIEVEMENTS",
        items: [
          "90% of our students successfully pass international English exams",
          "Every year our students become winners in foreign language olympiads",
          "The Drama Studio regularly performs at city events with plays in English",
          "Works by students of the Chinese calligraphy course were presented at an exhibition in the cultural center",
          "Many graduates continue their education at foreign universities thanks to language training at our school",
        ],
      },
      testimonials: {
        title: "PROGRAM TESTIMONIALS",
        items: [
          {
            name: "Irina K., mother of Maxim (9 years old)",
            program: "English for Primary School Children",
            text: "My son has been studying at Tut School for two years now, and we are very pleased with the results. The teachers find an approach to each child, and the game-based learning makes the process engaging. Maxim enjoys attending classes and can already communicate at a basic level.",
          },
          {
            name: "Alexey V., student",
            program: "Business English",
            text: "The Business English course exceeded my expectations. Practical tasks, work with real business situations, and the individual approach of the teacher helped me significantly improve my business communication skills. Now I confidently conduct negotiations with foreign partners.",
          },
          {
            name: "Olga M., mother of Sofia (7 years old)",
            program: "English Drama Studio",
            text: "The Drama Studio is an excellent combination of language learning and creative development. My daughter not only improved her English but also became more confident. Performing in the school play was a real achievement for her.",
          },
        ],
      },
      enroll: {
        title: "ENROLL IN A PROGRAM",
        description:
          "Choose a program that suits you and start your journey to new knowledge and skills. We will help you determine your level and select the optimal course.",
        cta: "Enroll Now",
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

  const filteredPrograms = () => {
    if (activeCategory === "all") {
      return [...t.programs.languages.items, ...t.programs.arts.items]
    } else if (activeCategory === "languages") {
      return t.programs.languages.items
    } else {
      return t.programs.arts.items
    }
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
        {/* Introduction Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-primary">{t.intro.title}</h2>
              <p className="text-lg text-gray-700">{t.intro.description}</p>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.methodology.title}</h2>
            <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">{t.methodology.description}</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.methodology.points.map((point, index) => (
                <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {index === 0 && <MessageSquare className="h-6 w-6" />}
                    {index === 1 && <User className="h-6 w-6" />}
                    {index === 2 && <Globe className="h-6 w-6" />}
                    {index === 3 && <Layers className="h-6 w-6" />}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Categories */}
        <section className="border-b py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveCategory("all")}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  activeCategory === "all" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t.categories.all}
              </button>
              <button
                onClick={() => setActiveCategory("languages")}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  activeCategory === "languages"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t.categories.languages}
              </button>
              <button
                onClick={() => setActiveCategory("arts")}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  activeCategory === "arts" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t.categories.arts}
              </button>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {activeCategory === "all" || activeCategory === "languages" ? (
              <div className="mb-16">
                <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.programs.languages.title}</h2>
                <div className="mx-auto mb-12 h-1 w-20 bg-primary"></div>
                <div className="space-y-12">
                  {(activeCategory === "all" ? t.programs.languages.items.slice(0, 3) : t.programs.languages.items).map(
                    (program, index) => (
                      <div key={index} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                        <div className="grid md:grid-cols-3">
                          <div className="relative h-64 md:h-auto">
                            <Image
                              src={`/placeholder.svg?height=400&width=600&text=Program ${index + 1}`}
                              alt={program.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 md:col-span-2">
                            <h3 className="mb-2 text-2xl font-bold text-primary">{program.title}</h3>
                            <div className="mb-4 flex flex-wrap gap-4">
                              <div className="flex items-center gap-1 text-sm text-gray-600">
                                <Users className="h-4 w-4 text-primary" />
                                <span>{program.ageGroup}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-600">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>{program.duration}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-600">
                                <Clock className="h-4 w-4 text-primary" />
                                <span>{program.schedule}</span>
                              </div>
                            </div>
                            <p className="mb-4 text-gray-600">{program.description}</p>
                            <div className="mb-4 grid gap-4 md:grid-cols-2">
                              <div>
                                <h4 className="mb-2 flex items-center gap-2 font-bold text-gray-700">
                                  <Bookmark className="h-5 w-5 text-primary" />
                                  {language === "ru" ? "Особенности программы" : "Program Features"}
                                </h4>
                                <ul className="space-y-1 text-sm text-gray-600">
                                  {program.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="mb-2 flex items-center gap-2 font-bold text-gray-700">
                                  <Target className="h-5 w-5 text-primary" />
                                  {language === "ru" ? "Результаты обучения" : "Learning Outcomes"}
                                </h4>
                                <ul className="space-y-1 text-sm text-gray-600">
                                  {program.outcomes.map((outcome, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                      <span>{outcome}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <Link
                              href="#enroll"
                              className="inline-flex items-center gap-1 text-primary hover:underline"
                            >
                              {language === "ru" ? "Записаться на программу" : "Enroll in this program"}
                              <ChevronRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
                {activeCategory === "all" && t.programs.languages.items.length > 3 && (
                  <div className="mt-8 text-center">
                    <Link
                      href="#"
                      onClick={() => setActiveCategory("languages")}
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      {language === "ru" ? "Смотреть все языковые курсы" : "View all language courses"}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            ) : null}

            {activeCategory === "all" || activeCategory === "arts" ? (
              <div>
                <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.programs.arts.title}</h2>
                <div className="mx-auto mb-12 h-1 w-20 bg-primary"></div>
                <div className="space-y-12">
                  {(activeCategory === "all" ? t.programs.arts.items.slice(0, 3) : t.programs.arts.items).map(
                    (program, index) => (
                      <div key={index} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                        <div className="grid md:grid-cols-3">
                          <div className="relative h-64 md:h-auto">
                            <Image
                              src={`/placeholder.svg?height=400&width=600&text=Art ${index + 1}`}
                              alt={program.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-6 md:col-span-2">
                            <h3 className="mb-2 text-2xl font-bold text-primary">{program.title}</h3>
                            <div className="mb-4 flex flex-wrap gap-4">
                              <div className="flex items-center gap-1 text-sm text-gray-600">
                                <Users className="h-4 w-4 text-primary" />
                                <span>{program.ageGroup}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-600">
                                <Calendar className="h-4 w-4 text-primary" />
                                <span>{program.duration}</span>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-600">
                                <Clock className="h-4 w-4 text-primary" />
                                <span>{program.schedule}</span>
                              </div>
                            </div>
                            <p className="mb-4 text-gray-600">{program.description}</p>
                            <div className="mb-4 grid gap-4 md:grid-cols-2">
                              <div>
                                <h4 className="mb-2 flex items-center gap-2 font-bold text-gray-700">
                                  <Bookmark className="h-5 w-5 text-primary" />
                                  {language === "ru" ? "Особенности программы" : "Program Features"}
                                </h4>
                                <ul className="space-y-1 text-sm text-gray-600">
                                  {program.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="mb-2 flex items-center gap-2 font-bold text-gray-700">
                                  <Target className="h-5 w-5 text-primary" />
                                  {language === "ru" ? "Результаты обучения" : "Learning Outcomes"}
                                </h4>
                                <ul className="space-y-1 text-sm text-gray-600">
                                  {program.outcomes.map((outcome, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                      <span>{outcome}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <Link
                              href="#enroll"
                              className="inline-flex items-center gap-1 text-primary hover:underline"
                            >
                              {language === "ru" ? "Записаться на программу" : "Enroll in this program"}
                              <ChevronRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
                {activeCategory === "all" && t.programs.arts.items.length > 3 && (
                  <div className="mt-8 text-center">
                    <Link
                      href="#"
                      onClick={() => setActiveCategory("arts")}
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      {language === "ru" ? "Смотреть все творческие курсы" : "View all arts courses"}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </section>

        {/* Faculty Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.faculty.title}</h2>
            <div className="mx-auto mb-8 h-1 w-20 bg-primary"></div>
            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-700">{t.faculty.description}</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.faculty.teachers.map((teacher, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
                >
                  <div className="relative h-64">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Teacher ${index + 1}`}
                      alt={teacher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold">{teacher.name}</h3>
                    <p className="mb-1 text-sm text-primary">{teacher.position}</p>
                    <p className="mb-3 text-xs text-gray-500">{teacher.credentials}</p>
                    <p className="text-sm text-gray-600">{teacher.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-lg bg-primary p-8 text-white md:p-12">
              <h2 className="mb-8 text-center text-3xl font-bold">{t.achievements.title}</h2>
              <div className="space-y-4">
                {t.achievements.items.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="mt-0.5 h-6 w-6 flex-shrink-0 text-yellow-300" />
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <User className="h-5 w-5" />
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <p className="pl-12 text-sm text-gray-500">{item.program}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enroll Section */}
        <section id="enroll" className="py-16">
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
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.enroll.title}</h2>
                  <p className="mx-auto mb-8 max-w-2xl text-lg">{t.enroll.description}</p>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-medium text-primary transition-all hover:bg-gray-100 hover:gap-3"
                  >
                    {t.enroll.cta}
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

