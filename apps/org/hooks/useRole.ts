"use client"

import { usePathname } from "next/navigation"

import type { Role } from "../lib/roles"

export function useRole(defaultRole: Role = "owner"): Role {
  const pathname = usePathname()

  if (pathname.includes("/dashboard/admin")) return "admin"
  if (pathname.includes("/dashboard/employee")) return "employee"
  if (pathname.includes("/dashboard/owner")) return "owner"

  return defaultRole
}
