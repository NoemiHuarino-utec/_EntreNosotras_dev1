"use client"

import { useState } from "react"
import { Activity, Droplets, Heart, Pill, HelpCircle, X, ChevronRight } from "lucide-react"

interface Topic {
  id: number
  icon: React.ElementType
  title: string
  description: string
  color: string
  content: string
}

const topics: Topic[] = [
  {
    id: 1,
    icon: Activity,
    title: "Ciclo Menstrual",
    description: "Entiende las fases de tu ciclo",
    color: "from-[#7C3AED] to-[#A78BFA]",
    content: "El ciclo menstrual es el proceso mensual que prepara tu cuerpo para un posible embarazo. Tiene 4 fases principales:\n\n1. **Menstruación (días 1-5)**: El revestimiento uterino se desprende.\n\n2. **Fase Folicular (días 1-13)**: Los óvulos maduran en los ovarios.\n\n3. **Ovulación (día 14)**: Se libera un óvulo maduro.\n\n4. **Fase Lútea (días 15-28)**: El cuerpo se prepara para un posible embarazo.\n\nCada ciclo es único y puede variar de 21 a 35 días."
  },
  {
    id: 2,
    icon: Droplets,
    title: "Flujo Vaginal",
    description: "Qué es normal y qué no",
    color: "from-[#EC4899] to-[#F9A8D4]",
    content: "El flujo vaginal es completamente normal y cambia durante tu ciclo:\n\n**Flujo saludable:**\n- Claro o blanco\n- Sin olor fuerte\n- Cantidad variable según el ciclo\n\n**Durante la ovulación:**\n- Más abundante\n- Clara como clara de huevo\n- Elástico\n\n**Cuándo consultar:**\n- Cambio de color (verde, amarillo, gris)\n- Olor fuerte o desagradable\n- Picazón o irritación\n- Textura inusual"
  },
  {
    id: 3,
    icon: Heart,
    title: "Higiene Menstrual",
    description: "Productos y cuidados",
    color: "from-[#F59E0B] to-[#FCD34D]",
    content: "Existen varios productos para la higiene menstrual:\n\n**Toallas sanitarias:**\n- Fáciles de usar\n- Variedad de tamaños\n- Desechables o reutilizables\n\n**Tampones:**\n- Discretos\n- Permiten actividad física\n- Cambiar cada 4-8 horas\n\n**Copa menstrual:**\n- Reutilizable\n- Económica a largo plazo\n- Dura hasta 12 horas\n\n**Tips de higiene:**\n- Lavar con agua y jabón suave\n- Cambiar productos regularmente\n- Usar ropa interior cómoda"
  },
  {
    id: 4,
    icon: Pill,
    title: "Métodos Anticonceptivos",
    description: "Opciones disponibles",
    color: "from-[#10B981] to-[#6EE7B7]",
    content: "Los métodos anticonceptivos se dividen en categorías:\n\n**Hormonales:**\n- Píldora anticonceptiva\n- Parche\n- Implante subdérmico\n- Inyección\n\n**De barrera:**\n- Condón masculino/femenino\n- Diafragma\n\n**Intrauterinos:**\n- DIU de cobre\n- DIU hormonal\n\n**Naturales:**\n- Método del calendario\n- Método de la temperatura\n\nConsulta con un profesional de salud para elegir el mejor método para ti."
  },
  {
    id: 5,
    icon: HelpCircle,
    title: "Mitos y Preguntas",
    description: "Desmintiendo creencias",
    color: "from-[#6366F1] to-[#A5B4FC]",
    content: "**Mitos comunes:**\n\n❌ \"No puedes bañarte durante tu periodo\"\n✅ Puedes bañarte normalmente. La higiene es importante.\n\n❌ \"El periodo se sincroniza con amigas\"\n✅ No hay evidencia científica de esto.\n\n❌ \"No puedes hacer ejercicio\"\n✅ El ejercicio puede ayudar con los cólicos.\n\n❌ \"Los tampones hacen perder la virginidad\"\n✅ Los tampones no afectan la virginidad.\n\n**Preguntas frecuentes:**\n- Es normal tener ciclos irregulares al principio\n- El sangrado entre periodos debe consultarse\n- El dolor extremo no es normal"
  }
]

export function DemoLibrary() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)

  if (selectedTopic) {
    return (
      <div className="h-full flex flex-col bg-white">
        {/* Topic header */}
        <div className={`bg-gradient-to-r ${selectedTopic.color} px-4 py-6`}>
          <button
            onClick={() => setSelectedTopic(null)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <X className="w-5 h-5" />
            <span className="text-sm">Cerrar</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <selectedTopic.icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white">{selectedTopic.title}</h2>
          </div>
        </div>

        {/* Topic content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="prose prose-sm max-w-none">
            {selectedTopic.content.split("\n").map((line, index) => {
              if (line.startsWith("**") && line.endsWith("**")) {
                return <h3 key={index} className="text-base font-bold text-[#374151] mt-4 mb-2">{line.replace(/\*\*/g, "")}</h3>
              }
              if (line.startsWith("- ")) {
                return <p key={index} className="text-sm text-[#374151] ml-4 mb-1">• {line.substring(2)}</p>
              }
              if (line.startsWith("❌") || line.startsWith("✅")) {
                return <p key={index} className="text-sm text-[#374151] mb-2">{line}</p>
              }
              if (line.match(/^\d\./)) {
                return <p key={index} className="text-sm text-[#374151] mb-2 font-medium">{line}</p>
              }
              if (line.trim() === "") {
                return <div key={index} className="h-2" />
              }
              return <p key={index} className="text-sm text-[#374151] leading-relaxed mb-2">{line.replace(/\*\*/g, "")}</p>
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-[#374151] mb-1">Biblioteca Educativa</h1>
        <p className="text-sm text-[#6B7280]">Aprende sobre tu salud menstrual</p>
      </div>

      {/* Topics list */}
      <div className="space-y-3">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => setSelectedTopic(topic)}
            className="w-full bg-white rounded-2xl p-4 border border-[#E9D5FF] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 bg-gradient-to-br ${topic.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <topic.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-sm font-semibold text-[#374151]">{topic.title}</h3>
                <p className="text-xs text-[#6B7280]">{topic.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#6B7280]" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
