import Link from "next/link"
import { Button } from "@fabora/ui/components/button"

export function AboutCta() {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24">
      <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-2xl bg-primary p-8 text-center md:rounded-3xl md:p-12 lg:p-20">
        {/* Pattern Overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            maskImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            maskSize: "12px 12px",
            backgroundColor: "white",
          }}
        />

        <h2 className="font-headline relative mb-6 text-2xl leading-tight font-bold text-primary-foreground md:mb-8 md:text-3xl lg:text-4xl">
          Prêt à transformer votre capital humain ?
        </h2>

        <div className="relative flex flex-col justify-center gap-4 md:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent px-8 py-5 text-base font-bold hover:bg-accent/90 md:px-10 md:text-lg"
          >
            <Link href="/contact">Nous Contacter</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="px-8 py-5 text-base font-bold md:px-10 md:text-lg"
          >
            <Link href="/services">Consulter nos Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
