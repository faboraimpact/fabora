import {
  Target,
  Users,
  Laptop,
  GraduationCap,
  Handshake,
  ClipboardCheck,
} from "lucide-react"

const services = [
  { icon: Target, label: "Recrutement" },
  { icon: Users, label: "Intérim" },
  { icon: Laptop, label: "Plateforme" },
  { icon: GraduationCap, label: "Formation" },
  { icon: Handshake, label: "Coaching" },
  { icon: ClipboardCheck, label: "Conformité" },
]

export function ServiceGrid() {
  return (
    <section className="relative z-10 mx-auto border-t border-border bg-background/40 px-4 py-16 md:px-8 md:pb-24 dark:bg-muted">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.label}
              className="group cursor-pointer rounded-xl border border-transparent bg-card p-4 text-center md:p-6"
            >
              <Icon className="mx-auto mb-2 size-7 text-primary md:mb-3 md:size-8" />
              <p className="text-xs font-bold md:text-sm">{service.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
