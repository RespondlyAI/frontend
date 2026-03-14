"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const Sheet = Dialog.Root
const SheetTrigger = Dialog.Trigger

const SheetContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Content>,
  React.ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, children, ...props }, ref) => (
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />
    <Dialog.Content
      ref={ref}
      className={cn(
        "fixed right-0 top-0 h-full w-3/4 max-w-sm bg-black text-white p-6 shadow-lg z-50",
        className
      )}
      {...props}
    >
      {children}
      <Dialog.Close className="absolute right-4 top-4">
        <X className="h-4 w-4" />
      </Dialog.Close>
    </Dialog.Content>
  </Dialog.Portal>
))

const SheetHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
)

const SheetTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-semibold">{children}</h2>
)

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle }