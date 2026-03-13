import type { OrgFormData } from "../../lib/org-form-store"

type Step3Props = {
  data: OrgFormData
}

export function Step3Review({ data }: Step3Props) {
  const adminMembers = data.members.filter((member) => member.role === "admin")
  const employeeMembers = data.members.filter((member) => member.role === "employee")

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
        <h3 className="text-lg font-semibold text-foreground">Organization Details</h3>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Org Name</dt>
            <dd className="text-foreground">{data.orgName || "-"}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Description</dt>
            <dd className="text-foreground">{data.description || "-"}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Domain</dt>
            <dd className="text-foreground">{data.domain || "-"}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Website</dt>
            <dd className="text-foreground">{data.websiteUrl || "-"}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Company Type</dt>
            <dd className="text-foreground">{data.companyType}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted-foreground">Member Count</dt>
            <dd className="text-foreground">{data.members.length}</dd>
          </div>
        </dl>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
        <h3 className="text-lg font-semibold text-foreground">Members</h3>

        <div className="mt-3 space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-foreground">Admin</h4>
            {adminMembers.length === 0 ? <p className="text-sm text-muted-foreground">No admins.</p> : null}
            <ul className="list-inside list-disc text-sm text-foreground">
              {adminMembers.map((member) => (
                <li key={member.id}>{member.username}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Employees</h4>
            {employeeMembers.length === 0 ? <p className="text-sm text-muted-foreground">No employees.</p> : null}
            <ul className="list-inside list-disc text-sm text-foreground">
              {employeeMembers.map((member) => (
                <li key={member.id}>{member.username}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
