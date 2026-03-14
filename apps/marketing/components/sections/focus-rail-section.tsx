"use client"

import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail"

export function FocusRailSection() {
  const ITEMS: FocusRailItem[] = [
    {
      id: 1,
      title: "AI Chat Engine",
      description:
        "Real-time conversational intelligence powered by adaptive AI models.",
      meta: "Core • AI",
      imageSrc:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Voice Agent Integration",
      description:
        "Natural speech processing with seamless voice-to-text and text-to-speech.",
      meta: "Voice • Real-Time",
      imageSrc:
        "https://www.r2msolution.com/wp-content/uploads/2025/11/VAFER-1024x732.png",
    },
    {
      id: 3,
      title: "Secure Backend Architecture",
      description:
        "Node.js powered APIs with protected authentication layers.",
      meta: "Backend • Secure",
      imageSrc:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Scalable Infrastructure",
      description:
        "Built for performance and scale across multiple users and sessions.",
      meta: "Scale • Performance",
      imageSrc:
        "https://www.scaleready.io/images/scalable-architecture.png",
    },
  ]

  return (
    <section className="relative py-32 overflow-x-hidden">

      {/* BLUE RADIAL BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="mb-16 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white">
          Platform Highlights
        </h2>
        <p className="text-neutral-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
          Navigate through the rail to explore the core capabilities of the system.
        </p>
      </div>

      <FocusRail
        items={ITEMS}
        autoPlay={false}
        loop={true}
      />
    </section>
  )
}