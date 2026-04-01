import Image from "next/image"

const teamMembers = [
  {
    name: "Amadou Diallo",
    role: "Directeur Général",
    initials: "AD",
  },
  {
    name: "Fatou Sow",
    role: "Directrice des Opérations",
    initials: "FS",
  },
  {
    name: "Moussa Traoré",
    role: "Associé Stratégie",
    initials: "MT",
  },
  {
    name: "Kadiatou Bah",
    role: "Responsable Conseil RH",
    initials: "KB",
  },
]

export function TeamSection() {
  return (
    <section className="bg-background px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 font-headline text-3xl font-black text-foreground md:text-4xl lg:text-5xl">
            L&apos;Équipe Dirigeante
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Des experts passionnés cumulant des décennies d&apos;expérience en
            conseil RH et gestion de talents.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 gap-6 md:gap-10 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-2xl bg-muted transition-transform group-hover:scale-[1.02] md:mb-6">
                <Image
                  src={`https://placehold.co/400x500/1E6B3C/FFFFFF?text=${member.initials}`}
                  alt={`Portrait de ${member.name}`}
                  width={400}
                  height={500}
                  className="size-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-foreground md:text-xl">
                {member.name}
              </h3>
              <p className="font-medium text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
