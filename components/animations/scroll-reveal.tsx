"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  duration?: number
  delay?: number
  mask?: boolean
  maskColor?: string
  maskDirection?: "left" | "right" | "top" | "bottom"
  once?: boolean
}

export function ScrollReveal({
  children,
  className = "",
  threshold = 0.2,
  duration = 800,
  delay = 0,
  mask = true,
  maskColor = "#5C162E",
  maskDirection = "left",
  once = true,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Set initial styles
    container.style.position = "relative"
    container.style.overflow = "hidden"

    // Create mask element if needed
    let maskElement: HTMLElement | null = null

    if (mask) {
      maskElement = document.createElement("div")
      maskElement.style.position = "absolute"
      maskElement.style.top = "0"
      maskElement.style.left = "0"
      maskElement.style.width = "100%"
      maskElement.style.height = "100%"
      maskElement.style.backgroundColor = maskColor
      maskElement.style.zIndex = "1"
      maskElement.style.transition = `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`

      // Set initial transform based on direction
      switch (maskDirection) {
        case "left":
          maskElement.style.transform = "translateX(-101%)"
          break
        case "right":
          maskElement.style.transform = "translateX(101%)"
          break
        case "top":
          maskElement.style.transform = "translateY(-101%)"
          break
        case "bottom":
          maskElement.style.transform = "translateY(101%)"
          break
      }

      container.appendChild(maskElement)
    }

    // Set content styles
    const content = container.children[0] as HTMLElement
    if (content) {
      content.style.opacity = "0"
      content.style.transition = `opacity ${duration * 0.5}ms ease ${duration * 0.5 + delay}ms`
      content.style.position = "relative"
      content.style.zIndex = "2"
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in
            if (maskElement) {
              switch (maskDirection) {
                case "left":
                  maskElement.style.transform = "translateX(101%)"
                  break
                case "right":
                  maskElement.style.transform = "translateX(-101%)"
                  break
                case "top":
                  maskElement.style.transform = "translateY(101%)"
                  break
                case "bottom":
                  maskElement.style.transform = "translateY(-101%)"
                  break
              }
            }

            if (content) {
              content.style.opacity = "1"
            }

            hasAnimated.current = true

            if (once) {
              observer.unobserve(container)

              // Remove mask after animation
              setTimeout(() => {
                if (maskElement) {
                  maskElement.remove()
                }
              }, duration + delay)
            }
          } else if (!once && hasAnimated.current) {
            // Animate out
            if (maskElement) {
              switch (maskDirection) {
                case "left":
                  maskElement.style.transform = "translateX(-101%)"
                  break
                case "right":
                  maskElement.style.transform = "translateX(101%)"
                  break
                case "top":
                  maskElement.style.transform = "translateY(-101%)"
                  break
                case "bottom":
                  maskElement.style.transform = "translateY(101%)"
                  break
              }
            }

            if (content) {
              content.style.opacity = "0"
            }

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
  }, [threshold, duration, delay, mask, maskColor, maskDirection, once])

  return (
    <div ref={containerRef} className={className}>
      <div>{children}</div>
    </div>
  )
}
