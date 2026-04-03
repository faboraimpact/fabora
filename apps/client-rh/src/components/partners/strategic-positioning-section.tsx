import { Target, Lightbulb, ClipboardCheck, ShieldCheck } from "lucide-react"

const positioningItems = [
  {
    icon: Target,
    title: "Solution RH Complète",
    description:
      "Une offre intégrée combinant recrutement, intérim, coaching et formation avec une gestion digitale et une conformité aux audits.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Digitale",
    description:
      "Plateforme sécurisée centralisant documents administratifs, contractuels et financiers pour une traçabilité complète.",
  },
  {
    icon: ClipboardCheck,
    title: "Conformité & Audits",
    description:
      "Réduction de 80% du temps de préparation des audits grâce à une documentation structurée et accessible.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité & Transparence",
    description:
      "Données sécurisées avec accès personnalisé, garantissant visibilité complète et respect des réglementations.",
  },
]

export function StrategicPositioningSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-16">
          <h2 className="font-headline text-3xl font-black tracking-tight text-foreground md:text-4xl">
            Positionnement Stratégique
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:mt-4 md:text-base">
            FABORA Impact offre une solution RH complète intégrant la gestion
            digitale et la conformité aux audits, accompagnant les leaders et
            faisant évoluer les pratiques managériales.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
          {positioningItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md md:p-8"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 md:size-14">
                <item.icon className="size-6 text-primary md:size-7" />
              </div>
              <h3 className="font-headline text-lg font-bold text-foreground md:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
