"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface RevealTextProps {
  children: ReactNode
  className?: string
  threshold?: number
  duration?: number
  delay?: number
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right"
  once?: boolean
}

export function RevealText({
  children,
  className = "",
  threshold = 0.2,
  duration = 800,
  delay = 0,
  staggerDelay = 50,
  direction = "up",
  once = true,
}: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Split text into words
    const text = container.textContent || ""
    const words = text.split(" ")

    // Clear container
    container.textContent = ""

    // Create spans for each word
    words.forEach((word, index) => {
      const wordSpan = document.createElement("span")
      wordSpan.className = "inline-block overflow-hidden mx-[0.15em] my-[0.15em] relative"

      const innerSpan = document.createElement("span")
      innerSpan.className = "inline-block"
      innerSpan.textContent = word

      // Set initial styles
      innerSpan.style.opacity = "0"
      innerSpan.style.transform = getInitialTransform(direction)
      innerSpan.style.transition = `opacity ${duration}ms ease, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`
      innerSpan.style.transitionDelay = `${delay + index * staggerDelay}ms`

      wordSpan.appendChild(innerSpan)
      container.appendChild(wordSpan)

      // Add space after word (except last word)
      if (index < words.length - 1) {
        container.appendChild(document.createTextNode(" "))
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in
            const wordSpans = container.querySelectorAll("span > span")
            wordSpans.forEach((span) => {
              const element = span as HTMLElement
              element.style.opacity = "1"
              element.style.transform = "none"
            })

            hasAnimated.current = true

            if (once) {
              observer.unobserve(container)
            }
          } else if (!once && hasAnimated.current) {
            // Animate out
            const wordSpans = container.querySelectorAll("span > span")
            wordSpans.forEach((span, index) => {
              const element = span as HTMLElement
              element.style.opacity = "0"
              element.style.transform = getInitialTransform(direction)
            })

            hasAnimated.current = false
          }
        })
      },
      { threshold },
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [children, threshold, duration, delay, staggerDelay, direction, once])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

function getInitialTransform(direction: string): string {
  switch (direction) {
    case "up":
      return "translateY(2em)"
    case "down":
      return "translateY(-2em)"
    case "left":
      return "translateX(-2em)"
    case "right":
      return "translateX(2em)"
    default:
      return "translateY(2em)"
  }
}
