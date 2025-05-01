"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageSquare, Globe, BookOpen, Clock, Users, Award,
  ArrowRight, Check, Landmark, Star, Music, Gamepad2, Brain, Trophy
} from "lucide-react"
import { FadeIn } from "@/components/animations/scroll-animations"

export default function Aged10to12Page() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [activeTab, setActiveTab] = useState(0)

  const translations = {
    ru: {
      hero: {
        title: "Китайский язык для детей 10-12 лет",
        subtitle: "Углубленное изучение китайского языка с элементами культуры и истории",
        cta: "Записаться на пробный урок"
      },
      features: [
        {
          title: "Интерактивное обучение",
          description: "Современные методики и цифровые технологии в обучении",
          icon: Brain
        },
        {
          title: "Культурное погружение",
          description: "Изучение традиций, праздников и обычаев Китая",
          icon: Globe
        },
        {
          title: "Командные проекты",
          description: "Совместная работа над творческими и исследовательскими проектами",
          icon: Users
        },
        {
          title: "Достижения",
          description: "Подготовка к международным экзаменам и конкурсам",
          icon: Trophy
        }
      ],
      activities: [
        {
          title: "Китайская культура",
          description: "Изучение традиций, праздников и обычаев Китая",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
        },
        {
          title: "Проектная работа",
          description: "Создание презентаций и исследовательских проектов",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
        },
        {
          title: "Языковые игры",
          description: "Интерактивные игры и конкурсы на китайском языке",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
        }
      ],
      levels: [
        {
          name: "Начальный",
          description: "Основы китайского языка и базовые коммуникативные навыки"
        },
        {
          name: "Средний",
          description: "Расширение словарного запаса и грамматических структур"
        },
        {
          name: "Продвинутый",
          description: "Свободное общение и подготовка к экзаменам"
        }
      ],
      pricing: {
        title: "Стоимость занятий",
        plans: [
          {
            name: "Разовое посещение",
            price: "1,200 ₽",
            features: ["1 занятие", "60 минут", "Группа до 8 человек"]
          },
          {
            name: "Абонемент на месяц",
            price: "4,000 ₽",
            features: ["8 занятий", "60 минут каждое", "Группа до 8 человек"],
            popular: true
          },
          {
            name: "Индивидуальное занятие",
            price: "1,800 ₽",
            features: ["1 занятие", "60 минут", "Индивидуальный подход"]
          }
        ]
      }
    },
    en: {
      hero: {
        title: "Chinese for Children 10-12 years",
        subtitle: "In-depth Chinese learning with cultural and historical elements",
        cta: "Book a trial lesson"
      },
      features: [
        {
          title: "Interactive Learning",
          description: "Modern methods and digital technologies in education",
          icon: Brain
        },
        {
          title: "Cultural Immersion",
          description: "Study of Chinese traditions, holidays and customs",
          icon: Globe
        },
        {
          title: "Team Projects",
          description: "Collaborative work on creative and research projects",
          icon: Users
        },
        {
          title: "Achievements",
          description: "Preparation for international exams and competitions",
          icon: Trophy
        }
      ],
      activities: [
        {
          title: "Chinese Culture",
          description: "Study of Chinese traditions, holidays and customs",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
        },
        {
          title: "Project Work",
          description: "Creating presentations and research projects",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
        },
        {
          title: "Language Games",
          description: "Interactive games and competitions in Chinese",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
        }
      ],
      levels: [
        {
          name: "Beginner",
          description: "Chinese language basics and basic communication skills"
        },
        {
          name: "Intermediate",
          description: "Expanding vocabulary and grammatical structures"
        },
        {
          name: "Advanced",
          description: "Free communication and exam preparation"
        }
      ],
      pricing: {
        title: "Pricing Plans",
        plans: [
          {
            name: "Single Visit",
            price: "1,200 ₽",
            features: ["1 lesson", "60 minutes", "Group up to 8 children"]
          },
          {
            name: "Monthly Pass",
            price: "4,000 ₽",
            features: ["8 lessons", "60 minutes each", "Group up to 8 children"],
            popular: true
          },
          {
            name: "Individual Lesson",
            price: "1,800 ₽",
            features: ["1 lesson", "60 minutes", "Individual approach"]
          }
        ]
      }
    }
  }

  const t = translations[language]

  return (
    <div className="flex min-h-screen flex-col">
      <FadeIn>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#5C162E] to-[#7A1F3D]">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
              alt="Pre-teens learning Chinese"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#5C162E] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
              >
                {t.hero.cta}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium text-lg"
              >
                {language === 'ru' ? 'Узнать больше' : 'Learn More'}
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-[#5C162E] transition-colors"
                >
                  <feature.icon className="w-12 h-12 text-[#5C162E] mb-6" />
                  <h3 className="text-xl font-semibold mb-3 text-[#5C162E]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
              {language === 'ru' ? 'Наши занятия' : 'Our Activities'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-64">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3 text-[#5C162E]">{activity.title}</h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <button className="text-[#5C162E] font-medium flex items-center hover:text-[#7A1F3D] transition-colors">
                      {language === 'ru' ? 'Подробнее' : 'Learn More'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Levels Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
              {language === 'ru' ? 'Уровни обучения' : 'Learning Levels'}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {t.levels.map((level, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === index
                      ? 'bg-[#5C162E] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center bg-gray-50 p-8 rounded-xl"
              >
                <p className="text-gray-600 text-lg">
                  {t.levels[activeTab].description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#5C162E]">
              {t.pricing.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {t.pricing.plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative ${plan.popular ? 'border-2 border-[#5C162E]' : ''
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-[#5C162E] text-white px-4 py-1 rounded-bl-xl">
                      {language === 'ru' ? 'Популярный' : 'Popular'}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-4 text-[#5C162E]">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-6">{plan.price}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-[#5C162E] mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#5C162E] text-white py-4 rounded-lg hover:bg-[#7A1F3D] transition-colors font-medium"
                  >
                    {language === 'ru' ? 'Выбрать' : 'Select'}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#5C162E] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'ru' ? 'Запишитесь на пробный урок' : 'Book a trial lesson'}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {language === 'ru' ? 'Запишитесь на пробный урок и получите скидку 20% на первый месяц обучения!' : 'Sign up for a trial lesson and get a 20% discount on your first month of study!'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#5C162E] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              {t.hero.cta}
            </motion.button>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}