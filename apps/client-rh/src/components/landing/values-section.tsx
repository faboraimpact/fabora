import { Award, Ear, Heart, Scale, Zap } from "lucide-react"

const values = [
  {
    icon: Ear,
    title: "Écoute authentique",
    description:
      "Nous courbons la tête avant d'ouvrir la bouche. Comprendre avant d'agir, toujours.",
  },
  {
    icon: Award,
    title: "Professionnalisme",
    description:
      "Le Professionnalisme chez FOBORA IMPACT repose sur une expertise technique et engagée, la rigueur et la conscience professionnelle.",
  },
  {
    icon: Heart,
    title: "Bienveillance sans complaisance",
    description:
      "Nous sommes chaleureux dans la relation et exigeants sur les résultats.",
  },
  {
    icon: Scale,
    title: "Conformité",
    description:
      "Nous accordons une grande importance au respect de l'ensemble des règles auxquelles nos clients sont soumis.",
  },
  {
    icon: Zap,
    title: "Impact",
    description:
      "Chaque action que nous menons vise un résultat mesurable et utile, pour nos collaborateurs comme pour nos partenaires.",
  },
]

export function ValuesSection() {
  return (
    <section className="border-y border-border bg-background/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline text-2xl font-black text-foreground sm:text-3xl md:text-4xl">
              Nos Valeurs Fondamentales
            </h2>
            <p className="mt-3 leading-relaxed font-medium text-muted-foreground md:mt-4">
              Le socle de notre engagement pour l&apos;excellence opérationnelle
              et l&apos;impact social durable en Afrique.
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
