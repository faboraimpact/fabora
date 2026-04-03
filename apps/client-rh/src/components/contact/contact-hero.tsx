export function ContactHero() {
  return (
    <header className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <span className="mb-4 block text-xs font-bold tracking-widest text-accent uppercase md:text-sm">
            Connecter les Talents
          </span>
          <h1 className="font-headline mb-6 text-4xl leading-tight font-black text-foreground md:text-6xl lg:text-7xl">
            Parlons de votre{" "}
            <span className="text-primary italic">Impact RH</span>
          </h1>
          <p className="max-w-2xl border-l-4 border-accent pl-6 text-base leading-relaxed text-muted-foreground md:text-xl">
            Bénéficiez d&apos;une expertise panafricaine ancrée dans les
            réalités de l&apos;Afrique de l&apos;Ouest pour transformer votre
            capital humain en moteur de croissance durable.
          </p>
        </div>
      </div>

      {/* Decorative element - hidden on mobile */}
      <div className="absolute top-0 right-0 -z-10 hidden h-full w-1/3 bg-muted/50 lg:block" />
    </header>
  )
}
