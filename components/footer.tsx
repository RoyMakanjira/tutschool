"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

export default function TestimonialsSimple() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<"all" | "children" | "adults" | "companies">("all")

  const translations = {
    ru: {
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков, Школа искусств",
      phone: "+7 (983) 600-00-00",
      email: "info@tut-school.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      rating: "4.8 на Яндексе",
      search: "Поиск",
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
        copyright: "© 2025 Tut School. Все права защищены.",
      },
      languageToggle: "English",
    },
    en: {
      schoolName: "Tut School",
      schoolSubtitle: "Foreign Language Courses, School of Arts",
      phone: " tel: +7 (983) 662 97 30",
      email: "info@tut-school.ru",
      address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
      rating: "4.8 on Yandex",
      search: "Search",
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
        copyright: "© 2025 Tut School. All rights reserved.",
      },
      languageToggle: "Русский",
    },
  }

  const t = translations[language]
  return (
         <footer className="bg-gray-900 py-12 text-white">
         <div className="container mx-auto px-4">
           <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
             <div>
               <div className="flex items-center gap-3">
                 <div className="relative h-18 w-18 rounded-full bg-white p-4">
                   <Image
                     src="/logo.png?height=48&width=48"
                     alt={language === "ru" ? "Логотип Tut School" : "Tut School logo"}
                     fill
                     className="object-contain"
                   />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold">{t.schoolName}</h3>
                   <p className="text-sm text-gray-400">{t.schoolSubtitle}</p>
                 </div>
               </div>
               <p className="mt-4 text-gray-400">
                 {language === "ru"
                   ? "Школа иностранных языков и искусств для детей и взрослых. Мы помогаем нашим студентам достигать своих целей в изучении языков и творческом развитии."
                   : "School of foreign languages and arts for children and adults. We help our students achieve their goals in language learning and creative development."}
               </p>
             </div>
             <div>
               <h3 className="mb-4 text-lg font-bold">{t.footer.quickLinks}</h3>
               <ul className="space-y-2">
                 {t.footer.links.map((link, index) => (
                   <li key={index}>
                     <Link href="#" className="text-gray-400 hover:text-white">
                       {link}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>
             <div>
               <h3 className="mb-4 text-lg font-bold">{t.footer.contacts}</h3>
               <div className="space-y-3">
                 <div className="flex items-center gap-2">
                   <Phone className="h-4 w-4 text-gray-400" />
                   <span>{t.phone}</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <Mail className="h-4 w-4 text-gray-400" />
                   <span>{t.email}</span>
                 </div>
                 <div className="flex items-start gap-2">
                   <MapPin className="h-4 w-4 flex-shrink-0 text-gray-400" />
                   <span className="text-sm">{t.address}</span>
                 </div>
               </div>
               <h3 className="mb-2 mt-6 text-lg font-bold">{t.footer.workingHours.title}</h3>
               <div className="space-y-1 text-sm text-gray-400">
                 <p>{t.footer.workingHours.weekdays}</p>
                 <p>{t.footer.workingHours.saturday}</p>
                 <p>{t.footer.workingHours.sunday}</p>
               </div>
             </div>
             <div>
               <h3 className="mb-4 text-lg font-bold">{t.footer.socialMedia}</h3>
               <div className="flex gap-3">
                 <Link href="https://t.me/TUTschoolNovogorsk" className="rounded-full bg-white p-2 hover:bg-white">
                   <Image src="/assets/icons/telegram-plane.svg" alt="logo" height={25} width={25} />
                 </Link>
               </div>
             </div>
           </div>
           <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
             <p>{t.footer.copyright}</p>
           </div>
           <div className="mt-4 pt-4 text-center text-sm text-gray-400">
             <a href="https://floatycodepins.com">Designed by Noir Sfera</a>
           </div>
         </div>
       </footer>
      
  )
}

