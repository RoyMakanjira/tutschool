"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageSquare, Globe, BookOpen, Clock, Users, Award,
  ArrowRight, Check, Landmark, Star, Music, Gamepad2, Brain, Trophy,
  Smartphone, Laptop, Tablet, Headphones
} from "lucide-react"
import { FadeIn } from "@/components/animations/scroll-animations"

export default function TeenagersPage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [activeTab, setActiveTab] = useState(0)

  const translations = {
    ru: {
      hero: {
        title: "Китайский язык для подростков",
        subtitle: "Современный подход к изучению китайского языка с акцентом на практику",
        cta: "Записаться на пробный урок"
      },
      features: [
        {
          title: "Цифровое обучение",
          description: "Использование современных технологий и приложений",
          icon: Smartphone
        },
        {
          title: "Онлайн-платформа",
          description: "Доступ к материалам и заданиям 24/7",
          icon: Laptop
        },
        {
          title: "Интерактивные уроки",
          description: "Увлекательные занятия с использованием гаджетов",
          icon: Tablet
        },
        {
          title: "Аудио-материалы",
          description: "Подкасты и аудио-уроки для практики",
          icon: Headphones
        }
      ],
      activities: [
        {
          title: "Китайские иероглифы",
          description: "Изучение иероглифов через современные методы",
          image: "/images/mandarin-characters-1.jpg"
        },
        {
          title: "Цифровые проекты",
          description: "Создание презентаций и видео на китайском",
          image: "/images/mandarin-characters-2.jpg"
        },
        {
          title: "Языковые приложения",
          description: "Использование современных приложений для изучения",
          image: "/images/mandarin-characters-3.jpg"
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
        title: "Chinese for Teenagers",
        subtitle: "Modern approach to learning Chinese with focus on practice",
        cta: "Book a trial lesson"
      },
      features: [
        {
          title: "Digital Learning",
          description: "Using modern technologies and apps",
          icon: Smartphone
        },
        {
          title: "Online Platform",
          description: "24/7 access to materials and assignments",
          icon: Laptop
        },
        {
          title: "Interactive Lessons",
          description: "Engaging classes using gadgets",
          icon: Tablet
        },
        {
          title: "Audio Materials",
          description: "Podcasts and audio lessons for practice",
          icon: Headphones
        }
      ],
      activities: [
        {
          title: "Chinese Characters",
          description: "Learning characters through modern methods",
          image: "/images/mandarin-characters-1.jpg"
        },
        {
          title: "Digital Projects",
          description: "Creating presentations and videos in Chinese",
          image: "/images/mandarin-characters-2.jpg"
        },
        {
          title: "Language Apps",
          description: "Using modern apps for learning",
          image: "/images/mandarin-characters-3.jpg"
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
            features: ["1 lesson", "60 minutes", "Group up to 8 students"]
          },
          {
            name: "Monthly Pass",
            price: "4,000 ₽",
            features: ["8 lessons", "60 minutes each", "Group up to 8 students"],
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
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <FadeIn>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/mandarin-hero.jpg"
              alt="Teenagers learning Chinese"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/80" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
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
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors font-medium text-lg shadow-lg"
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
                  className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <feature.icon className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              {language === 'ru' ? 'Наши занятия' : 'Our Activities'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-shadow"
                >
                  <div className="relative h-64">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-3 text-white">{activity.title}</h3>
                    <p className="text-gray-300 mb-4">{activity.description}</p>
                    <button className="text-blue-400 font-medium flex items-center hover:text-blue-300 transition-colors">
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
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              {language === 'ru' ? 'Уровни обучения' : 'Learning Levels'}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {t.levels.map((level, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
                className="text-center bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl text-gray-300"
              >
                <p className="text-lg">
                  {t.levels[activeTab].description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              {t.pricing.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {t.pricing.plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-shadow relative ${plan.popular ? 'border-2 border-blue-500' : ''
                    }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-bl-xl">
                      {language === 'ru' ? 'Популярный' : 'Popular'}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-4 text-white">{plan.name}</h3>
                  <p className="text-3xl font-bold mb-6 text-blue-400">{plan.price}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-blue-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors font-medium"
                  >
                    {language === 'ru' ? 'Выбрать' : 'Select'}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
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
              className="bg-white text-blue-500 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg shadow-lg"
            >
              {t.hero.cta}
            </motion.button>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}