"use client"

import { AlertCircle, MessageCircleQuestion, Ban } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const problems = [
  {
    icon: Ban,
    title: "Falta de educación",
    description: "Muchas mujeres crecen sin acceso a información clara y confiable sobre su salud menstrual y reproductiva.",
    color: "bg-primary/10"
  },
  {
    icon: MessageCircleQuestion,
    title: "Desinformación y mitos",
    description: "Los tabúes culturales y la falta de espacios seguros llevan a depender de información incorrecta o incompleta.",
    color: "bg-accent/50"
  },
  {
    icon: AlertCircle,
    title: "Incomodidad para preguntar",
    description: "El estigma social impide que las mujeres hagan preguntas abiertamente sobre su cuerpo y salud.",
    color: "bg-secondary"
  }
]

export function Problem() {
  return (
    <section id="problema" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1 rounded-full mb-4">
            El Problema
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            Un tema que necesita atención
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Muchas mujeres crecen sin educación clara sobre su salud menstrual, 
            frecuentemente dependiendo de desinformación o enfrentando tabúes que les impiden entender su propio cuerpo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="bg-card border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-8 text-center">
                <div className={`w-16 h-16 ${problem.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
