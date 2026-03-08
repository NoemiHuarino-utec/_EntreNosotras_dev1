"use client"

import { Bot, CalendarDays, BookOpen, Lightbulb } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1 rounded-full mb-4">
              Características
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Herramientas diseñadas pensando en ti, para acompañarte en cada etapa de tu ciclo.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">

          {/* AI Assistant — wide (2/3) */}
          <ScrollReveal className="md:col-span-2" direction="left">
            <div className="h-full bg-gradient-to-br from-primary/10 via-violet-500/5 to-accent/10 rounded-3xl p-7 border border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/10 overflow-hidden relative">
              <div className="flex flex-col sm:flex-row gap-6 h-full">
                {/* Left content */}
                <div className="flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-violet-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Asistente de IA</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Haz preguntas sobre salud menstrual y obtén respuestas claras y
                    confiables, sin tabúes ni juicios.
                  </p>
                </div>

                {/* Mini chat preview */}
                <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 sm:min-w-[190px] sm:flex-shrink-0 space-y-3 self-start">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 flex items-center justify-center">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-muted rounded-xl rounded-tl-none px-2.5 py-2 text-[10px] text-foreground leading-relaxed flex-1">
                      Hola, ¿en qué puedo ayudarte?
                    </div>
                  </div>
                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-primary/15 rounded-xl rounded-tr-none px-2.5 py-2 text-[10px] text-foreground leading-relaxed max-w-[130px]">
                      ¿Qué es la fase lútea?
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 flex items-center justify-center">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-muted rounded-xl rounded-tl-none px-2.5 py-2 text-[10px] text-foreground leading-relaxed flex-1">
                      Es la fase después de la ovulación, dura ~14 días...
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Library — narrow (1/3) */}
          <ScrollReveal direction="right">
            <div className="h-full bg-gradient-to-br from-accent/20 to-secondary/30 rounded-3xl p-7 border border-accent/30 hover:border-pink-400/60 transition-all duration-300 group hover:shadow-xl hover:shadow-accent/20 overflow-hidden">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Biblioteca</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Aprende sobre ciclos, higiene, anticoncepción y más.
              </p>

              {/* Mini topic list */}
              <div className="space-y-2">
                {["Ciclo Menstrual", "Flujo Vaginal", "Anticonceptivos", "Higiene"].map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-2 bg-card/60 rounded-xl px-3 py-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
                    <span className="text-xs text-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Tips — narrow (1/3) */}
          <ScrollReveal direction="left">
            <div className="h-full bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl p-7 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group hover:shadow-xl hover:shadow-amber-500/10 overflow-hidden">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Tips Diarios</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                Consejos prácticos para tu bienestar día a día.
              </p>

              {/* Mini tip card */}
              <div className="bg-card/70 rounded-2xl p-3 border border-amber-500/10">
                <p className="text-[10px] text-amber-600 font-bold uppercase tracking-wider mb-1.5">
                  Tip de hoy
                </p>
                <p className="text-xs text-foreground leading-relaxed">
                  Mantenerte hidratada durante tu ciclo ayuda a reducir la hinchazón.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Cycle Tracker — wide (2/3) */}
          <ScrollReveal className="md:col-span-2" direction="right">
            <div className="h-full bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-primary/10 rounded-3xl p-7 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group hover:shadow-xl hover:shadow-emerald-500/10 overflow-hidden relative">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Left content */}
                <div className="flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CalendarDays className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Seguimiento del Ciclo</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Registra tu periodo, visualiza tus fases y recibe recordatorios útiles.
                  </p>
                </div>

                {/* Mini cycle visualization */}
                <div className="bg-card/70 rounded-2xl p-4 sm:min-w-[210px] sm:flex-shrink-0 border border-border/40">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-foreground">Tu ciclo</span>
                    <span className="text-xs text-emerald-600 font-bold">Día 14 / 28</span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 bg-muted rounded-full overflow-hidden mb-3">
                    <div className="h-full w-1/2 bg-gradient-to-r from-rose-400 via-violet-500 to-emerald-400 rounded-full" />
                  </div>

                  {/* Phase labels */}
                  <div className="grid grid-cols-4 gap-1">
                    {[
                      { label: "Mens.", color: "bg-rose-400/20 text-rose-600" },
                      { label: "Folicular", color: "bg-violet-400/20 text-violet-600" },
                      { label: "Ovul.", color: "bg-amber-400/20 text-amber-600", active: true },
                      { label: "Lútea", color: "bg-emerald-400/20 text-emerald-600" },
                    ].map((phase) => (
                      <div
                        key={phase.label}
                        className={`text-center py-1 rounded-lg text-[9px] font-medium ${phase.color} ${phase.active ? "ring-1 ring-amber-400/50" : ""}`}
                      >
                        {phase.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
