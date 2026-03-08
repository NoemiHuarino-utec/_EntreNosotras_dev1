"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Linkedin } from "lucide-react"

const team = [
  {
    name: "Noemi Huarino",
    avatar: "NH",
    gradient: "from-violet-500 to-purple-600"
  },
  {
    name: "Sandra Aliaga",
    avatar: "SA",
    gradient: "from-pink-400 to-rose-500"
  },
  {
    name: "Karla Bedregal",
    avatar: "KB",
    gradient: "from-fuchsia-400 to-pink-500"
  },
  {
    name: "Laura Vilva",
    avatar: "LV",
    gradient: "from-purple-400 to-violet-500"
  },
  {
    name: "Kattya Poma",
    avatar: "KP",
    gradient: "from-rose-400 to-pink-500"
  }
]

export function Team() {
  return (
    <section id="team" className="py-28 bg-gradient-to-b from-secondary/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-5 py-2 rounded-full mb-6">
              Nuestro Equipo
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Mujeres creando para mujeres
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Un equipo apasionado por mejorar la educación en salud femenina.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <Card 
                className="bg-card/80 backdrop-blur-sm border-border/30 shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-3 transition-all duration-500 group overflow-hidden w-[200px]"
              >
                <CardContent className="pt-10 pb-8 text-center relative">
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Avatar */}
                  <div className="relative mb-6 mx-auto w-fit">
                    {/* Outer ring */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${member.gradient} rounded-full opacity-30 blur-sm group-hover:opacity-60 group-hover:blur-md transition-all duration-500`} />
                    {/* Avatar circle */}
                    <div className={`relative w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      {member.avatar}
                    </div>
                    {/* Status dot */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-card shadow-sm" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-4 relative z-10">{member.name}</h3>
                  
                  <div className="flex justify-center relative z-10">
                    <button className="w-10 h-10 bg-muted/80 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group/btn shadow-sm">
                      <Linkedin className="w-4 h-4 text-muted-foreground group-hover/btn:text-primary-foreground transition-colors" />
                      <span className="sr-only">LinkedIn de {member.name}</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
