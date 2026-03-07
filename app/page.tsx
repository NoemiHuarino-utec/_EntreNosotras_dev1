import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { Solution } from "@/components/landing/solution"
import { Features } from "@/components/landing/features"
import { Demo } from "@/components/landing/demo"
import { Team } from "@/components/landing/team"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Problem />
        <Solution />
        <section id="features">
          <Features />
        </section>
        <section id="demo">
          <Demo />
        </section>
        <section id="team">
          <Team />
        </section>
        <Footer />
      </div>
    </main>
  )
}
