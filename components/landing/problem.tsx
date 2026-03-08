"use client"

import { ScrollReveal } from "@/components/ui/scroll-reveal"

const problems = [
  {
    number: "01",
    title: "Falta de educación",
    description: "Muchas mujeres crecen sin acceso a información clara y confiable sobre su salud menstrual y reproductiva.",
  },
  {
    number: "02",
    title: "Desinformación y mitos",
    description: "Los tabúes culturales y la falta de espacios seguros llevan a depender de información incorrecta o incompleta.",
  },
  {
    number: "03",
    title: "Incomodidad para preguntar",
    description: "El estigma social impide que las mujeres hagan preguntas abiertamente sobre su cuerpo y salud.",
  },
]

export function Problem() {
  return (
    <section id="problema" className="min-h-screen flex flex-col bg-background relative overflow-hidden">

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center py-16">
        <div className="container mx-auto px-4">

          {/* Section title */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-3xl md:text-4xl font-black uppercase text-primary leading-none tracking-tight whitespace-nowrap">El Problema</span>
            <div className="flex-1 h-px bg-foreground/15" />
            <span className="text-xs font-mono text-foreground/35 tracking-[0.2em] flex-shrink-0">01</span>
          </div>

        <div className="w-full h-px bg-foreground/10 mb-0" />

        <div className="grid grid-cols-1 md:grid-cols-5">

          {problems.map((problem, index) => (
            <ScrollReveal
              key={index}
              className={`md:col-span-1 ${index < problems.length - 1 ? "md:border-r border-foreground/[0.08]" : ""}`}
              direction="up"
              delay={index * 110}
            >
              <div className="py-10 md:py-14 md:pr-8 group cursor-default">
                <p className="text-5xl font-bold text-primary/40 leading-none mb-8 group-hover:text-primary/70 transition-colors duration-300">
                  {problem.number}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 leading-snug">
                  {problem.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </ScrollReveal>
          ))}

          {/* Stat */}
          <ScrollReveal
            className="md:col-span-2 md:border-l border-foreground/[0.08]"
            direction="up"
            delay={340}
          >
            <div className="py-10 md:py-14 md:pl-10 flex flex-col justify-between h-full">
              <span className="text-primary/50 text-xs font-bold uppercase tracking-[0.25em] block mb-6">
                Dato clave
              </span>
              <div>
                <p className="text-[5.5rem] md:text-[7.5rem] font-bold text-primary leading-none tracking-tight">
                  72%
                </p>
                <p className="text-foreground/65 text-lg leading-relaxed mt-4 max-w-[260px]">
                  de mujeres no cuenta con un espacio seguro para preguntar sobre su salud
                </p>
              </div>
              <p className="text-muted-foreground/40 text-xs mt-8 italic">
                Investigación con usuarias de EntreNosotras, 2024.
              </p>
            </div>
          </ScrollReveal>

        </div>

        <div className="w-full h-px bg-foreground/10" />

        </div>
      </div>
    </section>
  )
}
