import { Bell, LogOut, Search } from "lucide-react"

import { ThemeToggle } from "@repo/ui/components/ui/theme-toggle"

type HeaderProps = {
  title: string
}

export function DashboardHeader({ title }: HeaderProps) {
  return (
    <header className="mb-5 flex items-center justify-between border-b border-zinc-900 pb-3">
      <h1 className="text-2xl font-semibold text-zinc-100">{title}</h1>
      <div className="flex items-center gap-3 text-zinc-400">
        <button
          type="button"
          className="inline-flex h-9 items-center gap-2 rounded-md border border-zinc-800 bg-black px-3 text-xs font-semibold text-zinc-100 hover:bg-zinc-900"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
        <ThemeToggle className="h-9 w-9 border-zinc-800 bg-black text-zinc-100 hover:bg-zinc-900" />
        <Search className="h-4 w-4" />
        <Bell className="h-4 w-4" />
      </div>
    </header>
  )
}
