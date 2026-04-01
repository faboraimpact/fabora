import type { Metadata } from "next"
import { HeroSection } from "@/src/components/partners/hero-section"
import { MetricsSection } from "@/src/components/partners/metrics-section"
import { PartnersGrid } from "@/src/components/partners/partners-grid"
import { TestimonialsSection } from "@/src/components/partners/testimonials-section"
import { CtaSection } from "@/src/components/partners/cta-section"

export const metadata: Metadata = {
  title: "Partenaires | Fabora Impact",
  description:
    "Découvrez nos partenaires stratégiques. Fabora Impact accompagne les leaders africains dans leur quête d'excellence opérationnelle.",
}

export default function PartnersPage() {
  return (
    <main>
      <HeroSection />
      <MetricsSection />
      <PartnersGrid />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}