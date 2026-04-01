"use client";

import { Search } from "lucide-react";
import { Input } from "@fabora/ui/components/input";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute -right-24 top-1/2 h-80 w-80 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        {/* Badge */}
        <span className="mb-6 inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
          Centre d&apos;assistance
        </span>

        {/* Title */}
        <h1 className="mb-8 font-headline text-4xl font-black leading-tight tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Comment pouvons-nous{" "}
          <br className="hidden sm:block" />
          <span className="text-primary">vous aider ?</span>
        </h1>

        {/* Search bar */}
        <div className="group relative mx-auto max-w-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center sm:left-5">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <Input
            type="text"
            placeholder="Rechercher une réponse..."
            className="h-14 w-full rounded-2xl border-none bg-card pl-12 pr-6 text-base shadow-2xl shadow-foreground/5 transition-all placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/20 sm:h-16 sm:pl-14 sm:text-lg"
          />
        </div>
      </div>
    </section>
  );
}
