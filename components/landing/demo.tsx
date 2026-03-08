"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Play, MessageCircle, Heart, BookOpen } from "lucide-react"

export function Demo() {
  return (
    <section id="demo" className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#faf8ff" }}>

      <div className="flex-1 flex flex-col justify-center py-16 relative z-10">
      <div className="container mx-auto px-4">

        {/* Section title */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-3xl md:text-4xl font-black uppercase text-primary leading-none tracking-tight whitespace-nowrap">Demo</span>
          <div className="flex-1 h-px bg-foreground/15" />
          <span className="text-xs font-mono text-foreground/35 tracking-[0.2em] flex-shrink-0">05</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Izquierda — texto + CTA */}
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance leading-tight">
                Pruébala{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">
                  ahora mismo.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed">
                Una vista previa gratuita y sin registro de todo lo que EntreNosotras tiene para ti.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 group"
                  asChild
                >
                  <a href="/demo">
                    <Play className="w-5 h-5 mr-2" />
                    Abrir Demo
                  </a>
                </Button>
                <p className="text-muted-foreground/60 text-sm self-center">Sin registro · 100% gratuito</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Derecha — phone como protagonista */}
          <ScrollReveal direction="right" delay={100}>
            <div className="flex justify-center">
              <div className="relative animate-float">

                {/* Glow dramatico debajo */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[320px] h-[120px] bg-primary/40 rounded-full blur-[60px]" />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[200px] h-[80px] bg-violet-400/30 rounded-full blur-[40px]" />

                <div className="relative w-[300px] md:w-[360px] bg-foreground rounded-[3.5rem] p-3 shadow-[0_40px_100px_rgba(124,58,237,0.25),0_0_0_1px_rgba(124,58,237,0.15)]">
                  <div className="bg-card rounded-[3rem] overflow-hidden">
                    {/* Notch */}
                    <div className="bg-foreground h-8 flex items-center justify-center">
                      <div className="w-20 h-4 bg-foreground rounded-full" />
                    </div>

                    {/* App screen */}
                    <div className="bg-gradient-to-b from-muted to-card p-5 h-[500px] md:h-[540px]">
                      <div className="flex items-center justify-between mb-5">
                        <div>
                          <p className="text-xs text-muted-foreground">Bienvenida</p>
                          <h3 className="text-base font-bold text-foreground">Hola, Ana</h3>
                        </div>
                        <div className="w-11 h-11 bg-accent rounded-full flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">A</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-primary/10 to-accent/20 rounded-2xl p-4 mb-5">
                        <p className="text-xs text-muted-foreground mb-1">Tu ciclo</p>
                        <p className="text-2xl font-bold text-primary">Día 14</p>
                        <p className="text-xs text-muted-foreground">Fase ovulatoria</p>
                      </div>

                      <p className="text-xs font-medium text-foreground mb-3">Accesos rápidos</p>
                      <div className="grid grid-cols-3 gap-2 mb-5">
                        <div className="bg-card border border-border rounded-xl p-3 text-center shadow-sm">
                          <MessageCircle className="w-6 h-6 text-primary mx-auto mb-1" />
                          <span className="text-[10px] text-muted-foreground">Asistente</span>
                        </div>
                        <div className="bg-card border border-border rounded-xl p-3 text-center shadow-sm">
                          <BookOpen className="w-6 h-6 text-primary mx-auto mb-1" />
                          <span className="text-[10px] text-muted-foreground">Biblioteca</span>
                        </div>
                        <div className="bg-card border border-border rounded-xl p-3 text-center shadow-sm">
                          <Heart className="w-6 h-6 text-primary mx-auto mb-1" />
                          <span className="text-[10px] text-muted-foreground">Tips</span>
                        </div>
                      </div>

                      <div className="bg-card border border-border rounded-2xl p-4 shadow-sm">
                        <p className="text-xs font-medium text-primary mb-1.5">Tip del día</p>
                        <p className="text-xs text-foreground leading-relaxed">
                          Mantente hidratada durante tu ciclo. El agua ayuda a reducir la hinchazón.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
      </div>
    </section>
  )
}
