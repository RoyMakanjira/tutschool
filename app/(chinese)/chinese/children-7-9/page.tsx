"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
    BookOpen, Globe, Users, Award, Clock, Briefcase,
    ArrowRight, Check, Landmark, Star, Brain, Trophy,
    GraduationCap, BookText, Languages, Target, Gamepad2,
    Music, Palette, Heart, Smile, Sparkles
} from "lucide-react"
import { FadeIn } from "@/components/animations/scroll-animations"

export default function ChildrenPage() {
    const [language, setLanguage] = useState<"ru" | "en">("ru")
    const [activeTab, setActiveTab] = useState(0)

    const translations = {
        ru: {
            hero: {
                title: "Китайский язык для детей 7-9 лет",
                subtitle: "Увлекательное изучение китайского языка через игры и творчество",
                cta: "Записаться на пробный урок"
            },
            features: [
                {
                    title: "Игровое обучение",
                    description: "Интерактивные игры и задания для легкого запоминания",
                    icon: Gamepad2
                },
                {
                    title: "Творческие занятия",
                    description: "Рисование, музыка и поделки на китайском языке",
                    icon: Palette
                },
                {
                    title: "Дружелюбная атмосфера",
                    description: "Комфортная среда для развития и общения",
                    icon: Heart
                },
                {
                    title: "Веселые награды",
                    description: "Система поощрений и достижений",
                    icon: Trophy
                }
            ],
            activities: [
                {
                    title: "Игровые уроки",
                    description: "Изучение языка через веселые игры и конкурсы",
                    image: "/images/mandarin-kids-1.jpg"
                },
                {
                    title: "Творческие мастерские",
                    description: "Рисование и поделки с элементами китайской культуры",
                    image: "/images/mandarin-kids-2.jpg"
                },
                {
                    title: "Музыкальные занятия",
                    description: "Песни и ритмические упражнения на китайском",
                    image: "/images/mandarin-kids-3.jpg"
                }
            ],
            levels: [
                {
                    name: "Начальный",
                    description: "Знакомство с китайским языком через игры и песни"
                },
                {
                    name: "Средний",
                    description: "Развитие базовых навыков общения и письма"
                },
                {
                    name: "Продвинутый",
                    description: "Углубленное изучение с элементами культуры"
                }
            ],
            pricing: {
                title: "Стоимость занятий",
                plans: [
                    {
                        name: "Разовое посещение",
                        price: "1,200 ₽",
                        features: ["1 занятие", "60 минут", "Группа до 8 детей"]
                    },
                    {
                        name: "Абонемент на месяц",
                        price: "4,000 ₽",
                        features: ["8 занятий", "60 минут каждое", "Группа до 8 детей"],
                        popular: true
                    },
                    {
                        name: "Индивидуальное занятие",
                        price: "2,000 ₽",
                        features: ["1 занятие", "60 минут", "Индивидуальный подход"]
                    }
                ]
            }
        },
        en: {
            hero: {
                title: "Chinese for Children 7-9 years",
                subtitle: "Fun Chinese language learning through games and creativity",
                cta: "Book a trial lesson"
            },
            features: [
                {
                    title: "Game-based Learning",
                    description: "Interactive games and activities for easy memorization",
                    icon: Gamepad2
                },
                {
                    title: "Creative Activities",
                    description: "Drawing, music and crafts in Chinese",
                    icon: Palette
                },
                {
                    title: "Friendly Environment",
                    description: "Comfortable space for development and communication",
                    icon: Heart
                },
                {
                    title: "Fun Rewards",
                    description: "System of achievements and rewards",
                    icon: Trophy
                }
            ],
            activities: [
                {
                    title: "Game Lessons",
                    description: "Language learning through fun games and competitions",
                    image: "/images/mandarin-kids-1.jpg"
                },
                {
                    title: "Creative Workshops",
                    description: "Drawing and crafts with Chinese cultural elements",
                    image: "/images/mandarin-kids-2.jpg"
                },
                {
                    title: "Music Classes",
                    description: "Songs and rhythm exercises in Chinese",
                    image: "/images/mandarin-kids-3.jpg"
                }
            ],
            levels: [
                {
                    name: "Beginner",
                    description: "Introduction to Chinese through games and songs"
                },
                {
                    name: "Intermediate",
                    description: "Development of basic communication and writing skills"
                },
                {
                    name: "Advanced",
                    description: "In-depth study with cultural elements"
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
                        price: "2,000 ₽",
                        features: ["1 lesson", "60 minutes", "Individual approach"]
                    }
                ]
            }
        }
    }

    const t = translations[language]

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-pink-50 to-white">
            <FadeIn>
                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/mandarin-kids-hero.jpg"
                            alt="Children learning Chinese"
                            fill
                            className="object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-pink-600/80 to-pink-500/80" />
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
                                className="bg-white text-pink-600 px-8 py-4 rounded-lg hover:bg-pink-50 transition-colors font-medium text-lg shadow-lg"
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
                                    className="bg-white p-8 rounded-xl border border-pink-100 hover:border-pink-300 transition-colors shadow-sm hover:shadow-md"
                                >
                                    <feature.icon className="w-12 h-12 text-pink-600 mb-6" />
                                    <h3 className="text-xl font-semibold mb-3 text-pink-800">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Activities Section */}
                <section className="py-20 bg-pink-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-pink-800">
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
                                        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent" />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-xl font-semibold mb-3 text-pink-800">{activity.title}</h3>
                                        <p className="text-gray-600 mb-4">{activity.description}</p>
                                        <button className="text-pink-600 font-medium flex items-center hover:text-pink-700 transition-colors">
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
                        <h2 className="text-3xl font-bold text-center mb-12 text-pink-800">
                            {language === 'ru' ? 'Уровни обучения' : 'Learning Levels'}
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {t.levels.map((level, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === index
                                            ? 'bg-pink-600 text-white'
                                            : 'bg-pink-50 text-pink-700 hover:bg-pink-100'
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
                                className="text-center bg-pink-50 p-8 rounded-xl text-pink-800"
                            >
                                <p className="text-lg">
                                    {t.levels[activeTab].description}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-20 bg-pink-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-pink-800">
                            {t.pricing.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {t.pricing.plans.map((plan, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative ${plan.popular ? 'border-2 border-pink-600' : ''
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute top-0 right-0 bg-pink-600 text-white px-4 py-1 rounded-bl-xl">
                                            {language === 'ru' ? 'Популярный' : 'Popular'}
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold mb-4 text-pink-800">{plan.name}</h3>
                                    <p className="text-3xl font-bold mb-6 text-pink-600">{plan.price}</p>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-gray-600">
                                                <Check className="w-5 h-5 text-pink-600 mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-pink-600 text-white py-4 rounded-lg hover:bg-pink-700 transition-colors font-medium"
                                    >
                                        {language === 'ru' ? 'Выбрать' : 'Select'}
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-pink-600 text-white">
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
                            className="bg-white text-pink-600 px-8 py-4 rounded-lg hover:bg-pink-50 transition-colors font-medium text-lg shadow-lg"
                        >
                            {t.hero.cta}
                        </motion.button>
                    </div>
                </section>
            </FadeIn>
        </div>
    )
} 