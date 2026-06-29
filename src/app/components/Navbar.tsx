"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "../lib/utils"
import { useT, useLang } from "../context/LanguageContext"

const navItems = [
  { labelKey: "home", href: "#home" },
  { labelKey: "about", href: "#about" },
  { labelKey: "features", href: "#features" },
  { labelKey: "demo", href: "#demo" },
  { labelKey: "community", href: "#community" },
  { labelKey: "contact", href: "#contact" },
  { labelKey: "tryIt", href: "/try-it" },
]

export default function Navbar() {
  const t = useT()
  const { toggleLang, lang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <Image
              src="/images/thuki-logo.png"
              alt="Mate logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold tracking-tight">
              Mate <span className="text-mate-400">2.0</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {t.navbar[item.labelKey as keyof typeof t.navbar]}
              </a>
            ))}
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 text-xs font-medium rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all uppercase tracking-wider"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
            <a
              href="/try-it"
              className="ml-2 px-5 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-mate-500 to-purple-600 hover:from-mate-400 hover:to-purple-500 text-white transition-all shadow-lg shadow-mate-500/25"
            >
              {t.navbar.getStarted}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {t.navbar[item.labelKey as keyof typeof t.navbar]}
              </a>
            ))}
            <div className="flex items-center gap-2 px-4 pt-2">
              <button
                onClick={() => { toggleLang(); setMobileOpen(false) }}
                className="px-3 py-1.5 text-xs font-medium rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-all uppercase tracking-wider"
              >
                {lang === "en" ? "FR" : "EN"}
              </button>
              <a
                href="/try-it"
                onClick={() => setMobileOpen(false)}
                className="flex-1 block px-4 py-3 text-center text-sm font-medium rounded-xl bg-gradient-to-r from-mate-500 to-purple-600 text-white"
              >
                {t.navbar.getStarted}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
