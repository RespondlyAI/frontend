'use client'

import { Button } from "@/components/ui/button"
import { GetStartedButton } from "@/components/buttons/get-started-button"
import { SplineScene } from "@/components/hero/spline"

export function Hero3D() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* BLUE RADIAL BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="flex flex-col md:flex-row items-center h-full max-w-7xl mx-auto px-10 relative z-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 z-10">
          <h1 className="text-5xl md:text-7xl font-medium tracking-[-0.02em] leading-[1.1] text-white">
            Automate, engage, and grow
            <br />
            with AI-powered conversations
          </h1>

          <p className="mt-6 text-neutral-400 text-lg max-w-lg">
            Engineered to deliver context-aware AI conversations
through responsive chat systems and real-time voice capabilities.
          </p>

          <div className="mt-8 flex gap-4">
            <Button variant = "demo" size="lg">
              See It in action
            </Button>

            
            <GetStartedButton />
          </div>
        </div>

        {/* RIGHT 3D */}
        <div className="flex-1 h-[600px] relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>

      </div>

    </section>
  )
}