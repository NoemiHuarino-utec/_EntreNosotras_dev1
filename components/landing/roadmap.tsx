"use client"

import { MapPin, Wifi, Users, Sparkles } from "lucide-react"

const roadmapItems = [
  {
    icon: MapPin,
    title: "Mapa de Recursos",
    description: "Encuentra servicios de salud femenina cercanos a ti.",
    status: "Próximamente",
    color: "bg-primary"
  },
  {
    icon: Wifi,
    title: "Acceso Sin Conexión",
    description: "Accede a contenido educativo en áreas con internet limitado.",
    status: "En desarrollo",
    color: "bg-accent"
  },
  {
    icon: Users,
    title: "Espacios Comunitarios",
    description: "Conecta con otras mujeres en un espacio seguro de apoyo.",
    status: "Planeado",
    color: "bg-secondary"
  }
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-muted/30 to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1 rounded-full mb-4">
            Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            Lo que viene
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Estamos trabajando en nuevas funcionalidades para brindarte una experiencia aún mejor.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-1/2" />

            {roadmapItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-card border-4 border-primary rounded-full transform -translate-x-1/2 z-10" />
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${item.color}/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        <span className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${
                          item.status === "Próximamente" ? "bg-primary/10 text-primary" :
                          item.status === "En desarrollo" ? "bg-accent/50 text-foreground" :
                          "bg-secondary text-foreground"
                        }`}>
                          <Sparkles className="w-3 h-3" />
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
