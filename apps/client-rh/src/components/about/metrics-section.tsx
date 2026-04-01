import { Globe, ThumbsUp, Users } from "lucide-react"

const metrics = [
  {
    icon: Globe,
    value: "5+",
    label: "Pays Couverts",
    description: "Sénégal, Bénin, Niger, Burkina Faso, Togo.",
    variant: "default" as const,
  },
  {
    icon: Users,
    value: "5000+",
    label: "Placements Réussis",
    description: "Accompagner la croissance par le recrutement stratégique.",
    variant: "primary" as const,
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Taux de Satisfaction",
    description: "L'excellence au service de nos partenaires.",
    variant: "default" as const,
  },
]

export function MetricsSection() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16 lg:text-left">
          <h2 className="mb-4 font-headline text-3xl font-black text-foreground md:text-4xl">
            Notre Impact en Chiffres
          </h2>
          <div className="mx-auto h-1.5 w-24 bg-accent lg:mx-0" />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {metrics.map((metric) => {
            const Icon = metric.icon
            const isPrimary = metric.variant === "primary"

            return (
              <div
                key={metric.label}
                className={`flex flex-col justify-between rounded-3xl p-8 transition-transform hover:-translate-y-2 md:p-10 ${
                  isPrimary
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                <div>
                  <Icon
                    className={`mb-6 size-8 md:size-10 ${
                      isPrimary ? "text-secondary" : "text-primary"
                    }`}
                  />
                  <div
                    className={`mb-2 font-headline text-5xl font-black tracking-tighter md:text-6xl ${
                      isPrimary ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {metric.value}
                  </div>
                  <p
                    className={`text-lg font-bold md:text-xl ${
                      isPrimary ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {metric.label}
                  </p>
                </div>
                <p
                  className={`mt-4 font-medium ${
                    isPrimary
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {metric.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
