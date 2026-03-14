"use client"

import { ArrowRightIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <div className="relative mx-auto w-full max-w-4xl border-y border-primary/30 bg-primary/5 px-6 py-16 backdrop-blur-sm">

      {/* Decorative Corners */}
      <PlusIcon className="absolute -top-3 -left-3 size-5 text-primary/60" strokeWidth={1} />
      <PlusIcon className="absolute -top-3 -right-3 size-5 text-primary/60" strokeWidth={1} />
      <PlusIcon className="absolute -bottom-3 -left-3 size-5 text-primary/60" strokeWidth={1} />
      <PlusIcon className="absolute -bottom-3 -right-3 size-5 text-primary/60" strokeWidth={1} />

      {/* Vertical Divider Lines */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-primary/20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-primary/20" />

      {/* Subtle Center Line */}
      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-primary/10" />

      {/* Content */}
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Build Intelligent Conversations at Scale
        </h2>

        <p className="text-neutral-400 max-w-2xl mx-auto">
          Deploy secure, real-time AI communication infrastructure
          that combines chat intelligence and voice automation
          within one unified platform.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <Button variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 hover:border-primary">
          View Architecture
        </Button>

        <Button className="bg-primary hover:bg-primary/90 text-white">
          Get Started
          <ArrowRightIcon className="size-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}