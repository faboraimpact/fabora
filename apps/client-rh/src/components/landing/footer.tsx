import Link from "next/link"

const footerLinks = [
  { href: "/privacy", label: "Politique de Confidentialité" },
  { href: "/legal", label: "Mentions Légales" },
  { href: "/careers", label: "Carrières" },
  { href: "/impact", label: "Rapports d&apos;Impact" },
]

export function Footer() {
  return (
    <footer className="bg-card py-10 md:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-8">
        {/* Brand */}
        <div className="space-y-3 md:space-y-4">
          <div className="font-headline text-lg font-extrabold text-foreground">
            Fabora Impact
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fabora Impact. L&apos;Excellence RH au
            service du continent.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-start gap-x-6 gap-y-3 md:justify-end md:gap-x-8 md:gap-y-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground underline decoration-accent underline-offset-4 opacity-80 transition-opacity hover:text-primary hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
