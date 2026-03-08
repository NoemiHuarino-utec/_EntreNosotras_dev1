"use client"

import { Sparkles, MessageCircle, Droplets, Activity, Pill, Heart, Moon, ArrowRight } from "lucide-react"

type Screen = "home" | "chat" | "library" | "tracker"

interface DemoHomeProps {
  onNavigate: (screen: Screen) => void
  userName: string
}

export function DemoHome({ onNavigate, userName }: DemoHomeProps) {
  const quickTopics = [
    { icon: Activity, label: "Ciclo", color: "from-[#7C3AED] to-[#A78BFA]", bgColor: "from-[#7C3AED]/10 to-[#A78BFA]/5" },
    { icon: Droplets, label: "Flujo", color: "from-[#EC4899] to-[#F9A8D4]", bgColor: "from-[#EC4899]/10 to-[#F9A8D4]/5" },
    { icon: Heart, label: "Dolor", color: "from-[#F59E0B] to-[#FCD34D]", bgColor: "from-[#F59E0B]/10 to-[#FCD34D]/5" },
    { icon: Pill, label: "Anticonceptivos", color: "from-[#10B981] to-[#6EE7B7]", bgColor: "from-[#10B981]/10 to-[#6EE7B7]/5" },
  ]

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
          <h1 className="text-lg font-bold text-[#374151]">Hola, {userName}</h1>
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center shadow-md">
          <span className="text-sm font-bold text-white">{userName.charAt(0).toUpperCase()}</span>
        </div>
      </div>

      {/* Cycle Status Card */}
      <button
        onClick={() => onNavigate("tracker")}
        className="w-full mb-5 group"
      >
        <div className="bg-gradient-to-br from-[#7C3AED]/5 via-[#A78BFA]/10 to-[#FBCFE8]/20 rounded-2xl p-4 border border-[#E9D5FF]/60 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-0.5 group-active:scale-[0.98]">
          <div className="flex items-center gap-4">
            {/* Circular Progress */}
            <div className="relative w-16 h-16 flex-shrink-0">
              <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="26" fill="none" stroke="#E9D5FF" strokeWidth="5" />
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
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-bold text-[#7C3AED] leading-none">{cycleDay}</span>
                <span className="text-[8px] text-[#6B7280] uppercase tracking-wider">dia</span>
              </div>
            </div>

            {/* Cycle Info */}
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-1">
                <Moon className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span className="text-xs font-medium text-[#7C3AED]">{cyclePhase}</span>
              </div>
              <p className="text-[10px] text-[#6B7280] leading-relaxed">
                Tu periodo de mayor fertilidad. Es normal sentir mas energia estos dias.
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
                <p className="text-xs font-semibold text-[#7C3AED]">Tip del dia</p>
                <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
              </div>
              <p className="text-sm text-[#374151] leading-relaxed">
                Mantente hidratada durante tu ciclo. El agua ayuda a reducir la hinchazon y los colicos menstruales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Button - Enhanced with vibrant gradient, glow, and floating animation */}
      <button
        onClick={() => onNavigate("chat")}
        className="w-full mb-5 group relative animate-float-slow"
      >
        {/* Outer glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#EC4899] rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
        
        {/* Main card */}
        <div className="relative bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#A855F7] rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
          {/* Shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          
          {/* Decorative circles */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-sm" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full blur-md" />
          
          <div className="relative flex items-center gap-4">
            {/* Icon container with glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-2xl blur-md scale-110" />
              <div className="relative w-14 h-14 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
            </div>
            
            <div className="text-left flex-1">
              <p className="text-white font-bold text-base">Asistente de Salud</p>
              <p className="text-white/80 text-xs mt-0.5">Preguntame lo que quieras, estoy aqui para ayudarte</p>
            </div>
            
            {/* Arrow with slide animation */}
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300">
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </button>

      {/* Quick Topics - Enhanced with pastel gradients and animations */}
      <div className="mb-5">
        <h2 className="text-sm font-semibold text-[#374151] mb-3">Temas rapidos</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickTopics.map((topic, index) => (
            <button
              key={index}
              onClick={() => onNavigate("chat")}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95"
            >
              {/* Pastel gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${topic.bgColor} opacity-80`} />
              
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              
              <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/80 shadow-sm">
                <div className="flex items-center gap-3">
                  {/* Colorful icon with shadow */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${topic.color} rounded-xl blur-md opacity-50 scale-110`} />
                    <div className={`relative w-11 h-11 bg-gradient-to-br ${topic.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <topic.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-[#374151]">{topic.label}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
