"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Linkedin } from "lucide-react";

const team = [
    { name: "Noemi Huarino",  avatar: "NH", color: "#a78bfa" },
    { name: "Sandra Aliaga",  avatar: "SA", color: "#f472b6" },
    { name: "Karla Bedregal", avatar: "KB", color: "#e879f9" },
    { name: "Laura Vilva",    avatar: "LV", color: "#818cf8" },
    { name: "Kattya Poma",    avatar: "KP", color: "#fb7185" },
];

function MemberCard({ member, index, size = "md" }: { member: typeof team[0], index: number, size?: "md" | "lg" }) {
    const isLg = size === "lg"
    return (
        <ScrollReveal direction="up" delay={index * 100}>
            <div className="relative group cursor-default overflow-hidden rounded-3xl p-8 flex flex-col justify-end" style={{ minHeight: isLg ? "320px" : "260px", background: `linear-gradient(135deg, ${member.color}18 0%, ${member.color}08 100%)` }}>
                {/* Huge initials background */}
                <span
                    className="absolute -bottom-4 -right-2 font-black leading-none select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 origin-bottom-right"
                    style={{ fontSize: isLg ? "9rem" : "7rem", color: member.color, opacity: 0.15 }}
                    aria-hidden
                >
                    {member.avatar}
                </span>

                {/* Colored dot */}
                <div className="w-3 h-3 rounded-full mb-4" style={{ backgroundColor: member.color }} />

                {/* Name */}
                <h3 className={`font-bold text-foreground leading-tight relative z-10 ${isLg ? "text-2xl" : "text-xl"}`}>
                    {member.name}
                </h3>

                {/* LinkedIn */}
                <a
                    href="#"
                    className="mt-3 flex items-center gap-1.5 w-fit relative z-10 transition-opacity duration-200 opacity-40 hover:opacity-100"
                    aria-label={`LinkedIn de ${member.name}`}
                >
                    <Linkedin className="w-3.5 h-3.5" style={{ color: member.color }} />
                    <span className="text-xs font-medium text-foreground">LinkedIn</span>
                </a>
            </div>
        </ScrollReveal>
    )
}

export function Team() {
    return (
        <section
            id="team"
            className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
        >
            <div className="flex-1 flex flex-col justify-center py-16">
                <div className="container mx-auto px-4">

                    {/* Section title */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl md:text-4xl font-black uppercase text-primary leading-none tracking-tight whitespace-nowrap">Nuestro Equipo</span>
                        <div className="flex-1 h-px bg-foreground/15" />
                        <span className="text-xs font-mono text-foreground/35 tracking-[0.2em] flex-shrink-0">07</span>
                    </div>

                    <p className="text-lg text-muted-foreground mb-14 max-w-lg">
                        Mujeres creando para mujeres — un equipo apasionado por la educación en salud femenina.
                    </p>

                    {/* Fila 1 — 3 personas */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        {team.slice(0, 3).map((member, i) => (
                            <MemberCard key={i} member={member} index={i} size="md" />
                        ))}
                    </div>

                    {/* Fila 2 — 2 personas más grandes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {team.slice(3).map((member, i) => (
                            <MemberCard key={i} member={member} index={i + 3} size="lg" />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
