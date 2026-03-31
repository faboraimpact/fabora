"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@fabora/ui/components/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@fabora/ui/components/sheet"

const navLinks = [
  { href: "#recrutement", label: "Recrutement", active: true },
  { href: "#interim", label: "Intérim" },
  { href: "#formation", label: "Formation" },
  { href: "#conformite", label: "Conformité" },
  { href: "#coaching", label: "Coaching" },
]

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline text-xl font-black tracking-tighter text-foreground md:text-2xl"
        >
          Fabora Impact
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-bold tracking-wider uppercase transition-colors duration-300 ${
                link.active
                  ? "border-b-2 border-accent pb-1 text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button
            variant="ghost"
            className="text-xs font-bold tracking-wider uppercase"
          >
            Nous contacter
          </Button>
          <Button className="rounded-full bg-primary px-6 py-2.5 text-xs font-bold tracking-wider uppercase shadow-lg">
            Découvrir nos services
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <SheetHeader>
              <SheetTitle className="font-headline text-xl font-black">
                Fabora Impact
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 text-sm font-bold tracking-wider uppercase ${
                    link.active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-4 border-border" />
              <Button
                variant="outline"
                className="w-full justify-center text-xs font-bold uppercase"
              >
                Nous contacter
              </Button>
              <Button className="w-full justify-center rounded-full bg-primary text-xs font-bold uppercase">
                Découvrir nos services
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
