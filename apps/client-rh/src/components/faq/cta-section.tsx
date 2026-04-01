import { Button } from "@fabora/ui/components/button";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
      <div className="relative overflow-hidden rounded-2xl bg-foreground p-8 text-center sm:rounded-3xl sm:p-12 md:p-20">
        {/* Pattern overlay (subtle) */}
        <div className="pointer-events-none absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="mb-4 font-headline text-3xl font-black leading-tight text-background sm:mb-6 sm:text-4xl md:text-5xl">
            Vous avez encore des questions ?
          </h2>
          <p className="mb-8 text-base text-muted opacity-80 sm:mb-10 sm:text-lg">
            Notre équipe d&apos;experts est là pour vous accompagner dans votre
            transformation RH en Afrique. Discutons de votre projet dès
            aujourd&apos;hui.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-accent to-accent/80 px-8 py-6 text-base font-bold text-accent-foreground shadow-xl sm:px-10 sm:text-lg"
            >
              Contactez-nous
            </Button>
            
          </div>
        </div>
      </div>
    </section>
  );
}
