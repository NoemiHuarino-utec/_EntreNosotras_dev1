"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Linkedin, Github } from "lucide-react";

const team = [
    { name: "Noemi Huarino",  avatar: "NH", color: "#a78bfa", photo: "/fotos_equipo/noemi-huarino.jpeg", linkedin: "https://www.linkedin.com/in/noemihuarino/",         github: "https://github.com/NoemiHuarino-utec" },
    { name: "Sandra Aliaga",  avatar: "SA", color: "#f472b6", photo: "/fotos_equipo/sandra-aliaga.jpeg", linkedin: "https://www.linkedin.com/in/sandra-aliaga-03663a324/", github: "https://github.com/sandra-aliaga" },
    { name: "Karla Bedregal", avatar: "KB", color: "#e879f9", photo: "/fotos_equipo/karla-bredegal.jpeg", linkedin: "https://www.linkedin.com/in/karla-miluska-b-597a441bb/", github: null },
    { name: "Laura Vilca",    avatar: "LV", color: "#818cf8", photo: "/fotos_equipo/laura-vilca.jpeg",   linkedin: "https://www.linkedin.com/in/laura-vilca-b9329126a/", github: null },
    { name: "Kattya Poma",    avatar: "KP", color: "#fb7185", photo: "/fotos_equipo/katty-poma.jpeg",    linkedin: "http://linkedin.com/in/kattyapoma",                  github: null },
];

function MemberCard({ member, index, size = "md" }: { member: typeof team[0], index: number, size?: "md" | "lg" }) {
    const isLg = size === "lg"
    const cardBg = `${member.color}18`
    return (
        <ScrollReveal direction="up" delay={index * 100}>
            <div
                className="relative group cursor-default rounded-3xl overflow-hidden flex"
                style={{ height: isLg ? "260px" : "220px", background: cardBg }}
            >
                {/* Columna izquierda — foto */}
                <div className="relative w-1/2 flex-shrink-0 overflow-hidden">
                    <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                    />
                    <div
                        className="absolute inset-y-0 right-0 w-12"
                        style={{ background: `linear-gradient(to right, transparent, ${cardBg})` }}
                    />
                </div>

                {/* Columna derecha — info */}
                <div className="flex-1 flex flex-col justify-end px-5 pb-6 pt-4 relative overflow-hidden">
                    {/* Iniciales decorativas */}
                    <span
                        className="absolute -bottom-3 -right-2 font-black leading-none select-none pointer-events-none"
                        style={{ fontSize: isLg ? "8rem" : "6.5rem", color: member.color, opacity: 0.12 }}
                        aria-hidden
                    >
                        {member.avatar}
                    </span>

                    <div className="relative z-10">
                        <div className="w-3 h-3 rounded-full mb-3" style={{ backgroundColor: member.color }} />
                        <h3 className={`font-bold text-foreground leading-tight ${isLg ? "text-2xl" : "text-xl"}`}>
                            {member.name}
                        </h3>
                        <div className="mt-2 flex items-center gap-3">
                            <a
                                href={member.linkedin}
                                target={member.linkedin !== "#" ? "_blank" : undefined}
                                rel={member.linkedin !== "#" ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-1.5 w-fit transition-opacity duration-200 opacity-40 hover:opacity-100"
                                aria-label={`LinkedIn de ${member.name}`}
                            >
                                <Linkedin className="w-3.5 h-3.5" style={{ color: member.color }} />
                                <span className="text-xs font-medium text-foreground">LinkedIn</span>
                            </a>
                            {member.github && (
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 w-fit transition-opacity duration-200 opacity-40 hover:opacity-100"
                                    aria-label={`GitHub de ${member.name}`}
                                >
                                    <Github className="w-3.5 h-3.5" style={{ color: member.color }} />
                                    <span className="text-xs font-medium text-foreground">GitHub</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
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
