import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "María García",
    role: "Fundadora & CEO",
    avatar: "MG",
    color: "bg-primary"
  },
  {
    name: "Ana Rodríguez",
    role: "Directora Médica",
    avatar: "AR",
    color: "bg-accent"
  },
  {
    name: "Laura Martínez",
    role: "Líder de Producto",
    avatar: "LM",
    color: "bg-secondary"
  },
  {
    name: "Carmen López",
    role: "Desarrolladora Principal",
    avatar: "CL",
    color: "bg-primary/70"
  }
]

export function Team() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestro Equipo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            Mujeres creando para mujeres
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Un equipo apasionado por mejorar la educación en salud femenina.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="bg-card border-border/50 hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground group-hover:scale-105 transition-transform duration-300`}>
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                
                <div className="flex justify-center gap-3">
                  <button className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    <span className="sr-only">Twitter de {member.name}</span>
                  </button>
                  <button className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors">
                    <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
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
