import { Card, CardContent } from "@fabora/ui/components/card"

export function AboutIdentity() {
  return (
    <section className="bg-muted/50 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          {/* Left Column - Sticky Header */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-32">
              <span className="mb-4 block text-xs font-bold tracking-widest text-accent uppercase">
                Notre Identité
              </span>
              <h2 className="font-headline mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Accompagner avec Sécurité et Alignement
              </h2>
              <div className="h-1 w-20 bg-accent" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-7">
            <blockquote className="mb-6 text-xl leading-snug font-light text-foreground md:mb-8 md:text-2xl">
              &quot;FABORA Impact affirme une identité claire, engagée et
              tournée vers le résultat.&quot;
            </blockquote>

            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:space-y-6 md:text-lg">
              <p>
                Nous accompagnons nos clients afin qu&apos;ils se sentent en
                sécurité dans leurs décisions, alignés avec leurs valeurs et
                capables d&apos;agir avec cohérence, efficacité et conformité.
              </p>
              <p>
                À travers nos missions de recrutement (recruter rapidement en
                accédant aux talents qualifiés) face à la pénurie de talents et
                aux risques liés, nous aidons nos clients à affirmer leur
                positionnement et à assurer leur croissance.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4 md:mt-12 md:gap-8">
              <Card className="border-0 bg-background shadow-sm">
                <CardContent className="p-4 md:p-6">
                  <span className="font-headline block text-3xl font-black text-primary md:text-4xl">
                    150+
                  </span>
                  <span className="mt-1 block text-sm font-medium text-muted-foreground">
                    Missions de Recrutement
                  </span>
                </CardContent>
              </Card>
              <Card className="border-0 bg-background shadow-sm">
                <CardContent className="p-4 md:p-6">
                  <span className="font-headline block text-3xl font-black text-accent md:text-4xl">
                    98%
                  </span>
                  <span className="mt-1 block text-sm font-medium text-muted-foreground">
                    Taux de Satisfaction Client
                  </span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
