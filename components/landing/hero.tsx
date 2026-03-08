"use client"

import { Button } from "@/components/ui/button"
import { Play, ChevronDown, MessageCircle, Calendar, BookOpen, Heart, Sparkles, Shield } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern gradient background with multiple layers */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE] to-[#FCE7F3]" />
      
      {/* Secondary gradient overlay for depth */}
      <div className="absolute inset-0 -z-19 bg-gradient-to-t from-[#FBCFE8]/30 via-transparent to-[#E9D5FF]/40" />

      {/* Animated mesh gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Large primary blob - top left */}
        <div 
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-[#A78BFA]/40 to-[#C4B5FD]/30 rounded-full blur-[100px] animate-blob"
        />
        
        {/* Secondary blob - bottom right */}
        <div 
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-gradient-to-tl from-[#F9A8D4]/50 to-[#FBCFE8]/40 rounded-full blur-[120px] animate-blob"
          style={{ animationDelay: "2s" }}
        />
        
        {/* Accent blob - center */}
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#7C3AED]/20 to-[#A78BFA]/20 rounded-full blur-[80px] animate-pulse-soft"
          style={{ animationDelay: "1s" }}
        />

        {/* Small floating accent blobs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#E9D5FF]/60 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-[#FCE7F3]/70 rounded-full blur-2xl animate-float-reverse" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Decorative feminine health elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {/* Floating hearts */}
        <div className="absolute top-[15%] left-[8%] animate-float-slow" style={{ animationDelay: "0.5s" }}>
          <div className="w-12 h-12 bg-gradient-to-br from-[#F9A8D4] to-[#FBCFE8] rounded-full flex items-center justify-center shadow-lg shadow-[#F9A8D4]/30">
            <Heart className="w-6 h-6 text-[#7C3AED]" fill="currentColor" />
          </div>
        </div>
        
        {/* Sparkles element */}
        <div className="absolute top-[25%] right-[12%] animate-float-reverse" style={{ animationDelay: "1s" }}>
          <div className="w-10 h-10 bg-gradient-to-br from-[#C4B5FD] to-[#E9D5FF] rounded-full flex items-center justify-center shadow-lg shadow-[#C4B5FD]/30">
            <Sparkles className="w-5 h-5 text-[#7C3AED]" />
          </div>
        </div>

        {/* Shield/protection element */}
        <div className="absolute bottom-[20%] left-[5%] animate-float-slow" style={{ animationDelay: "2s" }}>
          <div className="w-14 h-14 bg-gradient-to-br from-[#A78BFA] to-[#C4B5FD] rounded-2xl flex items-center justify-center shadow-lg shadow-[#A78BFA]/30 rotate-12">
            <Shield className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Calendar element */}
        <div className="absolute bottom-[35%] right-[8%] animate-float-reverse hidden lg:flex" style={{ animationDelay: "0.8s" }}>
          <div className="w-16 h-16 bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8] rounded-2xl flex items-center justify-center shadow-lg shadow-[#F9A8D4]/20 -rotate-6">
            <Calendar className="w-8 h-8 text-[#7C3AED]" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#E9D5FF] shadow-sm animate-fade-in-up">
              <span className="w-2.5 h-2.5 bg-[#7C3AED] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#374151]">Tu salud, tu bienestar</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#374151] text-balance animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#7C3AED] bg-clip-text text-transparent">Entre</span>Nosotras
            </h1>

            <p className="text-xl md:text-2xl text-[#6B7280] max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Un espacio seguro para aprender sobre <span className="text-[#7C3AED] font-medium">salud menstrual</span> y <span className="text-[#7C3AED] font-medium">reproductiva</span> sin tabúes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button 
                size="lg" 
                className="text-lg px-8 py-7 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] hover:from-[#6D28D9] hover:to-[#8B5CF6] text-white shadow-xl shadow-[#7C3AED]/30 hover:shadow-2xl hover:shadow-[#7C3AED]/40 hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <a href="#demo">
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-7 rounded-full bg-white/50 backdrop-blur-sm border-[#E9D5FF] text-[#374151] hover:bg-white/80 hover:border-[#C4B5FD] hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <a href="#problema">
                  Saber más
                </a>
              </Button>
            </div>

            {/* Stats mini badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E9D5FF]">
                <Heart className="w-4 h-4 text-[#F9A8D4]" fill="currentColor" />
                <span className="text-sm text-[#6B7280]">100% Confidencial</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-[#E9D5FF]">
                <Shield className="w-4 h-4 text-[#7C3AED]" />
                <span className="text-sm text-[#6B7280]">Información Verificada</span>
              </div>
            </div>
          </div>

          {/* Right - Enhanced Phone mockup */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/30 to-[#F9A8D4]/30 rounded-[4rem] blur-3xl scale-110 animate-pulse-soft" />
              
              {/* Phone frame - Larger size */}
              <div className="relative animate-float">
                <div className="relative w-[300px] md:w-[340px] lg:w-[360px] bg-gradient-to-b from-[#1F2937] to-[#111827] rounded-[3.5rem] p-3 shadow-2xl shadow-[#7C3AED]/20">
                  {/* Phone inner bezel */}
                  <div className="bg-[#0F172A] rounded-[3rem] p-1">
                    <div className="bg-white rounded-[2.75rem] overflow-hidden">
                      {/* Phone notch area */}
                      <div className="bg-gradient-to-b from-[#F5F3FF] to-[#EDE9FE] pt-8 pb-4 px-4 relative">
                        {/* Dynamic island */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full" />
                        
                        {/* App header */}
                        <div className="text-center mt-4">
                          <h3 className="text-xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] bg-clip-text text-transparent">EntreNosotras</h3>
                          <p className="text-xs text-[#6B7280] mt-1">Tu asistente de salud femenina</p>
                        </div>
                      </div>
                      
                      {/* App screen content */}
                      <div className="bg-gradient-to-b from-[#EDE9FE] to-white p-4 h-[500px] md:h-[560px] lg:h-[580px]">
                        {/* Chat preview */}
                        <div className="space-y-4 mb-6">
                          <div className="flex gap-2 items-end">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs font-bold">T</span>
                            </div>
                            <div className="bg-white rounded-2xl rounded-bl-sm p-4 max-w-[80%] shadow-sm border border-[#E9D5FF]">
                              <p className="text-sm text-[#374151]">¿Por qué mi ciclo es irregular este mes?</p>
                            </div>
                          </div>
                          
                          <div className="flex gap-2 items-end justify-end">
                            <div className="bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-2xl rounded-br-sm p-4 max-w-[85%] shadow-lg">
                              <p className="text-sm text-white leading-relaxed">Los ciclos pueden variar por estrés, cambios de peso, ejercicio intenso o factores hormonales. Es normal tener variaciones de 2-7 días.</p>
                            </div>
                          </div>

                          <div className="flex gap-2 items-end">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs font-bold">T</span>
                            </div>
                            <div className="bg-white rounded-2xl rounded-bl-sm p-4 max-w-[75%] shadow-sm border border-[#E9D5FF]">
                              <p className="text-sm text-[#374151]">¿Cuándo debería preocuparme?</p>
                            </div>
                          </div>
                        </div>

                        {/* Quick actions */}
                        <div className="grid grid-cols-3 gap-3 mt-auto">
                          <div className="bg-white border border-[#E9D5FF] rounded-2xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8] rounded-xl flex items-center justify-center mx-auto mb-2">
                              <MessageCircle className="w-5 h-5 text-[#7C3AED]" />
                            </div>
                            <span className="text-xs text-[#6B7280] font-medium">Chat IA</span>
                          </div>
                          <div className="bg-white border border-[#E9D5FF] rounded-2xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#E9D5FF] to-[#C4B5FD] rounded-xl flex items-center justify-center mx-auto mb-2">
                              <Calendar className="w-5 h-5 text-[#7C3AED]" />
                            </div>
                            <span className="text-xs text-[#6B7280] font-medium">Mi Ciclo</span>
                          </div>
                          <div className="bg-white border border-[#E9D5FF] rounded-2xl p-4 text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#F3E8FF] to-[#E9D5FF] rounded-xl flex items-center justify-center mx-auto mb-2">
                              <BookOpen className="w-5 h-5 text-[#7C3AED]" />
                            </div>
                            <span className="text-xs text-[#6B7280] font-medium">Aprende</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements around phone */}
                <div className="absolute -top-6 -left-12 bg-white rounded-2xl p-4 shadow-xl border border-[#E9D5FF] animate-float-slow" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8] rounded-xl flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-[#7C3AED]" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#374151] block">Chat 24/7</span>
                      <span className="text-xs text-[#6B7280]">Siempre disponible</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-8 bg-white rounded-2xl p-4 shadow-xl border border-[#E9D5FF] animate-float-reverse" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#E9D5FF] to-[#C4B5FD] rounded-xl flex items-center justify-center">
                      <Heart className="w-5 h-5 text-[#7C3AED]" fill="currentColor" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#374151] block">Tu ciclo</span>
                      <span className="text-xs text-[#6B7280]">28 días promedio</span>
                    </div>
                  </div>
                </div>

                {/* Notification badge */}
                <div className="absolute top-12 -right-4 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] rounded-full px-3 py-1.5 shadow-lg animate-float-slow" style={{ animationDelay: "1.5s" }}>
                  <span className="text-xs text-white font-medium">Nuevo tip disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#problema" className="flex flex-col items-center text-[#6B7280] hover:text-[#7C3AED] transition-colors">
            <span className="text-sm mb-2 font-medium">Descubre más</span>
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
