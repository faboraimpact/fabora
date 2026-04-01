"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@fabora/ui/components/accordion";

const faqItems = [
  {
    id: "countries",
    question: "Quels pays couvrez-vous en Afrique ?",
    answer:
      "Nous opérons actuellement dans 12 pays stratégiques, incluant le Sénégal, la Côte d'Ivoire, le Kenya, le Nigeria, et le Maroc. Notre réseau de partenaires nous permet d'étendre nos services sur l'ensemble du continent selon les besoins spécifiques de vos projets.",
  },
  {
    id: "platform",
    question: "Comment fonctionne la plateforme de conformité ?",
    answer:
      "Notre plateforme digitale centralise la gestion documentaire, les processus de paie et les audits de conformité légale. Elle offre une visibilité en temps réel sur vos effectifs et garantit le respect strict des réglementations locales en vigueur.",
  },
  {
    id: "apply",
    question: "Comment proposer ma candidature ?",
    answer:
      "Vous pouvez soumettre votre profil directement via notre portail carrière. Une fois votre CV enregistré, nos consultants spécialisés vous contacteront dès qu'une opportunité correspondant à votre expertise et vos ambitions se présentera.",
  },
  {
    id: "duration",
    question: "Quelle est la durée moyenne d'un processus de recrutement ?",
    answer:
      "Pour des postes de cadres et experts, le processus dure généralement entre 4 et 6 semaines, incluant les phases de sourcing, d'évaluation approfondie et de sélection finale avec le client.",
  },
];

export function FaqAccordion() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
      {/* Section Title */}
      <h2 className="mb-8 flex items-center gap-3 font-headline text-2xl font-black sm:text-3xl">
        <span className="h-6 w-1.5 rounded-full bg-accent sm:h-8 sm:w-2" />
        Questions Fréquentes
      </h2>

      {/* Accordion */}
      <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="rounded-xl border border-transparent bg-card transition-all hover:border-border/30"
          >
            <AccordionTrigger className="px-5 py-4 font-headline text-base font-bold hover:no-underline sm:px-8 sm:py-6 sm:text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground sm:px-8 sm:pb-6 sm:text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
