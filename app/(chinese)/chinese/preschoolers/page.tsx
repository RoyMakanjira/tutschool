"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  MessageSquare, Globe, BookOpen, Clock, Users, Award,
  ArrowRight, Check, Landmark, Star, Music, Gamepad2, Heart, Smile
} from "lucide-react"
import { FadeIn } from "@/components/animations/scroll-animations"

export default function PreschoolersPage() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [activeTab, setActiveTab] = useState(0)

  const translations = {
    ru: {
      hero: {
        title: "Китайский язык для дошкольников",
        subtitle: "Веселое знакомство с китайским языком через игры и творчество",
        cta: "Записаться на пробный урок"
      },
      features: [
        {
          title: "Игровая форма",
          description: "Обучение через веселые игры и развлечения",
          icon: Gamepad2
        },
        {
          title: "Творчество",
          description: "Рисование, лепка и поделки на китайскую тематику",
          icon: Heart
        },
        {
          title: "Музыка",
          description: "Песни, стихи и танцы на китайском языке",
          icon: Music
        },
        {
          title: "Дружелюбная атмосфера",
          description: "Занятия в небольших группах с заботливыми преподавателями",
          icon: Smile
        }
      ],
      activities: [
        {
          title: "Китайские сказки",
          description: "Чтение и инсценировка простых китайских сказок",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
        },
        {
          title: "Творческие мастерские",
          description: "Создание поделок и рисунков на китайскую тематику",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
        },
        {
          title: "Музыкальные занятия",
          description: "Изучение простых песен и стихов на китайском",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
        }
      ],
      levels: [
        {
          name: "Начальный",
          description: "Знакомство с китайским языком через игры и песни"
        },
        {
          name: "Базовый",
          description: "Изучение простых слов и фраз в игровой форме"
        },
        {
          name: "Продвинутый",
          description: "Развитие базовых коммуникативных навыков"
        }
      ],
      pricing: {
        title: "Стоимость занятий",
        plans: [
          {
            name: "Разовое посещение",
            price: "800 ₽",
            features: ["1 занятие", "30 минут", "Группа до 4 человек"]
          },
          {
            name: "Абонемент на месяц",
            price: "2,800 ₽",
            features: ["8 занятий", "30 минут каждое", "Группа до 4 человек"],
            popular: true
          },
          {
            name: "Индивидуальное занятие",
            price: "1,200 ₽",
            features: ["1 занятие", "30 минут", "Индивидуальный подход"]
          }
        ]
      }
    },
    en: {
      hero: {
        title: "Chinese for Preschoolers",
        subtitle: "Fun introduction to Chinese through games and creativity",
        cta: "Book a trial lesson"
      },
      features: [
        {
          title: "Play-based Learning",
          description: "Learning through fun games and activities",
          icon: Gamepad2
        },
        {
          title: "Creativity",
          description: "Drawing, modeling and crafts on Chinese themes",
          icon: Heart
        },
        {
          title: "Music",
          description: "Songs, poems and dances in Chinese",
          icon: Music
        },
        {
          title: "Friendly Environment",
          description: "Small groups with caring teachers",
          icon: Smile
        }
      ],
      activities: [
        {
          title: "Chinese Fairy Tales",
          description: "Reading and acting out simple Chinese tales",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
        },
        {
          title: "Creative Workshops",
          description: "Making crafts and drawings on Chinese themes",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
        },
        {
          title: "Music Classes",
          description: "Learning simple songs and poems in Chinese",
          image: "https://images.pexels.com/photos/3768894/pexels-photo-3768894.jpeg"
        }
      ],
      levels: [
        {
          name: "Beginner",
          description: "Introduction to Chinese through games and songs"
        },
        {
          name: "Basic",
          description: "Learning simple words and phrases through play"
        },
        {
          name: "Advanced",
          description: "Developing basic communication skills"
        }
      ],
      pricing: {
        title: "Pricing Plans",
        plans: [
          {
            name: "Single Visit",
            price: "800 ₽",
            features: ["1 lesson", "30 minutes", "Group up to 4 children"]
          },
          {
            name: "Monthly Pass",
            price: "2,800 ₽",
            features: ["8 lessons", "30 minutes each", "Group up to 4 children"],
            popular: true
          },
          {
            name: "Individual Lesson",
            price: "1,200 ₽",
            features: ["1 lesson", "30 minutes", "Individual approach"]
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
              alt="Preschoolers learning Chinese"
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