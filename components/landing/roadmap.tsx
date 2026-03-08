"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const roadmapItems = [
  {
    number: "01",
    title: "Mapa de Recursos",
    description: "Encuentra servicios de salud femenina cercanos a ti.",
    status: "Próximamente",
    statusColor: "text-primary bg-primary/10",
    dotColor: "#a78bfa",
    indent: "ml-0",
  },
  {
    number: "02",
    title: "Acceso Sin Conexión",
    description: "Accede a contenido educativo en áreas con internet limitado.",
    status: "En desarrollo",
    statusColor: "text-fuchsia-600 bg-fuchsia-100",
    dotColor: "#e879f9",
    indent: "ml-12 md:ml-24",
  },
  {
    number: "03",
    title: "Espacios Comunitarios",
    description: "Conecta con otras mujeres en un espacio seguro de apoyo.",
    status: "Planeado",
    statusColor: "text-rose-500 bg-rose-100",
    dotColor: "#fb7185",
    indent: "ml-24 md:ml-48",
  },
]

function AnimatedTimeline() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="absolute left-[11px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-violet-300 via-fuchsia-300 to-rose-300 md:hidden origin-top transition-all duration-1500 ease-out"
      style={{ transform: isVisible ? "scaleY(1)" : "scaleY(0)" }}
    />
  )
}

export function Roadmap() {
  return (
    <section id="roadmap" className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #faf5ff 50%, #fce7f3 100%)" }}>

      {/* Blobs — now animated */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-rose-300/20 rounded-full blur-[80px] animate-pulse-soft" />
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-fuchsia-300/10 rounded-full blur-[70px] animate-float-reverse" />
        <div className="absolute bottom-10 right-1/3 w-[180px] h-[180px] bg-violet-300/10 rounded-full blur-[60px] animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-10 w-[150px] h-[150px] bg-pink-300/10 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
      </div>

      <div className="flex-1 flex flex-col justify-center py-16 relative z-10">
      <div className="container mx-auto px-4">

        {/* Section title — animated */}
        <ScrollReveal direction="none">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-3xl md:text-4xl font-black uppercase text-primary leading-none tracking-tight whitespace-nowrap">Roadmap</span>
            <div className="flex-1 h-px bg-foreground/15 origin-left" style={{ animation: "expand-width 1s ease-out 0.3s both" }} />
            <span className="text-xs font-mono text-foreground/35 tracking-[0.2em] flex-shrink-0">—</span>
          </div>
        </ScrollReveal>

        {/* Items con camino */}
        <div className="relative">

          {/* Línea del camino — animated draw */}
          <AnimatedTimeline />

          <div className="divide-y divide-foreground/[0.06]">
            {roadmapItems.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 120}>
                <div className={`group flex gap-8 py-12 md:py-16 cursor-default ${item.indent}`}>

                  {/* Dot del camino — pulsing */}
                  <div className="flex flex-col items-center flex-shrink-0 pt-1 md:pt-4">
                    <div
                      className="w-6 h-6 rounded-full border-[3px] border-white shadow-md flex-shrink-0 relative z-10 animate-dot-pulse"
                      style={{ backgroundColor: item.dotColor, color: item.dotColor, animationDelay: `${index * 0.5}s` }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <span className="text-xs font-mono text-foreground/30 block mb-4">{item.number}</span>
                      <h3 className="text-4xl md:text-6xl font-bold text-foreground leading-none mb-5 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-base text-muted-foreground max-w-md leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className={`inline-flex text-sm font-semibold uppercase tracking-[0.15em] px-6 py-3 rounded-full ${item.statusColor} group-hover:scale-105 transition-transform duration-300`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
      </div>
    </section>
  )
}
