export type DomainOption = {
  value: string
  label: string
}

export type SelectOption = {
  value: string
  label: string
}

export const domainCatalog: DomainOption[] = [
  { value: "technology", label: "Technology" },
  { value: "healthcare", label: "Healthcare" },
  { value: "finance", label: "Finance" },
  { value: "education", label: "Education" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "logistics", label: "Logistics" },
  { value: "real-estate", label: "Real Estate" },
  { value: "hospitality", label: "Hospitality" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "legal", label: "Legal Services" },
  { value: "media", label: "Media & Entertainment" },
  { value: "other", label: "Other" },
]

export const companyTypeCatalog: SelectOption[] = [
  { value: "startup", label: "Startup" },
  { value: "medium-scale", label: "Medium Scale" },
  { value: "enterprise", label: "Enterprise" },
  { value: "agency", label: "Agency" },
  { value: "non-profit", label: "Non-profit" },
]

export const memberSizeCatalog: SelectOption[] = [
  { value: "0-50", label: "0-50" },
  { value: "50-100", label: "50-100" },
  { value: "100-200", label: "100-200" },
  { value: "200-500", label: "200-500" },
  { value: "500+", label: "500+" },
]

export const memberRoleCatalog: SelectOption[] = [
  { value: "admin", label: "Admin" },
  { value: "employee", label: "Employee" },
]
