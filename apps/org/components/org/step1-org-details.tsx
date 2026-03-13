"use client"

import { useEffect, useState } from "react"

import { Input } from "@repo/ui/components/ui/input"
import { Label } from "@repo/ui/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select"
import { Textarea } from "@repo/ui/components/ui/textarea"

import type { OrgFormData, OrgFormErrors } from "../../lib/org-form-store"
import type { DomainOption, SelectOption } from "../../lib/domain-catalog"

type Step1Props = {
  data: OrgFormData
  errors: OrgFormErrors
  onFieldChange: <K extends keyof OrgFormData>(field: K, value: OrgFormData[K]) => void
}

const selectTriggerClass =
  "h-11 rounded-xl border-zinc-800 bg-zinc-950/80 text-foreground data-[placeholder]:text-muted-foreground focus:ring-0 focus:ring-offset-0 focus-visible:border-zinc-700"
const selectContentClass =
  "z-50 min-w-[var(--radix-select-trigger-width)] rounded-xl border-zinc-800 bg-zinc-900 p-1.5 text-popover-foreground shadow-2xl"
const selectItemClass = "rounded-md py-2 text-sm"

export function Step1OrgDetails({ data, errors, onFieldChange }: Step1Props) {
  const [domains, setDomains] = useState<DomainOption[]>([])
  const [companyTypes, setCompanyTypes] = useState<SelectOption[]>([])
  const [memberSizes, setMemberSizes] = useState<SelectOption[]>([])
  const domainError = errors.domainCategory ?? errors.domain

  useEffect(() => {
    let mounted = true

    const loadOptions = async () => {
      try {
        const [domainsRes, companyRes, sizesRes] = await Promise.all([
          fetch("/api/org/domains"),
          fetch("/api/org/company-types"),
          fetch("/api/org/member-sizes"),
        ])

        if (!domainsRes.ok || !companyRes.ok || !sizesRes.ok) return

        const [domainsResult, companyResult, sizesResult] = (await Promise.all([
          domainsRes.json(),
          companyRes.json(),
          sizesRes.json(),
        ])) as [{ domains?: DomainOption[] }, { options?: SelectOption[] }, { options?: SelectOption[] }]

        if (!mounted) return

        setDomains(domainsResult.domains ?? [])
        setCompanyTypes(companyResult.options ?? [])
        setMemberSizes(sizesResult.options ?? [])
      } catch {
        if (mounted) {
          setDomains([])
          setCompanyTypes([])
          setMemberSizes([])
        }
      }
    }

    loadOptions()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-1.5">
          <Label>Organization Name</Label>
          <Input
            className="border-zinc-800 bg-zinc-950/80 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-zinc-700"
            value={data.orgName}
            onChange={(e) => onFieldChange("orgName", e.target.value)}
            placeholder="e.g. Acme Corp"
          />
          {errors.orgName ? <p className="text-xs text-red-400">{errors.orgName}</p> : null}
        </div>

        <div className="space-y-1.5">
          <Label>Domain</Label>
          <Select
            value={data.domainCategory}
            onValueChange={(value) => {
              const selected = domains.find((item) => item.value === value)
              const domainValue = value === "other" ? "" : (selected?.label ?? value)
              onFieldChange("domainCategory", value as OrgFormData["domainCategory"])
              onFieldChange("domain", domainValue)
            }}
          >
            <SelectTrigger className={selectTriggerClass}>
              <SelectValue placeholder="Choose domain" />
            </SelectTrigger>
            <SelectContent className={selectContentClass} position="popper" side="bottom" align="end" sideOffset={6}>
              {domains.map((item) => (
                <SelectItem key={item.value} className={selectItemClass} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {data.domainCategory === "other" ? (
            <Input
              className="border-zinc-800 bg-zinc-950/80 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-zinc-700"
              value={data.domain}
              onChange={(e) => onFieldChange("domain", e.target.value)}
              placeholder="Type custom domain"
            />
          ) : null}

          {domainError ? <p className="text-xs text-red-400">{domainError}</p> : null}
        </div>

        <div className="space-y-1.5">
          <Label>Description</Label>
          <Textarea
            className="border-zinc-800 bg-zinc-950/80 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-zinc-700"
            value={data.description}
            onChange={(e) => onFieldChange("description", e.target.value)}
            placeholder="Briefly describe your organization..."
          />
          {errors.description ? <p className="text-xs text-red-400">{errors.description}</p> : null}
        </div>

        <div className="space-y-1.5">
          <Label>Website URL</Label>
          <Input
            className="border-zinc-800 bg-zinc-950/80 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-zinc-700"
            value={data.websiteUrl}
            onChange={(e) => onFieldChange("websiteUrl", e.target.value)}
            placeholder="https://acme.com"
          />
          {errors.websiteUrl ? <p className="text-xs text-red-400">{errors.websiteUrl}</p> : null}
        </div>

        <div className="space-y-1.5">
          <Label>Company Type</Label>
          <Select
            value={data.companyType}
            onValueChange={(value) => onFieldChange("companyType", value as OrgFormData["companyType"])}
          >
            <SelectTrigger className={selectTriggerClass}>
              <SelectValue placeholder="Choose company type" />
            </SelectTrigger>
            <SelectContent className={selectContentClass} position="popper" side="bottom" align="end" sideOffset={6}>
              {companyTypes.map((item) => (
                <SelectItem key={item.value} className={selectItemClass} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.companyType ? <p className="text-xs text-red-400">{errors.companyType}</p> : null}
        </div>

        <div className="space-y-1.5">
          <Label>Number of Members</Label>
          <Select
            value={data.memberSize}
            onValueChange={(value) => onFieldChange("memberSize", value as OrgFormData["memberSize"])}
          >
            <SelectTrigger className={selectTriggerClass}>
              <SelectValue placeholder="Choose number of members" />
            </SelectTrigger>
            <SelectContent className={selectContentClass} position="popper" side="bottom" align="end" sideOffset={6}>
              {memberSizes.map((item) => (
                <SelectItem key={item.value} className={selectItemClass} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.memberSize ? <p className="text-xs text-red-400">{errors.memberSize}</p> : null}
        </div>
      </div>
    </div>
  )
}
