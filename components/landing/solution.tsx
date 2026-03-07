import { CheckCircle2, Sparkles, Heart, Shield } from "lucide-react"

const benefits = [
  "Información verificada por profesionales de salud",
  "Herramientas interactivas para seguir tu ciclo",
  "Asistente de IA disponible 24/7",
  "Comunidad de apoyo sin juicios"
]

export function Solution() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Visual element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/20 rounded-3xl p-8 md:p-12">
              {/* Decorative cards */}
              <div className="space-y-4">
                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 transform -rotate-2">
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

                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 transform rotate-1 ml-8">
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

                <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 transform -rotate-1">
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
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">La Solución</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
              Información accesible y herramientas para ti
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              EntreNosotras proporciona información accesible, orientación personalizada y 
              herramientas prácticas para que entiendas mejor tu salud menstrual y tomes 
              decisiones informadas sobre tu bienestar.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
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
