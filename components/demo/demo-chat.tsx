"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Sparkles } from "lucide-react"

interface Message {
  id: number
  text: string
  isUser: boolean
  typing?: boolean
}

const predefinedResponses: Record<string, string> = {
  "ciclo": "El ciclo menstrual típico dura entre 21 y 35 días. Se divide en 4 fases: menstruación, folicular, ovulación y lútea. Cada fase tiene características hormonales únicas que afectan tu cuerpo y emociones.",
  "flujo": "El flujo vaginal es completamente normal y cambia durante tu ciclo. Un flujo claro o blanco sin olor fuerte es saludable. Si notas cambios en color, olor o textura, es buena idea consultar a un profesional.",
  "dolor": "Los cólicos menstruales son causados por contracciones del útero. Puedes aliviarlos con calor local, ejercicio suave, hidratación y en algunos casos medicamentos. Si el dolor es muy intenso, consulta a tu médico.",
  "anticonceptivos": "Existen varios métodos anticonceptivos: hormonales (píldora, parche, implante), de barrera (condón, DIU) y naturales. Cada uno tiene ventajas y consideraciones. Un profesional de salud puede ayudarte a elegir el mejor para ti.",
  "default": "Gracias por tu pregunta. La salud menstrual y reproductiva es importante. Te recomiendo explorar nuestra biblioteca educativa para más información, o consultar con un profesional de salud para orientación personalizada."
}

export function DemoChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy tu asistente de salud de EntreNosotras. Puedo ayudarte con información sobre tu ciclo menstrual, flujo vaginal, dolor, anticonceptivos y más. ¿En qué puedo ayudarte hoy?",
      isUser: false
    }
  ])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (text: string): string => {
    const lowerText = text.toLowerCase()
    if (lowerText.includes("ciclo") || lowerText.includes("menstrual") || lowerText.includes("periodo")) {
      return predefinedResponses.ciclo
    }
    if (lowerText.includes("flujo") || lowerText.includes("descarga") || lowerText.includes("vaginal")) {
      return predefinedResponses.flujo
    }
    if (lowerText.includes("dolor") || lowerText.includes("cólico") || lowerText.includes("colico") || lowerText.includes("cramp")) {
      return predefinedResponses.dolor
    }
    if (lowerText.includes("anticonceptivo") || lowerText.includes("píldora") || lowerText.includes("pildora") || lowerText.includes("condón") || lowerText.includes("condon")) {
      return predefinedResponses.anticonceptivos
    }
    return predefinedResponses.default
  }

  const handleSend = () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isUser: true
    }

    setMessages(prev => [...prev, userMessage])
    setInputText("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(inputText)
      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        isUser: false
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#E9D5FF] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-[#374151]">Asistente de Salud</h2>
            <p className="text-xs text-[#10B981]">En línea</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.isUser
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white rounded-br-md"
                  : "bg-white border border-[#E9D5FF] text-[#374151] rounded-bl-md shadow-sm"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-[#E9D5FF] rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t border-[#E9D5FF] p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu pregunta..."
            className="flex-1 bg-[#F5F3FF] rounded-full px-4 py-3 text-sm text-[#374151] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/50"
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim()}
            className="w-10 h-10 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
