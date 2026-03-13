import { useEffect, useMemo, useState } from "react"

import { Button } from "@repo/ui/components/ui/button"
import { Input } from "@repo/ui/components/ui/input"
import { Label } from "@repo/ui/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select"

import {
  createMember,
  validateMemberInput,
  type Member,
  type MemberRole,
  type OrgFormErrors,
} from "../../lib/org-form-store"
import type { SelectOption } from "../../lib/domain-catalog"
import { MemberCard } from "./member-card"

type Step2Props = {
  members: Member[]
  errors: OrgFormErrors
  onAddMember: (member: Member) => void
  onRemoveMember: (memberId: string) => void
}

const selectTriggerClass =
  "h-11 rounded-xl border-zinc-800 bg-zinc-950/80 text-foreground data-[placeholder]:text-muted-foreground focus:ring-0 focus:ring-offset-0 focus-visible:border-zinc-700"
const selectContentClass =
  "z-50 min-w-[var(--radix-select-trigger-width)] rounded-xl border-zinc-800 bg-zinc-900 p-1.5 text-popover-foreground shadow-2xl"
const selectItemClass = "rounded-md py-2 text-sm"

export function Step2AddMembers({ members, errors, onAddMember, onRemoveMember }: Step2Props) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [roles, setRoles] = useState<SelectOption[]>([])
  const [role, setRole] = useState<MemberRole>("")
  const [fieldErrors, setFieldErrors] = useState<OrgFormErrors>({})

  useEffect(() => {
    let mounted = true

    const loadRoles = async () => {
      try {
        const response = await fetch("/api/org/member-roles")
        if (!response.ok) return

        const result = (await response.json()) as { options?: SelectOption[] }
        if (!mounted) return

        const roleOptions = result.options ?? []
        setRoles(roleOptions)
      } catch {
        if (mounted) setRoles([])
      }
    }

    loadRoles()

    return () => {
      mounted = false
    }
  }, [])

  const adminMembers = useMemo(() => members.filter((member) => member.role === "admin"), [members])
  const employeeMembers = useMemo(
    () => members.filter((member) => member.role === "employee"),
    [members]
  )

  const getTrimmedInput = () => ({
    username: username.trim(),
    email: email.trim(),
    role: role.trim(),
  })

  const trimmedInput = getTrimmedInput()
  const canAdd = Boolean(trimmedInput.username && trimmedInput.email && trimmedInput.role)

  const handleAdd = () => {
    const trimmed = getTrimmedInput()
    const inputErrors = validateMemberInput(trimmed)

    setFieldErrors(inputErrors)
    if (Object.keys(inputErrors).length > 0) return

    onAddMember(createMember(trimmed.username, trimmed.email, trimmed.role))
    setUsername("")
    setEmail("")
    setRole("")
    setFieldErrors({})
  }

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
        <h3 className="text-lg font-semibold text-foreground">Add Members</h3>
        <p className="text-sm text-muted-foreground">Create admin and employee credentials</p>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-12 md:items-start">
          <div className="space-y-1.5 md:col-span-4">
            <Label>Username</Label>
            <Input
              className="h-11 rounded-xl border-zinc-800 bg-zinc-950/80 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-zinc-700"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
                setFieldErrors((prev) => ({ ...prev, username: undefined }))
              }}
              placeholder="john"
            />
            <p className="min-h-4 text-xs text-red-400">{fieldErrors.username ?? ""}</p>
          </div>

          <div className="space-y-1.5 md:col-span-4">
            <Label>Email</Label>
            <Input
              className="h-11 rounded-xl border-zinc-800 bg-zinc-950/80 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-zinc-700"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setFieldErrors((prev) => ({ ...prev, email: undefined }))
              }}
              type="email"
              placeholder="name@company.com"
            />
            <p className="min-h-4 text-xs text-red-400">{fieldErrors.email ?? ""}</p>
          </div>

          <div className="space-y-1.5 md:col-span-3">
            <Label>Role</Label>
            <Select
              value={role}
              onValueChange={(value) => {
                setRole(value as MemberRole)
                setFieldErrors((prev) => ({ ...prev, role: undefined }))
              }}
            >
              <SelectTrigger className={selectTriggerClass}>
                <SelectValue placeholder="Choose role" />
              </SelectTrigger>
              <SelectContent className={selectContentClass} position="popper" side="bottom" align="end" sideOffset={6}>
                {roles.map((item) => (
                  <SelectItem key={item.value} className={selectItemClass} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="min-h-4 text-xs text-red-400">{fieldErrors.role ?? ""}</p>
          </div>

          <div className="space-y-1.5 md:col-span-1 md:pl-2 md:pt-7">
            <Button
              type="button"
              className="h-10 w-full rounded-xl bg-blue-600 px-4 text-sm text-white hover:bg-blue-500"
              onClick={handleAdd}
              disabled={!canAdd}
            >
              Add
            </Button>
          </div>
        </div>

        {errors.members ? <p className="mt-3 text-xs text-red-400">{errors.members}</p> : null}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="space-y-2 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
          <h4 className="text-sm font-semibold text-foreground">Admins</h4>
          <div className="max-h-48 overflow-y-auto pr-1">
            {adminMembers.length === 0 ? (
              <p className="py-6 text-center text-sm text-muted-foreground">No admins added yet. Add one using the form above.</p>
            ) : (
              <div className="space-y-2">
                {adminMembers.map((member) => (
                  <MemberCard key={member.id} member={member} onRemove={onRemoveMember} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-2 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
          <h4 className="text-sm font-semibold text-foreground">Employees</h4>
          <div className="max-h-48 overflow-y-auto pr-1">
            {employeeMembers.length === 0 ? (
              <p className="py-6 text-center text-sm text-muted-foreground">No employees added yet. Add one using the form above.</p>
            ) : (
              <div className="space-y-2">
                {employeeMembers.map((member) => (
                  <MemberCard key={member.id} member={member} onRemove={onRemoveMember} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
