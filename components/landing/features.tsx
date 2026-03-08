"use client"

import { Bot, CalendarDays, BookOpen, Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Bot,
    title: "Asistente de IA",
    description: "Haz preguntas sobre salud menstrual y obtén respuestas claras y confiables.",
    color: "bg-primary/10",
    gradient: "from-primary/5 to-accent/10"
  },
  {
    icon: BookOpen,
    title: "Biblioteca Educativa",
    description: "Aprende sobre ciclos menstruales, higiene, anticoncepción y salud reproductiva.",
    color: "bg-accent/50",
    gradient: "from-accent/10 to-secondary/20"
  },
  {
    icon: Lightbulb,
    title: "Tips Diarios",
    description: "Consejos cortos y prácticos para tu bienestar menstrual del día a día.",
    color: "bg-secondary",
    gradient: "from-secondary/20 to-primary/5"
  },
  {
    icon: CalendarDays,
    title: "Seguimiento del Ciclo",
    description: "Registra tu ciclo menstrual y recibe recordatorios útiles.",
    color: "bg-primary/10",
    gradient: "from-primary/10 to-accent/15"
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-to-br ${feature.gradient} border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden`}
            >
              <CardContent className="pt-8 pb-8 text-center relative">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
