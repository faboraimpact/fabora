import type { Metadata } from "next"

import {
  HeroSection,
  CategoryGrid,
  FaqAccordion,
  CtaSection,
} from "@/src/components/faq"

export const metadata: Metadata = {
  title: "FAQ | Fabora Impact",
  description:
    "Trouvez des réponses à vos questions sur nos services de recrutement, intérim, plateforme digitale et conseil RH en Afrique.",
}

export default function FaqPage() {
  return (
    <main className="bg-background selection:bg-primary/20 selection:text-primary">
      <HeroSection />
      <CategoryGrid />
      <FaqAccordion />
      <CtaSection />
    </main>
  )
}
