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

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

export function validateStep1(data: OrgFormData): OrgFormErrors {
  const errors: OrgFormErrors = {}

  if (!data.orgName.trim()) {
    errors.orgName = "Organization name is required"
  }

  if (!data.domain.trim()) {
    errors.domain = "Domain is required"
  }

  if (!data.websiteUrl.trim()) {
    errors.websiteUrl = "Website URL is required"
  } else if (!isValidUrl(data.websiteUrl)) {
    errors.websiteUrl = "Please enter a valid website URL"
  }

  return errors
}

export function validateStep2(data: OrgFormData): OrgFormErrors {
  const errors: OrgFormErrors = {}
  const adminCount = data.members.filter((member) => member.role === "admin").length

  if (data.members.length === 0) {
    errors.members = "Add at least one member"
  }

  if (adminCount === 0) {
    errors.members = "Add at least one admin"
  }

  return errors
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
