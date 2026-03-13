import { Trash2 } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@repo/ui/components/ui/button"

import type { Member } from "../../lib/org-form-store"

type MemberCardProps = {
  member: Member
  onRemove: (id: string) => void
}

export function MemberCard({ member, onRemove }: MemberCardProps) {
  const badgeLetter = member.username.slice(0, 1).toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2.5"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
          {badgeLetter}
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{member.username}</p>
          <p className="text-xs text-muted-foreground">{member.role}</p>
        </div>
      </div>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 text-muted-foreground hover:bg-accent hover:text-red-500"
        onClick={() => onRemove(member.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </motion.div>
  )
}
