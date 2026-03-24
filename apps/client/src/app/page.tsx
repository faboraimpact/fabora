export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--fabora-neutral-100)]">
      {/* Background decorative elements */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--fabora-green-100)] opacity-60 blur-3xl" />
      <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-[var(--fabora-orange-100)] opacity-60 blur-3xl" />

      <main className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Logo / Brand */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--fabora-green-900)]">
            <span className="text-2xl font-bold text-white">F</span>
          </div>
          <div className="text-left">
            <h1 className="text-2xl font-bold tracking-tight text-[var(--fabora-neutral-900)]">
              Fabora
            </h1>
            <span className="text-sm font-medium text-[var(--fabora-orange-900)]">
              Impact
            </span>
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--fabora-green-100)] px-4 py-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--fabora-green-700)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--fabora-green-900)]" />
          </span>
          <span className="text-sm font-medium text-[var(--fabora-green-900)]">
            En cours de développement
          </span>
        </div>

        {/* Main Title */}
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--fabora-neutral-900)] sm:text-5xl md:text-6xl">
          Bientôt disponible
        </h2>

        {/* Description */}
        <p className="mb-10 max-w-lg text-lg leading-relaxed text-[var(--fabora-neutral-700)]">
          Nous construisons une plateforme innovante pour accompagner les
          entreprises dans leur transition vers un impact positif et durable.
        </p>

        {/* Features Preview */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/80 p-6 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--fabora-green-100)]">
              <svg
                className="h-6 w-6 text-[var(--fabora-green-900)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--fabora-neutral-900)]">
              Accompagnement
            </h3>
            <p className="text-sm text-[var(--fabora-neutral-700)]">
              Suivi personnalisé
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/80 p-6 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--fabora-orange-100)]">
              <svg
                className="h-6 w-6 text-[var(--fabora-orange-900)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--fabora-neutral-900)]">
              Impact
            </h3>
            <p className="text-sm text-[var(--fabora-neutral-700)]">
              Résultats mesurables
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-2xl bg-white/80 p-6 backdrop-blur-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--fabora-green-100)]">
              <svg
                className="h-6 w-6 text-[var(--fabora-green-900)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-[var(--fabora-neutral-900)]">
              Communauté
            </h3>
            <p className="text-sm text-[var(--fabora-neutral-700)]">
              Réseau engagé
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 mt-16 pb-8 text-sm text-[var(--fabora-neutral-500)]">
        &copy; {new Date().getFullYear()} Fabora Impact. Tous droits réservés.
      </footer>
    </div>
  )
}
