"use client"

import { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, Droplets, Heart, Zap } from "lucide-react"

export function DemoCycleTracker() {
  const [lastPeriodDate, setLastPeriodDate] = useState<string>("")
  const [cycleLength, setCycleLength] = useState<number>(28)
  const [showResults, setShowResults] = useState(false)

  const calculateNextPeriod = () => {
    if (!lastPeriodDate) return null
    const startDate = new Date(lastPeriodDate)
    const nextPeriod = new Date(startDate)
    nextPeriod.setDate(startDate.getDate() + cycleLength)
    return nextPeriod
  }

  const calculateOvulation = () => {
    if (!lastPeriodDate) return null
    const startDate = new Date(lastPeriodDate)
    const ovulation = new Date(startDate)
    ovulation.setDate(startDate.getDate() + cycleLength - 14)
    return ovulation
  }

  const getCurrentPhase = () => {
    if (!lastPeriodDate) return null
    const startDate = new Date(lastPeriodDate)
    const today = new Date()
    const daysSinceStart = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    const dayInCycle = daysSinceStart % cycleLength

    if (dayInCycle <= 5) return { name: "Menstruación", color: "from-[#EC4899] to-[#F9A8D4]", icon: Droplets }
    if (dayInCycle <= 13) return { name: "Fase Folicular", color: "from-[#7C3AED] to-[#A78BFA]", icon: Zap }
    if (dayInCycle <= 16) return { name: "Ovulación", color: "from-[#F59E0B] to-[#FCD34D]", icon: Heart }
    return { name: "Fase Lútea", color: "from-[#10B981] to-[#6EE7B7]", icon: Calendar }
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })
  }

  const handleCalculate = () => {
    if (lastPeriodDate) {
      setShowResults(true)
    }
  }

  const nextPeriod = calculateNextPeriod()
  const ovulation = calculateOvulation()
  const currentPhase = getCurrentPhase()

  return (
    <div className="h-full overflow-y-auto p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-[#374151] mb-1">Seguimiento de Ciclo</h1>
        <p className="text-sm text-[#6B7280]">Calcula tu próximo periodo</p>
      </div>

      {!showResults ? (
        <div className="space-y-6">
          {/* Date input */}
          <div className="bg-white rounded-2xl p-4 border border-[#E9D5FF] shadow-sm">
            <label className="block text-sm font-medium text-[#374151] mb-2">
              Primer día de tu último periodo
            </label>
            <input
              type="date"
              value={lastPeriodDate}
              onChange={(e) => setLastPeriodDate(e.target.value)}
              className="w-full bg-[#F5F3FF] rounded-xl px-4 py-3 text-sm text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50"
            />
          </div>

          {/* Cycle length */}
          <div className="bg-white rounded-2xl p-4 border border-[#E9D5FF] shadow-sm">
            <label className="block text-sm font-medium text-[#374151] mb-2">
              Duración de tu ciclo (días)
            </label>
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCycleLength(Math.max(21, cycleLength - 1))}
                className="w-10 h-10 bg-[#F5F3FF] rounded-xl flex items-center justify-center text-[#7C3AED] hover:bg-[#7C3AED]/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-2xl font-bold text-[#7C3AED]">{cycleLength}</span>
              <button
                onClick={() => setCycleLength(Math.min(35, cycleLength + 1))}
                className="w-10 h-10 bg-[#F5F3FF] rounded-xl flex items-center justify-center text-[#7C3AED] hover:bg-[#7C3AED]/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-[#6B7280] text-center mt-2">Rango normal: 21-35 días</p>
          </div>

          {/* Calculate button */}
          <button
            onClick={handleCalculate}
            disabled={!lastPeriodDate}
            className="w-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-2xl py-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Calcular
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Current phase */}
          {currentPhase && (
            <div className={`bg-gradient-to-r ${currentPhase.color} rounded-2xl p-4 shadow-lg`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <currentPhase.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-xs">Fase actual</p>
                  <p className="text-white font-bold text-lg">{currentPhase.name}</p>
                </div>
              </div>
            </div>
          )}

          {/* Next period */}
          {nextPeriod && (
            <div className="bg-white rounded-2xl p-4 border border-[#E9D5FF] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EC4899] to-[#F9A8D4] rounded-xl flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#6B7280]">Próximo periodo</p>
                  <p className="text-sm font-bold text-[#374151]">{formatDate(nextPeriod)}</p>
                </div>
              </div>
            </div>
          )}

          {/* Ovulation */}
          {ovulation && (
            <div className="bg-white rounded-2xl p-4 border border-[#E9D5FF] shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[#6B7280]">Día de ovulación estimado</p>
                  <p className="text-sm font-bold text-[#374151]">{formatDate(ovulation)}</p>
                </div>
              </div>
            </div>
          )}

          {/* Cycle visualization */}
          <div className="bg-white rounded-2xl p-4 border border-[#E9D5FF] shadow-sm">
            <p className="text-sm font-medium text-[#374151] mb-3">Tu ciclo de {cycleLength} días</p>
            <div className="flex gap-1">
              {Array.from({ length: cycleLength }).map((_, i) => {
                let color = "bg-[#E9D5FF]"
                if (i < 5) color = "bg-[#EC4899]"
                else if (i >= cycleLength - 14 - 2 && i <= cycleLength - 14 + 2) color = "bg-[#F59E0B]"
                else if (i < 13) color = "bg-[#7C3AED]"
                else color = "bg-[#10B981]"
                
                return (
                  <div
                    key={i}
                    className={`flex-1 h-2 rounded-full ${color} ${i === 0 ? "rounded-l-full" : ""} ${i === cycleLength - 1 ? "rounded-r-full" : ""}`}
                  />
                )
              })}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-[#6B7280]">
              <span>Día 1</span>
              <span>Día {cycleLength}</span>
            </div>
          </div>

          {/* Reset button */}
          <button
            onClick={() => setShowResults(false)}
            className="w-full bg-[#F5F3FF] rounded-2xl py-3 text-[#7C3AED] font-medium hover:bg-[#7C3AED]/10 transition-colors"
          >
            Calcular de nuevo
          </button>

          {/* Disclaimer */}
          <p className="text-xs text-[#6B7280] text-center">
            Este cálculo es solo una estimación. Cada cuerpo es diferente y los ciclos pueden variar.
          </p>
        </div>
      )}
    </div>
  )
}
