"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Send, Sparkles, Heart } from "lucide-react"

interface Message {
  id: number
  text: string
  isUser: boolean
  displayedText?: string
  isTyping?: boolean
}

const responseVariations: Record<string, string[]> = {
  ciclo: [
    "El ciclo menstrual es un proceso natural que dura entre 21 y 35 días en la mayoría de las mujeres. Se compone de cuatro fases principales: la menstruación (días 1-5), la fase folicular (días 1-13), la ovulación (día 14 aproximadamente) y la fase lútea (días 15-28). Cada fase tiene sus propias características hormonales que pueden influir en tu estado de ánimo, energía y bienestar general.",
    "Tu ciclo menstrual es único y puede variar de mes a mes. Lo importante es conocer tu propio patrón. Generalmente dura entre 21 y 35 días. Durante este tiempo, tu cuerpo pasa por cambios hormonales naturales que preparan tu útero para un posible embarazo cada mes.",
    "Entender tu ciclo menstrual te ayuda a conocer mejor tu cuerpo. Las cuatro fases (menstrual, folicular, ovulatoria y lútea) están controladas por hormonas como el estrógeno y la progesterona. Cada fase puede afectar diferente tu energía, apetito y emociones."
  ],
  flujo: [
    "El flujo vaginal es completamente normal y es la forma en que tu cuerpo se mantiene limpio y saludable. Su textura y cantidad cambian durante el ciclo: puede ser más espeso y blanco después de tu período, transparente y elástico durante la ovulación, y más cremoso antes de la menstruación. Un flujo sin olor fuerte o color inusual generalmente indica buena salud vaginal.",
    "Es totalmente normal tener flujo vaginal, de hecho es señal de que tu cuerpo funciona bien. El flujo saludable puede ser claro, blanco o ligeramente amarillento, y su consistencia varía según la fase de tu ciclo. Si notas cambios significativos en olor, color o textura, puede ser buena idea consultarlo con un profesional.",
    "Tu flujo vaginal es un indicador importante de tu salud íntima. Cambia naturalmente durante el mes: más seco después del período, más húmedo y transparente cerca de la ovulación. Esto es completamente normal. Lo importante es conocer tu patrón personal para identificar cualquier cambio inusual."
  ],
  dolor: [
    "Los cólicos menstruales, aunque molestos, son muy comunes. Ocurren cuando el útero se contrae para expulsar su revestimiento. Algunas formas de aliviarlos incluyen: aplicar calor en el abdomen con una bolsa térmica, hacer ejercicio suave como caminar o yoga, mantenerte hidratada y descansar lo suficiente. Si el dolor es muy intenso o interfiere con tu vida diaria, te recomiendo consultar con un profesional de salud.",
    "Entiendo que el dolor menstrual puede ser muy incómodo. Las contracciones uterinas que lo causan son normales, pero eso no significa que debas sufrir en silencio. El calor local, los estiramientos suaves y la hidratación pueden ayudar mucho. También existen medicamentos de venta libre que pueden aliviarte. No dudes en buscar ayuda médica si el dolor es severo.",
    "Los cólicos son una de las molestias más comunes durante el período. Tu útero se contrae para eliminar su revestimiento, y esto puede causar dolor. Consejos que pueden ayudarte: una almohadilla térmica en el abdomen, infusiones calientes de manzanilla, ejercicio ligero, y descanso. Si el dolor es muy fuerte o dura varios días, vale la pena consultar a un especialista."
  ],
  anticonceptivos: [
    "Existen muchos métodos anticonceptivos y cada uno tiene sus ventajas. Los hormonales (como la píldora, el parche o el implante) regulan tus hormonas para prevenir el embarazo. Los de barrera (como el condón o el diafragma) bloquean físicamente los espermatozoides. El DIU puede ser hormonal o de cobre. La elección depende de tu estilo de vida, salud y preferencias personales. Un profesional de salud puede ayudarte a encontrar el método ideal para ti.",
    "La anticoncepción es una decisión muy personal. Hay opciones para todos los estilos de vida: píldoras diarias, parches semanales, inyecciones mensuales, implantes que duran años, DIUs, condones y más. Cada método tiene diferentes niveles de efectividad y consideraciones. Te recomiendo informarte bien y consultar con un profesional para elegir el que mejor se adapte a ti.",
    "Elegir un método anticonceptivo es importante y personal. Los métodos hormonales son muy efectivos pero requieren seguimiento médico. Los condones también protegen contra ITS. El DIU es una opción de larga duración. No hay un método perfecto para todas, lo importante es encontrar el que funcione para tu cuerpo y tu vida."
  ],
  saludo: [
    "Estoy aquí para ayudarte con cualquier duda sobre salud menstrual y reproductiva. Puedes preguntarme sobre tu ciclo, flujo vaginal, cólicos, anticonceptivos o cualquier otro tema. Recuerda que esta información es educativa y no reemplaza la consulta con un profesional de salud.",
    "Me alegra que estés aquí buscando información. La educación sobre nuestro cuerpo es muy importante. Puedo ayudarte con temas como el ciclo menstrual, higiene íntima, métodos anticonceptivos y más. ¿Qué te gustaría saber?",
    "Bienvenida a este espacio seguro. Aquí puedes preguntar sin pena sobre cualquier tema relacionado con tu salud íntima. Estoy para orientarte con información confiable sobre menstruación, fertilidad, anticonceptivos y bienestar femenino."
  ],
  higiene: [
    "La higiene íntima es importante pero también simple. Tu vagina se limpia naturalmente, así que solo necesitas lavar el área externa (vulva) con agua tibia y, si lo deseas, un jabón suave sin fragancias. Evita las duchas vaginales y los productos perfumados que pueden alterar tu pH natural. Durante el período, cambia tu producto menstrual cada 4-8 horas según el flujo.",
    "Cuidar tu higiene íntima es más sencillo de lo que parece. La vagina tiene su propio sistema de limpieza natural. Solo necesitas lavar la zona externa con agua y un jabón neutro si lo prefieres. Evita productos con fragancias fuertes. Durante la menstruación, cambia regularmente tu toalla, tampón o copa menstrual.",
    "Tu zona íntima tiene un equilibrio natural que es importante respetar. Para una buena higiene: lava solo la vulva (parte externa) con agua tibia, usa ropa interior de algodón, evita productos perfumados, y durante tu período cambia tu producto menstrual con frecuencia. Menos es más cuando se trata de higiene íntima."
  ],
  default: [
    "Gracias por tu pregunta. La salud menstrual y reproductiva abarca muchos temas importantes. Si tienes dudas específicas sobre tu ciclo, flujo, dolor menstrual, anticonceptivos o higiene íntima, estaré encantada de ayudarte. También te invito a explorar nuestra biblioteca educativa para más información detallada.",
    "Entiendo tu curiosidad por aprender más sobre tu cuerpo. Aunque no tengo una respuesta específica para eso, puedo ayudarte con información sobre menstruación, fertilidad, métodos anticonceptivos y bienestar femenino. ¿Hay algún tema en particular que te interese?",
    "Es importante que busques información sobre tu salud. Aunque mi conocimiento tiene límites, puedo orientarte sobre ciclo menstrual, flujo vaginal, cólicos, anticonceptivos e higiene íntima. Para temas más específicos o preocupaciones médicas, siempre es mejor consultar con un profesional de salud."
  ]
}

