import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "L'expertise de Fabora dans le recrutement de cadres techniques nous a permis d'accélérer notre transition digitale avec des talents locaux de premier ordre.",
    name: "Amara Diallo",
    role: "Directrice RH, Global Bank",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFZvpRF379B1zac09eVAglIYNvv93X2Gag-_rK40JmDpYtn_O3_HTMLmvHxYH6EIK73Kc2dzf35wb49JztbEVr17P2ktYziC6BdtTpKu-1d2TQP0O30PgJrLdgpSoGMwLwO6gikP6hgWq9rQuEaO-e6vV3xvyzqIwj6qm3bPssG4wO8qn-nLl-Oc6GVbzopU9atnA1pgXD0wGvd-x4IleGQtbiwaRX--BjdI_wByQ0cUI283LlViZ7-qUZ6P4A9D4JOKpWpD4hJnI",
  },
  {
    quote:
      "Leur gestion de l'intérim est d'une fluidité exemplaire. Fabora comprend les enjeux opérationnels du secteur de l'énergie et y répond avec précision.",
    name: "Marc-André Koffi",
    role: "VP Ops, Energy Corp",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ8R56a0tSHb1-X1iMoRD27AV1-FPRzKTdZZnOQ8czCaj2isn0hdbyT_Egxz6vOEQhYBuJOykXhxK85I9WLZTzLsqf3LAvr3E98LMblFVufc8ml-qPGlSFH4abB9Rh2D8KeJXGM8m1H0sS3MxjLfG3P26GeyoTKvox5mFXPngp_4DKJ6FfUWPPNO6JAGrH5w2_19yt-NqwYToaa9e5HpaPnPdNlAsaCgzNQWXbCiZ0EWQeSy9-0nEHgXSgCu8uTgTi-T3ZvxWB42o",
  },
  {
    quote:
      "Un partenaire stratégique pour notre mise en conformité RH. Leur approche rigoureuse nous a apporté une sérénité indispensable à notre croissance.",
    name: "Isabelle Mensah",
    role: "Chief People Officer, AfriTech",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTx2aiEXwwfGaox4uqEZ467XuzfTGxm-7TBkrmqgyPd5YIA1yNCsWSFsiHW9KEZVgpFLNU9axAGQNLdn2suOmheuYm3OKZi4i3UTPp225UwVuYvgtgUQ3fQWpBqSIP4S-l-qLmz1DCzV457CRrrvpUOBXOIHb8seEBTKVNqVemsYEWMD3pw8PIqGQYX5eEwBbJ5a9bT_we7aEOc0YxerX6y94QaptOclCbIDsvhsvK8iBzVX-yK19vC_rUS0JOCb0t9DKy92CUb2M",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-12 text-center font-headline text-3xl font-black tracking-tight text-foreground md:mb-20 md:text-4xl">
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
                <p className="mb-6 text-base italic leading-relaxed text-foreground md:mb-8 md:text-lg">
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
                  <p className="font-headline font-black leading-none text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground md:text-xs">
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
