"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"

const insights = [
  {
    stat: "85%",
    title: "Prefieren app + web",
    description: "La mayoría prefiere una solución disponible tanto como aplicación móvil como sitio web.",
    accent: "bg-primary",
  },
  {
    stat: "#1",
    title: "Temas más solicitados",
    description: "Higiene menstrual, flujo vaginal y cómo funciona el ciclo menstrual.",
    accent: "bg-pink-400",
  },
  {
    stat: "72%",
    title: "Barrera principal",
    description: "La falta de espacios seguros para hacer preguntas es el mayor obstáculo para informarse.",
    accent: "bg-rose-400",
  },
  {
    stat: "90%",
    title: "Formato preferido",
    description: "Prefieren consejos claros y breves en lugar de lenguaje médico complejo.",
    accent: "bg-violet-400",
  },
]

export function Insights() {
  return (
    <section id="insights" className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/50 relative overflow-hidden">

      {/* Content — centrado verticalmente */}
      <div className="flex-1 flex flex-col justify-center py-16">
        <div className="container mx-auto px-4">

          {/* Section title */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-3xl md:text-4xl font-black uppercase text-primary leading-none tracking-tight whitespace-nowrap">Lo Que Aprendimos</span>
            <div className="flex-1 h-px bg-foreground/15" />
            <span className="text-xs font-mono text-foreground/35 tracking-[0.2em] flex-shrink-0">06</span>
          </div>

        {/* Top rule */}
        <div className="w-full h-px bg-foreground/10" />

        {/* Stat grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {insights.map((insight, index) => (
            <ScrollReveal
              key={index}
              className={index < insights.length - 1 ? "md:border-r border-foreground/[0.08]" : ""}
              direction="up"
              delay={index * 110}
            >
              <div className="py-10 md:py-14 md:pr-8 group cursor-default">
                {/* Stat number */}
                <p className="text-7xl md:text-8xl font-bold text-foreground leading-none mb-4 group-hover:text-primary transition-colors duration-300">
                  {insight.stat}
                </p>

                {/* Colored accent line */}
                <div className={`h-[3px] w-10 ${insight.accent} mb-6 group-hover:w-16 transition-all duration-400`} />

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {insight.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="w-full h-px bg-foreground/10" />

        </div>
      </div>
    </section>
  )
}
