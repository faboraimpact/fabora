import {
  UserSearch,
  Users,
  Network,
  GraduationCap,
  BrainCircuit,
  ChartNoAxesCombined,
  CheckCircle,
} from "lucide-react"

export function ServiceGrid() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-20">
          <h2 className="font-headline mb-6 text-3xl font-black text-foreground md:text-4xl lg:text-6xl">
            Nos Services 360°
          </h2>
          <div className="mx-auto h-1.5 w-24 bg-accent" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {/* Service 1 - Recrutement Stratégique */}
          <div className="group rounded-2xl bg-card p-6 shadow-lg transition-colors duration-500 hover:bg-primary md:p-10">
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary-foreground md:mb-8 md:size-16">
              <UserSearch className="size-6 text-primary transition-colors group-hover:text-primary md:size-8" />
            </div>
            <h4 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary-foreground md:mb-4 md:text-2xl">
              Recrutement Stratégique
            </h4>
            <p className="leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
              Identification et sélection des meilleurs talents via une
              méthodologie rigoureuse et des tests psychotechniques avancés.
            </p>
          </div>

          {/* Service 2 - Gestion de l'Intérim */}
          <div className="group rounded-2xl bg-card p-6 shadow-lg transition-colors duration-500 hover:bg-primary md:p-10">
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary-foreground md:mb-8 md:size-16">
              <Users className="size-6 text-primary transition-colors group-hover:text-primary md:size-8" />
            </div>
            <h4 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary-foreground md:mb-4 md:text-2xl">
              Gestion de l&apos;Intérim
            </h4>
            <p className="leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
              Flexibilité opérationnelle maximale avec une gestion
              administrative et contractuelle 100% conforme.
            </p>
          </div>

          {/* Service 3 - Plateforme RH Digital (Highlighted) */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-muted p-6 md:p-10 lg:col-span-1">
            <div className="absolute top-0 right-0 p-3 md:p-4">
              <span className="rounded-full px-2 py-1 text-[10px] font-bold tracking-widest text-accent uppercase md:px-3">
                Digital First
              </span>
            </div>
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary md:mb-8 md:size-16">
              <Network className="size-6 text-primary-foreground md:size-8" />
            </div>
            <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Plateforme RH Digital
            </h4>
            <p className="mb-4 leading-relaxed text-muted-foreground md:mb-6">
              Un écosystème cloud pour piloter vos RH : paie, congés,
              évaluations et audits de conformité automatisés.
            </p>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-center gap-2 text-sm font-semibold text-primary md:gap-3">
                <CheckCircle className="size-4 md:size-5" />
                Sécurité des données
              </li>
              <li className="flex items-center gap-2 text-sm font-semibold text-primary md:gap-3">
                <CheckCircle className="size-4 md:size-5" />
                Reporting en temps réel
              </li>
            </ul>
          </div>

          {/* Service 4 - Formation & Upskilling */}
          <div className="group rounded-2xl bg-card p-6 shadow-lg transition-colors duration-500 hover:bg-primary md:p-10">
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary-foreground md:mb-8 md:size-16">
              <GraduationCap className="size-6 text-primary transition-colors group-hover:text-primary md:size-8" />
            </div>
            <h4 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary-foreground md:mb-4 md:text-2xl">
              Formation &amp; Upskilling
            </h4>
            <p className="leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
              Programmes sur mesure pour aligner les compétences de vos équipes
              aux défis du marché africain.
            </p>
          </div>

          {/* Service 5 - Executive Coaching */}
          <div className="group rounded-2xl bg-card p-6 shadow-lg transition-colors duration-500 hover:bg-primary md:p-10">
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary-foreground md:mb-8 md:size-16">
              <BrainCircuit className="size-6 text-primary transition-colors group-hover:text-primary md:size-8" />
            </div>
            <h4 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary-foreground md:mb-4 md:text-2xl">
              Executive Coaching
            </h4>
            <p className="leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
              Accompagnement individuel des leaders pour une prise de décision
              éclairée et humaine.
            </p>
          </div>

          {/* Service 6 - Conseil & Audit RH */}
          <div className="group rounded-2xl bg-card p-6 shadow-lg transition-colors duration-500 hover:bg-primary md:p-10">
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary-foreground md:mb-8 md:size-16">
              <ChartNoAxesCombined className="size-6 text-primary transition-colors group-hover:text-primary md:size-8" />
            </div>
            <h4 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary-foreground md:mb-4 md:text-2xl">
              Conseil &amp; Audit RH
            </h4>
            <p className="leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
              Diagnostic complet de vos processus pour garantir une conformité
              totale avec le code du travail.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
