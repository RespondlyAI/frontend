"use client"

import { cn } from "@/lib/utils"
import {
  IconBrain,
  IconMicrophone,
  IconCloud,
  IconShieldLock,
  IconBolt,
  IconHeadset,
  IconSettings,
  IconMessageCircle,
} from "@tabler/icons-react"

export function FeatureGrid() {
  const features = [
    {
      title: "AI-Powered Intelligence",
      description:
        "Advanced conversational AI designed for real-time intelligent responses.",
      icon: <IconBrain size={24} />,
    },
    {
      title: "Voice Agent Integration",
      description:
        "Natural voice interaction powered by real-time speech processing.",
      icon: <IconMicrophone size={24} />,
    },
    {
      title: "Scalable Backend",
      description:
        "Modular Node.js architecture built to scale efficiently.",
      icon: <IconCloud size={24} />,
    },
    {
      title: "Secure APIs",
      description:
        "Protected communication layers with structured authentication.",
      icon: <IconShieldLock size={24} />,
    },
    {
      title: "Real-Time Processing",
      description:
        "Low-latency AI response system optimized for instant delivery.",
      icon: <IconBolt size={24} />,
    },
    {
      title: "24/7 AI Availability",
      description:
        "Always-on AI agents providing uninterrupted assistance.",
      icon: <IconHeadset size={24} />,
    },
    {
      title: "Adaptive Intelligence",
      description:
        "Context-aware conversational flow with dynamic adaptability.",
      icon: <IconSettings size={24} />,
    },
    {
      title: "Human-Like Interaction",
      description:
        "Designed to deliver intuitive and natural communication experiences.",
      icon: <IconMessageCircle size={24} />,
    },
  ]

  return (
    <section className="relative py-24 overflow-hidden text-white">

      {/* SAME HERO RADIAL BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-medium tracking-tight">
            Platform Capabilities
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            A unified AI system combining conversational intelligence,
            voice automation, and scalable backend architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Feature({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover:bg-blue-500 transition-all duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-100 group-hover:text-primary">
          {title}
        </span>
      </div>

      <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}