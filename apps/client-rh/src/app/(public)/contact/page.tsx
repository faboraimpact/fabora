import { ContactHero, ContactForm } from "@/components/contact"
import { Mail } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Contact | Fabora Impact",
  description:
    "Contactez Fabora Impact pour transformer votre capital humain en moteur de croissance durable. Nos consultants vous répondent sous 24h.",
}

export default function ContactPage() {
  return (
    <main className="selection:bg-muted">
      <ContactHero />

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-32">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
          {/* Contact Info Card - Order 1 on mobile */}
          <div className="order-1 lg:order-2 lg:col-span-5">
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
              </div>
            </div>
          </div>

          {/* Contact Form - Order 2 on mobile */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <ContactForm />
          </div>

          {/* Image Card - Order 3 on mobile */}
          <div className="order-3 lg:order-2 lg:col-span-5">
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
          </div>
        </div>
      </section>
    </main>
  )
}
