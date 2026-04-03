import Link from "next/link"
import { Button } from "@fabora/ui/components/button"
import { Phone } from "lucide-react"

export function FaqCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
      <div className="relative overflow-hidden rounded-2xl bg-foreground p-8 text-center md:rounded-3xl md:p-12 lg:p-20">
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

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="font-headline mb-4 text-3xl leading-tight font-black text-background md:mb-6 md:text-4xl lg:text-5xl">
            Vous avez encore des questions ?
          </h2>

          <p className="mb-8 text-base text-muted opacity-80 md:mb-10 md:text-lg">
            Notre équipe d&apos;experts est là pour vous accompagner dans votre
            transformation RH en Afrique. Discutons de votre projet dès
            aujourd&apos;hui.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent px-8 py-5 text-base font-bold hover:bg-accent/90 md:px-10 md:text-lg"
            >
              <Link href="/contact">Contactez-nous</Link>
            </Button>

            {/* <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 border-background/20 bg-background/10 px-8 py-5 text-base font-bold text-background backdrop-blur-md hover:bg-background/20 hover:text-background md:px-10 md:text-lg"
            >
              <Link href="tel:+221000000000">
                <Phone className="size-4" />
                Appeler le support
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
