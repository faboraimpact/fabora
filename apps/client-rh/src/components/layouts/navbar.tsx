"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@fabora/ui/components/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@fabora/ui/components/sheet"
import { ThemeToggle } from "@fabora/ui/components/theme-toggle"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À Propos" },
  { href: "/partners", label: "Partenaires" },
  { href: "/faq", label: "FAQ" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-background/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline flex items-center gap-2 text-xl font-black tracking-tighter text-foreground md:text-2xl"
        >
          <Image
            src="/logo/SVG/ICONE/icon.svg"
            alt="Fabora Impact"
            width={24}
            height={74}
            className="h-8 w-auto md:h-10"
          />
          Fabora Impact
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${
                  isActive
                    ? "border-b-2 border-accent pb-1 text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button
            asChild
            variant="ghost"
            className="text-xs font-bold tracking-wider uppercase"
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
          <Button
            asChild
            className="bg-primary px-6 py-2.5 text-xs font-bold tracking-wider uppercase shadow-lg"
          >
            <Link href="/contact">Demander une démo</Link>
          </Button>
        </div>

        {/* Mobile: Theme Toggle + Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Menu"
                className="lg:hidden"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetHeader>
                <SheetTitle className="font-headline flex items-center gap-2 text-xl font-black">
                  <Image
                    src="/logo/SVG/ICONE/icon.svg"
                    alt="Fabora Impact"
                    width={20}
                    height={62}
                    className="h-7 w-auto"
                  />
                  Fabora Impact
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 p-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`py-2 text-sm font-bold tracking-wider uppercase ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <hr className="my-4 border-border" />
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-center text-xs font-bold uppercase"
                >
                  <Link href="/contact">Nous contacter</Link>
                </Button>
                <Button
                  asChild
                  className="w-full justify-center bg-primary text-xs font-bold uppercase"
                >
                  <Link href="/contact">Demander une démo</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
