"use client"

import { CheckCircle2, Heart, Shield, Sparkles, Lock, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    text: "Información verificada y confiable",
    highlight: "verificada"
  },
  {
    text: "Respuestas claras sin lenguaje médico complejo",
    highlight: "claras"
  },
  {
    text: "Herramientas interactivas para tu ciclo",
    highlight: "interactivas"
  },
  {
    text: "Disponible cuando lo necesites, 24/7",
    highlight: "24/7"
  }
]

const featureCards = [
  {
    icon: Heart,
    title: "Tu ciclo, tu poder",
    description: "Entiende tu cuerpo",
    gradient: "from-pink-500/20 to-rose-500/20",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-500"
  },
  {
    icon: Shield,
    title: "Espacio seguro",
    description: "Sin tabúes ni juicios",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-500"
  },
  {
    icon: Sparkles,
    title: "Aprende cada día",
    description: "Recursos educativos",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-500"
  },
  {
    icon: Lock,
    title: "Privado y seguro",
    description: "Tu información protegida",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500"
  }
]

export function Solution() {
  return (
    <section id="solucion" className="py-28 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-accent/20" />
      
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Visual element - Feature cards */}
          <ScrollReveal direction="left">
            <div className="relative order-2 lg:order-1">
              {/* Main container with glass effect */}
              <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 border border-border/50 shadow-2xl">
                {/* Grid of feature cards */}
                <div className="grid grid-cols-2 gap-4">
                  {featureCards.map((card, index) => (
                    <div 
                      key={index}
                      className={`group relative bg-gradient-to-br ${card.gradient} rounded-2xl p-5 border border-white/20 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Icon */}
                      <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <card.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {card.description}
                      </p>

                      {/* Hover glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/10 transition-all duration-500" />
                    </div>
                  ))}
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-float">
                  100% Gratuito
                </div>

                {/* Corner decorations */}
                <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-accent/40 to-pink-400/40 rounded-full blur-2xl" />
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-primary/30 to-violet-400/30 rounded-full blur-2xl" />
              </div>

              {/* Additional floating elements */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-border/50 animate-float-slow hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Usuarios activos</p>
                    <p className="font-bold text-foreground">+1,000</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
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

              {/* Benefits list */}
              <ul className="space-y-5 mb-10">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:scale-110">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground text-lg">
                      {benefit.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
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
