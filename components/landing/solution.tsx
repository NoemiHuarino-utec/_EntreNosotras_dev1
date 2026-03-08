"use client"

import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"

const benefits = [
  { number: "01", highlight: "Verificada", rest: " y confiable en todo momento", bg: "#ede9fe" },
  { number: "02", highlight: "Sin jerga médica", rest: " — respuestas que se entienden", bg: "#fdf2fb" },
  { number: "03", highlight: "Herramientas", rest: " interactivas para tu ciclo", bg: "#fce7f3" },
  { number: "04", highlight: "Disponible 24/7", rest: " cuando más lo necesitas", bg: "#f5f0ff" },
]

export function Solution() {
  return (
    <section id="solucion" className="min-h-screen flex flex-col relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-accent/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-300/8 rounded-full blur-[100px] animate-float-slow" />

      <div className="flex-1 flex flex-col justify-center py-16 relative z-10">
      <div className="container mx-auto px-4">

        {/* Section title — animated */}
        <ScrollReveal direction="none">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-3xl md:text-4xl font-black uppercase text-primary leading-none tracking-tight whitespace-nowrap">La Solución</span>
            <div className="flex-1 h-px bg-foreground/15 origin-left" style={{ animation: "expand-width 1s ease-out 0.3s both" }} />
            <span className="text-xs font-mono text-foreground/35 tracking-[0.2em] flex-shrink-0">03</span>
          </div>
        </ScrollReveal>

        {/* Grid — manifesto izquierda, beneficios derecha */}
        <div className="w-full h-px bg-foreground/10" />
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Izquierda — Manifesto */}
          <ScrollReveal direction="left" className="md:border-r border-foreground/[0.08] relative">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-[80px] animate-pulse-soft" />
            </div>
            <div className="py-10 md:py-16 md:pr-16 flex flex-col justify-center h-full relative z-10">
              <p className="text-xs font-mono text-primary/60 uppercase tracking-[0.3em] mb-6">Nuestra misión</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                Tu salud merece respuestas reales,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-fuchsia-400 to-violet-400 animate-shimmer-text">
                  no silencios ni mitos.
                </span>
              </h2>
              <p className="text-base text-muted-foreground mt-6 leading-relaxed">
                Un espacio donde las mujeres pueden aprender sobre su cuerpo sin vergüenza
                y con información que realmente importa.
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group"
                  asChild
                >
                  <a href="#demo">
                    Comenzar ahora
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Derecha — Beneficios en columna */}
          <div className="divide-y divide-foreground/[0.08]">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} direction="right" delay={index * 80}>
                <div
                  className="py-8 md:pl-12 px-6 group cursor-default hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                  style={{ background: `linear-gradient(to right, ${benefit.bg}, transparent)` }}
                >
                  <span className="text-xs font-mono text-foreground/30 block mb-3 group-hover:text-primary/50 transition-colors duration-300">
                    {benefit.number}
                  </span>
                  <p className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300" style={{ color: "#a280f9" }}>{benefit.highlight}</p>
                  <p className="text-base text-muted-foreground">{benefit.rest}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
        <div className="w-full h-px bg-foreground/10" />
      </div>
      </div>
    </section>
  )
}
