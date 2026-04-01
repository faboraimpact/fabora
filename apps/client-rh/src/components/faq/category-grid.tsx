import { Users, UserPlus, Monitor, Brain } from "lucide-react"

const categories = [
  {
    icon: Users,
    title: "Recrutement",
    description:
      "Trouvez les meilleurs talents pour vos projets stratégiques en Afrique.",
    variant: "primary" as const,
  },
  {
    icon: UserPlus,
    title: "Intérim",
    description:
      "Solutions de flexibilité pour vos pics d&apos;activité et remplacements.",
    variant: "secondary" as const,
  },
  {
    icon: Monitor,
    title: "Plateforme Digitale",
    description: "Gérez vos contrats et conformité via notre écosystème cloud.",
    variant: "accent" as const,
    highlighted: true,
  },
  {
    icon: Brain,
    title: "Conseil RH",
    description:
      "Audit et accompagnement pour transformer votre capital humain.",
    variant: "muted" as const,
  },
]

const variantStyles = {
  primary: {
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  secondary: {
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  accent: {
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  muted: {
    iconBg: "bg-muted",
    iconColor: "text-foreground",
  },
}

export function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:pb-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {categories.map((category) => {
          const styles = variantStyles[category.variant]
          const Icon = category.icon

          return (
            <div
              key={category.title}
              className={`group cursor-pointer rounded-xl bg-card p-6 transition-colors duration-300 hover:bg-muted sm:p-8 ${
                category.highlighted ? "border-b-4 border-accent" : ""
              }`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 sm:mb-6 sm:h-14 sm:w-14 ${styles.iconBg}`}
              >
                <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${styles.iconColor}`} />
              </div>
              <h3 className="font-headline mb-2 text-lg font-extrabold sm:text-xl">
                {category.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
