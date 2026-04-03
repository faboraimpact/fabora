import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@fabora/ui/components/accordion"

const faqItems = [
  {
    question: "Quels pays couvrez-vous en Afrique ?",
    answer:
      "Nous opérons actuellement au Sénégal, Bénin, Niger, Burkina Faso et Togo. Notre réseau de partenaires nous permet d'étendre nos services sur l'ensemble de l'Afrique de l'Ouest selon les besoins spécifiques de vos projets.",
  },
  {
    question: "Comment fonctionne la plateforme de conformité ?",
    answer:
      "Notre plateforme digitale centralise la gestion documentaire, les processus de paie et les audits de conformité légale. Elle offre une visibilité en temps réel sur vos effectifs et garantit le respect strict des réglementations locales en vigueur. Les clients peuvent accéder à tous les documents administratifs, contractuels et financiers relatifs au personnel.",
  },
  {
    question: "Comment proposer ma candidature ?",
    answer:
      "Vous pouvez soumettre votre profil directement via notre portail carrière. Une fois votre CV enregistré, nos consultants spécialisés vous contacteront dès qu'une opportunité correspondant à votre expertise et vos ambitions se présentera.",
  },
  {
    question: "Quelle est la durée moyenne d'un processus de recrutement ?",
    answer:
      "le processus dure généralement entre 4 et 6 semaines, incluant les phases de sourcing, d'évaluation approfondie et de sélection finale avec le client.",
  },
  {
    question: "Proposez-vous des services de coaching et formation ?",
    answer:
      "Oui, nous proposons du coaching individuel et collectif ainsi que des formations sur mesure adaptées à vos besoins. Nous accompagnons également les organisations dans l'élaboration de manuels de politiques et procédures RH. Contactez-nous pour en savoir plus sur nos prestations.",
  },
]

export function FaqAccordion() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:px-8 md:py-20">
      {/* Section Title */}
      <div className="mb-8 md:mb-12">
        <h2 className="font-headline flex items-center gap-3 text-2xl font-black text-foreground md:text-3xl">
          <span className="h-6 w-1.5 rounded-full bg-accent md:h-8 md:w-2" />
          Questions Fréquentes
        </h2>
      </div>

      {/* Accordion */}
      <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="overflow-hidden rounded-xl border-0 bg-muted/50 transition-all hover:border-border/30 data-[state=open]:bg-card"
          >
            <AccordionTrigger className="px-6 py-4 text-left hover:no-underline md:px-8 md:py-6">
              <span className="font-headline pr-4 text-base font-bold md:text-lg">
                {item.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground md:px-8 md:pb-6">
              <p className="leading-relaxed">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
