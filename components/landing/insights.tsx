"use client"

import { Smartphone, BookOpen, MessageCircleQuestion, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const insights = [
  {
    icon: Smartphone,
    stat: "85%",
    title: "Prefieren app + web",
    description: "La mayoría prefiere una solución disponible tanto como aplicación móvil como sitio web.",
    color: "bg-primary/10"
  },
  {
    icon: BookOpen,
    stat: "#1",
    title: "Temas más solicitados",
    description: "Higiene menstrual, flujo vaginal y cómo funciona el ciclo menstrual.",
    color: "bg-accent/50"
  },
  {
    icon: MessageCircleQuestion,
    stat: "72%",
    title: "Barrera principal",
    description: "La falta de espacios seguros para hacer preguntas es el mayor obstáculo para informarse.",
    color: "bg-secondary"
  },
  {
    icon: FileText,
    stat: "90%",
    title: "Formato preferido",
    description: "Prefieren consejos claros y breves en lugar de lenguaje médico complejo.",
    color: "bg-primary/10"
  }
]

export function Insights() {
  return (
    <section id="insights" className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1 rounded-full mb-4">
            Lo Que Aprendimos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            Insights de nuestras usuarias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Realizamos una encuesta para entender mejor las necesidades reales de las mujeres 
            en temas de salud menstrual y reproductiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {insights.map((insight, index) => (
            <Card 
              key={index} 
              className="bg-card border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden"
            >
              <CardContent className="pt-8 pb-8 text-center relative">
                {/* Background accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${insight.color.replace('/10', '').replace('/50', '')}`} />
                
                <div className={`w-14 h-14 ${insight.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <insight.icon className="w-7 h-7 text-primary" />
                </div>
                
                <div className="text-4xl font-bold text-primary mb-2">{insight.stat}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{insight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
