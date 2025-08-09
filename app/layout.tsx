import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/footer"
import { Toaster } from "sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://tutschool.ru"
      : "http://localhost:3000"
  ),
  title: {
    default: "Tut School - Языковая студия | Курсы английского и китайского в Новогорске",
    template: "%s | Tut School",
  },
  description:
    "Tut School - языковая студия предлагает курсы английского и китайского языков для детей и взрослых в Новогорске, Химки, Куркино. Запишитесь на бесплатный пробный урок с опытными преподавателями.",
  keywords: [
    "курсы английского Новогорск",
    "китайский язык Химки",
    "языковая школа Куркино",
    "английский для детей",
    "китайский для взрослых",
    "пробный урок английский",
    "мини-группы английский",
    "изучение языков Новогорск",
    "преподаватели английского",
    "разговорный клуб английский",
  ],
  authors: [{ name: "Tut School" }],
  creator: "Tut School",
  publisher: "Tut School",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://tutschool.ru",
    siteName: "Tut School - Языковая студия",
    title: "Tut School - Языковая студия | Курсы английского и китайского в Новогорске",
    description:
      "Профессиональные курсы английского и китайского языков для детей и взрослых в Новогорске. Запишитесь на бесплатный пробный урок!",
    images: [
      {
        url: "/logo.png", // can be relative; metadataBase will make it absolute
        width: 1200,
        height: 630,
        alt: "Tut School - Языковая студия логотип",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tut School - Языковая студия",
    description: "Профессиональные курсы английского и китайского языков в Новогорске",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://tutschool.ru",
    languages: {
      ru: "https://tutschool.ru",
      en: "https://tutschool.ru/en",
      "x-default": "https://tutschool.ru",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LanguageSchool",
              name: "Tut School - Языковая студия",
              description:
                "Курсы английского и китайского языков для детей и взрослых в Новогорске",
              image: "https://tutschool.ru/logo.png",
              url: "https://tutschool.ru",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Заречная улица, 5, корп. 2",
                addressLocality: "Химки, микрорайон Новогорск",
                addressRegion: "Московская область",
                postalCode: "141435",
                addressCountry: "RU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "55.894611",
                longitude: "37.374147",
              },
              telephone: "+7 (983) 662-97-30",
              email: "info@tutschool.ru",
              openingHours: ["Mo-Fr 09:00-21:00", "Sa 10:00-18:00"],
              priceRange: "₽₽",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "27",
                bestRating: "5",
                worstRating: "1",
              },
              sameAs: [
                "https://t.me/TUTschoolNovogorsk",
                "https://wa.me/+79167349246",
              ],
              offers: {
                "@type": "Offer",
                name: "Пробный урок",
                description: "Бесплатный пробный урок-диагностика",
                price: "0",
                priceCurrency: "RUB",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
