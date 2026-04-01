import type { Metadata } from "next"

import { CtaSection } from "@/src/components/about/cta-section"
import { HeroSection } from "@/src/components/about/hero-section"
import { MetricsSection } from "@/src/components/about/metrics-section"
import { RegionalPresenceSection } from "@/src/components/about/regional-presence-section"
import { StorySection } from "@/src/components/about/story-section"
import { TeamSection } from "@/src/components/about/team-section"
import { ValuesSection } from "@/src/components/about/values-section"

export const metadata: Metadata = {
  title: "À Propos | Fabora Impact",
  description:
    "Découvrez Fabora Impact, cabinet de conseil RH engagé pour l'excellence et le développement durable du capital humain africain.",
}

export default function AboutPage() {
  return (
    <main className="selection:bg-primary/20">
      <HeroSection />
      <StorySection />
      <MetricsSection />
      <ValuesSection />
      <RegionalPresenceSection />
      <TeamSection />
      <CtaSection />
    </main>
  )
}
