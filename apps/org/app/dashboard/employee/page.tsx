import { EmployeeNotifications } from "../../../components/employee/employee-notifications"
import { AcceptRejectChat } from "../../../components/employee/accept-reject-chat"
import { ChatsSection } from "../../../components/employee/chats-section"
import { DashboardHeader } from "../../../components/dashboard/header"
import { Sidebar } from "../../../components/dashboard/sidebar"
import { employeeSidebar } from "../../../lib/roles"

export default function EmployeeDashboardPage() {
  return (
    <div className="flex min-h-screen pb-28">
      <Sidebar
        sections={employeeSidebar}
        activeLabel="Chats"
        userName="Employee Profile"
        userRole="Support Agent"
      />

      <main className="flex-1 p-4 md:p-6">
        <DashboardHeader title="Workspace Overview" />

        <section className="mb-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-900 bg-black/70 p-4">
            <p className="text-xs text-zinc-500">Active Now</p>
            <p className="text-4xl font-bold text-zinc-100">12</p>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-black/70 p-4">
            <p className="text-xs text-zinc-500">Queue</p>
            <p className="text-4xl font-bold text-blue-400">4</p>
          </div>
        </section>

        <ChatsSection />

        <section className="mt-4">
          <EmployeeNotifications />
        </section>
      </main>

      <AcceptRejectChat />
    </div>
  )
}
