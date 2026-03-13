import { DashboardHeader } from "../../../../components/dashboard/header"
import { Sidebar } from "../../../../components/dashboard/sidebar"
import { CustomersSection } from "../../../../components/owner/customers-section"
import { ownerSidebar } from "../../../../lib/roles"

export default function OwnerCustomersPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar
        sections={ownerSidebar}
        activeLabel="Customers"
        ctaLabel="Add Admin"
        userName="Alex Rivera"
        userRole="Owner"
      />

      <main className="flex-1 p-4 md:p-6">
        <DashboardHeader title="Customers" />

        <section className="mt-4">
          <CustomersSection />
        </section>
      </main>
    </div>
  )
}
