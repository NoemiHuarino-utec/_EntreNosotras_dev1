"use client"

import { Button } from "@/components/ui/button"
import { Heart, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-border">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Tu salud, tu bienestar</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          <span className="text-primary">Entre</span>Nosotras
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
          Un espacio seguro para aprender sobre salud menstrual y reproductiva sin tabúes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Heart className="w-5 h-5 mr-2" />
            Ver Demo
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 rounded-full border-primary text-primary hover:bg-primary/10"
          >
            Saber más
          </Button>
        </div>

        {/* Floating elements */}
        <div className="mt-16 flex justify-center gap-8 opacity-60">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </section>
  )
}
