import { Card, CardContent } from "@fabora/ui/components/card"
import { Ear, Award, Heart, Scale, Zap } from "lucide-react"

const values = [
  {
    icon: Ear,
    title: "Écoute authentique",
    description:
      "Nous courbons la tête avant d'ouvrir la bouche. Comprendre avant d'agir, toujours.",
    highlight: false,
  },
  {
    icon: Award,
    title: "Professionnalisme",
    description:
      "Le Professionnalisme chez FOBORA IMPACT repose sur une expertise technique et engagée, la rigueur et la conscience professionnelle.",
    highlight: false,
  },
  {
    icon: Heart,
    title: "Bienveillance sans complaisance",
    description:
      "Nous sommes chaleureux dans la relation et exigeants sur les résultats.",
    highlight: true,
  },
  {
    icon: Scale,
    title: "Conformité",
    description:
      "Nous accordons une grande importance au respect de l'ensemble des règles auxquelles nos clients sont soumis.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Impact",
    description:
      "Chaque action que nous menons vise un résultat mesurable et utile, pour nos collaborateurs comme pour nos partenaires.",
    highlight: false,
  },
]

export function AboutValues() {
  return (
    <section className="bg-background px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-4 block text-xs font-bold tracking-widest text-accent uppercase">
            L&apos;ADN FABORA
          </span>
          <h2 className="font-headline mb-3 text-3xl font-bold text-foreground md:mb-4 md:text-4xl lg:text-5xl">
            Nos Valeurs Fondamentales (ÉPBCI)
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Le socle de notre engagement quotidien pour la réussite de vos
            projets.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <Card
                key={value.title}
                className={`group transition-transform duration-300 hover:-translate-y-1 ${
                  value.highlight
                    ? "relative z-10 border-0 bg-card shadow-xl md:scale-105"
                    : "border-0 bg-muted/50"
                }`}
              >
                <CardContent className="p-6 md:p-8">
                  <Icon
                    className={`mb-4 size-7 md:mb-6 md:size-8 ${
                      value.highlight ? "text-accent" : "text-primary"
                    }`}
                  />
                  <h4 className="font-headline mb-3 text-lg font-bold md:mb-4 md:text-xl">
                    {value.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
