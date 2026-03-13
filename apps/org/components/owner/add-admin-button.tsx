import { UserPlus } from "lucide-react"

import { Button } from "@repo/ui/components/ui/button"

export function AddAdminButton() {
  return (
    <Button className="h-9 w-full bg-blue-500 text-xs font-semibold text-white hover:bg-blue-400">
      <UserPlus className="mr-1 h-4 w-4" />
      Add Admin
    </Button>
  )
}
