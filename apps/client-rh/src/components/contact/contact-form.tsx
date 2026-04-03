"use client"

import { Button } from "@fabora/ui/components/button"
import { Input } from "@fabora/ui/components/input"
import { Label } from "@fabora/ui/components/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@fabora/ui/components/select"
import { Textarea } from "@fabora/ui/components/textarea"

const services = [
  "Recrutement",
  "Intérim",
  "Plateforme Digitale",
  "Formation",
  "Coaching",
  "Conseil",
]

export function ContactForm() {
  return (
    <section className="rounded-xl border-b-4 border-primary bg-card p-6 shadow-sm md:p-8 lg:p-12">
      <div className="mb-8 md:mb-10">
        <h2 className="font-headline mb-2 text-2xl font-extrabold text-foreground md:text-3xl">
          Envoyez-nous un message
        </h2>
        <p className="text-muted-foreground">
          Nos consultants reviennent vers vous sous 24h ouvrées.
        </p>
      </div>

      <form className="space-y-6">
        {/* Row 1: Nom + Entreprise */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-bold text-foreground">
              Nom Complet
            </Label>
            <Input
              id="name"
              placeholder="Jean-Marc Koffi"
              className="h-12 bg-muted/50 focus:bg-card"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="font-bold text-foreground">
              Entreprise
            </Label>
            <Input
              id="company"
              placeholder="Impact S.A."
              className="h-12 bg-muted/50 focus:bg-card"
            />
          </div>
        </div>

        {/* Row 2: Email + Service */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-bold text-foreground">
              Email Professionnel
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="jm.koffi@impact.com"
              className="h-12 bg-muted/50 focus:bg-card"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service" className="font-bold text-foreground">
              Service d&apos;Intérêt
            </Label>
            <Select>
              <SelectTrigger
                id="service"
                className="h-12 bg-muted/50 focus:bg-card"
              >
                <SelectValue placeholder="Sélectionnez un service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service.toLowerCase()}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Row 3: Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="font-bold text-foreground">
            Votre Message
          </Label>
          <Textarea
            id="message"
            placeholder="Comment pouvons-nous vous accompagner ?"
            rows={5}
            className="bg-muted/50 focus:bg-card"
          />
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          size="lg"
          className="w-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 md:w-auto md:px-12"
        >
          Envoyer
        </Button>
      </form>
    </section>
  )
}
