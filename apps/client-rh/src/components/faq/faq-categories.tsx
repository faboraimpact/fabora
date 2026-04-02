import { Card, CardContent } from "@fabora/ui/components/card"
import { UserSearch, Users, Monitor, Brain } from "lucide-react"

const categories = [
  {
    icon: UserSearch,
    title: "Recrutement",
    description:
      "Trouvez les meilleurs talents pour vos projets stratégiques en Afrique.",
    colorClass: "bg-primary/10 text-primary",
    highlight: false,
  },
  {
    icon: Users,
    title: "Intérim",
    description:
      "Solutions de flexibilité pour vos pics d'activité et remplacements.",
    colorClass: "bg-secondary/10 text-secondary",
    highlight: false,
  },
  {
    icon: Monitor,
    title: "Plateforme Digitale",
    description: "Gérez vos contrats et conformité via notre écosystème cloud.",
    colorClass: "bg-accent/10 text-accent",
    highlight: true,
  },
  {
    icon: Brain,
    title: "Conseil RH",
    description:
      "Audit et accompagnement pour transformer votre capital humain.",
    colorClass: "bg-muted text-foreground",
    highlight: false,
  },
]

export function FaqCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 md:px-8 md:pb-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <Card
              key={category.title}
              className={`group cursor-pointer border-0 bg-muted/50 transition-colors duration-300 hover:bg-card ${
                category.highlight ? "border-b-4 border-accent" : ""
              }`}
            >
              <CardContent className="p-6 md:p-8">
                <div
                  className={`mb-4 flex size-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 md:mb-6 md:size-14 ${category.colorClass}`}
                >
                  <Icon className="size-6 md:size-7" />
                </div>
                <h3 className="font-headline mb-2 text-lg font-extrabold md:text-xl">
                  {category.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
