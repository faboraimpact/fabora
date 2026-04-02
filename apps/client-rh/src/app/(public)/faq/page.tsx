import { FaqHero, FaqCategories, FaqAccordion, FaqCta } from "@/components/faq"

export const metadata = {
  title: "FAQ | Fabora Impact",
  description:
    "Trouvez des réponses à vos questions sur nos services de recrutement, intérim, conseil RH et notre plateforme digitale en Afrique de l'Ouest.",
}

export default function FaqPage() {
  return (
    <main className="selection:bg-muted">
      <FaqHero />
      <FaqCategories />
      <FaqAccordion />
      <FaqCta />
    </main>
  )
}
