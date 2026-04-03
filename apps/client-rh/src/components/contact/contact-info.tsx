import { Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function ContactInfo() {
  return (
    <aside className="space-y-8 lg:space-y-12">
      {/* Contact Card */}
      <div className="relative overflow-hidden rounded-xl bg-muted p-6 md:p-8">
        {/* Decorative circle */}
        <div className="absolute -top-8 -right-8 size-24 rounded-full bg-primary opacity-10" />

        <h3 className="font-headline mb-6 text-xl font-bold text-foreground md:mb-8 md:text-2xl">
          Contact
        </h3>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex gap-4">
            <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Mail className="size-5" />
            </div>
            <div>
              <h4 className="mb-1 font-bold text-primary">Email</h4>
              <a
                href="mailto:contact@fabora-impact.com"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                contact@faboraimpact.com
              </a>
            </div>
          </div>

          {/* Address */}
          {/* <div className="group flex gap-4">
            <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <MapPin className="size-5" />
            </div>
            <div>
              <h4 className="mb-1 font-bold text-foreground">
                Sénégal (Siège Régional)
              </h4>
              <p className="text-sm text-muted-foreground">
                Immeuble Fabora, Plateau, BP 4589, Dakar
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Image Card */}
      <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
        <Image
          src="/images/contact-team.jpg"
          alt="Équipe Fabora Impact collaborant"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 to-transparent p-6 md:p-8">
          <p className="font-headline text-lg font-bold text-primary-foreground md:text-xl">
            L&apos;excellence humaine au service du développement.
          </p>
        </div>
      </div>
    </aside>
  )
}
