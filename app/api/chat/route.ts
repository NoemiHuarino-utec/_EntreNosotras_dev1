import OpenAI from 'openai'
import { NextRequest, NextResponse } from 'next/server'

// The endpoint supports two modes:
// 1. OPENAI_API_KEY: uses OpenAI's ChatCompletion (requires credit)
// 2. fallback mock responses (completely free, deterministic)

const responseVariations: Record<string, string[]> = {
  ciclo: [
    "El ciclo menstrual es un proceso natural que dura entre 21 y 35 días en la mayoría de las mujeres. Se compone de cuatro fases principales: la menstruación, la fase folicular, la ovulación y la fase lútea.",
    "Tu ciclo menstrual es único y puede variar de mes a mes. Lo importante es conocer tu propio patrón.",
    "Entender tu ciclo menstrual te ayuda a conocer mejor tu cuerpo. Cada fase puede afectar diferente tu energía, apetito y emociones."
  ],
  flujo: [
    "El flujo vaginal es completamente normal y su textura y cantidad cambian durante el ciclo. Un flujo sin olor fuerte o color inusual generalmente indica buena salud.",
    "Es totalmente normal tener flujo vaginal; es señal de que tu cuerpo funciona bien. Su consistencia varía según la fase de tu ciclo.",
    "Tu flujo vaginal es un indicador importante de tu salud íntima. Cambia naturalmente durante el mes."
  ],
  dolor: [
    "Los cólicos menstruales son muy comunes y se pueden aliviar con calor, ejercicio suave y descanso.",
    "Entiendo que el dolor menstrual puede ser muy incómodo. El calor local y la hidratación suelen ayudar.",
    "Los cólicos son normales; puedes probar una almohadilla térmica o infusiones calientes para sentir alivio."
  ],
  anticonceptivos: [
    "Hay muchos métodos anticonceptivos: hormonales, de barrera, DIU. La elección depende de tu estilo de vida y salud.",
    "La anticoncepción es personal. Consulta con un profesional para encontrar el método adecuado para ti.",
    "El condón protege contra ITS y el embarazo; los métodos hormonales requieren seguimiento médico."
  ],
  higiene: [
    "La higiene íntima es sencilla: lava sólo la vulva con agua tibia y evita productos perfumados.",
    "Menos es más en higiene íntima. Cambia tu producto menstrual cada 4-8 horas con rutinas suaves.",
    "Tu vagina se limpia sola; usa ropa interior de algodón y evita duchas vaginales."
  ],
  default: [
    "Gracias por tu pregunta. Estoy aquí para ayudarte con salud menstrual y reproductiva.",
    "Entiendo tu curiosidad; si necesitas más información, explora nuestra biblioteca educativa.",
    "Para temas más específicos, siempre es mejor consultar con un profesional de salud."
  ]
};

const conversationalPrefixes = [
  "",
  "Qué buena pregunta. ",
  "Me alegra que preguntes. ",
  "Es importante saber esto. ",
  "Gracias por preguntar. ",
];

const conversationalSuffixes = [
  "",
  " ¿Tienes alguna otra pregunta?",
  " ¿Hay algo más que te gustaría saber?",
  " Estoy aquí si necesitas más información.",
  " No dudes en preguntar si tienes más dudas.",
];

function detectTopic(text: string): string {
  const lowerText = text.toLowerCase();
  if (lowerText.includes("ciclo") || lowerText.includes("menstrual")) return "ciclo";
  if (lowerText.includes("flujo")) return "flujo";
  if (lowerText.includes("dolor")) return "dolor";
  if (lowerText.includes("anticonceptivo")) return "anticonceptivos";
  if (lowerText.includes("higiene")) return "higiene";
  return "default";
}

function buildMockResponse(message: string): string {
  const topic = detectTopic(message);
  const base = responseVariations[topic] || responseVariations.default;
  const choice = base[Math.floor(Math.random() * base.length)];
  const prefix = conversationalPrefixes[Math.floor(Math.random() * conversationalPrefixes.length)];
  const suffix = conversationalSuffixes[Math.floor(Math.random() * conversationalSuffixes.length)];
  return prefix + choice + suffix;
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    // first try OpenAI if key present
    const openaiKey = process.env.OPENAI_API_KEY
    if (openaiKey) {
      console.log('OpenAI key found, calling API...')
      try {
        const openai = new OpenAI({ apiKey: openaiKey })
        const completion = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Eres un asistente de salud especializado en temas menstruales y reproductivos. Responde de manera empática, informativa y sin juzgar. Mantén un tono amigable, educativo y conversacional, como una amiga cercana. Usa emojis apropiados para hacer las respuestas más cálidas y accesibles. Sé detallada en tus explicaciones, pero mantén un lenguaje simple y comprensivo. Siempre anima a consultar a un profesional de salud para casos específicos. Responde en español.' },
            { role: 'user', content: message }
          ],
          max_tokens: 500,
          temperature: 0.7,
        })
        const text = completion.choices[0]?.message?.content
        console.log('OpenAI response text:', text)
        if (text) return NextResponse.json({ response: text })
      } catch (oaErr) {
        console.error('OpenAI error:', oaErr)
        // if key invalid or quota, fall through to next option
      }
      console.log('Falling back to mock after OpenAI attempt')
    } else {
      console.log('No OpenAI key, skipping')
    }


    // no keys or both services failed -> return mock
    const responseText = buildMockResponse(message)
    return NextResponse.json({ response: responseText })
  } catch (error) {
    console.error('Error handling chat request:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}