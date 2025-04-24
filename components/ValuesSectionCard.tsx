import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface ValuesSectionProps {
  language: "ru" | "en"
}

export default function ValuesSection({ language }: ValuesSectionProps) {
  const translations = {
    ru: {
      values: {
        title: "НАШИ ЦЕННОСТИ",
        community: {
          title: "Сообщество",
          description:
            "Группы изучения языка в нашей школе — это сообщество друзей. Основа изучения языка — это общение, и мы уделяем особое внимание развитию коммуникативных навыков. Мы развиваем не только умение общаться в конкретных речевых ситуациях, но и прививаем культурные ценности, эмпатию и радость от празднования успехов друзей.",
        },
        quality: {
          title: "Качество",
          description:
            "Хорошо структурированная методология — основа любого успешного языкового курса. В группах общего английского мы используем коммуникативный подход. В группах подготовки к экзаменам мы знакомим студентов с форматом экзамена и обучаем стратегиям сдачи экзаменов. Наши преподаватели — сертифицированные профессионалы, прошедшие обучение и стажировки в странах преподаваемых языков, а также носители языка.",
          standards: "Наши Стандарты Качества",
          points: [
            "Сертифицированные преподаватели с международным опытом",
            "Коммуникативный подход для эффективного обучения",
            "Регулярное обучение и профессиональное развитие",
          ],
        },
        culturalStudies: {
          title: "Культурные Исследования",
          description:
            "Язык является неотъемлемой частью культуры, поэтому мы знакомим наших студентов с культурой стран, где говорят на изучаемых языках. Наши студенты узнают о праздниках, традициях и обычаях других стран во время наших занятий и, конечно же, на мероприятиях и мастер-классах.",
        },
        individualApproach: {
          title: "Индивидуальный Подход",
          description:
            "Наш формат обучения — мини-группы по 4-6 человек. В таком формате даже при групповом обучении мы можем уделить внимание каждому студенту и, при необходимости, адаптировать определенные элементы урока под индивидуальные потребности (дополнительная практика при необходимости).",
          smallGroups: "Маленькие Группы",
          groupsDescription: "4-6 студентов в группе для персонализированного внимания",
        },
        progressTracking: {
          title: "Отслеживание Прогресса",
          description:
            "Мы помогаем достигать целей и поэтому всегда измеряем прогресс. Мы проводим промежуточное тестирование после каждого завершенного раздела курса и помогаем отслеживать успехи, выявлять и решать проблемные области.",
          points: [
            "Регулярная оценка после каждого раздела курса",
            "Персонализированная обратная связь по областям для улучшения",
            "Празднование достижений и вех",
          ],
          studentProgress: "Прогресс Студента",
          vocabulary: "Словарный запас",
          grammar: "Грамматика",
          speaking: "Разговорная речь",
        },
        creativity: {
          title: "Творчество",
          description:
            "Творчество и языки тесно связаны, потому что оба помогают общаться с миром и выражать эмоции. На наших творческих и художественных занятиях мы обучаем основам изобразительного искусства и распространяем хорошее настроение!",
          activities: "Творческие Занятия",
          points: [
            "Интеграция искусства и языка",
            "Творческое выражение через различные средства",
            "Веселые и увлекательные культурные мероприятия",
          ],
        },
      },
    },
    en: {
      values: {
        title: "OUR VALUES",
        community: {
          title: "Community",
          description:
            "Language learning groups at our school are a community of friends. The foundation of language learning is communication, and we place special emphasis on developing communication skills. We cultivate not only the ability to communicate in specific speech situations but also instill cultural values, empathy, and the joy of celebrating friends' successes.",
        },
        quality: {
          title: "Quality",
          description:
            "A well-structured methodology is the foundation of any successful language course. In general English groups, we use the communicative approach. In exam preparation groups, we familiarize students with the exam format and teach exam strategies. Our teachers are certified professionals who have undergone training and internships in the countries of the languages they teach, as well as native speakers.",
          standards: "Our Quality Standards",
          points: [
            "Certified teachers with international experience",
            "Communicative approach for effective learning",
            "Regular training and professional development",
          ],
        },
        culturalStudies: {
          title: "Cultural Studies",
          description:
            "Language is an integral part of culture, so we introduce our students to the culture of the countries where the languages are spoken. Our students learn about holidays, traditions, and customs of other countries during our classes and, of course, at events and masterclasses.",
        },
        individualApproach: {
          title: "Individual Approach",
          description:
            "Our learning format is mini-groups of 4-6 people. In this format, even in group learning, we can pay attention to each student and, if necessary, adapt certain elements of the lesson to individual needs (additional practice when required).",
          smallGroups: "Small Groups",
          groupsDescription: "4-6 students per group for personalized attention",
        },
        progressTracking: {
          title: "Progress Tracking",
          description:
            "We help achieve goals and therefore always measure progress. We conduct intermediate testing after each completed section of the course and help track successes, identify, and address problem areas.",
          points: [
            "Regular assessment after each course section",
            "Personalized feedback on areas for improvement",
            "Celebration of achievements and milestones",
          ],
          studentProgress: "Student Progress",
          vocabulary: "Vocabulary",
          grammar: "Grammar",
          speaking: "Speaking",
        },
        creativity: {
          title: "Creativity",
          description:
            "Creativity and languages are closely linked because both help communicate with the world and express emotions. In our creative and drawing classes, we teach the basics of visual art and spread good vibes!",
          activities: "Creative Activities",
          points: [
            "Art and language integration",
            "Creative expression through various mediums",
            "Fun and engaging cultural activities",
          ],
        },
      },
    },
  }

  const t = translations[language]

  return (
    <section id="values" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-center text-3xl font-bold text-primary">{t.values.title}</h2>
        <div className="mx-auto mb-12 h-1 w-20 bg-[#5C162E]"></div>

        {/* Community Value */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 mb-16 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#5C162E] mb-4">{t.values.community.title}</h3>
            <p className="text-gray-700">{t.values.community.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[200px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Community.jpg-7gXaP13Ox9axrD5CR9JBk9jQHM5ZPe.jpeg"
                alt="Students enjoying community activities"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative h-[200px] overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Community-2.jpg-WRi5egy6prolMlCeuUSDx5QQbMsBOX.jpeg"
                alt="Students participating in cultural events"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Quality Value */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 mb-16 items-center">
          <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg md:order-last">
            <div className="absolute inset-0 bg-[#5C162E]/10 p-8 flex flex-col justify-center">
              <div className="bg-white/90 p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold text-lg text-[#5C162E] mb-4">{t.values.quality.standards}</h4>
                <ul className="space-y-3">
                  {t.values.quality.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 flex-shrink-0 text-[#5C162E]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#5C162E] mb-4">{t.values.quality.title}</h3>
            <p className="text-gray-700">{t.values.quality.description}</p>
          </div>
        </div>

        {/* Cultural Studies Value */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 mb-16 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#5C162E] mb-4">{t.values.culturalStudies.title}</h3>
            <p className="text-gray-700">{t.values.culturalStudies.description}</p>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cultural-Studies-1.jpg-D71dw1ncChFWmKMpsUAC5m2WVJ3i7K.jpeg"
              alt="Cultural studies calligraphy class"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Individual Approach Value */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 mb-16 items-center">
          <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg md:order-last">
            <div className="absolute inset-0 bg-[#5C162E]/10 p-8 flex flex-col justify-center">
              <div className="bg-white/90 p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold text-lg text-[#5C162E] mb-4">{t.values.individualApproach.smallGroups}</h4>
                <p className="mb-4 text-gray-700">{t.values.individualApproach.groupsDescription}</p>
                <div className="flex space-x-3">
                  <div className="w-10 h-10 bg-[#5C162E]/20 rounded-full flex items-center justify-center text-[#5C162E] font-bold">
                    4
                  </div>
                  <div className="w-10 h-10 bg-[#5C162E]/40 rounded-full flex items-center justify-center text-[#5C162E] font-bold">
                    5
                  </div>
                  <div className="w-10 h-10 bg-[#5C162E]/60 rounded-full flex items-center justify-center text-white font-bold">
                    6
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#5C162E] mb-4">{t.values.individualApproach.title}</h3>
            <p className="text-gray-700">{t.values.individualApproach.description}</p>
          </div>
        </div>

        {/* Progress Tracking Value */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 mb-16 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#5C162E] mb-4">{t.values.progressTracking.title}</h3>
            <p className="text-gray-700 mb-4">{t.values.progressTracking.description}</p>
            <ul className="space-y-3">
              {t.values.progressTracking.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 flex-shrink-0 text-[#5C162E]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-[#5C162E]/10 p-8 flex flex-col justify-center">
              <div className="bg-white/90 p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold text-lg text-[#5C162E] mb-4">
                  {t.values.progressTracking.studentProgress}
                </h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{t.values.progressTracking.vocabulary}</span>
                      <span className="text-sm font-medium text-[#5C162E]">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#5C162E] h-2.5 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{t.values.progressTracking.grammar}</span>
                      <span className="text-sm font-medium text-[#5C162E]">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#5C162E] h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{t.values.progressTracking.speaking}</span>
                      <span className="text-sm font-medium text-[#5C162E]">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-[#5C162E] h-2.5 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Creativity Value */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg md:order-last">
            <div className="absolute inset-0 bg-[#5C162E]/10 p-8 flex flex-col justify-center">
              <div className="bg-white/90 p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold text-lg text-[#5C162E] mb-4">{t.values.creativity.activities}</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="aspect-square bg-[#5C162E]/10 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5C162E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    </svg>
                  </div>
                  <div className="aspect-square bg-[#5C162E]/20 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5C162E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6 0 0 0 0 0 0z"></path>
                      <polygon points="10 15 15 12 10 9"></polygon>
                    </svg>
                  </div>
                  <div className="aspect-square bg-[#5C162E]/30 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#5C162E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="M8 13h2"></path>
                      <path d="M8 17h2"></path>
                      <path d="M14 13h2"></path>
                      <path d="M14 17h2"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#5C162E] mb-4">{t.values.creativity.title}</h3>
            <p className="text-gray-700 mb-4">{t.values.creativity.description}</p>
            <ul className="space-y-3">
              {t.values.creativity.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 flex-shrink-0 text-[#5C162E]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
