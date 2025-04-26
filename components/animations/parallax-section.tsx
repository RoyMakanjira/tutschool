"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { useAnimation } from "./animation-provider"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  overflow?: "visible" | "hidden"
  zIndex?: number
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.2,
  direction = "up",
  overflow = "hidden",
  zIndex = 0,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useAnimation()

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Calculate parallax effect
    const calculateParallax = () => {
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight

      // Check if section is in viewport
      if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
        const relativeScroll = scrollY - sectionTop + windowHeight
        const percentage = relativeScroll / (sectionHeight + windowHeight)

        let translateX = 0
        let translateY = 0

        switch (direction) {
          case "up":
            translateY = -percentage * speed * 100
            break
          case "down":
            translateY = percentage * speed * 100
            break
          case "left":
            translateX = -percentage * speed * 100
            break
          case "right":
            translateX = percentage * speed * 100
            break
        }

        section.style.transform = `translate(${translateX}px, ${translateY}px)`
      }
    }

    calculateParallax()
  }, [scrollY, speed, direction])

  return (
    <div
      ref={sectionRef}
      className={`${className}`}
      style={{
        position: "relative",
        overflow,
        zIndex,
        willChange: "transform",
        transition: "transform 0.1s linear",
      }}
    >
      {children}
    </div>
  )
}
