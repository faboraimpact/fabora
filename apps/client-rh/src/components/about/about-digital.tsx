import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const features = [
  "Transparence totale sur les flux de recrutement",
  "Suivi des indicateurs de performance RH en temps réel",
  "Sécurisation juridique et conformité documentaire",
  "Facilitation des audits internes et externes",
]

export function AboutDigital() {
  return (
    <section className="overflow-hidden bg-foreground px-4 py-16 text-background md:px-8 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:gap-16">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <span className="mb-4 block text-xs font-bold tracking-widest text-accent uppercase">
            Innovation Digitale
          </span>

          <h2 className="font-headline mb-6 text-3xl leading-tight font-bold md:mb-8 md:text-4xl lg:text-5xl">
            La Technologie au Service de la Conformité
          </h2>

          <p className="mb-6 text-base leading-relaxed text-muted md:mb-8 md:text-xl">
            FABORA IMPACT ne se limite pas au recrutement et à l&apos;intérim.
            Nous offrons également une solution digitale permettant aux clients
            de suivre, documenter et sécuriser toutes activités RH, facilitant
            ainsi leurs audits internes et externes.
          </p>

          <ul className="space-y-3 md:space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-secondary" />
                <span className="text-sm text-muted md:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-1/2">
          {/* Pulsing Background Circle */}
          <div className="absolute -top-10 -right-10 aspect-square w-full animate-pulse rounded-full bg-muted/10" />

          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm-LzJVqlS01mt4fZ3yx0BlcJU04aTqAt3V03_jVIO2o-oHeBypqB6UqXWPf2GSAY6EB7h9ekZjDKx__XeRJqMjnqZg8g18wOCfkx1sUJuokdaomGaQukSAFmpCSNBLX8ihkyQ99CRpPQxiG3EOw9zFAP3hgsmnahyiBHep-LB2ujq6FIfzKzgIFQc51AJlj6uW7TJA8hPMHwfRAqk4chtwp9pgVuXGf0b_YtEz_rk8hq_Y0SlI_qdNqRlqVY1T_jHtEbyESWjvxuU"
            alt="Dashboard RH Fabora Impact"
            width={600}
            height={450}
            className="relative z-10 w-full rounded-xl border border-muted/10 shadow-[0_32px_64px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  )
}
