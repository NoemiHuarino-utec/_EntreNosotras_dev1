"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Solución", href: "#solucion" },
  { name: "Características", href: "#features" },
  { name: "Demo", href: "#demo" },
  { name: "Equipo", href: "#team" }
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace("#", ""))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm shadow-foreground/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-black text-xl text-foreground tracking-tight">Entre<span className="text-primary">Nosotras</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "")
              const isActive = activeSection === id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm uppercase tracking-[0.12em] font-medium transition-colors duration-200 pb-1 group"
                  style={{ color: isActive ? "var(--primary)" : "var(--muted-foreground)" }}
                >
                  {link.name}
                  <span
                    className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 rounded-full"
                    style={{ width: isActive ? "100%" : "0%" }}
                  />
                </a>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#demo"
              className="text-sm uppercase tracking-[0.12em] font-semibold text-primary border border-primary/40 hover:border-primary hover:bg-primary/5 transition-all duration-200 px-5 py-2.5 rounded-full"
            >
              Comenzar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/30 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "")
                const isActive = activeSection === id
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm uppercase tracking-[0.12em] font-medium py-3 px-2 border-l-2 transition-all duration-200"
                    style={{
                      color: isActive ? "var(--primary)" : "var(--muted-foreground)",
                      borderColor: isActive ? "var(--primary)" : "transparent"
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              })}
              <a
                href="#demo"
                className="mt-3 text-sm uppercase tracking-[0.12em] font-semibold text-primary border border-primary/40 text-center py-3 rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Comenzar
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
