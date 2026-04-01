import Image from "next/image"

export function HeroSection() {
  return (
    <header className="relative overflow-hidden px-4 pt-24 pb-16 md:px-8 md:pt-32 md:pb-24 lg:pt-40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
        {/* Content */}
        <div className="z-10 w-full lg:w-1/2">
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1 text-xs font-bold tracking-widest text-accent uppercase md:mb-6">
            Qui Sommes-Nous
          </span>
          <h1 className="font-headline mb-6 text-4xl leading-tight font-black tracking-tighter text-foreground md:mb-8 md:text-5xl lg:text-6xl lg:leading-[1.1] xl:text-7xl">
            Notre Mission : Propulser le Capital Humain Africain.
          </h1>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground md:mb-10 md:text-lg lg:text-xl">
            Fabora Impact est un cabinet de conseil RH engagé pour
            l&apos;excellence et le développement durable sur le continent.
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-1/2">
          <div className="absolute -top-10 -right-10 -z-10 size-64 rounded-full bg-primary/5" />
          <div className="overflow-hidden rounded-3xl shadow-2xl lg:translate-x-12 lg:scale-110">
            <Image
              src="https://placehold.co/800x600/1E6B3C/FFFFFF?text=Leadership+Meeting"
              alt="Réunion de leadership - équipe diverse de professionnels africains"
              width={800}
              height={600}
              className="size-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  )
}
