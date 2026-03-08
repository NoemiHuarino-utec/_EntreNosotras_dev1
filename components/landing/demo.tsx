"use client"

import { Button } from "@/components/ui/button"
import { Play, Sparkles, MessageCircle, Heart, BookOpen } from "lucide-react"

export function Demo() {
  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Prueba la experiencia</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Explora el Demo
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 text-pretty leading-relaxed">
              Descubre cómo EntreNosotras puede ayudarte a entender mejor tu salud menstrual. 
              Explora una vista previa de nuestra plataforma de forma gratuita.
            </p>

            <Button 
              size="lg" 
              className="text-lg px-10 py-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              asChild
            >
              <a href="/demo">
                <Play className="w-5 h-5 mr-2" />
                Abrir Demo
              </a>
            </Button>
          </div>

          {/* Right - Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Phone frame */}
              <div className="relative w-[280px] md:w-[300px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-card rounded-[2.5rem] overflow-hidden">
                  {/* Phone notch */}
                  <div className="bg-foreground h-7 flex items-center justify-center">
                    <div className="w-16 h-4 bg-foreground rounded-full" />
                  </div>
                  
                  {/* App screen content */}
                  <div className="bg-gradient-to-b from-muted to-card p-4 h-[440px] md:h-[480px]">
                    {/* App header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Bienvenida</p>
                        <h3 className="text-sm font-bold text-foreground">Hola, Ana</h3>
                      </div>
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">A</span>
                      </div>
                    </div>
                    
                    {/* Cycle tracker preview */}
                    <div className="bg-gradient-to-r from-primary/10 to-accent/20 rounded-2xl p-4 mb-4">
                      <p className="text-xs text-muted-foreground mb-1">Tu ciclo</p>
                      <p className="text-lg font-bold text-primary">Día 14</p>
                      <p className="text-xs text-muted-foreground">Fase ovulatoria</p>
                    </div>

                    {/* Quick actions */}
                    <p className="text-xs font-medium text-foreground mb-2">Accesos rápidos</p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-card border border-border rounded-xl p-2 text-center shadow-sm">
                        <MessageCircle className="w-5 h-5 text-primary mx-auto mb-1" />
                        <span className="text-[9px] text-muted-foreground">Asistente</span>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-2 text-center shadow-sm">
                        <BookOpen className="w-5 h-5 text-primary mx-auto mb-1" />
                        <span className="text-[9px] text-muted-foreground">Biblioteca</span>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-2 text-center shadow-sm">
                        <Heart className="w-5 h-5 text-primary mx-auto mb-1" />
                        <span className="text-[9px] text-muted-foreground">Tips</span>
                      </div>
                    </div>

                    {/* Tip of the day */}
                    <div className="bg-card border border-border rounded-2xl p-3 shadow-sm">
                      <p className="text-xs font-medium text-primary mb-1">Tip del día</p>
                      <p className="text-xs text-foreground">Mantente hidratada durante tu ciclo. El agua ayuda a reducir la hinchazón.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-4 bg-card rounded-2xl p-3 shadow-lg border border-border animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-xs font-medium text-foreground">Seguro</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 -left-8 bg-card rounded-2xl p-3 shadow-lg border border-border animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="text-xs font-medium text-foreground">Fácil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
