"use client"

import { Button } from "@/components/ui/button"
import { Play, ChevronDown, MessageCircle, Calendar, BookOpen } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-muted to-secondary/50" />
      
      {/* Animated blurred blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/60 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/70 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-border shadow-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground">Tu salud, tu bienestar</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance animate-fade-in-up">
              <span className="text-primary">Entre</span>Nosotras
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 text-pretty leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Un espacio seguro para aprender sobre salud menstrual y reproductiva sin tabúes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                asChild
              >
                <a href="#demo">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-full border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
                asChild
              >
                <a href="#problema">
                  Saber más
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative animate-float">
              {/* Phone frame */}
              <div className="relative w-[280px] md:w-[320px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-card rounded-[2.5rem] overflow-hidden">
                  {/* Phone notch */}
                  <div className="bg-foreground h-8 flex items-center justify-center">
                    <div className="w-20 h-5 bg-foreground rounded-full" />
                  </div>
                  
                  {/* App screen content */}
                  <div className="bg-gradient-to-b from-muted to-card p-4 h-[480px] md:h-[540px]">
                    {/* App header */}
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold text-primary">EntreNosotras</h3>
                      <p className="text-xs text-muted-foreground">Tu asistente de salud</p>
                    </div>
                    
                    {/* Chat preview */}
                    <div className="space-y-3 mb-6">
                      <div className="bg-primary/10 rounded-2xl rounded-tl-sm p-3 max-w-[80%]">
                        <p className="text-xs text-foreground">¿Por qué mi ciclo es irregular?</p>
                      </div>
                      <div className="bg-card border border-border rounded-2xl rounded-tr-sm p-3 max-w-[85%] ml-auto shadow-sm">
                        <p className="text-xs text-foreground">Los ciclos pueden variar por estrés, cambios de peso o factores hormonales. Es normal tener variaciones de algunos días.</p>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-card border border-border rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                        <MessageCircle className="w-5 h-5 text-primary mx-auto mb-1" />
                        <span className="text-[10px] text-muted-foreground">Chat</span>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                        <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
                        <span className="text-[10px] text-muted-foreground">Ciclo</span>
                      </div>
                      <div className="bg-card border border-border rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                        <BookOpen className="w-5 h-5 text-primary mx-auto mb-1" />
                        <span className="text-[10px] text-muted-foreground">Aprende</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements around phone */}
              <div className="absolute -top-4 -left-8 bg-card rounded-2xl p-3 shadow-lg border border-border animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground">Chat 24/7</span>
                </div>
              </div>
              
              <div className="absolute -bottom-2 -right-6 bg-card rounded-2xl p-3 shadow-lg border border-border animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-foreground">Tu ciclo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#problema" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm mb-2">Descubre más</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
