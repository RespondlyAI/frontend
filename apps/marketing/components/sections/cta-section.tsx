"use client"

import { CallToAction } from "@/components/ui/cta-3"

export function CTASection() {
  return (
    <section className="relative py-32 px-6">

      {/* BLUE RADIAL BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="relative z-10">
        <CallToAction />
      </div>
    </section>
  )
}