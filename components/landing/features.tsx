import { Bot, CalendarDays, BookOpen, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Bot,
    title: "Asistente de IA",
    description: "Haz preguntas sobre salud menstrual y obtén respuestas confiables de nuestra asistente virtual.",
    color: "bg-primary/10"
  },
  {
    icon: CalendarDays,
    title: "Seguimiento del Ciclo",
    description: "Registra tu ciclo menstrual, identifica patrones y entiende mejor tu cuerpo.",
    color: "bg-accent/50"
  },
  {
    icon: BookOpen,
    title: "Biblioteca Educativa",
    description: "Aprende sobre períodos, hormonas, anticoncepción y salud reproductiva.",
    color: "bg-secondary"
  },
  {
    icon: MapPin,
    title: "Mapa de Recursos",
    description: "Encuentra clínicas, farmacias y recursos de salud femenina cerca de ti.",
    color: "bg-primary/10"
  }
]

export function Features() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Características</span>
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
              className="bg-card border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <CardContent className="pt-8 pb-8 text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
