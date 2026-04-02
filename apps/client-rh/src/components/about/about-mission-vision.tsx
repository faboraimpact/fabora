import { Card, CardContent } from "@fabora/ui/components/card"
import { Rocket, Eye } from "lucide-react"

export function AboutMissionVision() {
  return (
    <section className="overflow-hidden px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
          {/* Mission Card */}
          <Card className="relative min-h-[360px] overflow-hidden border-0 bg-primary text-primary-foreground md:min-h-[400px]">
            {/* Pattern Overlay */}
            <div
              className="pointer-events-none absolute top-0 right-0 size-32 opacity-10"
              style={{
                maskImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                maskSize: "8px 8px",
                backgroundColor: "currentColor",
              }}
            />

            <CardContent className="flex h-full flex-col justify-between p-6 md:p-10">
              <div>
                <Rocket className="mb-4 size-8 md:mb-6 md:size-10" />
                <h3 className="font-headline mb-4 text-2xl font-extrabold md:mb-6 md:text-3xl">
                  Notre Mission
                </h3>
                <p className="text-lg leading-relaxed opacity-90 md:text-xl">
                  Accompagner les organisations, équipes et individus dans leurs
                  transformations — avec rigueur, bienveillance et engagement en
                  leur offrant des solutions flexibles, adaptées et conformes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="relative min-h-[360px] overflow-hidden border-0 bg-card shadow-lg md:min-h-[400px]">
            {/* Pattern Overlay */}
            <div
              className="pointer-events-none absolute top-0 right-0 size-32 bg-primary opacity-5"
              style={{
                maskImage:
                  "radial-gradient(circle at 2px 2px, black 1px, transparent 0)",
                maskSize: "8px 8px",
              }}
            />

            <CardContent className="flex h-full flex-col justify-between p-6 md:p-10">
              <div>
                <Eye className="mb-4 size-8 text-accent md:mb-6 md:size-10" />
                <h3 className="font-headline mb-4 text-2xl font-extrabold text-primary md:mb-6 md:text-3xl">
                  Notre Vision
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Des pratiques RH alignées et conformes pour un impact réel.
                  Notre vision est de devenir un cabinet RH de référence dans le
                  recrutement, l&apos;intérim, le coaching et la formation en
                  Afrique de l&apos;Ouest, reconnu pour la qualité de ses
                  talents, son professionnalisme et sa conformité.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
