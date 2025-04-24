"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { useAnimation } from "./animation-provider"

type AnimationType =
  | "fade-in"
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "flip-down"
  | "rotate-in"
  | "blur-in"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "bounce"
  | "pulse"
  | "shake"
  | "swing"
  | "tada"
  | "wobble"
  | "jello"
  | "heartbeat"

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  cascade?: boolean
  cascadeDelay?: number
  staggerChildren?: boolean
  staggerDelay?: number
  intersectionRoot?: Element | null
  rootMargin?: string
  onInView?: () => void
  onOutOfView?: () => void
}

export function AnimatedSection({
  children,
  id,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.2,
  once = true,
  cascade = false,
  cascadeDelay = 100,
  staggerChildren = false,
  staggerDelay = 100,
  intersectionRoot = null,
  rootMargin = "0px",
  onInView,
  onOutOfView,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { setActiveSection } = useAnimation()
  const hasAnimated = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Set initial state
    const initialStyles = getInitialStyles(animation)
    Object.entries(initialStyles).forEach(([key, value]) => {
      section.style[key as any] = value
    })

    // Apply transition duration and delay
    section.style.transition = `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in
            const animateStyles = getFinalStyles()
            Object.entries(animateStyles).forEach(([key, value]) => {
              section.style[key as any] = value
            })

            // Apply staggered animation to children if needed
            if (staggerChildren) {
              applyStaggeredAnimation(section, staggerDelay)
            }

            // Apply cascade animation if needed
            if (cascade) {
              applyCascadeAnimation(section, cascadeDelay)
            }

            // Set active section if id is provided
            if (id) {
              setActiveSection(id)
            }

            // Call onInView callback
            if (onInView) {
              onInView()
            }

            hasAnimated.current = true

            if (once) {
              observer.unobserve(section)
            }
          } else if (!once && hasAnimated.current) {
            // Animate out if not once and has already animated in
            const initialStyles = getInitialStyles(animation)
            Object.entries(initialStyles).forEach(([key, value]) => {
              section.style[key as any] = value
            })

            // Call onOutOfView callback
            if (onOutOfView) {
              onOutOfView()
            }
          }
        })
      },
      { threshold, root: intersectionRoot, rootMargin },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [
    animation,
    delay,
    duration,
    threshold,
    once,
    cascade,
    cascadeDelay,
    staggerChildren,
    staggerDelay,
    intersectionRoot,
    rootMargin,
    onInView,
    onOutOfView,
    id,
    setActiveSection,
  ])

  return (
    <div ref={sectionRef} className={className} id={id}>
      {children}
    </div>
  )
}

function getInitialStyles(animation: AnimationType): Record<string, string> {
  const baseStyles: Record<string, string> = {
    opacity: "0",
    willChange: "transform, opacity",
  }

  switch (animation) {
    case "fade-in":
      return { ...baseStyles }
    case "fade-up":
      return { ...baseStyles, transform: "translateY(40px)" }
    case "fade-down":
      return { ...baseStyles, transform: "translateY(-40px)" }
    case "fade-left":
      return { ...baseStyles, transform: "translateX(-40px)" }
    case "fade-right":
      return { ...baseStyles, transform: "translateX(40px)" }
    case "zoom-in":
      return { ...baseStyles, transform: "scale(0.9)" }
    case "zoom-out":
      return { ...baseStyles, transform: "scale(1.1)" }
    case "flip-up":
      return { ...baseStyles, transform: "perspective(1000px) rotateX(10deg)" }
    case "flip-down":
      return { ...baseStyles, transform: "perspective(1000px) rotateX(-10deg)" }
    case "rotate-in":
      return { ...baseStyles, transform: "rotate(-5deg)" }
    case "blur-in":
      return { ...baseStyles, filter: "blur(8px)" }
    case "slide-up":
      return { ...baseStyles, transform: "translateY(100%)" }
    case "slide-down":
      return { ...baseStyles, transform: "translateY(-100%)" }
    case "slide-left":
      return { ...baseStyles, transform: "translateX(-100%)" }
    case "slide-right":
      return { ...baseStyles, transform: "translateX(100%)" }
    case "bounce":
      return { ...baseStyles, transform: "translateY(40px)" }
    case "pulse":
      return { ...baseStyles, transform: "scale(0.95)" }
    case "shake":
      return { ...baseStyles, transform: "translateX(-10px)" }
    case "swing":
      return { ...baseStyles, transform: "rotate(-5deg)" }
    case "tada":
      return { ...baseStyles, transform: "scale(0.95) rotate(-5deg)" }
    case "wobble":
      return { ...baseStyles, transform: "translateX(-10px) rotate(-5deg)" }
    case "jello":
      return { ...baseStyles, transform: "skewX(-5deg) skewY(-5deg)" }
    case "heartbeat":
      return { ...baseStyles, transform: "scale(0.95)" }
    default:
      return baseStyles
  }
}

function getFinalStyles(): Record<string, string> {
  return {
    opacity: "1",
    transform: "none",
    filter: "none",
  }
}

function applyStaggeredAnimation(section: HTMLElement, delay: number) {
  const children = Array.from(section.children) as HTMLElement[]

  children.forEach((child, index) => {
    child.style.opacity = "0"
    child.style.transform = "translateY(20px)"
    child.style.transition = `opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)`
    child.style.transitionDelay = `${index * delay}ms`

    setTimeout(() => {
      child.style.opacity = "1"
      child.style.transform = "none"
    }, 100)
  })
}

function applyCascadeAnimation(section: HTMLElement, delay: number) {
  const children = Array.from(section.children) as HTMLElement[]

  children.forEach((child, index) => {
    child.style.opacity = "0"
    child.style.transform = "translateY(20px)"
    child.style.transition = `opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)`
    child.style.transitionDelay = `${index * delay}ms`

    setTimeout(() => {
      child.style.opacity = "1"
      child.style.transform = "none"
    }, 100)
  })
}
