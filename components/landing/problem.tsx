import { AlertCircle, MessageCircleQuestion, Ban } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const problems = [
  {
    icon: Ban,
    title: "Falta de educación",
    description: "Muchas mujeres crecen sin acceso a información clara y confiable sobre su salud menstrual."
  },
  {
    icon: MessageCircleQuestion,
    title: "Desinformación",
    description: "Los mitos y tabúes culturales llevan a malentendidos sobre el ciclo menstrual y la salud reproductiva."
  },
  {
    icon: AlertCircle,
    title: "Vergüenza y estigma",
    description: "El estigma social impide que las mujeres hablen abiertamente sobre su salud y busquen ayuda."
  }
]

export function Problem() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">El Problema</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
            Un tema que necesita atención
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Muchas mujeres crecen sin educación clara sobre su salud menstrual, 
            dependiendo frecuentemente de desinformación o enfrentando tabúes que les impiden entender su propio cuerpo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-card border-border/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-accent/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
