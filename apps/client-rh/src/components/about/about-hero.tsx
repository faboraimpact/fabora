import Image from "next/image"
import { Button } from "@fabora/ui/components/button"
import { ArrowRight } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden px-4 py-12 md:px-8 md:py-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(30, 107, 60, 0.05) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        {/* Text Content */}
        <div className="z-10 space-y-6">
          <h1 className="font-headline text-4xl leading-tight font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Notre Engagement :{" "}
            <span className="text-accent">Bâtir l&apos;Excellence Humaine</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
            Découvrez l&apos;histoire, la mission et les valeurs qui font de
            Fabora Impact votre partenaire de confiance en Afrique de
            l&apos;Ouest.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Button
              size="lg"
              className="gap-2 bg-primary px-6 py-5 text-base font-bold md:px-8"
            >
              Découvrir nos solutions
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Shadow Box */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-muted md:translate-x-4 md:translate-y-4" />

          {/* Main Image */}
          <Image
            src="/images/about-hero.jpg"
            alt="Équipe Fabora Impact en collaboration"
            fill
            className="relative z-20 rounded-xl object-cover shadow-2xl grayscale-[0.2] transition-all duration-700 hover:grayscale-0"
            priority
          />

          {/* Decorative Circle */}
          <div className="absolute -bottom-4 -left-4 z-30 flex size-24 items-center justify-center rounded-full bg-accent/20 md:-bottom-6 md:-left-6 md:size-32">
            <div
              className="size-full rounded-full bg-accent/30 opacity-50"
              style={{
                maskImage:
                  "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
                maskSize: "8px 8px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
