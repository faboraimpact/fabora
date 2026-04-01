const metrics = [
  { value: "50+", label: "Entreprises Partenaires" },
  { value: "5000+", label: "Placements" },
  { value: "5", label: "Pays d'Afrique" },
  { value: "98%", label: "Satisfaction Client" },
]

export function MetricsSection() {
  return (
    <section className="bg-muted py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <h3 className="font-headline text-3xl font-black text-primary md:text-4xl">
                {metric.value}
              </h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground md:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
