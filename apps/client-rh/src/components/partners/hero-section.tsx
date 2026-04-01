import Image from "next/image"

export function HeroSection() {
  return (
    <header className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-32 lg:pt-40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 md:flex-row md:gap-16 md:px-8">
        {/* Content */}
        <div className="z-10 w-full md:w-3/5">
          <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-accent">
            Partenariats Stratégiques
          </span>
          <h1 className="mb-6 font-headline text-4xl font-black leading-tight tracking-tighter text-foreground md:mb-8 md:text-5xl lg:text-7xl lg:leading-[1.1]">
            Ils nous font <br />
            <span className="italic text-primary">confiance.</span>
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:mb-10 md:text-lg lg:text-xl">
            Fabora Impact accompagne les fleurons de l&apos;économie africaine
            et les multinationales dans leur quête d&apos;excellence
            opérationnelle. Notre engagement : transformer votre capital humain
            en levier de croissance durable.
          </p>
          <div className="flex items-center gap-4">
            <div className="h-1 w-16 bg-accent md:w-20" />
            <p className="text-xs font-bold text-foreground md:text-sm">
              Partenaire de référence en Afrique de l&apos;Ouest
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-2/5">
          <div className="aspect-[4/5] rotate-3 overflow-hidden rounded-3xl shadow-2xl transition-transform duration-500 hover:rotate-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyS8oDwkRg1CfmdrDsj5xFb-WxqwFRLE6DjsvPUjGiKjy4rM8ApaQ8k73WpVLkl6J3GIHXlLxjCem-jupWA2YB89Xx3LpE1GY93r6pxqSu6eg7uAy5V1mLwEAqkSmbHgy7vpkiPgWCRpvMJG-pWmEY_ie6NxwiRBJkK0R43fhhzVpUY3Q2xysiXMvFleBfRnlBtHkHrGWlkM3DtsJi1__3mdZVrKM2XH_GZjorAPuglFwrxXZpXDVErlfQOGQqS0XAuAZJU08XDMM"
              alt="Collaboration Corporate - Salle de réunion moderne avec professionnels"
              width={600}
              height={750}
              className="size-full object-cover"
              priority
            />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-card p-6 shadow-xl md:-bottom-6 md:-left-6 md:p-8">
            <span className="font-headline text-3xl font-black text-primary md:text-4xl">
              12+
            </span>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground md:mt-2 md:text-xs">
              Secteurs d&apos;activité couverts
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Background Pattern */}
      <div className="absolute right-0 top-0 -z-10 opacity-5">
        <svg
          width="400"
          height="400"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:size-[600px]"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <rect
            x="20"
            y="20"
            width="60"
            height="60"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </header>
  )
}
