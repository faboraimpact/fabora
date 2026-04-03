import type { Metadata } from "next"
import {
  HeroSection,
  MetricsSection,
  TestimonialsSection,
  CtaSection,
  PartnersGrid,
  StrategicPositioningSection,
} from "@/components/partners"

export const metadata: Metadata = {
  title: "Partenaires | Fabora Impact",
  description:
    "Découvrez nos partenaires stratégiques. Fabora Impact accompagne les leaders africains dans leur quête d'excellence opérationnelle.",
}

export default function PartnersPage() {
  return (
    <main>
      <HeroSection />
      {/* <MetricsSection /> */}
      <StrategicPositioningSection />
      <PartnersGrid />
      <TestimonialsSection />
      <CtaSection />
    </main>
  )
}
