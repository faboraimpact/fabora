import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "L'expertise de Fabora dans le recrutement nous a permis d'accélérer notre transition digitale avec des talents locaux de premier ordre.",
    name: "Ousmane Sy",
    role: "Directeur General",
    avatar: "/images/profil.jpg",
  },
  {
    quote:
      "Leur gestion de l'intérim est d'une fluidité exemplaire. Fabora comprend les enjeux opérationnels du secteur de l'énergie et y répond avec précision.",
    name: "Marc-André Koffi",
    role: "VP Ops, Energy Corp",
    avatar: "/images/profil.jpg",
  },
  {
    quote:
      "Un partenaire stratégique pour notre mise en conformité RH. Leur approche rigoureuse nous a apporté une sérénité indispensable à notre croissance.",
    name: "Isabelle Mensah",
    role: "Chief People Officer, AfriTech",
    avatar: "/images/profil.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="font-headline mb-12 text-center text-3xl font-black tracking-tight text-foreground md:mb-20 md:text-4xl">
          Leurs Succès, <span className="text-primary">Notre Impact</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative flex flex-col justify-between rounded-2xl bg-card p-8 md:rounded-3xl md:p-10"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 text-secondary/40 md:-top-6 md:left-10">
                <Quote className="size-10 fill-current md:size-14" />
              </div>

              {/* Quote text */}
              <div className="relative z-10">
                <p className="mb-6 text-base leading-relaxed text-foreground italic md:mb-8 md:text-lg">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-border pt-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="size-12 rounded-full object-cover md:size-14"
                />
                <div>
                  <p className="font-headline leading-none font-black text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-[10px] font-bold tracking-widest text-muted-foreground uppercase md:text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
