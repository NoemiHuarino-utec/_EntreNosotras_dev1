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
    <section id="problema" className="py-24 bg-[#1e1830] overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.06] rounded-full blur-[100px] pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">
              El Problema
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-[1.1] text-white">
              Un tema que
              <br />
              <span className="text-primary/75 font-light italic">necesita atención</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Problem rows */}
        <div className="divide-y divide-white/[0.07]">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 120}>
              <div className="group flex gap-6 md:gap-12 items-start py-10 md:py-12 cursor-default rounded-lg transition-colors duration-300 hover:bg-white/[0.03] -mx-4 px-4">
                {/* Number */}
                <span className="text-4xl md:text-5xl font-bold leading-none font-mono flex-shrink-0 w-14 md:w-20 text-right select-none pt-1 text-white/[0.08] group-hover:text-primary/30 transition-colors duration-500">
                  {problem.number}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-white/45 text-base md:text-lg leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center self-center flex-shrink-0">
                  <span className="text-white/20 text-xl group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 inline-block">
                    →
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stat callout */}
        <ScrollReveal delay={400}>
          <div className="mt-16 pt-12 border-t border-white/[0.07] flex flex-col sm:flex-row items-start gap-8 sm:gap-12">
            <div className="flex-shrink-0">
              <p className="text-6xl md:text-7xl font-bold text-primary leading-none">72%</p>
              <p className="text-white/40 mt-3 text-base max-w-[220px] leading-relaxed">
                no cuenta con un espacio seguro para hablar de su salud
              </p>
            </div>
            <div className="hidden sm:block w-px self-stretch bg-white/[0.07]" />
            <p className="text-white/25 text-sm leading-relaxed max-w-sm self-center italic">
              Dato de investigación con usuarias de EntreNosotras, 2024.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
