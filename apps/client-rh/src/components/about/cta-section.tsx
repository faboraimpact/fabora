import { Button } from "@fabora/ui/components/button"

export function CtaSection() {
  return (
    <section className="px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 text-center md:rounded-[3rem] md:p-12 lg:p-20">
          {/* Decorative Blur */}
          <div className="absolute -right-32 -top-32 size-64 rounded-full bg-secondary opacity-20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="mb-6 font-headline text-3xl font-black tracking-tighter text-secondary md:mb-8 md:text-4xl lg:text-5xl xl:text-6xl">
              Prêt à transformer votre capital humain ?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-secondary/90 md:mb-12 md:text-lg lg:text-xl xl:text-2xl">
              Construisons ensemble l&apos;avenir de votre organisation avec des
              solutions sur mesure et un impact durable.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-8 py-6 text-base font-bold shadow-xl md:px-10 md:text-lg"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
