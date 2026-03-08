"use client"

import { Heart, Instagram, Mail } from "lucide-react"

const currentYear = new Date().getFullYear()

const footerLinks = [
  {
    title: "Producto",
    links: [
      { name: "Características", href: "#features" },
      { name: "Demo", href: "#demo" },
      { name: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Nosotras",
    links: [
      { name: "El Problema", href: "#problema" },
      { name: "Solución", href: "#solucion" },
      { name: "Equipo", href: "#team" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacidad", href: "#" },
      { name: "Términos", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer style={{ background: "#1a1025" }} className="pt-20 pb-10 px-4">
      <div className="container mx-auto">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="font-black text-2xl text-white tracking-tight block mb-4">
              Entre<span style={{ color: "#a78bfa" }}>Nosotras</span>
            </a>
            <p className="text-white/35 text-sm max-w-xs leading-relaxed mb-6">
              Un espacio seguro para aprender sobre salud menstrual y reproductiva. Sin tabúes.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:border-white/30 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50 mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/30 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.06] mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-white/20 text-xs">
          <span>© {currentYear} EntreNosotras. Todos los derechos reservados.</span>
          <span className="flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 fill-current text-pink-400/60" /> para mujeres.
          </span>
        </div>

      </div>
    </footer>
  )
}
