"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useCountUp } from "@/hooks/use-count-up"

const insights = [
  {
    stat: "85%",
    numericEnd: 85,
    suffix: "%",
    prefix: "",
    title: "Prefieren app + web",
    description: "La mayoría prefiere una solución disponible tanto como aplicación móvil como sitio web.",
    accent: "bg-primary",
  },
  {
    stat: "#1",
    numericEnd: 1,
    suffix: "",
    prefix: "#",
    title: "Temas más solicitados",
    description: "Higiene menstrual, flujo vaginal y cómo funciona el ciclo menstrual.",
    accent: "bg-pink-400",
  },
  {
    stat: "72%",
    numericEnd: 72,
    suffix: "%",
    prefix: "",
    title: "Barrera principal",
    description: "La falta de espacios seguros para hacer preguntas es el mayor obstáculo para informarse.",
    accent: "bg-rose-400",
  },
  {
    stat: "90%",
    numericEnd: 90,
    suffix: "%",
    prefix: "",
    title: "Formato preferido",
    description: "Prefieren consejos claros y breves en lugar de lenguaje médico complejo.",
    accent: "bg-violet-400",
  },
]

function InsightStat({ insight, index }: { insight: typeof insights[0], index: number }) {
  const { ref, display } = useCountUp({
    end: insight.numericEnd,
    suffix: insight.suffix,
    prefix: insight.prefix,
    duration: 2000,
  })

  return (
    <ScrollReveal
      className={index < insights.length - 1 ? "md:border-r border-foreground/[0.08]" : ""}
      direction="up"
      delay={index * 110}
    >
      <div className="py-10 md:py-14 md:pr-8 group cursor-default">
        <p
          ref={ref as React.RefObject<HTMLParagraphElement>}
          className="text-7xl md:text-8xl font-bold text-foreground leading-none mb-4 group-hover:text-primary group-hover:scale-105 transition-all duration-300 origin-left"
        >
          {display}
        </p>

        <div className={`h-[3px] w-10 ${insight.accent} mb-6 group-hover:w-16 transition-all duration-400`} />

        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:translate-x-1 transition-transform duration-300">
          {insight.title}
        </h3>

        <p className="text-lg text-foreground/75 leading-relaxed">
          {insight.description}
        </p>
      </div>
    </ScrollReveal>
  )
}

export function Insights() {
  return (
    <section id="insights" className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fdf2f8 0%, #faf5ff 50%, #fce7f3 100%)" }}>

      {/* Subtle blobs — now animated */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-rose-300/20 rounded-full blur-[80px] animate-pulse-soft" />
        <div className="absolute top-10 left-1/4 w-[200px] h-[200px] bg-fuchsia-300/10 rounded-full blur-[70px] animate-float-reverse" />
        <div className="absolute bottom-10 right-1/3 w-[180px] h-[180px] bg-violet-300/10 rounded-full blur-[60px] animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-10 w-[150px] h-[150px] bg-pink-300/10 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-3/4 right-10 w-[120px] h-[120px] bg-primary/6 rounded-full blur-[50px] animate-float-reverse" style={{ animationDelay: "3s" }} />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center py-16 relative z-10">
        <div className="container mx-auto px-4">

          {/* Section title — animated */}
          <ScrollReveal direction="none">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl md:text-4xl font-black uppercase text-primary leading-none tracking-tight whitespace-nowrap">Lo Que Aprendimos</span>
              <div className="flex-1 h-px bg-foreground/15 origin-left" style={{ animation: "expand-width 1s ease-out 0.3s both" }} />
              <span className="text-xs font-mono text-foreground/35 tracking-[0.2em] flex-shrink-0">06</span>
            </div>
          </ScrollReveal>

          {/* Survey context */}
          <ScrollReveal direction="up" delay={100}>
            <p className="text-xl text-foreground/65 mb-12 max-w-xl">
              Encuestamos a <span className="text-foreground font-semibold">+200 mujeres</span> para entender sus necesidades reales en temas de salud menstrual y reproductiva.
            </p>
          </ScrollReveal>

        {/* Top rule */}
        <div className="w-full h-px bg-foreground/10" />

        {/* Stat grid — animated counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {insights.map((insight, index) => (
            <InsightStat key={index} insight={insight} index={index} />
          ))}
        </div>

        {/* Bottom rule */}
        <div className="w-full h-px bg-foreground/10" />

        </div>
      </div>
    </section>
  )
}
