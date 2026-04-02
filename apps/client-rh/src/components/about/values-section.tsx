import { Award, Eye, Scale, Sparkles, Wallet } from "lucide-react"

const values = [
  { icon: Award, title: "Professionnalisme" },
  { icon: Eye, title: "Transparence" },
  { icon: Scale, title: "Conformité" },
  { icon: Wallet, title: "Redevabilité" },
  { icon: Sparkles, title: "Impact" },
]

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-background/40 py-16 md:py-24">
      {/* African Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-12 text-center md:mb-20">
          <h2 className="font-headline mb-4 text-3xl font-black text-foreground md:mb-6 md:text-4xl lg:text-5xl">
            Nos Valeurs Cardinales
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            L&apos;ADN de Fabora Impact repose sur cinq piliers fondamentaux qui
            guident chacune de nos interventions.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm transition-colors hover:bg-background/10 md:p-8"
              >
                <Icon className="mb-4 size-7 text-secondary md:size-8" />
                <h3 className="text-base font-bold text-background md:text-lg">
                  {value.title}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
