import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { Insights } from "@/components/landing/insights"
import { Solution } from "@/components/landing/solution"
import { Features } from "@/components/landing/features"
import { Demo } from "@/components/landing/demo"
import { Roadmap } from "@/components/landing/roadmap"
import { Team } from "@/components/landing/team"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Problem />
        <Insights />
        <Solution />
        <Features />
        <Demo />
        <Roadmap />
        <Team />
        <Footer />
      </div>
    </main>
  )
}
