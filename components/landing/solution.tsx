"use client"

import { Sparkles, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"

const benefits = [
  { number: "01", highlight: "Verificada", rest: " y confiable en todo momento" },
  { number: "02", highlight: "Sin jerga médica", rest: " — respuestas que se entienden" },
  { number: "03", highlight: "Herramientas", rest: " interactivas para tu ciclo" },
  { number: "04", highlight: "Disponible 24/7", rest: " cuando más lo necesitas" },
]

export function Solution() {
  return (
    <section id="solucion" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-accent/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">

          {/* Visual — Quote / manifesto card */}
          <ScrollReveal direction="left">
            <div className="relative order-2 lg:order-1">
              <div className="relative bg-card rounded-[2rem] p-10 border border-border/60 shadow-2xl overflow-hidden">
                {/* Accent top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-violet-400 to-accent" />

                {/* Decorative quote mark */}
                <div
                  className="text-[9rem] font-serif leading-none text-primary/10 -mt-6 -mb-6 select-none"
                  aria-hidden
                >
                  &ldquo;
                </div>

                <blockquote className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-5">
                  Tu salud merece respuestas reales, no silencios ni mitos.
                </blockquote>

                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  EntreNosotras nació de una necesidad compartida: un espacio donde las
                  mujeres puedan aprender sobre su cuerpo sin vergüenza y con información
                  que realmente importa.
                </p>

                {/* Platform credit line */}
                <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                  <div className="w-9 h-9 bg-gradient-to-br from-primary to-violet-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">EN</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">EntreNosotras</p>
                    <p className="text-xs text-muted-foreground">Plataforma de salud menstrual</p>
                  </div>
                </div>

                {/* Background texture */}
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-primary/5 to-transparent rounded-full pointer-events-none" />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                100% Gratuito
              </div>

              {/* Stats badge */}
              <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-border/50 animate-float-slow hidden md:block">
                <p className="text-2xl font-bold text-primary leading-none">+1,000</p>
                <p className="text-xs text-muted-foreground mt-1">usuarias activas</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text content */}
          <ScrollReveal direction="right">
            <div className="order-1 lg:order-2">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 px-5 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  La Solución
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Tu espacio privado de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  aprendizaje
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-10 text-pretty leading-relaxed max-w-lg">
                EntreNosotras proporciona un espacio privado, comprensivo y accesible
                donde las mujeres pueden aprender sobre su salud menstrual y reproductiva
                de forma segura y sin juicios.
              </p>

              {/* Benefits — numbered editorial list */}
              <ul className="space-y-0 divide-y divide-border/50 mb-10">
                {benefits.map((benefit, index) => (
                  <li key={index} className="group flex items-baseline gap-4 py-4">
                    <span className="text-xs font-mono text-muted-foreground/50 flex-shrink-0 w-6 group-hover:text-primary transition-colors duration-200">
                      {benefit.number}
                    </span>
                    <span className="text-base text-foreground">
                      <span className="text-primary font-semibold">{benefit.highlight}</span>
                      {benefit.rest}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group"
              >
                Comenzar ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
