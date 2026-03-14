"use client"

import Image from "next/image"
import {
  Menu,
  Bot,
  Workflow,
  BarChart3,
  Plug,
  Headset,
  TrendingUp,
  FileText,
  PenTool,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MenuItem {
  title: string
  url: string
  description?: string
  icon?: React.ReactNode
  items?: MenuItem[]
}

export function Navbar1() {
  const menu: MenuItem[] = [
  {
    title: "Platform",
    url: "#",
    items: [
      {
        title: "AI Chatbot",
        description: "Smart conversational automation",
        icon: <Bot className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Workflow Automation",
        description: "Automate tasks and business processes",
        icon: <Workflow className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Real-Time Analytics",
        description: "Track AI performance instantly",
        icon: <BarChart3 className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Integrations",
        description: "Connect with your tools",
        icon: <Plug className="size-5 shrink-0 text-white" />,
        url: "#",
      },
    ],
  },
  {
    title: "Solutions",
    url: "#",
    items: [
      {
        title: "Customer Support",
        description: "24/7 automated support",
        icon: <Headset className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Sales Automation",
        description: "Convert leads automatically",
        icon: <TrendingUp  className="size-5 shrink-0" />,
        url: "#",
      },
    ],
  },
  { title: "Pricing", url: "#" },
  {
    title: "Resources",
    url: "#",
    items: [
      {
        title: "Documentation",
        description: "Developer guides and API docs",
        icon: <FileText className="size-5 shrink-0" />,
        url: "#",
      },
      {
        title: "Blog",
        description: "AI insights and updates",
        icon: <PenTool className="size-5 shrink-0" />,
        url: "#",
      },
    ],
  },
]

  const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger>
            {item.title}
          </NavigationMenuTrigger>

          <NavigationMenuContent className="bg-black border border-white/10 p-4 rounded-md">
            <ul className="grid gap-3 w-64">
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <NavigationMenuLink asChild>
                    <a
                      href={subItem.url}
                      className="flex gap-3 p-2 rounded-md hover:bg-white/10 transition"
                    >
                      {subItem.icon}
                      <div>
                        <div className="text-sm font-semibold">
                          {subItem.title}
                        </div>
                        {subItem.description && (
                          <p className="text-xs text-white/60">
                            {subItem.description}
                          </p>
                        )}
                      </div>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      )
    }

    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuLink asChild>
          <a
            href={item.url}
            className="text-sm font-medium text-white hover:text-white/70 transition"
          >
            {item.title}
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    )
  }

  return (
    <section className="relative z-50 py-4 border-b border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop */}
        <nav className="hidden lg:flex items-center justify-between">
          
          {/* LEFT SIDE */}
          <div className="flex items-center gap-12">
            <a href="/" className="flex items-center -ml-5 translate-y-1">
            <Image
            src="/DARK LOGO.png"
            alt="Respondly AI Logo"
            width={190}
            height={50}
            className="h-13 w-auto"
            priority
            />
            </a>

            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-8">
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button variant="demo" size="sm">
              Sign up
            </Button>
          </div>
        </nav>

        {/* Mobile */}
        <div className="flex items-center justify-between lg:hidden">
          <span className="text-xl font-semibold">
            Respondly AI
          </span>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>

            <SheetContent className="bg-black text-white">
              <SheetHeader>
                <SheetTitle>Respondly AI</SheetTitle>
              </SheetHeader>

              <div className="mt-6 flex flex-col gap-4">
                {menu.map((item) => (
                  <a key={item.title} href={item.url}>
                    {item.title}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  )
}