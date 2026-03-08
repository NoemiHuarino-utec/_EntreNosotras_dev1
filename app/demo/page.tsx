"use client"

import { useState } from "react"
import { DemoHome } from "@/components/demo/demo-home"
import { DemoChat } from "@/components/demo/demo-chat"
import { DemoLibrary } from "@/components/demo/demo-library"
import { DemoCycleTracker } from "@/components/demo/demo-cycle-tracker"
import { Home, MessageCircle, BookOpen, Calendar, Sparkles } from "lucide-react"

type Screen = "home" | "chat" | "library" | "tracker"

function NameInputScreen({ onSubmit }: { onSubmit: (name: string) => void }) {
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(name)
  }

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#F5F3FF] to-white">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-[#374151] mb-2">Bienvenida a EntreNosotras</h1>
        <p className="text-[#6B7280] text-sm">Para personalizar tu experiencia, ¿cómo te llamas?</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre"
          className="w-full px-4 py-3 rounded-xl border border-[#E9D5FF] bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent text-center text-lg font-medium"
          autoFocus
        />
        <button
          type="submit"
          disabled={!name.trim()}
          className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-300"
        >
          Continuar
        </button>
      </form>
    </div>
  )
}

export default function DemoPage() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home")
  const [userName, setUserName] = useState("")
  const [showNameInput, setShowNameInput] = useState(true)

  const handleNameSubmit = (name: string) => {
    if (name.trim()) {
      setUserName(name.trim())
      setShowNameInput(false)
    }
  }

  const navItems = [
    { id: "home" as Screen, icon: Home, label: "Inicio" },
    { id: "chat" as Screen, icon: MessageCircle, label: "Chat" },
    { id: "library" as Screen, icon: BookOpen, label: "Biblioteca" },
    { id: "tracker" as Screen, icon: Calendar, label: "Ciclo" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EDE9FE] via-[#F3E8FF] to-[#FCE7F3] flex items-center justify-center p-4">
      {/* Decorative blurred shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A78BFA]/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FBCFE8]/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      {/* Phone container */}
      <div className="relative z-10">
        {/* Back to landing link */}
        <a 
          href="/" 
          className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm text-[#7C3AED] hover:text-[#7C3AED]/80 transition-colors flex items-center gap-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </a>

        {/* Phone frame */}
        <div className="w-[375px] h-[780px] bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
            {/* Status bar */}
            <div className="bg-[#1a1a1a] h-10 flex items-center justify-center relative">
              <div className="absolute left-6 text-white text-xs font-medium">9:41</div>
              <div className="w-28 h-7 bg-[#1a1a1a] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-[#2a2a2a] rounded-full" />
              </div>
              <div className="absolute right-6 flex items-center gap-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3C6.95 3 3 6.95 3 12s3.95 9 9 9c.1 0 .2 0 .3 0C17.1 20.9 21 16.95 21 12s-3.9-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                </svg>
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                </svg>
              </div>
            </div>

            {/* Screen content */}
            <div className="flex-1 overflow-hidden bg-gradient-to-b from-[#F5F3FF] to-white">
              {showNameInput ? (
                <NameInputScreen onSubmit={handleNameSubmit} />
              ) : (
                <>
                  {currentScreen === "home" && <DemoHome onNavigate={setCurrentScreen} userName={userName} />}
                  {currentScreen === "chat" && <DemoChat />}
                  {currentScreen === "library" && <DemoLibrary />}
                  {currentScreen === "tracker" && <DemoCycleTracker />}
                </>
              )}
            </div>

            {/* Bottom navigation */}
            {!showNameInput && (
              <div className="bg-white border-t border-[#E9D5FF] px-4 py-2 pb-6">
                <div className="flex justify-around">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentScreen(item.id)}
                      className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 ${
                        currentScreen === item.id
                          ? "text-[#7C3AED] bg-[#7C3AED]/10"
                          : "text-[#6B7280] hover:text-[#7C3AED]"
                      }`}
                    >
                      <item.icon className={`w-5 h-5 transition-transform duration-300 ${currentScreen === item.id ? "scale-110" : ""}`} />
                      <span className="text-[10px] font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
