"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  id: string
  transitionType?: "slide" | "fade" | "zoom" | "flip" | "rotate" | "wave" | "stagger"
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  easing?: string
  threshold?: number
}

export function SectionTransition({
  children,
  className = "",
  id,
  transitionType = "slide",
  direction = "up",
  duration = 1,
  easing = "cubic-bezier(0.16, 1, 0.3, 1)",
  threshold = 0.1,
}: SectionTransitionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Add data attributes for styling
    section.setAttribute("data-transition-type", transitionType)
    section.setAttribute("data-direction", direction)
    section.setAttribute("data-section-id", id)

    // Set initial styles
    section.style.opacity = "0"
    section.style.transition = `transform ${duration}s ${easing}, opacity ${duration}s ${easing}`

    // Set initial transform based on transition type and direction
    setInitialTransform(section, transitionType, direction)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            // Animate in
            section.style.opacity = "1"
            section.style.transform = "none"
            setIsVisible(true)

            // Add class for additional effects
            section.classList.add("section-visible")

            // Apply staggered animation to children if needed
            if (transitionType === "stagger") {
              applyStaggeredAnimation(section)
            }

            // Apply wave animation if needed
            if (transitionType === "wave") {
              applyWaveAnimation(section)
            }
          }
        })
      },
      { threshold },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [id, transitionType, direction, duration, easing, threshold, isVisible])

  return (
    <div ref={sectionRef} className={`section-transition ${className}`} id={id}>
      {children}
    </div>
  )
}

function setInitialTransform(element: HTMLElement, type: string, direction: string) {
  switch (type) {
    case "slide":
      if (direction === "up") element.style.transform = "translateY(100px)"
      if (direction === "down") element.style.transform = "translateY(-100px)"
      if (direction === "left") element.style.transform = "translateX(100px)"
      if (direction === "right") element.style.transform = "translateX(-100px)"
      break
    case "fade":
      element.style.transform = "none"
      break
    case "zoom":
      element.style.transform = direction === "up" ? "scale(0.8)" : "scale(1.2)"
      break
    case "flip":
      if (direction === "up" || direction === "down") {
        element.style.transform = `perspective(1000px) rotateX(${direction === "up" ? "-" : ""}90deg)`
      } else {
        element.style.transform = `perspective(1000px) rotateY(${direction === "left" ? "" : "-"}90deg)`
      }
      break
    case "rotate":
      element.style.transform = `rotate(${direction === "left" ? "-" : ""}15deg)`
      break
    case "wave":
    case "stagger":
      if (direction === "up") element.style.transform = "translateY(50px)"
      if (direction === "down") element.style.transform = "translateY(-50px)"
      if (direction === "left") element.style.transform = "translateX(50px)"
      if (direction === "right") element.style.transform = "translateX(-50px)"
      break
  }
}

function applyStaggeredAnimation(section: HTMLElement) {
  const children = Array.from(section.children) as HTMLElement[]

  children.forEach((child, index) => {
    child.style.opacity = "0"
    child.style.transform = "translateY(20px)"
    child.style.transition = `opacity 0.5s ease, transform 0.5s ease`
    child.style.transitionDelay = `${index * 0.1}s`

    setTimeout(() => {
      child.style.opacity = "1"
      child.style.transform = "none"
    }, 100)
  })
}

function applyWaveAnimation(section: HTMLElement) {
  const children = Array.from(section.children) as HTMLElement[]

  children.forEach((child, index) => {
    child.style.opacity = "0"
    child.style.transform = "translateY(20px)"
    child.style.transition = `opacity 0.5s ease, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`
    child.style.transitionDelay = `${index * 0.08}s`

    setTimeout(() => {
      child.style.opacity = "1"
      child.style.transform = "none"
    }, 100)
  })
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / windowHeight) * 100
      setProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return <div className="fixed top-0 left-0 z-50 h-1 bg-burgundy-900" style={{ width: `${progress}%` }}></div>
}

export function ScrollSpy({
  sectionIds,
  onChange,
  threshold = 0.3,
}: {
  sectionIds: string[]
  onChange: (id: string) => void
  threshold?: number
}) {
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              onChange(id)
            }
          })
        },
        { threshold },
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [sectionIds, onChange, threshold])

  return null
}

export function SmoothScroll({
  children,
  enabled = true,
  damping = 0.1,
}: {
  children: ReactNode
  enabled?: boolean
  damping?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollableRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const requestRef = useRef<number>()

  useEffect(() => {
    if (!enabled) return

    const scrollable = scrollableRef.current
    if (!scrollable) return

    // Set initial height
    setHeight(scrollable.scrollHeight)

    // Update height on resize
    const resizeObserver = new ResizeObserver(() => {
      setHeight(scrollable.scrollHeight)
    })

    resizeObserver.observe(scrollable)

    // Smooth scroll animation
    let currentY = window.scrollY
    let targetY = window.scrollY

    const handleScroll = () => {
      targetY = window.scrollY
    }

    const animate = () => {
      const diff = targetY - currentY
      currentY += diff * damping

      setScrollY(currentY)
      requestRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("scroll", handleScroll)
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
      resizeObserver.disconnect()
    }
  }, [enabled, damping])

  if (!enabled) {
    return <>{children}</>
  }

  return (
    <>
      <div ref={containerRef} style={{ height: `${height}px` }}>
        <div
          ref={scrollableRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            transform: `translateY(${-scrollY}px)`,
            willChange: "transform",
          }}
        >
          {children}
        </div>
      </div>
    </>
  )
}
