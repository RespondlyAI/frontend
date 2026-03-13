import { z } from "zod"

export type MemberRole = string

export type DomainCategory = string
export type CompanyType = string
export type MemberSize = string

export type Member = {
  id: string
  username: string
  email: string
  role: MemberRole
}

export type OrgFormData = {
  orgName: string
  description: string
  domain: string
  websiteUrl: string
  domainCategory: DomainCategory
  companyType: CompanyType
  memberSize: MemberSize
  members: Member[]
}

export type OrgFormErrors = Partial<Record<string, string>>

export const initialOrgFormData: OrgFormData = {
  orgName: "",
  description: "",
  domain: "",
  websiteUrl: "",
  domainCategory: "",
  companyType: "",
  memberSize: "",
  members: [],
}

export function createMember(username: string, email: string, role: MemberRole): Member {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    username,
    email,
    role,
  }
}

const step1Schema = z.object({
  orgName: z.string().trim().min(1, "Company name is required"),
  description: z.string().trim().min(1, "Description is required"),
  domainCategory: z.string().trim().min(1, "Domain is required"),
  domain: z.string().trim().min(1, "Domain is required"),
  companyType: z.string().trim().min(1, "Company type is required"),
  memberSize: z.string().trim().min(1, "Number of members is required"),
  websiteUrl: z
    .string()
    .trim()
    .min(1, "Website URL is required")
    .url("Please enter a valid website URL")
    .refine((value) => value.startsWith("http://") || value.startsWith("https://"), {
      message: "Please enter a valid website URL",
    })
    .refine((value) => {
      try {
        return new URL(value).hostname.toLowerCase().endsWith(".com")
      } catch {
        return false
      }
    }, {
      message: "Enter a valid URL.",
    }),
})

const memberInputSchema = z.object({
  username: z.string().trim().min(3, "Enter a username"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  role: z.string().trim().min(1, "Choose role"),
})

const membersSchema = z.array(memberInputSchema)

function mapIssuesToErrors(issues: z.ZodIssue[]): OrgFormErrors {
  const errors: OrgFormErrors = {}

  for (const issue of issues) {
    const path = issue.path[0]
    if (typeof path === "string" && !errors[path]) {
      errors[path] = issue.message
    }
  }

  return errors
}

export function validateStep1(data: OrgFormData): OrgFormErrors {
  const parsed = step1Schema.safeParse(data)

  if (parsed.success) {
    return {}
  }

  return mapIssuesToErrors(parsed.error.issues)
}

export function validateStep2(data: OrgFormData): OrgFormErrors {
  const errors: OrgFormErrors = {}
  const adminCount = data.members.filter((member) => member.role === "admin").length
  const memberCheck = membersSchema.safeParse(data.members)

  if (adminCount === 0) {
    errors.members = "Add at least one admin"
  } else if (!memberCheck.success) {
    errors.members = memberCheck.error.issues[0]?.message || "Please fix member details"
  } else if (data.members.length === 0) {
    errors.members = "Add at least one member"
  }

  return errors
}

export function validateMemberInput(input: { username: string; email: string; role: string }): OrgFormErrors {
  const parsed = memberInputSchema.safeParse(input)

  if (parsed.success) {
    return {}
  }

  return mapIssuesToErrors(parsed.error.issues)
}

export function toCreateOrgPayload(data: OrgFormData) {
  return {
    orgName: data.orgName,
    description: data.description,
    domain: data.domain,
    website: data.websiteUrl,
    companyType: data.companyType,
    size: data.memberSize,
    members: data.members.map((member) => ({
      username: member.username,
      email: member.email,
      role: member.role,
    })),
  }
}
