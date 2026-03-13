import {
  Bell,
  Bot,
  Building2,
  MessageSquare,
  Mic,
  ScrollText,
  Settings,
  Users,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@repo/ui/components/ui/button"

import { cn } from "../../lib/utils"
import type { SidebarIconKey, SidebarSection } from "../../lib/roles"

type SidebarProps = {
  sections: SidebarSection[]
  activeLabel?: string
  ctaLabel?: string
  userName: string
  userRole: string
}

const iconMap: Record<SidebarIconKey, React.ComponentType<{ className?: string }>> = {
  building: Building2,
  users: Users,
  bell: Bell,
  chat: MessageSquare,
  voice: Mic,
  customer: Bot,
  reports: ScrollText,
  settings: Settings,
}

export function Sidebar({
  sections,
  activeLabel,
  ctaLabel,
  userName,
  userRole,
}: SidebarProps) {
  return (
    <aside className="flex h-screen w-[280px] shrink-0 flex-col border-r border-zinc-900 bg-black">
      <div className="border-b border-zinc-900 px-4 py-4">
        <div className="flex items-center">
          <Image
            src="/DARK_LOGO.png"
            alt="Respondly AI"
            width={300}
            height={68}
            className="brand-logo-dark h-20 w-auto max-w-full"
            priority
          />
          <Image
            src="/LIGHT_LOGO.png"
            alt="Respondly AI"
            width={300}
            height={68}
            className="brand-logo-light h-20 w-auto max-w-full"
            priority
          />
        </div>
      </div>

      <div className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2">
            <p className="px-2 text-xs font-semibold uppercase tracking-[0.08em] text-zinc-500">
              {section.title}
            </p>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = iconMap[item.icon]
                const isActive = item.label === activeLabel
                const itemClassName = cn(
                  "flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm text-zinc-200 transition",
                  isActive ? "bg-blue-500/20 text-blue-300" : "hover:bg-zinc-900/80 hover:text-white"
                )

                return (
                  item.href ? (
                    <Link key={item.label} href={item.href} className={itemClassName}>
                      <span className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </span>
                      {item.badge ? (
                        <span className="rounded-full bg-blue-500 px-1.5 text-[10px] font-semibold text-white">
                          {item.badge}
                        </span>
                      ) : null}
                    </Link>
                  ) : (
                    <button key={item.label} className={itemClassName} type="button">
                      <span className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4" />
                        {item.label}
                      </span>
                      {item.badge ? (
                        <span className="rounded-full bg-blue-500 px-1.5 text-[10px] font-semibold text-white">
                          {item.badge}
                        </span>
                      ) : null}
                    </button>
                  )
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3 border-t border-zinc-900 p-3">
        {ctaLabel ? (
          <Button className="h-9 w-full bg-blue-500 text-xs font-semibold text-white hover:bg-blue-400">
            + {ctaLabel}
          </Button>
        ) : null}
        <div className="flex items-center justify-between rounded-lg bg-zinc-950/70 px-2 py-2">
          <div>
            <p className="text-sm font-semibold text-zinc-100">{userName}</p>
            <p className="text-xs text-zinc-500">{userRole}</p>
          </div>
          <Settings className="h-4 w-4 text-zinc-500" />
        </div>
      </div>
    </aside>
  )
}
