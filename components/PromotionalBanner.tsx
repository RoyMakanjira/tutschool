"use client"

import { useState, useEffect } from "react"
import { X, ChevronRight, Sun, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const PromotionalBanner = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

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

  if (!isVisible) return null

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
            SPRING SPECIAL
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center sm:justify-start sm:pl-8">
          <p className="text-center font-medium text-burgundy-900 sm:text-left">
            <span className="md:hidden">40% OFF all language courses!</span>
            <span className="hidden md:inline">
              Save up to <span className="font-bold">40% OFF</span> on English, Chinese, Spanish & more courses
            </span>
          </p>
          <div className="ml-3 hidden items-center md:flex">
            <span className="mx-2 text-sm text-burgundy-800">Until May 31</span>
            <div className="h-4 w-px bg-burgundy-700/30"></div>
            <span className="mx-2 text-sm text-burgundy-800">Online or In-person</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-burgundy-800 bg-white text-burgundy-900 hover:bg-burgundy-50"
              size="sm"
            >
              Details
              <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
          </Link>
          <button
            type="button"
            className="-mr-1 flex h-6 w-6 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-burgundy-500"
            onClick={handleClose}
          >
            <span className="sr-only">Dismiss</span>
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
