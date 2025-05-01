"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  BookOpen, Globe, Users, Award, Clock, Briefcase,
  ArrowRight, Check, Landmark, Star, Brain, Trophy,
  GraduationCap, BookText, Languages, Target
} from "lucide-react"
import { FadeIn } from "@/components/animations/scroll-animations"

export default function AdultsPage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [activeTab, setActiveTab] = useState(0)

  const translations = {
    ru: {
      hero: {
        title: "Китайский язык для взрослых",
        subtitle: "Профессиональное обучение китайскому языку для карьерного роста",
        cta: "Записаться на пробный урок"
      },
      features: [
        {
          title: "Профессиональные преподаватели",
          description: "Опытные преподаватели с международной сертификацией",
          icon: GraduationCap
        },
        {
          title: "Деловой китайский",
          description: "Специализированные курсы для бизнеса и карьеры",
          icon: Briefcase
        },
        {
          title: "Гибкий график",
          description: "Занятия в удобное для вас время",
          icon: Clock
        },
        {
          title: "Сертификация",
          description: "Подготовка к международным экзаменам HSK",
          icon: Award
        }
      ],
      activities: [
        {
          title: "Деловое общение",
          description: "Изучение бизнес-этикета и переговоров",
          image: "/images/mandarin-business-1.jpg"
        },
        {
          title: "Культурные аспекты",
          description: "Изучение традиций и обычаев Китая",
          image: "/images/mandarin-business-2.jpg"
        },
        {
          title: "Профессиональная лексика",
          description: "Специализированная терминология",
          image: "/images/mandarin-business-3.jpg"
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
            price: "1,500 ₽",
            features: ["1 занятие", "90 минут", "Группа до 6 человек"]
          },
          {
            name: "Абонемент на месяц",
            price: "5,000 ₽",
            features: ["8 занятий", "90 минут каждое", "Группа до 6 человек"],
            popular: true
          },
          {
            name: "Индивидуальное занятие",
            price: "2,500 ₽",
            features: ["1 занятие", "90 минут", "Индивидуальный подход"]
          }
        ]
      }
    },
    en: {
      hero: {
        title: "Chinese for Adults",
        subtitle: "Professional Chinese language training for career advancement",
        cta: "Book a trial lesson"
      },
      features: [
        {
          title: "Professional Teachers",
          description: "Experienced teachers with international certification",
          icon: GraduationCap
        },
        {
          title: "Business Chinese",
          description: "Specialized courses for business and career",
          icon: Briefcase
        },
        {
          title: "Flexible Schedule",
          description: "Classes at your convenient time",
          icon: Clock
        },
        {
          title: "Certification",
          description: "Preparation for international HSK exams",
          icon: Award
        }
      ],
      activities: [
        {
          title: "Business Communication",
          description: "Study of business etiquette and negotiations",
          image: "/images/mandarin-business-1.jpg"
        },
        {
          title: "Cultural Aspects",
          description: "Study of Chinese traditions and customs",
          image: "/images/mandarin-business-2.jpg"
        },
        {
          title: "Professional Vocabulary",
          description: "Specialized terminology",
          image: "/images/mandarin-business-3.jpg"
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
            price: "1,500 ₽",
            features: ["1 lesson", "90 minutes", "Group up to 6 students"]
          },
          {
            name: "Monthly Pass",
            price: "5,000 ₽",
            features: ["8 lessons", "90 minutes each", "Group up to 6 students"],
            popular: true
          },
          {
            name: "Individual Lesson",
            price: "2,500 ₽",
            features: ["1 lesson", "90 minutes", "Individual approach"]
          }
        ]
      }
    }
  }

  const t = translations[language]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-emerald-50 to-white">
      <FadeIn>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/mandarin-business-hero.jpg"
              alt="Adults learning Chinese"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-800/80" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
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
                className="bg-white text-emerald-800 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-lg shadow-lg"
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
                  className="bg-white p-8 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-colors shadow-sm hover:shadow-md"
                >
                  <feature.icon className="w-12 h-12 text-emerald-600 mb-6" />
                  <h3 className="text-xl font-semibold mb-3 text-emerald-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3 text-emerald-800">{activity.title}</h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <button className="text-emerald-600 font-medium flex items-center hover:text-emerald-700 transition-colors">
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
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
              {language === 'ru' ? 'Уровни обучения' : 'Learning Levels'}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {t.levels.map((level, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === index
                        ? 'bg-emerald-600 text-white'
                        : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
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
                className="text-center bg-emerald-50 p-8 rounded-xl text-emerald-800"
              >
                <p className="text-lg">
                  {t.levels[activeTab].description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">
              {t.pricing.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {t.pricing.plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative ${plan.popular ? 'border-2 border-emerald-600' : ''
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-emerald-600 text-white px-4 py-1 rounded-bl-xl">
                      {language === 'ru' ? 'Популярный' : 'Popular'}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-4 text-emerald-800">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-6 text-emerald-600">{plan.price}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Check className="w-5 h-5 text-emerald-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-600 text-white py-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                  >
                    {language === 'ru' ? 'Выбрать' : 'Select'}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-emerald-800 text-white">
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
              className="bg-white text-emerald-800 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-lg shadow-lg"
            >
              {t.hero.cta}
            </motion.button>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}