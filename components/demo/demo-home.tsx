"use client"

import { Sparkles, MessageCircle, Droplets, Activity, Pill, Heart, Moon } from "lucide-react"

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

  // Cycle data
  const cycleDay = 14
  const cycleLength = 28
  const cyclePhase = "Fase ovulatoria"
  const cycleProgress = (cycleDay / cycleLength) * 100

  return (
    <div className="h-full overflow-y-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs text-[#6B7280]">Bienvenida</p>
          <h1 className="text-lg font-bold text-[#374151]">Hola, Ana</h1>
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center shadow-md">
          <span className="text-sm font-bold text-white">A</span>
        </div>
      </div>

      {/* Cycle Status Card - New */}
      <button
        onClick={() => onNavigate("tracker")}
        className="w-full mb-5 group"
      >
        <div className="bg-gradient-to-br from-[#7C3AED]/5 via-[#A78BFA]/10 to-[#FBCFE8]/20 rounded-2xl p-4 border border-[#E9D5FF]/60 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5 group-active:scale-[0.98]">
          <div className="flex items-center gap-4">
            {/* Circular Progress */}
            <div className="relative w-16 h-16 flex-shrink-0">
              <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                <circle 
                  cx="32" cy="32" r="26" 
                  fill="none" 
                  stroke="#E9D5FF" 
                  strokeWidth="5" 
                />
                <circle 
                  cx="32" cy="32" r="26" 
                  fill="none" 
                  stroke="url(#cycleGradient)" 
                  strokeWidth="5" 
                  strokeDasharray={`${cycleProgress * 1.63} 163`}
                  strokeLinecap="round"
                  className="transition-all duration-700"
                />
                <defs>
                  <linearGradient id="cycleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="50%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#FBCFE8" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-bold text-[#7C3AED] leading-none">{cycleDay}</span>
                <span className="text-[8px] text-[#6B7280] uppercase tracking-wider">día</span>
              </div>
            </div>

            {/* Cycle Info */}
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-1">
                <Moon className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span className="text-xs font-medium text-[#7C3AED]">{cyclePhase}</span>
              </div>
              <p className="text-[10px] text-[#6B7280] leading-relaxed">
                Tu período de mayor fertilidad. Es normal sentir más energía estos días.
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="h-1 flex-1 bg-[#E9D5FF] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-full transition-all duration-700"
                    style={{ width: `${cycleProgress}%` }}
                  />
                </div>
                <span className="text-[9px] text-[#6B7280] font-medium">{cycleDay}/{cycleLength}</span>
              </div>
            </div>

            {/* Arrow */}
            <div className="w-6 h-6 bg-[#7C3AED]/10 rounded-full flex items-center justify-center group-hover:bg-[#7C3AED]/20 transition-colors">
              <svg className="w-3 h-3 text-[#7C3AED] group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </button>

      {/* Tip of the Day - Enhanced with micro-interactions */}
      <div className="group relative mb-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] rounded-2xl overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-[#A78BFA]/15 to-[#FBCFE8]/20 animate-gradient-shift" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative bg-gradient-to-r from-[#7C3AED]/5 to-[#FBCFE8]/10 rounded-2xl p-4 border border-[#E9D5FF] backdrop-blur-sm">
          <div className="flex items-start gap-3">
            {/* Pulsing icon */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-xl animate-pulse-soft opacity-50 scale-110" />
              <div className="relative w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-xs font-semibold text-[#7C3AED]">Tip del día</p>
                <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
              </div>
              <p className="text-sm text-[#374151] leading-relaxed">
                Mantente hidratada durante tu ciclo. El agua ayuda a reducir la hinchazón y los cólicos menstruales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Button */}
      <button
        onClick={() => onNavigate("chat")}
        className="w-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-2xl p-4 mb-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
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
      <div className="mb-5">
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
    </div>
  )
}
