"use client"

import { Button } from "@/components/ui/button"
import { Play, Sparkles } from "lucide-react"

export function Demo() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/20 rounded-3xl" />
          
          <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Prueba la experiencia</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Descubre EntreNosotras
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 text-pretty leading-relaxed">
              Explora nuestra plataforma y descubre cómo podemos ayudarte a entender 
              mejor tu salud menstrual. ¡Es fácil, seguro y sin compromiso!
            </p>

            <Button 
              size="lg" 
              className="text-lg px-10 py-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Abrir Demo
            </Button>

            {/* Decorative elements */}
            <div className="absolute top-8 left-8 w-4 h-4 bg-accent rounded-full opacity-60" />
            <div className="absolute bottom-8 right-8 w-6 h-6 bg-primary/20 rounded-full" />
            <div className="absolute top-1/2 right-4 w-3 h-3 bg-secondary rounded-full opacity-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
