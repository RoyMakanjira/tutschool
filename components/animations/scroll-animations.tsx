"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "flip-up" | "flip-down"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.2,
  once = true,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    // Set initial state
    const initialClasses = getAnimationClasses(animation, true)
    section.classList.add(...initialClasses)

    // Apply transition duration
    section.style.transitionDuration = `${duration}ms`
    section.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when element is in view
            const animateClasses = getAnimationClasses(animation, false)
            setTimeout(() => {
              section.classList.remove(...initialClasses)
              section.classList.add(...animateClasses)
            }, 100)

            if (once) {
              observer.unobserve(section)
            }
          } else if (!once) {
            // Reset animation when element is out of view
            section.classList.remove(...getAnimationClasses(animation, false))
            section.classList.add(...initialClasses)
          }
        })
      },
      { threshold },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [animation, delay, duration, threshold, once])

  return (
    <div ref={sectionRef} className={`transition-all ${className}`}>
      {children}
    </div>
  )
}

function getAnimationClasses(animation: string, isInitial: boolean): string[] {
  const animations: Record<string, { initial: string[]; animate: string[] }> = {
    "fade-up": {
      initial: ["opacity-0", "translate-y-16"],
      animate: ["opacity-100", "translate-y-0"],
    },
    "fade-down": {
      initial: ["opacity-0", "-translate-y-16"],
      animate: ["opacity-100", "translate-y-0"],
    },
    "fade-left": {
      initial: ["opacity-0", "-translate-x-16"],
      animate: ["opacity-100", "translate-x-0"],
    },
    "fade-right": {
      initial: ["opacity-0", "translate-x-16"],
      animate: ["opacity-100", "translate-x-0"],
    },
    "zoom-in": {
      initial: ["opacity-0", "scale-95"],
      animate: ["opacity-100", "scale-100"],
    },
    "zoom-out": {
      initial: ["opacity-0", "scale-105"],
      animate: ["opacity-100", "scale-100"],
    },
    "flip-up": {
      initial: ["opacity-0", "rotateX-30", "perspective-1000"],
      animate: ["opacity-100", "rotateX-0"],
    },
    "flip-down": {
      initial: ["opacity-0", "-rotateX-30", "perspective-1000"],
      animate: ["opacity-100", "rotateX-0"],
    },
  }

  return isInitial ? animations[animation].initial : animations[animation].animate
}

export function FloatingElements({
  children,
  className = "",
  amplitude = 20,
  period = 5,
  randomize = true,
}: {
  children: ReactNode
  className?: string
  amplitude?: number
  period?: number
  randomize?: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = Array.from(container.children) as HTMLElement[]

    elements.forEach((element, index) => {
      // Set initial styles
      element.style.position = "relative"
      element.style.transition = "transform 0.1s ease"

      // Randomize animation parameters if needed
      const elementAmplitude = randomize ? amplitude * (0.5 + Math.random() * 0.5) : amplitude
      const elementPeriod = randomize ? period * (0.8 + Math.random() * 0.4) : period
      const startOffset = randomize ? Math.random() * Math.PI * 2 : index * (Math.PI / 4)

      // Animation function
      const animate = () => {
        const time = Date.now() / 1000
        const yPos = Math.sin(time * ((Math.PI * 2) / elementPeriod) + startOffset) * elementAmplitude
        const xPos = Math.cos(time * ((Math.PI * 2) / elementPeriod) + startOffset) * (elementAmplitude * 0.5)

        element.style.transform = `translate(${xPos}px, ${yPos}px)`
        requestAnimationFrame(animate)
      }

      // Start animation
      requestAnimationFrame(animate)
    })
  }, [amplitude, period, randomize])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

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

interface AnimatedTextProps {
  text: string
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right"
  staggerDelay?: number
}

export function AnimatedText({ text, className = "", animation = "fade-up", staggerDelay = 0.1 }: AnimatedTextProps) {
  const letters = text.split("")

  return (
    <span className={className}>
      {letters.map((letter, index) => (
        <AnimatedSection key={index} animation={animation} delay={index * staggerDelay * 100} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </AnimatedSection>
      ))}
    </span>
  )
}

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
}

export function ParallaxSection({ children, speed = 0.2, className = "" }: ParallaxSectionProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`parallax-section ${className}`}
      style={{
        transform: `translateY(${offset * speed}px)`,
      }}
    >
      {children}
    </div>
  )
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  threshold?: number;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  direction = "up",
  duration = 600,
  threshold = 0.1,
  className,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = elementRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(current);
          }
        });
      },
      { threshold }
    );

    observer.observe(current);

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold]);

  const directionStyles = {
    up: "translate-y-10",
    down: "translate-y-[-10px]",
    left: "translate-x-10",
    right: "translate-x-[-10px]",
  };

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-all",
        directionStyles[direction],
        isVisible ? "opacity-100 transform-none" : "opacity-0",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

interface RevealMaskProps {
  children: ReactNode
  direction: "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top"
  duration?: number
  delay?: number
  color?: string
}

export function RevealMask({ children, direction, duration = 0.8, delay = 0, color = "white" }: RevealMaskProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  let maskStyle = {}

  switch (direction) {
    case "left-to-right":
      maskStyle = {
        clipPath: isVisible ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
      }
      break
    case "right-to-left":
      maskStyle = {
        clipPath: isVisible ? "inset(0 0 0 0)" : "inset(0 0 0 100%)",
      }
      break
    case "top-to-bottom":
      maskStyle = {
        clipPath: isVisible ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
      }
      break
    case "bottom-to-top":
      maskStyle = {
        clipPath: isVisible ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
      }
      break
  }

  return (
    <div
      ref={containerRef}
      className="reveal-mask relative overflow-hidden"
      style={{
        transition: `clip-path ${duration}s ease-out ${delay}s`,
        ...maskStyle,
      }}
    >
      {children}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: color,
          mixBlendMode: "multiply",
        }}
      ></div>
    </div>
  )
}
