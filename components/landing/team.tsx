"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"

const team = [
  {
    name: "Noemi Huarino",
    avatar: "NH",
    color: "bg-primary"
  },
  {
    name: "Sandra Aliaga",
    avatar: "SA",
    color: "bg-accent"
  },
  {
    name: "Karla Bedregal",
    avatar: "KB",
    color: "bg-secondary"
  },
  {
    name: "Laura Vilva",
    avatar: "LV",
    color: "bg-primary/70"
  },
  {
    name: "Kattya Poma",
    avatar: "KP",
    color: "bg-accent/80"
  }
]

export function Team() {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1 rounded-full mb-4">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            Mujeres creando para mujeres
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Un equipo apasionado por mejorar la educación en salud femenina.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="bg-card border-border/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[180px]"
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{member.name}</h3>
                
                <div className="flex justify-center">
                  <button className="w-9 h-9 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 hover:scale-110 transition-all duration-300">
                    <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                    <span className="sr-only">LinkedIn de {member.name}</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
