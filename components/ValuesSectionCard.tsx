"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Users, Award, Globe, UserCheck, LineChart, Palette } from "lucide-react"

export default function ValuesSectionCard({ language }: { language: "ru" | "en" }) {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            entry.target.classList.remove("opacity-0")
            entry.target.classList.remove("translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = cardsRef.current?.querySelectorAll(".value-card")
    if (cards) {
      cards.forEach((card) => {
        observer.observe(card)
      })
    }

    return () => {
      if (cards) {
        cards.forEach((card) => {
          observer.unobserve(card)
        })
      }
    }
  }, [])

  const values = {
    ru: [
      {
        icon: <Users className="h-10 w-10" />,
        title: "Сообщество",
        description:
          "Группы по изучению языка в нашей школе — это сообщества друзей. Общение — основа изучения языка, и мы уделяем особое внимание развитию коммуникативных навыков. Мы не только способствуем общению в конкретных контекстах, но и прививаем культурные ценности, эмпатию и умение радоваться за друзей.",
        color: "bg-burgundy-900",
        textColor: "text-white",
        delay: "delay-0",
      },
      {
        icon: <Award className="h-10 w-10" />,
        title: "Качество",
        description:
          "Эффективная методика преподавания — основа любого успешного языкового курса. В наших группах общего английского мы используем коммуникативный подход. В группах подготовки к экзаменам мы знакомим студентов с форматом экзамена и обучаем стратегиям. Наши преподаватели — сертифицированные специалисты, многие из которых прошли обучение или стажировку в странах изучаемых языков, включая носителей языка.",
        color: "bg-white",
        textColor: "text-gray-900",
        delay: "delay-100",
      },
      {
        icon: <Globe className="h-10 w-10" />,
        title: "Культурология",
        description:
          "Язык — неотъемлемая часть культуры, поэтому мы знакомим наших студентов с культурами стран, языки которых они изучают.",
        color: "bg-burgundy-100",
        textColor: "text-burgundy-900",
        delay: "delay-200",
      },
      {
        icon: <UserCheck className="h-10 w-10" />,
        title: "Индивидуальный подход",
        description:
          "Наш формат — мини-группы по 4–6 студентов. Даже в групповом формате это позволяет уделять внимание каждому студенту и при необходимости адаптировать части уроков под индивидуальные потребности (например, дополнительная практика).",
        color: "bg-white",
        textColor: "text-gray-900",
        delay: "delay-300",
      },
      {
        icon: <LineChart className="h-10 w-10" />,
        title: "Измерение прогресса",
        description:
          "Мы помогаем студентам достигать своих целей, измеряя их прогресс. Мы проводим промежуточные тесты после каждого раздела курса, чтобы отслеживать успехи и выявлять области для улучшения.",
        color: "bg-burgundy-100",
        textColor: "text-burgundy-900",
        delay: "delay-400",
      },
      {
        icon: <Palette className="h-10 w-10" />,
        title: "Творчество",
        description:
          "Творчество и языки тесно связаны — они оба помогают выражать эмоции и общаться с миром. На наших занятиях по творчеству и искусству мы обучаем основам изобразительного искусства и создаем радостную атмосферу!",
        color: "bg-white",
        textColor: "text-gray-900",
        delay: "delay-500",
      },
    ],
    en: [
      {
        icon: <Users className="h-10 w-10" />,
        title: "Community",
        description:
          "Language study groups at our school are communities of friends. Communication is the foundation of language learning, and we pay special attention to developing communication skills. We not only foster communication in specific contexts but also instill cultural values, empathy, and the ability to be happy for friends.",
        color: "bg-burgundy-900",
        textColor: "text-white",
        delay: "delay-0",
      },
      {
        icon: <Award className="h-10 w-10" />,
        title: "Quality",
        description:
          "An effective teaching methodology is the foundation of any successful language course. In our general English groups, we use the communicative approach. In exam preparation groups, we familiarize students with the exam format and teach them strategies. Our teachers are certified specialists, many of whom have completed training or internships in the countries of the languages they teach, and include native speakers.",
        color: "bg-white",
        textColor: "text-gray-900",
        delay: "delay-100",
      },
      {
        icon: <Globe className="h-10 w-10" />,
        title: "Cultural Studies",
        description:
          "Language is an integral part of culture, so we introduce our students to the cultures of the countries whose languages they are learning.",
        color: "bg-burgundy-100",
        textColor: "text-burgundy-900",
        delay: "delay-200",
      },
      {
        icon: <UserCheck className="h-10 w-10" />,
        title: "Individual Approach",
        description:
          "Our format is mini-groups of 4–6 students. Even within a group setting, this allows us to give attention to each student and adapt parts of lessons to individual needs if necessary (e.g., additional practice).",
        color: "bg-white",
        textColor: "text-gray-900",
        delay: "delay-300",
      },
      {
        icon: <LineChart className="h-10 w-10" />,
        title: "Measuring Progress",
        description:
          "We help students reach their goals by measuring their progress. We conduct interim tests after each section of the course to track success and identify areas for improvement.",
        color: "bg-burgundy-100",
        textColor: "text-burgundy-900",
        delay: "delay-400",
      },
      {
        icon: <Palette className="h-10 w-10" />,
        title: "Creativity",
        description:
          "Creativity and languages are closely connected—they both help express emotions and communicate with the world. In our creativity and art classes, we teach the basics of visual arts and create a joyful atmosphere!",
        color: "bg-white",
        textColor: "text-gray-900",
        delay: "delay-500",
      },
    ],
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-heading mb-4 inline-block">{language === "ru" ? "НАШИ ЦЕННОСТИ" : "OUR VALUES"}</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            {language === "ru"
              ? "Принципы, которыми мы руководствуемся в нашей работе, чтобы обеспечить высокое качество обучения и комфортную атмосферу."
              : "The principles that guide our work to ensure high-quality education and a comfortable atmosphere."}
          </p>
        </div>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values[language].map((value, index) => (
            <div
              key={index}
              className={`value-card opacity-0 translate-y-10 transition-all duration-700 ${value.delay} rounded-lg shadow-lg overflow-hidden`}
            >
              <div className={`${value.color} p-8`}>
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full ${
                      value.color === "bg-burgundy-900" ? "bg-white text-burgundy-900" : "bg-burgundy-900 text-white"
                    }`}
                  >
                    {value.icon}
                  </div>
                  <span className="text-4xl font-bold opacity-10">0{index + 1}</span>
                </div>
                <h3 className={`mb-4 text-2xl font-bold ${value.textColor}`}>{value.title}</h3>
                <p className={`${value.textColor} ${value.color === "bg-burgundy-900" ? "text-opacity-90" : ""}`}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-white p-8 shadow-lg">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-lg md:h-full">
              <Image
                src="/assets/gallery/values.jpg?height=400&width=600&text=Our Values"
                alt="Our Values"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">
                  {language === "ru" ? "Наши ценности в действии" : "Our values in action"}
                </h3>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold text-burgundy-900">
                {language === "ru" ? "Почему наши ценности важны?" : "Why our values matter?"}
              </h3>
              <p className="mb-6 text-gray-600">
                {language === "ru"
                  ? "Наши ценности — это не просто слова. Они определяют всё, что мы делаем: от разработки учебных программ до общения со студентами. Мы верим, что изучение языка должно быть не только эффективным, но и приятным процессом, который обогащает жизнь наших студентов."
                  : "Our values are not just words. They define everything we do: from curriculum development to communication with students. We believe that language learning should be not only effective but also an enjoyable process that enriches the lives of our students."}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-burgundy-50 p-4">
                  <div className="mb-2 font-bold text-burgundy-900">
                    {language === "ru" ? "Для студентов" : "For students"}
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === "ru"
                      ? "Наши ценности гарантируют, что каждый студент получит качественное образование в дружественной среде."
                      : "Our values ensure that every student receives quality education in a friendly environment."}
                  </p>
                </div>
                <div className="rounded-lg bg-burgundy-50 p-4">
                  <div className="mb-2 font-bold text-burgundy-900">
                    {language === "ru" ? "Для преподавателей" : "For teachers"}
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === "ru"
                      ? "Наши ценности создают среду, где преподаватели могут раскрыть свой потенциал и постоянно развиваться."
                      : "Our values create an environment where teachers can reach their potential and continuously develop."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
