export type Role = "owner" | "admin" | "employee"

export type SidebarIconKey =
  | "building"
  | "users"
  | "bell"
  | "chat"
  | "voice"
  | "customer"
  | "reports"
  | "settings"

export type SidebarItem = {
  label: string
  icon: SidebarIconKey
  badge?: string
  href?: string
}

export type SidebarSection = {
  title: string
  items: SidebarItem[]
}

export const ownerSidebar: SidebarSection[] = [
  {
    title: "Organization",
    items: [{ label: "Design Corp", icon: "building", href: "/dashboard/owner" }],
  },
  {
    title: "Workspace",
    items: [
      { label: "Employees", icon: "users", href: "/dashboard/owner/employees" },
      { label: "Customers", icon: "customer", href: "/dashboard/owner/customers" },
      { label: "Notifications", icon: "bell", badge: "12", href: "/dashboard/owner/notifications" },
    ],
  },
  {
    title: "Chatbot",
    items: [
      { label: "Chat Assistant", icon: "chat" },
      { label: "Voice Interface", icon: "voice" },
    ],
  },
]

export const adminSidebar: SidebarSection[] = [
  {
    title: "Organization",
    items: [{ label: "Global Solutions Org", icon: "building" }],
  },
  {
    title: "Workspace",
    items: [
      { label: "Employees", icon: "users" },
      { label: "Notifications", icon: "bell", badge: "12" },
    ],
  },
  {
    title: "Chatbot",
    items: [
      { label: "Chat Assistant", icon: "chat" },
      { label: "Voice Interface", icon: "voice" },
    ],
  },
  {
    title: "Admin",
    items: [
      { label: "Reports", icon: "reports" },
      { label: "Organization Settings", icon: "settings" },
    ],
  },
]

export const employeeSidebar: SidebarSection[] = [
  {
    title: "Organization",
    items: [{ label: "Design Corp", icon: "building" }],
  },
  {
    title: "Workspace",
    items: [
      { label: "Chats", icon: "chat" },
      { label: "Notifications", icon: "bell", badge: "12" },
    ],
  },
  {
    title: "Customer",
    items: [{ label: "Customer Queue", icon: "customer" }],
  },
]
