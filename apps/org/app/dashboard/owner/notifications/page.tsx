import { DashboardHeader } from "../../../../components/dashboard/header"
import { Sidebar } from "../../../../components/dashboard/sidebar"
import { OwnerNotifications } from "../../../../components/owner/owner-notifications"
import { ownerSidebar } from "../../../../lib/roles"

export default function OwnerNotificationsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar
        sections={ownerSidebar}
        activeLabel="Notifications"
        ctaLabel="Add Admin"
        userName="Alex Rivera"
        userRole="Owner"
      />

      <main className="flex-1 p-4 md:p-6">
        <DashboardHeader title="Notifications" />

        <section className="mt-4 max-w-3xl">
          <OwnerNotifications />
        </section>
      </main>
    </div>
  )
}
