import Image from "next/image"
import { Button } from "@fabora/ui/components/button"
import { ShieldCheck, Users, Star, Target } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(30, 107, 60, 0.05) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Gradient Accent */}
      <div className="absolute top-0 right-0 -z-10 h-full w-1/2 bg-linear-to-bl from-muted to-transparent opacity-30" />
      <div className="absolute -bottom-24 -left-24 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Hero Content */}
          <div className="space-y-6 lg:col-span-7 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 text-accent">
              <Star className="size-4 fill-current" />
              <span className="text-xs font-bold tracking-widest uppercase">
                L&apos;Excellence RH Africaine
              </span>
            </div>

            {/* Title */}
            <h1 className="font-headline text-4xl leading-tight font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Des talents qualifiés pour un{" "}
              <span className="relative text-primary">
                impact réel
                <svg
                  className="absolute -bottom-1 left-0 h-2 w-full text-accent/30 md:-bottom-2 md:h-3"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,10 Q50,0 100,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-base font-medium text-muted-foreground md:text-lg lg:text-xl">
              Recrutement • Intérim • Conformité RH • Formation
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:pt-4">
              <Button className="w-full rounded-full bg-accent px-8 py-5 text-base font-bold text-white shadow-xl hover:bg-accent/90 sm:w-auto md:px-10 md:text-lg">
                Découvrir nos services
              </Button>
              <Button
                variant="outline"
                className="w-full rounded-full border-2 border-primary px-8 py-5 text-base font-bold text-primary hover:bg-primary/10 sm:w-auto md:px-10 md:text-lg"
              >
                Nous contacter
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8 opacity-70 md:gap-8 md:pt-12">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-primary" />
                <span className="text-xs font-bold tracking-tighter uppercase md:text-sm">
                  Certifié ISO 9001
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="size-5 text-primary" />
                <span className="text-xs font-bold tracking-tighter uppercase md:text-sm">
                  +5000 Placements
                </span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative lg:col-span-5">
            {/* Main Hero Image */}
            <div className="relative z-10 aspect-4/5 overflow-hidden rounded-3xl shadow-2xl md:aspect-auto md:rounded-[2.5rem]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFesoL46Ocq7YkqDQQJzR0p9mWtfjbGN4LDkSOGcd07ZYfEhsL9yHij7U-yMxKKDlSgOarDS1QCg9OGk7oubQSy2MuM-PTtKj1uB3WeUabAJ0hDHZmuQXqq3IgkVMnD544QUzB7Hd8ASN40xflt9OBsbl8kQ0BG26uENxEIQ_3HU8TCZTrgYDAjqsZ2wiQN07SVVzUjHwOXvvNjcSbqg3uimZQbaoF1ZKlAQtp_x34Ftr8NWAMnywijeQixCKp13dL0MJTJ4dkEOs"
                alt="Professional African team collaborating"
                width={600}
                height={750}
                className="h-full w-full object-cover"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Card - Top Right */}
            <div className="absolute -top-4 -right-4 z-20 hidden rounded-2xl border borderforeground/50 bg-background/70 p-4 shadow-xl backdrop-blur-md md:block lg:-top-6 lg:-right-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-accent text-white">
                  <Target className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                    Top Priority
                  </p>
                  <p className="font-bold text-foreground">Recrutement Elite</p>
                </div>
              </div>
            </div>

            {/* Floating Card - Left */}
            <div className="absolute top-1/4 -left-8 z-20 hidden rounded-2xl border borderforeground/50 bg-background/70 p-5 shadow-xl backdrop-blur-md xl:block">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-secondary" />
                  <p className="text-sm font-bold">Plateforme Digitale</p>
                </div>
                <div className="h-1.5 w-32 overflow-hidden rounded-full bg-foreground/20">
                  <div className="h-full w-2/3 rounded-full bg-primary" />
                </div>
              </div>
            </div>

            {/* Floating Card - Bottom */}
            <div className="absolute -bottom-6 left-1/4 z-20 rounded-2xl border borderforeground/50 bg-background/70 p-4 shadow-xl backdrop-blur-md md:-bottom-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="size-10 rounded-full border-2 borderforeground bg-muted" />
                  <div className="size-10 rounded-full border-2 borderforeground bg-muted-foreground/30" />
                  <div className="flex size-10 items-center justify-center rounded-full border-2 borderforeground bg-primary text-xs font-bold text-white">
                    +12
                  </div>
                </div>
                <p className="text-sm font-bold text-foreground">
                  Talents disponibles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
