"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type AnimationContextType = {
  isLoaded: boolean
  scrollY: number
  viewportWidth: number
  viewportHeight: number
  activeSection: string
  setActiveSection: (section: string) => void
}

const AnimationContext = createContext<AnimationContextType>({
  isLoaded: false,
  scrollY: 0,
  viewportWidth: 0,
  viewportHeight: 0,
  activeSection: "",
  setActiveSection: () => {},
})

export function useAnimation() {
  return useContext(AnimationContext)
}

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    // Set initial viewport dimensions
    setViewportWidth(window.innerWidth)
    setViewportHeight(window.innerHeight)

    // Set loaded state after a small delay to trigger initial animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    // Handle scroll events for scroll-triggered animations
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Handle resize events
    const handleResize = () => {
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <AnimationContext.Provider
      value={{
        isLoaded,
        scrollY,
        viewportWidth,
        viewportHeight,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}
