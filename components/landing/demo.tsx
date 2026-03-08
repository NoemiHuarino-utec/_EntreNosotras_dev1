"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Play, MessageCircle, Heart, BookOpen, Shield, Sparkles } from "lucide-react"

export function Demo() {
  return (
    <section id="demo" className="min-h-screen flex flex-col bg-[#1e1830] overflow-hidden relative">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-violet-500/8 rounded-full blur-[80px]" />
      </div>

      <div className="flex-1 flex flex-col justify-center py-16 relative z-10">
      <div className="container mx-auto px-4">

        {/* Section title */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-3xl md:text-4xl font-black uppercase text-primary leading-none tracking-tight whitespace-nowrap">Demo</span>
          <div className="flex-1 h-px bg-white/15" />
          <span className="text-xs font-mono text-white/25 tracking-[0.2em] flex-shrink-0">05</span>
        </div>

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">
              Explora el Demo
            </h2>
            <p className="text-white/50 text-lg max-w-md mx-auto leading-relaxed">
              Una vista previa gratuita de todo lo que EntreNosotras tiene para ti.
            </p>
          </div>
        </ScrollReveal>

        {/* Phone mockup — centered */}
        <ScrollReveal delay={100}>
          <div className="flex justify-center mb-12">
            <div className="relative animate-float">
              {/* Phone frame */}
              <div className="relative w-[280px] md:w-[300px] bg-[#0a0812] rounded-[3.5rem] p-3 shadow-[0_40px_80px_rgba(124,58,237,0.35),0_0_0_1px_rgba(124,58,237,0.2)]">
                <div className="bg-card rounded-[3rem] overflow-hidden">
                  {/* Notch */}
                  <div className="bg-[#0a0812] h-7 flex items-center justify-center">
                    <div className="w-20 h-4 bg-[#0a0812] rounded-full" />
                  </div>

                  {/* App screen */}
                  <div className="bg-gradient-to-b from-muted to-card p-4 h-[440px] md:h-[480px]">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Bienvenida</p>
                        <h3 className="text-sm font-bold text-foreground">Hola, Ana</h3>
                      </div>
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">A</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 to-accent/20 rounded-2xl p-4 mb-4">
                      <p className="text-xs text-muted-foreground mb-1">Tu ciclo</p>
                      <p className="text-lg font-bold text-primary">Día 14</p>
                      <p className="text-xs text-muted-foreground">Fase ovulatoria</p>
                    </div>

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

                    <div className="bg-card border border-border rounded-2xl p-3 shadow-sm">
                      <p className="text-xs font-medium text-primary mb-1">Tip del día</p>
                      <p className="text-xs text-foreground">
                        Mantente hidratada durante tu ciclo. El agua ayuda a reducir la hinchazón.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -top-5 -right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2.5 shadow-lg animate-float"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-white">100% Seguro</span>
                </div>
              </div>

              <div
                className="absolute bottom-24 -left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2.5 shadow-lg animate-float"
                style={{ animationDelay: "1.2s" }}
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-white">Gratuito</span>
                </div>
              </div>

              <div
                className="absolute top-1/3 -right-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 py-2.5 shadow-lg animate-float-slow hidden md:flex"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium text-white">IA</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={200}>
          <div className="text-center flex flex-col items-center gap-4">
            <Button
              size="lg"
              className="text-lg px-10 py-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_rgba(124,58,237,0.45)] hover:shadow-[0_0_60px_rgba(124,58,237,0.65)] transition-all duration-300 hover:-translate-y-0.5"
              asChild
            >
              <a href="/demo">
                <Play className="w-5 h-5 mr-2" />
                Abrir Demo
              </a>
            </Button>
            <p className="text-white/30 text-sm">Sin registro · 100% gratuito · Disponible ahora</p>
          </div>
        </ScrollReveal>
      </div>
      </div>
    </section>
  )
}
