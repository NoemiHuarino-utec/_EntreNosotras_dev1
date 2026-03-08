"use client"

import { Bot } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

function AnimatedChat() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 sm:min-w-[200px] sm:flex-shrink-0 space-y-3 self-start">
      <div
        className="flex items-start gap-2 transition-all duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(10px)",
          transitionDelay: "200ms"
        }}
      >
        <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 flex items-center justify-center">
          <Bot className="w-3 h-3 text-white" />
        </div>
        <div className="bg-muted rounded-xl rounded-tl-none px-2.5 py-2 text-[10px] text-foreground leading-relaxed flex-1">
          Hola, ¿en qué puedo ayudarte?
        </div>
      </div>
      <div
        className="flex items-start gap-2 justify-end transition-all duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(10px)",
          transitionDelay: "600ms"
        }}
      >
        <div className="bg-primary/15 rounded-xl rounded-tr-none px-2.5 py-2 text-[10px] text-foreground leading-relaxed max-w-[130px]">
          ¿Qué es la fase lútea?
        </div>
      </div>
      <div
        className="flex items-start gap-2 transition-all duration-500"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(10px)",
          transitionDelay: "1000ms"
        }}
      >
        <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 flex items-center justify-center">
          <Bot className="w-3 h-3 text-white" />
        </div>
        <div className="bg-muted rounded-xl rounded-tl-none px-2.5 py-2 text-[10px] text-foreground leading-relaxed flex-1">
          Es la fase después de la ovulación, dura ~14 días...
        </div>
      </div>
    </div>
  )
}

function AnimatedLibraryTopics() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="space-y-2">
      {["Ciclo Menstrual", "Flujo Vaginal", "Anticonceptivos", "Higiene"].map((topic, i) => (
        <div
          key={topic}
          className="flex items-center gap-2 bg-card/60 rounded-xl px-3 py-2.5 transition-all duration-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-15px)",
            transitionDelay: `${300 + i * 150}ms`
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
          <span className="text-sm text-foreground">{topic}</span>
        </div>
      ))}
    </div>
  )
}

function AnimatedProgressBar() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="bg-card/70 rounded-2xl p-4 sm:min-w-[210px] sm:flex-shrink-0 border border-border/40">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-foreground">Tu ciclo</span>
        <span className="text-xs text-primary font-bold">Día 14 / 28</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden mb-3">
        <div
          className="h-full bg-gradient-to-r from-rose-400 via-violet-500 to-purple-400 rounded-full transition-all duration-1500 ease-out"
          style={{ width: isVisible ? "50%" : "0%", transitionDelay: "400ms" }}
        />
      </div>
      <div className="grid grid-cols-4 gap-1">
        {[
          { label: "Mens.", color: "bg-rose-400/20 text-rose-600" },
          { label: "Folicular", color: "bg-violet-400/20 text-violet-600" },
          { label: "Ovul.", color: "bg-fuchsia-400/20 text-fuchsia-600", active: true },
          { label: "Lútea", color: "bg-purple-400/20 text-purple-600" },
        ].map((phase, i) => (
          <div
            key={phase.label}
            className={`text-center py-1 rounded-lg text-[9px] font-medium transition-all duration-500 ${phase.color} ${phase.active ? "ring-1 ring-fuchsia-400/50" : ""}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "scale(1)" : "scale(0.8)",
              transitionDelay: `${600 + i * 100}ms`
            }}
          >
            {phase.label}
          </div>
        ))}
      </div>
    </div>
  )
}

function AnimatedTip() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="bg-card/70 rounded-2xl p-4 border border-fuchsia-400/15 transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(15px) scale(0.95)",
        transitionDelay: "400ms"
      }}
    >
      <p className="text-[10px] text-fuchsia-600 font-bold uppercase tracking-wider mb-2">
        Tip de hoy
      </p>
      <p className="text-sm text-foreground leading-relaxed">
        Mantenerte hidratada durante tu ciclo ayuda a reducir la hinchazón.
      </p>
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">

      <div className="flex-1 flex flex-col justify-center py-16">
      <div className="container mx-auto px-4">

        {/* Section title — animated */}
        <ScrollReveal direction="none">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-3xl md:text-4xl font-black uppercase text-primary leading-none tracking-tight whitespace-nowrap">Características</span>
            <div className="flex-1 h-px bg-foreground/15 origin-left" style={{ animation: "expand-width 1s ease-out 0.3s both" }} />
            <span className="text-xs font-mono text-foreground/35 tracking-[0.2em] flex-shrink-0">04</span>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* AI Assistant — wide (2/3) */}
          <ScrollReveal className="md:col-span-2" direction="left">
            <div className="h-full bg-gradient-to-br from-primary/15 via-violet-500/8 to-accent/15 rounded-3xl p-8 md:p-10 border-[3px] border-primary/25 hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/15 hover:-translate-y-1 overflow-hidden relative">
              <div className="flex flex-col sm:flex-row gap-8 h-full">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:translate-x-1 transition-transform duration-300">Asistente de IA</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Haz preguntas sobre salud menstrual y obtén respuestas claras y
                    confiables, sin tabúes ni juicios.
                  </p>
                </div>

                {/* Mini chat preview — animated messages */}
                <AnimatedChat />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/8 rounded-full blur-2xl pointer-events-none animate-pulse-soft" />
            </div>
          </ScrollReveal>

          {/* Library — narrow (1/3) */}
          <ScrollReveal direction="right">
            <div className="h-full bg-gradient-to-br from-pink-400/15 to-rose-400/15 rounded-3xl p-8 md:p-10 border-[3px] border-pink-400/25 hover:border-pink-400/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-pink-400/15 hover:-translate-y-1 overflow-hidden">
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:translate-x-1 transition-transform duration-300">Biblioteca</h3>
              <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                Aprende sobre ciclos, higiene, anticoncepción y más.
              </p>
              {/* Library topics — animated cascade */}
              <AnimatedLibraryTopics />
            </div>
          </ScrollReveal>

          {/* Tips — narrow (1/3) */}
          <ScrollReveal direction="left">
            <div className="h-full bg-gradient-to-br from-fuchsia-400/15 to-violet-400/15 rounded-3xl p-8 md:p-10 border-[3px] border-fuchsia-400/25 hover:border-fuchsia-400/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-fuchsia-400/15 hover:-translate-y-1 overflow-hidden">
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:translate-x-1 transition-transform duration-300">Tips Diarios</h3>
              <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                Consejos prácticos para tu bienestar día a día.
              </p>
              {/* Tip card — animated appearance */}
              <AnimatedTip />
            </div>
          </ScrollReveal>

          {/* Cycle Tracker — wide (2/3) */}
          <ScrollReveal className="md:col-span-2" direction="right">
            <div className="h-full bg-gradient-to-br from-violet-400/15 via-purple-400/8 to-primary/15 rounded-3xl p-8 md:p-10 border-[3px] border-violet-400/25 hover:border-violet-400/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-violet-400/15 hover:-translate-y-1 overflow-hidden relative">
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:translate-x-1 transition-transform duration-300">Seguimiento del Ciclo</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Registra tu periodo, visualiza tus fases y recibe recordatorios útiles.
                  </p>
                </div>

                {/* Mini cycle visualization — animated progress */}
                <AnimatedProgressBar />
              </div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-violet-400/8 rounded-full blur-2xl pointer-events-none animate-pulse-soft" />
            </div>
          </ScrollReveal>

        </div>
      </div>
      </div>
    </section>
  )
}
