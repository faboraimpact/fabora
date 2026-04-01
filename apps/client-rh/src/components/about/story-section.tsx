import Image from "next/image"

export function StorySection() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 md:px-8 lg:flex-row lg:gap-20">
        {/* Image */}
        <div className="relative w-full lg:w-1/2">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="https://placehold.co/600x750/1E6B3C/FFFFFF?text=Collaboration"
              alt="Collaboration symbolique - poignée de main professionnelle"
              width={600}
              height={750}
              className="size-full object-cover"
            />
          </div>
          {/* Floating Quote Card */}
          <div className="absolute -bottom-6 -left-4 max-w-xs rounded-2xl bg-card/90 p-6 shadow-lg backdrop-blur-sm md:-left-6 md:p-8">
            <p className="font-headline text-base font-bold italic leading-tight text-primary md:text-lg">
              &quot;Aligner les standards internationaux aux racines
              africaines.&quot;
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="mb-6 font-headline text-3xl font-black leading-tight text-foreground md:mb-8 md:text-4xl lg:text-5xl">
            Notre Histoire &amp; Vision
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Fabora Impact est né d&apos;une conviction profonde : la
              croissance de l&apos;Afrique repose sur la valorisation de ses
              talents. Nous avons identifié un besoin crucial de moderniser les
              structures RH sans pour autant renier l&apos;identité culturelle
              qui fait la force de nos organisations.
            </p>
            <p>
              Fondé avec la vision d&apos;aligner les pratiques RH aux standards
              internationaux les plus exigeants, notre cabinet s&apos;est
              rapidement imposé comme un pont entre l&apos;expertise technique
              globale et l&apos;intelligence situationnelle locale.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="mt-3 h-1 w-12 bg-primary" />
              <p className="font-bold italic text-foreground">
                Nous croyons en un capital humain agile, éthique et performant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
