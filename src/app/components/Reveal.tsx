"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  className?: string
}

export default function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-20", "scale-95", "blur-sm")
          el.classList.add("opacity-100", "translate-y-0", "scale-100", "blur-none")
        } else {
          el.classList.remove("opacity-100", "translate-y-0", "scale-100", "blur-none")
          el.classList.add("opacity-0", "translate-y-20", "scale-95", "blur-sm")
        }
      },
      {
        rootMargin: "-10% 0px -15% 0px",
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out opacity-0 translate-y-20 scale-95 blur-sm ${className}`}
    >
      {children}
    </div>
  )
}
