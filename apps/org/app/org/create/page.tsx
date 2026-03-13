"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Button } from "@repo/ui/components/ui/button"
import { ThemeToggle } from "@repo/ui/components/ui/theme-toggle"

import { Step1OrgDetails } from "../../../components/org/step1-org-details"
import { Step2AddMembers } from "../../../components/org/step2-add-members"
import { Step3Review } from "../../../components/org/step3-review"
import {
  initialOrgFormData,
  toCreateOrgPayload,
  validateStep1,
  validateStep2,
  type Member,
  type OrgFormData,
  type OrgFormErrors,
} from "../../../lib/org-form-store"

const stepItems = [
  {
    id: 1,
    label: "Org Details",
    description: "Basic information about your organization",
  },
  {
    id: 2,
    label: "Members",
    description: "Invite your team to collaborate",
  },
  {
    id: 3,
    label: "Review",
    description: "Confirm and launch",
  },
] as const

const stepHeader = {
  1: {
    title: "Organization Details",
    description: "Fill in the primary details for your organization profile.",
    nextLabel: "Continue to Members",
  },
  2: {
    title: "Add Members",
    description: "Create credentials for admins and employees.",
    nextLabel: "Continue to Review",
  },
  3: {
    title: "Review & Confirm",
    description: "Verify all details before creating your organization.",
    nextLabel: "Confirm",
  },
} as const

export default function CreateOrganizationWizardPage() {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [formData, setFormData] = useState<OrgFormData>(initialOrgFormData)
  const [errors, setErrors] = useState<OrgFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)

  const onFieldChange = <K extends keyof OrgFormData>(field: K, value: OrgFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const onAddMember = (member: Member) => {
    setFormData((prev) => ({ ...prev, members: [...prev.members, member] }))
    setErrors((prev) => ({ ...prev, members: undefined }))
  }

  const onRemoveMember = (memberId: string) => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.filter((member) => member.id !== memberId),
    }))
  }

  const goNext = () => {
    if (step === 1) {
      const stepErrors = validateStep1(formData)
      setErrors(stepErrors)
      if (Object.keys(stepErrors).length > 0) return
      setStep(2)
      return
    }

    if (step === 2) {
      const stepErrors = validateStep2(formData)
      setErrors(stepErrors)
      if (Object.keys(stepErrors).length > 0) return
      setStep(3)
    }
  }

  const handleConfirm = async () => {
    const step1Errors = validateStep1(formData)
    const step2Errors = validateStep2(formData)
    const mergedErrors = { ...step1Errors, ...step2Errors }

    setErrors(mergedErrors)
    if (Object.keys(mergedErrors).length > 0) {
      setStep(Object.keys(step1Errors).length > 0 ? 1 : 2)
      return
    }

    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("/api/org/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(toCreateOrgPayload(formData)),
      })

      if (!response.ok) {
        const data = (await response.json()) as { message?: string }
        throw new Error(data.message || "Failed to create organization")
      }

      setIsSuccess(true)
      setTimeout(() => {
        router.push("/dashboard/owner")
      }, 1400)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong"
      setSubmitError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <main className="org-create-theme flex min-h-screen items-center justify-center px-4 py-6">
        <div className="w-full max-w-xl rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 text-center">
          <h1 className="text-3xl font-semibold text-zinc-100">Organization Created</h1>
          <p className="mt-2 text-zinc-400">Redirecting to your owner dashboard...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="org-create-theme min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="min-h-screen lg:grid lg:grid-cols-[380px_minmax(0,1fr)]">
        <aside className="border-b border-zinc-800 bg-zinc-900/40 lg:border-b-0 lg:border-r">
          <div className="flex h-[160px] items-center gap-2 px-3">
            <Image
              src="/DARK_LOGO.png"
              alt="Respondly AI"
              width={220}
              height={64}
              className="brand-logo-dark h-28 w-auto"
              priority
            />
            <Image
              src="/LIGHT_LOGO.png"
              alt="Respondly AI"
              width={220}
              height={64}
              className="brand-logo-light h-28 w-auto"
              priority
            />
          </div>

          <div className="px-5 py-8">
            <h2 className="text-3xl font-semibold text-foreground">Create Organization</h2>
            <p className="mt-2 text-base text-muted-foreground">Follow the steps to get started</p>

            <div className="mt-10 space-y-6">
              {stepItems.map((item, idx) => {
                const isActive = step === item.id
                const isComplete = item.id < step

                return (
                  <div key={item.id} className="relative pl-10">
                    {idx < stepItems.length - 1 ? (
                      <span
                        className={`absolute left-[15px] top-8 h-14 w-px ${
                          item.id < step ? "bg-emerald-500/60" : "bg-zinc-700"
                        }`}
                      />
                    ) : null}

                    <span
                      className={`absolute left-0 top-0 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : isComplete
                            ? "bg-emerald-500 text-white"
                            : "bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      {isComplete ? "✓" : item.id}
                    </span>

                    <p className={`text-base font-semibold ${isActive ? "text-foreground" : "text-zinc-300"}`}>{item.label}</p>
                    <p className="mt-1 text-sm text-zinc-500">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </aside>

        <section className="flex min-h-screen flex-col">
          <div className="flex h-[160px] items-center justify-end px-3">
            <ThemeToggle className="border-zinc-600 bg-zinc-900 text-zinc-100 hover:bg-zinc-800" />
          </div>

          <div className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-8">
            <div className="space-y-1">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground">{stepHeader[step].title}</h1>
              <p className="text-base text-muted-foreground">{stepHeader[step].description}</p>
            </div>

            <div className="mt-8">
              {step === 1 ? <Step1OrgDetails data={formData} errors={errors} onFieldChange={onFieldChange} /> : null}
              {step === 2 ? (
                <Step2AddMembers
                  members={formData.members}
                  errors={errors}
                  onAddMember={onAddMember}
                  onRemoveMember={onRemoveMember}
                />
              ) : null}
              {step === 3 ? <Step3Review data={formData} /> : null}

              {submitError ? <p className="mt-3 text-sm text-red-400">{submitError}</p> : null}
            </div>
          </div>

          <div className="border-t border-zinc-800 px-4 py-4 sm:px-8">
            <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-3">
              <div>
                {step === 1 ? (
                  <Button type="button" variant="outline" onClick={() => router.push("/login")}>
                    Cancel
                  </Button>
                ) : null}

                {step === 2 ? (
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                ) : null}

                {step === 3 ? (
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    Edit
                  </Button>
                ) : null}
              </div>

              <div>
                {step < 3 ? (
                  <Button type="button" className="bg-blue-600 hover:bg-blue-500" onClick={goNext}>
                    {stepHeader[step].nextLabel}
                  </Button>
                ) : (
                  <Button type="button" className="bg-blue-600 hover:bg-blue-500" onClick={handleConfirm} disabled={isSubmitting}>
                    {isSubmitting ? "Confirming..." : "Confirm"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

    </main>
  )
}
