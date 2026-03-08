"use client"

import { Sparkles, MessageCircle, Droplets, Activity, Pill, Heart } from "lucide-react"

type Screen = "home" | "chat" | "library" | "tracker"

interface DemoHomeProps {
  onNavigate: (screen: Screen) => void
}

export function DemoHome({ onNavigate }: DemoHomeProps) {
  const quickTopics = [
    { icon: Activity, label: "Ciclo", color: "from-[#7C3AED] to-[#A78BFA]" },
    { icon: Droplets, label: "Flujo", color: "from-[#EC4899] to-[#F9A8D4]" },
    { icon: Heart, label: "Dolor", color: "from-[#F59E0B] to-[#FCD34D]" },
    { icon: Pill, label: "Anticonceptivos", color: "from-[#10B981] to-[#6EE7B7]" },
  ]

  return (
    <div className="h-full overflow-y-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs text-[#6B7280]">Bienvenida</p>
          <h1 className="text-lg font-bold text-[#374151]">Hola, Ana</h1>
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center shadow-md">
          <span className="text-sm font-bold text-white">A</span>
        </div>
      </div>

      {/* Tip of the Day */}
      <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#FBCFE8]/30 rounded-2xl p-4 mb-6 border border-[#E9D5FF]">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xs font-semibold text-[#7C3AED] mb-1">Tip del día</p>
            <p className="text-sm text-[#374151] leading-relaxed">
              Mantente hidratada durante tu ciclo. El agua ayuda a reducir la hinchazón y los cólicos menstruales.
            </p>
          </div>
        </div>
      </div>

      {/* AI Assistant Button */}
      <button
        onClick={() => onNavigate("chat")}
        className="w-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-2xl p-4 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div className="text-left flex-1">
            <p className="text-white font-semibold">Asistente de Salud</p>
            <p className="text-white/80 text-xs">Pregúntame lo que quieras</p>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Quick Topics */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-[#374151] mb-3">Temas rápidos</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickTopics.map((topic, index) => (
            <button
              key={index}
              onClick={() => onNavigate("chat")}
              className="bg-white rounded-xl p-3 border border-[#E9D5FF] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-3"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${topic.color} rounded-xl flex items-center justify-center`}>
                <topic.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-[#374151]">{topic.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Cycle Preview Card */}
      <button
        onClick={() => onNavigate("tracker")}
        className="w-full bg-white rounded-2xl p-4 border border-[#E9D5FF] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-[#6B7280] mb-1">Tu ciclo actual</p>
            <p className="text-2xl font-bold text-[#7C3AED]">Día 14</p>
            <p className="text-xs text-[#6B7280]">Fase ovulatoria</p>
          </div>
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 -rotate-90">
              <circle cx="32" cy="32" r="28" fill="none" stroke="#E9D5FF" strokeWidth="6" />
              <circle 
                cx="32" cy="32" r="28" fill="none" stroke="url(#gradient)" strokeWidth="6" 
                strokeDasharray="176" strokeDashoffset="88" strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#FBCFE8" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#7C3AED]">50%</span>
          </div>
        </div>
      </button>
    </div>
  )
}
