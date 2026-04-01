"use client"

import Link from "next/link"
import { Home, ArrowLeft, Compass } from "lucide-react"
import { Button, buttonVariants } from "@fabora/ui/components/button"
import { cn } from "@fabora/ui/lib/utils"

export function Hero404() {
  return (
    <section className="relative z-10 w-full max-w-4xl px-4 text-center">
      {/* Grand 404 stylisé */}
      <div className="relative mb-6 inline-block md:mb-8">
        <h1 className="select-none font-headline text-[8rem] font-extrabold leading-none tracking-tighter text-muted/50 sm:text-[10rem] md:text-[14rem] lg:text-[18rem]">
          404
        </h1>

        {/* Cercle de blur décoratif */}
        <div className="absolute left-1/2 top-1/2 -z-10 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl sm:size-48 md:size-64" />

        {/* Icône explore flottante (desktop) */}
        <div className="absolute -bottom-4 right-1/4 hidden rotate-6 rounded-xl bg-background p-4 shadow-xl md:right-1/3 md:block">
          <Compass className="size-8 fill-accent text-accent md:size-10" />
        </div>
      </div>

      {/* Texte et CTAs */}
      <div className="space-y-4 md:space-y-6">
        <h2 className="font-headline text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-5xl lg:text-6xl">
          Oups ! Page introuvable.
        </h2>

        <p className="mx-auto max-w-md text-base font-medium leading-relaxed text-muted-foreground sm:max-w-lg md:max-w-xl md:text-lg lg:text-xl">
          Il semble que vous vous soyez égaré. Ne vous inquiétez pas, nous
          allons vous ramener sur le bon chemin.
        </p>

        {/* Boutons CTA */}
        <div className="flex flex-col items-center justify-center gap-3 pt-6 sm:flex-row sm:gap-4 md:pt-8">
          {/* CTA Principal */}
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full gap-2 rounded-full bg-gradient-to-r from-accent to-accent/80 px-6 py-6 font-bold shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-[1.02] sm:w-auto sm:px-8"
            )}
          >
            <Home className="size-5" />
            Retour à l&apos;accueil
          </Link>

          {/* CTA Secondaire */}
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.history.back()
              }
            }}
            className="w-full gap-2 rounded-full border-2 border-primary/20 px-6 py-6 font-bold text-primary transition-all duration-300 hover:bg-primary/5 sm:w-auto sm:px-8"
          >
            <ArrowLeft className="size-5" />
            Page précédente
          </Button>
        </div>
      </div>
    </section>
  )
}
