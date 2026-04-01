import {
  Landmark,
  Zap,
  Terminal,
  Truck,
  Factory,
  ShoppingBag,
  HeartPulse,
  Wheat,
  HardHat,
  CreditCard,
} from "lucide-react"

const partners = [
  { icon: Landmark, name: "Global Bank" },
  { icon: Zap, name: "Energy Corp" },
  { icon: Terminal, name: "AfriTech Solutions" },
  { icon: Truck, name: "LogisGlobal" },
  { icon: Factory, name: "IndusAfric" },
  { icon: ShoppingBag, name: "RetailOne" },
  { icon: HeartPulse, name: "MedLink" },
  { icon: Wheat, name: "AgriGrow" },
  { icon: HardHat, name: "BuildCo" },
  { icon: CreditCard, name: "PayWest" },
]

export function PartnersGrid() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 md:mb-16 md:flex-row md:items-end">
          <div>
            <h2 className="font-headline text-3xl font-black tracking-tight text-foreground md:text-4xl">
              Nos Références
            </h2>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground md:mt-4 md:text-base">
              Une synergie d&apos;expertises au service des leaders de demain à
              travers le continent.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="cursor-pointer border-b-2 border-secondary pb-1 text-sm font-bold text-primary transition-all hover:border-accent hover:text-accent">
              Voir toutes les industries
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-4 md:rounded-3xl lg:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex aspect-square cursor-pointer flex-col items-center justify-center bg-background p-6 transition-colors hover:bg-muted md:p-12"
            >
              <partner.icon className="mb-2 size-8 text-muted-foreground opacity-60 transition-opacity group-hover:opacity-100 md:size-10" />
              <span className="text-center text-[10px] font-bold uppercase tracking-widest text-foreground opacity-60 transition-opacity group-hover:opacity-100 md:text-xs">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-8 text-center md:hidden">
          <span className="cursor-pointer border-b-2 border-secondary pb-1 text-sm font-bold text-primary">
            Voir toutes les industries
          </span>
        </div>
      </div>
    </section>
  )
}
