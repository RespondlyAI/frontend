"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { motion, useReducedMotion } from "framer-motion"
import {
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface FooterLink {
  title: string
  href: string
}

interface FooterLinkGroup {
  label: string
  links: FooterLink[]
}

type StickyFooterProps = {
  className?: string
}

export function StickyFooter({ className }: StickyFooterProps) {
  return (
    <footer
      className={cn(
        "relative w-full border-t border-neutral-800",
        className
      )}
    >

      {/* BLUE RADIAL BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-5">

          {/* Brand */}
          <AnimatedContainer className="md:col-span-2 space-y-3">

            {/* Logo */}
            
            <Image
              src="/DARK LOGO.png"
              alt="AI Chatbot Platform"
              width={200}
              height={200}
              className="-ml-5 object-contain"
            />
            

            <p className="text-neutral-400 max-w-sm">
              Secure, scalable and intelligent AI communication infrastructure
              combining real-time chat and voice automation.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <Button key={link.title} size="icon" variant="outline">
                  <link.icon className="size-4" />
                </Button>
              ))}
            </div>
          </AnimatedContainer>

          {/* Link Groups */}
          {footerLinkGroups.map((group, index) => (
            <AnimatedContainer
              key={group.label}
              delay={0.1 + index * 0.1}
            >
              <h3 className="text-sm uppercase tracking-wider text-white">
                {group.label}
              </h3>

              <ul className="mt-6 space-y-3 text-sm text-neutral-400">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-neutral-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-neutral-500">
            <p>
              © {new Date().getFullYear()} Respondly AI. All rights reserved.
            </p>

          <p>AI Chatbot Platform</p>
        </div>
      </div>
    </footer>
  )
}

/* ----------------- DATA ----------------- */

const socialLinks = [
  { title: "LinkedIn", icon: LinkedinIcon },
  { title: "GitHub", icon: GithubIcon },
  { title: "Twitter", icon: TwitterIcon },
  { title: "YouTube", icon: YoutubeIcon },
]

const footerLinkGroups: FooterLinkGroup[] = [
  {
    label: "Platform",
    links: [
      { title: "Features", href: "#" },
      { title: "Architecture", href: "#" },
      { title: "Security", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { title: "Enterprises", href: "#" },
      { title: "Startups", href: "#" },
      { title: "Customer Support", href: "#" },
      { title: "Automation", href: "#" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Documentation", href: "#" },
      { title: "API Reference", href: "#" },
      { title: "Guides", href: "#" },
      { title: "Blog", href: "#" },
    ],
  },
]

/* ----------------- Animation Wrapper ----------------- */

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
  delay?: number
  children: React.ReactNode
  className?: string
}

function AnimatedContainer({
  delay = 0.1,
  children,
  className,
}: AnimatedContainerProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) return <div className={className}>{children}</div>

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}