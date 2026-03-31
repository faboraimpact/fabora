import { Award, Eye, Scale, Wallet, Zap } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Professionnalisme",
    description:
      "Une rigueur d&apos;exécution sans compromis pour des résultats qui dépassent les attentes.",
  },
  {
    icon: Eye,
    title: "Transparence",
    description:
      "Une communication claire et honnête avec tous nos partenaires et collaborateurs.",
  },
  {
    icon: Scale,
    title: "Conformité",
    description:
      "Le respect strict des cadres légaux et normatifs pour sécuriser votre capital humain.",
  },
  {
    icon: Wallet,
    title: "Redevabilité",
    description:
      "Nous assumons la pleine responsabilité de nos actions et de leurs conséquences.",
  },
  {
    icon: Zap,
    title: "Impact",
    description:
      "Créer une valeur ajoutée réelle et mesurable pour les économies africaines.",
  },
]

export function ValuesSection() {
  return (
    <section className="border-y border-border bg-white/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-2xl font-black text-foreground sm:text-3xl md:text-4xl">
              Nos Valeurs Fondamentales
            </h2>
            <p className="mt-3 leading-relaxed font-medium text-muted-foreground md:mt-4">
              Le socle de notre engagement pour l&apos;excellence opérationnelle et
              l&apos;impact social durable en Afrique.
            </p>
          </div>
          <div className="mb-4 hidden h-px grow bg-border md:mx-8 md:block" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="group">
                <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white md:mb-5">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-headline text-base font-bold transition-colors group-hover:text-primary md:text-lg">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:mt-3">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
