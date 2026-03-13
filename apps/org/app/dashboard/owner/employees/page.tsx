import { DashboardHeader } from "../../../../components/dashboard/header"
import { Sidebar } from "../../../../components/dashboard/sidebar"
import { EmployeesSection } from "../../../../components/owner/employees-section"
import { ownerSidebar } from "../../../../lib/roles"

export default function OwnerEmployeesPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar
        sections={ownerSidebar}
        activeLabel="Employees"
        ctaLabel="Add Admin"
        userName="Alex Rivera"
        userRole="Owner"
      />

      <main className="flex-1 p-4 md:p-6">
        <DashboardHeader title="Employees" />

        <section className="mt-4">
          <EmployeesSection />
        </section>
      </main>
    </div>
  )
}
