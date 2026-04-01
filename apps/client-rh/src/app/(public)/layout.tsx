import { Footer, Navbar } from "@/src/components/landing"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
          <Navbar />
          {children}
          <Footer />
    </>
  )
}
