"use client"

import { CheckCircle2, Heart, Shield, Sparkles, Lock } from "lucide-react"

const benefits = [
  "Información verificada y confiable",
  "Respuestas claras sin lenguaje médico complejo",
  "Herramientas interactivas para tu ciclo",
  "Disponible cuando lo necesites"
]

export function Solution() {
  return (
    <section id="solucion" className="py-24 bg-gradient-to-b from-muted/50 to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Visual element */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/20 rounded-3xl p-8 md:p-12">
              {/* Decorative cards */}
              <div className="space-y-4">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Tu ciclo, tu poder</p>
                      <p className="text-sm text-muted-foreground">Entiende tu cuerpo</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 transform rotate-1 hover:rotate-0 transition-transform duration-300 ml-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/50 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Espacio seguro</p>
                      <p className="text-sm text-muted-foreground">Sin tabúes ni juicios</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Aprende cada día</p>
                      <p className="text-sm text-muted-foreground">Recursos educativos</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 transform rotate-2 hover:rotate-0 transition-transform duration-300 ml-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Privado y seguro</p>
                      <p className="text-sm text-muted-foreground">Tu información protegida</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative blurs */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1 rounded-full mb-4">
              La Solución
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
              Tu espacio privado de aprendizaje
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              EntreNosotras proporciona un espacio privado, comprensivo y accesible 
              donde las mujeres pueden aprender sobre su salud menstrual y reproductiva 
              de forma segura y sin juicios.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
