"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { cn } from "../../lib/utils"
import { Button } from "./button"

type Theme = "dark" | "light"

export interface ThemeToggleProps {
  className?: string
  storageKey?: string
}

export function ThemeToggle({
  className,
  storageKey = "org-color-mode",
}: ThemeToggleProps) {
  const [theme, setTheme] = React.useState<Theme>("dark")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme: Theme = saved === "light" || saved === "dark"
      ? saved
      : systemPrefersDark
        ? "dark"
        : "light"

    setTheme(initialTheme)
    document.documentElement.setAttribute("data-theme", initialTheme)
    setMounted(true)
  }, [storageKey])

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    document.documentElement.setAttribute("data-theme", nextTheme)
    localStorage.setItem(storageKey, nextTheme)
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={cn("h-9 w-9", className)}
      aria-label={mounted && theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}
