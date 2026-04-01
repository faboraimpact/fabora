import { MapPin } from "lucide-react"
import Image from "next/image"

export function RegionalPresenceSection() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="font-headline mb-6 text-3xl leading-tight font-black text-foreground md:mb-8 md:text-4xl lg:text-5xl">
            Une Expertise Locale, Une Vision Régionale
          </h2>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            Notre ancrage en Afrique de l&apos;Ouest nous permet d&apos;offrir
            une compréhension fine des écosystèmes économiques locaux. Avec des
            bureaux stratégiquement situés, nous servons nos clients avec
            réactivité et pertinence.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="size-2 rounded-full bg-primary" />
              <span className="font-bold text-foreground">
                Sénégal - Siège Régional
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="size-2 rounded-full bg-secondary" />
              <span className="text-muted-foreground">
                Bénin, Niger, Burkina Faso, Togo
              </span>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-[2rem] border border-border/10 bg-muted p-6 shadow-inner md:p-12">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
              <Image
                src="https://placehold.co/600x600/C8E6D5/1E6B3C?text=Afrique+de+l%27Ouest"
                alt="Carte de l'Afrique de l'Ouest - Présence régionale"
                width={600}
                height={600}
                className="size-full object-cover opacity-60 mix-blend-multiply grayscale"
              />
              {/* Map Pin Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="size-16 text-primary opacity-20" />
              </div>
              {/* Location Indicator */}
              <div className="absolute top-1/4 left-1/4 animate-pulse">
                <MapPin className="size-10 fill-accent text-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
