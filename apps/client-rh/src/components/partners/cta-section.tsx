import { Button } from "@fabora/ui/components/button"

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:rounded-[3rem] md:p-12 lg:p-20">
          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline mb-6 text-3xl leading-tight font-black text-primary-foreground md:mb-8 md:text-4xl lg:text-5xl">
              Devenez un partenaire <br />
              stratégique dès aujourd&apos;hui.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-primary-foreground/80 md:mb-10 md:text-lg">
              Rejoignez le réseau d&apos;excellence Fabora Impact et bénéficiez
              d&apos;un accompagnement RH sur-mesure pour vos ambitions de
              développement en Afrique.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="rounded-full bg-accent px-8 py-6 text-base font-bold text-accent-foreground shadow-xl transition-all hover:scale-105 hover:bg-accent/90 md:px-10"
              >
                Nous contacter
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary-foreground/20 bg-primary-foreground/10 px-8 py-6 text-base font-bold text-primary-foreground backdrop-blur-md transition-all hover:bg-primary-foreground/20 md:px-10"
              >
                Nos études de cas
              </Button> */}
            </div>
          </div>

          {/* Abstract Geometric Decoration */}
          <div className="absolute top-0 right-0 bottom-0 hidden w-1/3 md:block">
            <div className="size-full opacity-20">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="size-full fill-primary-foreground"
              >
                <polygon points="50,0 100,50 50,100 0,50" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
