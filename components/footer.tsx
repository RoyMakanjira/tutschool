"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const [language, setLanguage] = useState<"ru" | "en">("ru")

  const translations = {
    ru: {
      schoolName: "Tut School",
      schoolSubtitle: "Курсы иностранных языков",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Московская область, Химки, микрорайон Новогорск, Заречная улица, 5, корп. 2",
      rating: "4.8 на Яндексе",
      search: "Поиск",
      footer: {
        quickLinks: "Быстрые ссылки",
        links: ["О школе", "Наши курсы", "Расписание", "Преподаватели", "Блог", "Контакты"],
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
      schoolSubtitle: "Foreign Language Courses",
      phone: "+7 (983) 662-97-30",
      email: "info@tutschool.ru",
      address: "Moscow region, Khimki, Novogorsk district, Zarechnaya street, 5, building 2",
      rating: "4.8 on Yandex",
      search: "Search",
      footer: {
        quickLinks: "Quick Links",
        links: ["About the school", "Our courses", "Schedule", "Teachers", "Blog", "Contacts"],
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

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en" : "ru")
  }

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Language toggle */}
        <div className="mb-8 flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-gray-300 hover:text-white"
            onClick={toggleLanguage}
          >
            <Globe className="h-4 w-4" />
            {t.languageToggle}
          </Button>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* School info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt={language === "ru" ? "Логотип Tut School" : "Tut School logo"}
                  width={120}
                  height={120}
                  className="object-contain "
                />
              </Link>
            </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">{t.schoolName}</h3>
                <p className="text-sm text-gray-400">{t.schoolSubtitle}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {language === "ru"
                ? "Школа иностранных языков и искусств для детей и взрослых. Мы помогаем нашим студентам достигать своих целей в изучении языков и творческом развитии."
                : "School of foreign languages and arts for children and adults. We help our students achieve their goals in language learning and creative development."}
            </p>
            <div className="flex items-center gap-2 text-sm text-amber-400">
              <a
               href="https://tut-school.clients.site/?#rating" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block rounded-md bg-primary px-6 py-2 text-white transition hover:bg-primary-dark"
              >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span> {t.rating}</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-tight">{t.footer.quickLinks}</h3>
            <ul className="grid grid-cols-1 gap-3">
              {t.footer.links.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-300 transition-colors hover:text-white hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-tight">{t.footer.contacts}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                  <Phone className="h-4 w-4 text-gray-300" />
                </div>
                <span className="text-gray-300">{t.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800">
                  <Mail className="h-4 w-4 text-gray-300" />
                </div>
                <span className="text-gray-300">{t.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-800">
                  <MapPin className="h-4 w-4 text-gray-300" />
                </div>
                <span className="text-sm text-gray-300">{t.address}</span>
              </div>
            </div>
          </div>

          {/* Working hours and social */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-tight">{t.footer.workingHours.title}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                {t.footer.workingHours.weekdays}
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                {t.footer.workingHours.saturday}
              </p>
              <p className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-gray-500"></span>
                {t.footer.workingHours.sunday}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold tracking-tight">{t.footer.socialMedia}</h3>
              <div className="flex gap-3">
                <Link
                  href="https://t.me/TUTschoolNovogorsk"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition-transform hover:scale-110"
                  aria-label="Telegram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="blue">
  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.51.26l.213-3.05 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
</svg>
                </Link>
                {/* Placeholder for other social media icons */}
                <Link
                  href="https://wa.me/+79167349246"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 transition-transform hover:scale-110"
                  aria-label="Whatsapp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
</svg>
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 transition-transform hover:scale-110"
                  aria-label="VK"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-gray-800" />

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-sm text-gray-400">{t.footer.copyright}</p>
          <p className="text-sm text-gray-500">
            <a href="https://noirsfera.com" className="hover:text-gray-400 transition-colors">
              Designed by Noir Sfera
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}