const conversationalPrefixes = [
  "",
  "Qué buena pregunta. ",
  "Me alegra que preguntes. ",
  "Es importante saber esto. ",
  "Gracias por preguntar. ",
]

const conversationalSuffixes = [
  "",
  " ¿Tienes alguna otra pregunta?",
  " ¿Hay algo más que te gustaría saber?",
  " Estoy aquí si necesitas más información.",
  " No dudes en preguntar si tienes más dudas.",
]

export function DemoChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hola, soy tu asistente de salud de EntreNosotras. Estoy aquí para ayudarte con información sobre tu ciclo menstrual, flujo vaginal, cólicos, anticonceptivos y más. Este es un espacio seguro donde puedes preguntar sin pena. ¿En qué puedo ayudarte hoy?",
      isUser: false,
      displayedText: "Hola, soy tu asistente de salud de EntreNosotras. Estoy aquí para ayudarte con información sobre tu ciclo menstrual, flujo vaginal, cólicos, anticonceptivos y más. Este es un espacio seguro donde puedes preguntar sin pena. ¿En qué puedo ayudarte hoy?"
    }
  ])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current)
      }
    }
  }, [])

  const getRandomItem = <T,>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  const detectTopic = (text: string): string => {
    const lowerText = text.toLowerCase()
    
    if (lowerText.includes("hola") || lowerText.includes("buenos") || lowerText.includes("hi") || lowerText.includes("hey")) {
      return "saludo"
    }
    if (lowerText.includes("ciclo") || lowerText.includes("menstrual") || lowerText.includes("periodo") || lowerText.includes("regla") || lowerText.includes("menstruación") || lowerText.includes("menstruacion")) {
      return "ciclo"
    }
    if (lowerText.includes("flujo") || lowerText.includes("descarga") || lowerText.includes("vaginal") || lowerText.includes("secreción") || lowerText.includes("secrecion")) {
      return "flujo"
    }
    if (lowerText.includes("dolor") || lowerText.includes("cólico") || lowerText.includes("colico") || lowerText.includes("cramp") || lowerText.includes("duele") || lowerText.includes("molestia")) {
      return "dolor"
    }
    if (lowerText.includes("anticonceptivo") || lowerText.includes("píldora") || lowerText.includes("pildora") || lowerText.includes("condón") || lowerText.includes("condon") || lowerText.includes("diu") || lowerText.includes("implante") || lowerText.includes("prevenir embarazo")) {
      return "anticonceptivos"
    }
    if (lowerText.includes("higiene") || lowerText.includes("limpiar") || lowerText.includes("lavar") || lowerText.includes("jabón") || lowerText.includes("jabon") || lowerText.includes("ducha")) {
      return "higiene"
    }
    return "default"
  }

  const buildResponse = (topic: string): string => {
    const baseResponse = getRandomItem(responseVariations[topic])
    const prefix = Math.random() > 0.5 ? getRandomItem(conversationalPrefixes) : ""
    const suffix = Math.random() > 0.6 ? getRandomItem(conversationalSuffixes) : ""
    
    return prefix + baseResponse + suffix
  }

  const animateTyping = (messageId: number, fullText: string) => {
    let currentIndex = 0
    const charsPerTick = 3
    const tickInterval = 30

    setIsAnimating(true)

    typingIntervalRef.current = setInterval(() => {
      currentIndex += charsPerTick
      
      if (currentIndex >= fullText.length) {
        currentIndex = fullText.length
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current)
        }
        setIsAnimating(false)
      }

      setMessages(prev => 
        prev.map(msg => 
          msg.id === messageId 
            ? { ...msg, displayedText: fullText.slice(0, currentIndex) }
            : msg
        )
      )
    }, tickInterval)
  }

  const handleSend = () => {
    if (!inputText.trim() || isTyping || isAnimating) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      displayedText: inputText
    }

    setMessages(prev => [...prev, userMessage])
    const userInput = inputText
    setInputText("")
    setIsTyping(true)

    const typingDelay = 800 + Math.random() * 1200

    setTimeout(() => {
      const topic = detectTopic(userInput)
      const response = buildResponse(topic)
      
      const botMessageId = Date.now() + 1
      const botMessage: Message = {
        id: botMessageId,
        text: response,
        isUser: false,
        displayedText: "",
        isTyping: true
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
      
      setTimeout(() => {
        animateTyping(botMessageId, response)
      }, 100)
    }, typingDelay)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const suggestedQuestions = [
    "¿Qué es el ciclo menstrual?",
    "¿El flujo vaginal es normal?",
    "¿Cómo aliviar los cólicos?"
  ]

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-[#F5F3FF] to-white">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-[#E9D5FF] px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-11 h-11 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#10B981] rounded-full border-2 border-white" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-[#374151]">Asistente de Salud</h2>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
              <p className="text-xs text-[#10B981] font-medium">En línea ahora</p>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-1 text-[#7C3AED]">
            <Heart className="w-4 h-4 fill-current" />
            <span className="text-xs font-medium">Seguro</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"} animate-fade-in-up`}
            style={{ animationDuration: "0.3s" }}
          >
            {!message.isUser && (
              <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-md">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            )}
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                message.isUser
                  ? "bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white rounded-br-sm shadow-lg"
                  : "bg-white text-[#374151] rounded-bl-sm shadow-md border border-[#E9D5FF]/50"
              }`}
            >
              <p className="text-sm leading-relaxed">
                {message.displayedText || message.text}
                {!message.isUser && message.displayedText !== message.text && (
                  <span className="inline-block w-0.5 h-4 bg-[#7C3AED] ml-0.5 animate-pulse" />
                )}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start animate-fade-in-up" style={{ animationDuration: "0.3s" }}>
            <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center mr-2 flex-shrink-0 shadow-md">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="bg-white border border-[#E9D5FF]/50 rounded-2xl rounded-bl-sm px-4 py-3 shadow-md">
              <div className="flex gap-1.5 items-center h-5">
                <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-bounce" style={{ animationDelay: "0ms", animationDuration: "0.6s" }} />
                <span className="w-2 h-2 bg-[#A78BFA] rounded-full animate-bounce" style={{ animationDelay: "150ms", animationDuration: "0.6s" }} />
                <span className="w-2 h-2 bg-[#C4B5FD] rounded-full animate-bounce" style={{ animationDelay: "300ms", animationDuration: "0.6s" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      {messages.length <= 2 && !isTyping && !isAnimating && (
        <div className="px-4 pb-2">
          <p className="text-xs text-[#6B7280] mb-2">Preguntas sugeridas:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputText(question)
                }}
                className="text-xs bg-white border border-[#E9D5FF] text-[#7C3AED] px-3 py-1.5 rounded-full hover:bg-[#F5F3FF] transition-colors duration-200"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-[#E9D5FF] p-4">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu pregunta..."
            disabled={isTyping || isAnimating}
            className="flex-1 bg-[#F5F3FF] rounded-full px-5 py-3 text-sm text-[#374151] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30 focus:bg-white transition-all duration-200 disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={!inputText.trim() || isTyping || isAnimating}
            className="w-11 h-11 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
