"use client"

import { useState, useEffect } from "react"
import { X, ChevronRight, Sun, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getPromotionalBanner } from "@/sanity/lib/promo"

interface PromotionalBannerProps {
  language?: "ru" | "en"
}

interface BannerContent {
  badge: string
  shortTitle: string
  fullTitle: string
  untilDate: string
  location: string
  detailsButton: string
  dismiss: string
}

interface BannerData {
  translations: {
    ru: BannerContent
    en: BannerContent
  }
  active: boolean
  linkUrl: string
}

export const PromotionalBanner = ({ language = "ru" }: PromotionalBannerProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [bannerData, setBannerData] = useState<BannerData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBannerData = async () => {
      setIsLoading(true)
      try {
        const data = await getPromotionalBanner(language)
        setBannerData(data)
      } catch (error) {
        console.error("Error fetching banner data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBannerData()
  }, [language])

  useEffect(() => {
    // Add entrance animation when component mounts
    setIsAnimating(true)
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 300)
  }

  // Default fallback content in case Sanity data isn't available
  const fallbackContent = {
    ru: {
      badge: "ВЕСЕННЯЯ АКЦИЯ",
      shortTitle: "40% СКИДКА на все языковые курсы!",
      fullTitle: "Экономия до 40% на курсах английского и китайского языков",
      untilDate: "До 31 мая",
      location: "Онлайн или очно",
      detailsButton: "Подробнее",
      dismiss: "Закрыть",
    },
    en: {
      badge: "SPRING SPECIAL",
      shortTitle: "40% OFF all language courses!",
      fullTitle: "Save up to 40% OFF on English & Chinese courses",
      untilDate: "Until May 31",
      location: "Online or In-person",
      detailsButton: "Details",
      dismiss: "Dismiss",
    },
  }

  // If banner is not active in Sanity or not visible locally, don't render
  if ((!bannerData?.active && !isLoading) || !isVisible) return null

  // Use Sanity data if available, otherwise use fallback
  const t = bannerData?.translations?.[language] || fallbackContent[language]
  const linkUrl = bannerData?.linkUrl || "/contact"

  // Show loading state
  if (isLoading) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-r from-red-200 to-red-100 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-24 animate-pulse rounded-full bg-gray-300"></div>
          <div className="h-4 w-48 animate-pulse rounded-full bg-gray-300"></div>
          <div className="h-8 w-20 animate-pulse rounded-md bg-gray-300"></div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-r from-red-200 to-red-100 transition-all duration-300 ${
        isAnimating ? "max-h-0 opacity-0" : "max-h-24 opacity-100"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute left-10 top-2 animate-float opacity-70">
        <Cloud className="h-6 w-6 text-white" />
      </div>
      <div className="absolute right-16 top-3 animate-float opacity-80">
        <Cloud className="h-5 w-5 text-white" />
      </div>
      <div className="absolute right-5 top-2 animate-pulse-glow">
        <Sun className="h-7 w-7 text-yellow-300" />
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="hidden sm:block">
          <div className="rounded-full border border-burgundy-800 bg-white/80 px-4 py-1 text-sm font-medium text-burgundy-900 backdrop-blur-sm">
            {t.badge}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center sm:justify-start sm:pl-8">
          <p className="text-center font-medium text-burgundy-900 sm:text-left">
            <span className="md:hidden">{t.shortTitle}</span>
            <span className="hidden md:inline">
              {language === "ru" ? (
                <>
                  Экономия до <span className="font-bold">40%</span> на курсах английского и китайского языков
                </>
              ) : (
                <>
                  Save up to <span className="font-bold">40% OFF</span> on English & Chinese courses
                </>
              )}
            </span>
          </p>
          <div className="ml-3 hidden items-center md:flex">
            <span className="mx-2 text-sm text-burgundy-800">{t.untilDate}</span>
            <div className="h-4 w-px bg-burgundy-700/30"></div>
            <span className="mx-2 text-sm text-burgundy-800">{t.location}</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Link href={linkUrl}>
            <Button
              variant="outline"
              className="border-burgundy-800 bg-white text-burgundy-900 hover:bg-burgundy-50"
              size="sm"
            >
              {t.detailsButton}
              <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
          </Link>
          <button
            type="button"
            className="-mr-1 flex h-6 w-6 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-burgundy-500"
            onClick={handleClose}
          >
            <span className="sr-only">{t.dismiss}</span>
            <X className="h-4 w-4 text-burgundy-900" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Rainbow decoration */}
      <div className="absolute left-1/2 top-0 h-12 w-24 -translate-x-1/2 transform opacity-20 sm:left-auto sm:right-1/4 sm:opacity-30">
        <div className="absolute h-24 w-48 rounded-full bg-red-400 opacity-30"></div>
        <div className="absolute h-24 w-48 -translate-y-1 transform rounded-full bg-orange-400 opacity-30"></div>
        <div className="absolute h-24 w-48 -translate-y-2 transform rounded-full bg-yellow-400 opacity-30"></div>
        <div className="absolute h-24 w-48 -translate-y-3 transform rounded-full bg-green-400 opacity-30"></div>
        <div className="absolute h-24 w-48 -translate-y-4 transform rounded-full bg-blue-400 opacity-30"></div>
        <div className="absolute h-24 w-48 -translate-y-5 transform rounded-full bg-indigo-400 opacity-30"></div>
        <div className="absolute h-24 w-48 -translate-y-6 transform rounded-full bg-purple-400 opacity-30"></div>
      </div>

      {/* Flower decorations */}
      <div className="absolute bottom-0 right-1/4 hidden h-8 w-20 sm:block">
        <div className="absolute bottom-0 left-0 h-3 w-1 rounded-t-full bg-green-600"></div>
        <div className="absolute bottom-0 left-2 h-4 w-1 rounded-t-full bg-green-600"></div>
        <div className="absolute bottom-0 left-4 h-5 w-1 rounded-t-full bg-green-600"></div>
        <div className="absolute bottom-0 left-6 h-6 w-1 rounded-t-full bg-green-600"></div>
        <div className="absolute bottom-0 left-8 h-5 w-1 rounded-t-full bg-green-600"></div>
        <div className="absolute bottom-0 left-10 h-4 w-1 rounded-t-full bg-green-600"></div>
        <div className="absolute bottom-0 left-12 h-3 w-1 rounded-t-full bg-green-600"></div>
        <div className="absolute bottom-6 left-2 h-3 w-3 rounded-full bg-pink-400"></div>
        <div className="absolute bottom-7 left-6 h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="absolute bottom-6 left-10 h-3 w-3 rounded-full bg-purple-400"></div>
      </div>
    </div>
  )
}

export default PromotionalBanner
