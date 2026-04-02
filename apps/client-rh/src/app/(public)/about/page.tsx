import {
  AboutHero,
  AboutIdentity,
  AboutMissionVision,
  AboutValues,
  AboutCta,
} from "@/components/about"

export const metadata = {
  title: "À Propos | Fabora Impact",
  description:
    "Découvrez l'histoire, la mission et les valeurs qui font de Fabora Impact votre partenaire RH de confiance en Afrique de l'Ouest.",
}

export default function AboutPage() {
  return (
    <main className="selection:bg-muted">
      <AboutHero />
      <AboutIdentity />
      <AboutMissionVision />
      <AboutValues />
      <AboutCta />
    </main>
  )
}
